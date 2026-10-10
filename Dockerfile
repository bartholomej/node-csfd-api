# --- STAGE 1: Build & Prune ---
# Runs natively on the runner: its output is plain JS, and native build tools
# (esbuild, rolldown) crash with "Illegal instruction" under QEMU-emulated arm64.
FROM --platform=$BUILDPLATFORM node:26-alpine AS build

WORKDIR /usr/src/app

# Enable Corepack for Yarn 4 (no longer bundled with Node since v25)
RUN npm install -g corepack@0.36.0 && corepack enable

# Copy dependency files first for layer caching
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn[s]/ .yarn/

# Install all dependencies (including devDependencies) needed for build
RUN yarn install --immutable

# Copy all source files
COPY . .

# Build the application (compiles to /dist)
RUN yarn build

# Install Yarn workspace-tools plugin and prune to strictly production dependencies
RUN yarn workspaces focus --all --production

# --- STAGE 2: Production (Ultra-lean) ---
FROM node:26-alpine AS production

WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy ONLY the built application
COPY --from=build /usr/src/app/dist ./dist

# Copy ONLY the production-ready node_modules
COPY --from=build /usr/src/app/node_modules ./node_modules

# Copy package.json (often required by Node.js for ESM/module resolution)
COPY package.json ./

EXPOSE 3000

# Start the application
CMD ["node", "dist/bin/server.js"]
