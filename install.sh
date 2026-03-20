#!/bin/bash
set -e

# Define repository details
REPO="bartholomej/node-csfd-api"
INSTALL_DIR="$HOME/.local/bin"
EXE_NAME="csfd"

# Detect operating system
OS="$(uname -s)"
ARCH="$(uname -m)"

# Map OS and architecture to the release targets
if [ "$OS" = "Darwin" ]; then
  if [ "$ARCH" = "arm64" ] || [ "$ARCH" = "aarch64" ]; then
    TARGET="macos-arm64"
  else
    TARGET="macos-x64"
  fi
elif [ "$OS" = "Linux" ]; then
  if [ "$ARCH" = "x86_64" ]; then
    TARGET="linux-x64"
  else
    echo "Error: Unsupported architecture ($ARCH) on Linux. Currently only x64 is supported."
    exit 1
  fi
else
  echo "Error: Unsupported operating system ($OS)."
  exit 1
fi

echo "Detected platform: $OS ($ARCH) -> Target: $TARGET"

# Resolve version: env variable > positional argument > latest release
if [ -n "$CSFD_VERSION" ]; then
  VERSION="${CSFD_VERSION#v}"
  echo "Using requested version: $VERSION"
elif [ -n "$1" ]; then
  VERSION="${1#v}"
  echo "Using requested version: $VERSION"
else
  echo "Fetching latest release version..."
  LATEST_RELEASE=$(curl -s "https://api.github.com/repos/$REPO/releases/latest")
  VERSION=$(echo "$LATEST_RELEASE" | grep '"tag_name":' | sed -E 's/.*"v?([^"]+)".*/\1/')
  if [ -z "$VERSION" ]; then
    echo "Error: Could not determine the latest version."
    exit 1
  fi
  echo "Latest version is $VERSION."
fi

# Construct the download URL
DOWNLOAD_URL="https://github.com/$REPO/releases/download/v$VERSION/csfd-$TARGET.tar.gz"
TMP_DIR=$(mktemp -d)
ARCHIVE_PATH="$TMP_DIR/csfd.tar.gz"

# Download the release archive
echo "Downloading $DOWNLOAD_URL..."
curl -fsSL "$DOWNLOAD_URL" -o "$ARCHIVE_PATH"

# Verify checksum
echo "Verifying checksum..."
CHECKSUMS_URL="https://github.com/$REPO/releases/download/v$VERSION/sha256sums.txt"
if curl -fsSL "$CHECKSUMS_URL" -o "$TMP_DIR/sha256sums.txt" 2>/dev/null; then
  EXPECTED=$(grep "csfd-$TARGET.tar.gz" "$TMP_DIR/sha256sums.txt" | awk '{print $1}')
  if command -v sha256sum > /dev/null 2>&1; then
    ACTUAL=$(sha256sum "$ARCHIVE_PATH" | awk '{print $1}')
  elif command -v shasum > /dev/null 2>&1; then
    ACTUAL=$(shasum -a 256 "$ARCHIVE_PATH" | awk '{print $1}')
  else
    echo "Warning: No SHA256 tool found, skipping checksum verification."
    ACTUAL="$EXPECTED"
  fi
  if [ "$EXPECTED" != "$ACTUAL" ]; then
    echo "Error: Checksum mismatch! Expected: $EXPECTED, Got: $ACTUAL"
    rm -rf "$TMP_DIR"
    exit 1
  fi
  echo "Checksum verified."
else
  echo "Warning: sha256sums.txt not available for this release, skipping verification."
fi

# Extract the archive
echo "Extracting archive..."
tar -xzf "$ARCHIVE_PATH" -C "$TMP_DIR"

# Ensure the installation directory exists
mkdir -p "$INSTALL_DIR"

# Move the binary and make it executable
mv "$TMP_DIR/$EXE_NAME" "$INSTALL_DIR/$EXE_NAME"
chmod +x "$INSTALL_DIR/$EXE_NAME"

# Clean up temporary files
rm -rf "$TMP_DIR"

echo "================================================="
echo "✅ $EXE_NAME has been installed to $INSTALL_DIR/$EXE_NAME"
echo "================================================="

# Check if the installation directory is in the user's PATH
if [[ ":$PATH:" != *":$INSTALL_DIR:"* ]]; then
  echo ""
  echo "⚠️  WARNING: $INSTALL_DIR is not in your PATH."
  CURRENT_SHELL=$(basename "$SHELL")
  if [ "$CURRENT_SHELL" = "fish" ]; then
    echo "To use the '$EXE_NAME' command globally, run:"
    echo ""
    echo "  fish_add_path $INSTALL_DIR"
  else
    echo "To use the '$EXE_NAME' command globally, add the following line to your ~/.bashrc or ~/.zshrc:"
    echo ""
    echo "  export PATH=\"\$HOME/.local/bin:\$PATH\""
    echo ""
    echo "Then restart your terminal or run 'source ~/.bashrc'."
  fi
fi

echo "You can now run '$EXE_NAME help' to get started."
