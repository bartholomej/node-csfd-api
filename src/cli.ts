/**
 * Main CLI entry point for node-csfd-api.
 */

declare const __VERSION__: string;

function getCommandName(): string {
  const scriptPath = process.argv[1] ?? '';
  const basename = scriptPath.split('/').pop() ?? '';
  if (basename === 'csfd' || basename === 'node-csfd-api') return basename;
  if (scriptPath.includes('node-csfd-api')) return 'npx node-csfd-api';
  return 'csfd';
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case 'server':
    case 'api':
      try {
        // Use a static string literal for the path so bundlers can analyze it
        await import('./bin/server');
      } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
      }
      break;

    case 'mcp':
      try {
        // Use a static string literal here as well
        await import('./bin/mcp-server');
      } catch (error) {
        console.error('Failed to start MCP server:', error);
        process.exit(1);
      }
      break;

    case 'export':
      // Sub-command: ratings
      if (args[1] === 'ratings') {
        const userIdRaw = args[2];
        const userId = Number(userIdRaw);

        if (!userIdRaw || isNaN(userId)) {
          console.error('Error: Please provide a valid numeric User ID.');
          console.log(`Usage: ${getCommandName()} export ratings <userId> [options]`);
          process.exit(1);
        }

        const isLetterboxd = args.includes('--letterboxd');
        const isJson = args.includes('--json');
        const isCsv = args.includes('--csv');

        let format: 'csv' | 'json' | 'letterboxd' = 'csv'; // Default to CSV
        if (isLetterboxd) {
          format = 'letterboxd';
        } else if (isJson) {
          format = 'json';
        } else if (isCsv) {
          format = 'csv';
        }

        try {
          // Dynamic import using a static string literal
          const { runRatingsExport } = await import('./bin/export-ratings');

          await runRatingsExport(userId, {
            format,
            userRatingsOptions: {
              // Default behavior for Letterboxd (films only) if not overridden
              includesOnly: isLetterboxd ? ['film'] : undefined,
              allPages: true,
              allPagesDelay: 1000
            }
          });
        } catch (error) {
          console.error('Failed to run export:', error);
          process.exit(1);
        }
      } else if (args[1] === 'letterboxd') {
        console.warn(
          'Deprecation Warning: "export letterboxd" is deprecated. Please use "export ratings <id> --letterboxd" instead.'
        );
        console.log(`Usage: ${getCommandName()} export ratings <userId> --letterboxd`);
        process.exit(1);
      } else {
        console.error(`Unknown export target: ${args[1]}`);
        printUsage();
        process.exit(1);
      }
      break;

    case '--version':
    case '-v':
      console.log(__VERSION__);
      break;

    case 'update':
      await runUpdate();
      break;

    case 'help':
    case '--help':
    case '-h':
    default:
      printUsage();
      break;
  }
}

function isRunningViaNpx(): boolean {
  const exec = process.execPath ?? '';
  const base = exec.split('/').pop() ?? '';
  return base === 'node' || base === 'node.exe' || base === 'bun';
}

function isRunningViaHomebrew(): boolean {
  const exec = process.execPath ?? '';
  return exec.includes('/homebrew/') || exec.includes('/Cellar/');
}

function compareSemver(a: string, b: string): number {
  const parse = (v: string) => {
    const [main, pre = ''] = v.split('-');
    const [major, minor, patch] = main.split('.').map(Number);
    return { major, minor, patch, pre };
  };
  const va = parse(a);
  const vb = parse(b);
  if (va.major !== vb.major) return va.major - vb.major;
  if (va.minor !== vb.minor) return va.minor - vb.minor;
  if (va.patch !== vb.patch) return va.patch - vb.patch;
  // pre-release < stable: 5.6.0-next.0 < 5.6.0
  if (va.pre && !vb.pre) return -1;
  if (!va.pre && vb.pre) return 1;
  return va.pre.localeCompare(vb.pre);
}

async function runUpdate() {
  console.log(`Current version: ${__VERSION__}`);
  console.log('Checking for updates...');

  let latest: string;
  try {
    const res = await fetch(
      'https://api.github.com/repos/bartholomej/node-csfd-api/releases/latest'
    );
    const data = (await res.json()) as { tag_name?: string };
    latest = data.tag_name?.replace(/^v/, '') ?? '';
  } catch {
    console.error('Error: Could not reach GitHub API.');
    process.exit(1);
  }

  if (!latest) {
    console.error('Error: Could not determine latest version.');
    process.exit(1);
  }

  const cmp = compareSemver(__VERSION__, latest);

  if (cmp === 0) {
    console.log('Already up to date.');
    return;
  }

  if (cmp > 0) {
    // current is ahead of latest stable — running a pre-release
    console.log(
      `You are running a pre-release version which is probably newer than the latest stable release: ${latest}`
    );
    return;
  }

  console.log(`New version available: ${latest}`);

  if (isRunningViaNpx()) {
    console.log('\nRun:');
    console.log('  npx node-csfd-api@latest <command>');
  } else if (isRunningViaHomebrew()) {
    console.log('\nRun:');
    console.log('  brew upgrade csfd');
  } else if (process.platform === 'win32') {
    console.log('\nDownload the latest release manually from:');
    console.log('  https://github.com/bartholomej/node-csfd-api/releases/latest');
  } else {
    console.log('\nRun:');
    console.log(
      '  curl -fsSL https://raw.githubusercontent.com/bartholomej/node-csfd-api/master/install.sh | bash'
    );
  }
}

function printUsage() {
  const cmd = getCommandName();
  console.log(`
Usage: ${cmd} <command> [options]

Commands:
  server, api                Start the REST API server
  mcp                        Start the MCP (Model Context Protocol) server for AI agents
  export ratings <userId>    Export user ratings to CSV (default), JSON, or Letterboxd format
    Options:
      --csv                  Export to CSV format (default)
      --json                 Export to JSON format
      --letterboxd           Export to Letterboxd-compatible CSV format
  update                     Check for updates and show upgrade instructions
  help                       Show this help message

Flags:
  --version, -v              Show version
  --help, -h                 Show this help message
`);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
