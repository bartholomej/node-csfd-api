/**
 * Main CLI entry point for node-csfd-api.
 */

declare const __VERSION__: string;

// ─── Constants ────────────────────────────────────────────────────────────────

const GITHUB_REPO = 'bartholomej/node-csfd-api';
const GITHUB_API_LATEST = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;
const GITHUB_RELEASES_URL = `https://github.com/${GITHUB_REPO}/releases/latest`;
const INSTALL_SH_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/master/install.sh`;

// ─── Color helpers ────────────────────────────────────────────────────────────

const useColor = process.stdout.isTTY && !process.env['NO_COLOR'];

const c = {
  bold: (s: string) => (useColor ? `\x1b[1m${s}\x1b[22m` : s),
  dim: (s: string) => (useColor ? `\x1b[2m${s}\x1b[22m` : s),
  cyan: (s: string) => (useColor ? `\x1b[36m${s}\x1b[39m` : s),
  green: (s: string) => (useColor ? `\x1b[32m${s}\x1b[39m` : s),
  yellow: (s: string) => (useColor ? `\x1b[33m${s}\x1b[39m` : s),
  red: (s: string) => (useColor ? `\x1b[31m${s}\x1b[39m` : s)
};

const err = (msg: string) => c.red(c.bold('✖ Error:')) + ' ' + msg;

// ─────────────────────────────────────────────────────────────────────────────

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

  const noUpdateHintFor = new Set(['update']);
  const updateHint = noUpdateHintFor.has(command) ? null : checkForUpdateInBackground();

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
          console.error(err('Please provide a valid numeric User ID.'));
          console.log(c.dim(`  Usage: ${getCommandName()} export ratings <userId> [options]`));
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
          console.error(err('Failed to run export:'), error);
          process.exit(1);
        }
      } else if (args[1] === 'reviews') {
        const userIdRaw = args[2];
        const userId = Number(userIdRaw);

        if (!userIdRaw || isNaN(userId)) {
          console.error(err('Please provide a valid numeric User ID.'));
          console.log(c.dim(`  Usage: ${getCommandName()} export reviews <userId> [options]`));
          process.exit(1);
        }

        const format: 'csv' | 'json' = args.includes('--json') ? 'json' : 'csv';

        try {
          const { runReviewsExport } = await import('./bin/export-reviews');
          await runReviewsExport(userId, {
            format,
            userReviewsOptions: {
              allPages: true,
              allPagesDelay: 1000
            }
          });
        } catch (error) {
          console.error(err('Failed to run export:'), error);
          process.exit(1);
        }
      } else if (args[1] === 'letterboxd') {
        console.warn(
          c.yellow(c.bold('⚠ Deprecated:')) +
            ' "export letterboxd" is removed. Use "export ratings <id> --letterboxd" instead.'
        );
        console.log(c.dim(`  Usage: ${getCommandName()} export ratings <userId> --letterboxd`));
        process.exit(1);
      } else {
        console.error(err(`Unknown export target: ${c.bold(String(args[1]))}`));
        printUsage();
        process.exit(1);
      }
      break;

    case '--version':
    case '-v':
      console.log(c.bold(__VERSION__));
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

  if (updateHint) await updateHint;
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

// ─── Shared update helpers ────────────────────────────────────────────────────

async function fetchLatestVersion(timeoutMs = 5000): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(GITHUB_API_LATEST, { signal: controller.signal });
    const data = (await res.json()) as { tag_name?: string };
    return data.tag_name?.replace(/^v/, '') ?? '';
  } finally {
    clearTimeout(timer);
  }
}

function printUpgradeInstructions(latest: string) {
  console.log(c.green(c.bold('↑ New version available: ')) + c.bold(latest));
  if (isRunningViaNpx()) {
    console.log('\n' + c.bold('Run:'));
    console.log('  ' + c.cyan('npx node-csfd-api@latest <command>'));
  } else if (isRunningViaHomebrew()) {
    console.log('\n' + c.bold('Run:'));
    console.log('  ' + c.cyan('brew upgrade csfd'));
  } else if (process.platform === 'win32') {
    console.log('\n' + c.bold('Download the latest release from:'));
    console.log('  ' + c.cyan(GITHUB_RELEASES_URL));
  } else {
    console.log('\n' + c.bold('Run:'));
    console.log('  ' + c.cyan(`curl -fsSL ${INSTALL_SH_URL} | bash`));
  }
}

// ─── Update cache ─────────────────────────────────────────────────────────────

interface UpdateCache {
  lastCheck: number;
  latestVersion: string;
}

const UPDATE_CACHE_TTL = 24 * 60 * 60 * 1000; // 24h

function getUpdateCachePath(): string {
  const home = process.env['HOME'] || process.env['USERPROFILE'] || '';
  const configBase =
    process.platform === 'win32'
      ? process.env['APPDATA'] || home
      : process.env['XDG_CONFIG_HOME'] || `${home}/.config`;
  return `${configBase}/csfd/update-check.json`;
}

async function checkForUpdateInBackground(): Promise<void> {
  try {
    const { readFileSync, writeFileSync, mkdirSync } = await import('node:fs');
    const { dirname } = await import('node:path');
    const cachePath = getUpdateCachePath();

    let cache: UpdateCache | null = null;
    try {
      cache = JSON.parse(readFileSync(cachePath, 'utf-8')) as UpdateCache;
    } catch {
      /* no cache yet */
    }

    const now = Date.now();
    let latestVersion = cache?.latestVersion ?? '';

    if (!cache || now - cache.lastCheck > UPDATE_CACHE_TTL) {
      try {
        const fetched = await fetchLatestVersion(3000);
        if (fetched) {
          latestVersion = fetched;
          try {
            mkdirSync(dirname(cachePath), { recursive: true });
            writeFileSync(cachePath, JSON.stringify({ lastCheck: now, latestVersion }));
          } catch {
            /* ignore write errors */
          }
        }
      } catch {
        /* network error — use cached value */
      }
    }

    if (!latestVersion || compareSemver(__VERSION__, latestVersion) >= 0) return;

    console.log('');
    console.log(c.dim('  ' + '─'.repeat(44)));
    console.log(
      `  ${c.yellow(c.bold('↑ Update available:'))} ${c.dim(__VERSION__)} → ${c.bold(c.green(latestVersion))}`
    );
    console.log(
      `  ${c.dim('Run')} ${c.cyan(getCommandName() + ' update')} ${c.dim('for upgrade instructions.')}`
    );
  } catch {
    /* silently ignore */
  }
}

// ─────────────────────────────────────────────────────────────────────────────

async function runUpdate() {
  console.log(c.dim('Current version: ') + c.bold(__VERSION__));
  console.log(c.dim('Checking for updates...'));

  let latest: string;
  try {
    latest = await fetchLatestVersion();
  } catch {
    console.error(err('Could not reach GitHub API.'));
    process.exit(1);
  }

  if (!latest) {
    console.error(err('Could not determine latest version.'));
    process.exit(1);
  }

  const cmp = compareSemver(__VERSION__, latest);

  if (cmp === 0) {
    console.log(c.green('✔ Already up to date.'));
    return;
  }

  if (cmp > 0) {
    console.log(
      c.yellow('⚠ You are running a pre-release version.') + c.dim(` Latest stable: ${latest}`)
    );
    return;
  }

  printUpgradeInstructions(latest);
}

function printUsage() {
  const cmd = getCommandName();
  const header = c.bold(c.cyan('csfd')) + ' ' + c.dim(`v${__VERSION__}`);
  const usage = c.bold('Usage:') + `  ${c.cyan(cmd)} ${c.dim('<command> [options]')}`;

  const section = (title: string) => c.bold(title);
  const cmd_ = (name: string) => '  ' + c.cyan(name);
  const flag_ = (name: string) => '  ' + c.dim(name);
  const desc = (text: string) => c.dim(text);
  const sub_ = (name: string) => '    ' + c.dim(name);

  console.log(`
${header}

${usage}

${section('Commands:')}
${cmd_('server, api')}               ${desc('Start the REST API server')}
${cmd_('mcp')}                       ${desc('Start the MCP server for AI agents')}
${cmd_('export ratings <userId>')}   ${desc('Export user ratings')}
${sub_('--csv')}                     ${desc('CSV format (default)')}
${sub_('--json')}                    ${desc('JSON format')}
${sub_('--letterboxd')}              ${desc('Letterboxd-compatible CSV')}
${cmd_('export reviews <userId>')}   ${desc('Export user reviews')}
${sub_('--csv')}                     ${desc('CSV format (default)')}
${sub_('--json')}                    ${desc('JSON format')}
${cmd_('update')}                    ${desc('Check for updates')}
${cmd_('help')}                      ${desc('Show this help')}

${section('Flags:')}
${flag_('-v, --version')}            ${desc('Show version')}
${flag_('-h, --help')}               ${desc('Show this help')}
`);
}

main().catch((error) => {
  console.error(err('Fatal: ' + String(error)));
  process.exit(1);
});
