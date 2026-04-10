// ─── Colors ───────────────────────────────────────────────────────────────────

export const useColor = process.stdout.isTTY && !process.env['NO_COLOR'];

export const c = {
  bold: (s: string) => (useColor ? `\x1b[1m${s}\x1b[22m` : s),
  dim: (s: string) => (useColor ? `\x1b[2m${s}\x1b[22m` : s),
  cyan: (s: string) => (useColor ? `\x1b[36m${s}\x1b[39m` : s),
  green: (s: string) => (useColor ? `\x1b[32m${s}\x1b[39m` : s),
  yellow: (s: string) => (useColor ? `\x1b[33m${s}\x1b[39m` : s),
  red: (s: string) => (useColor ? `\x1b[31m${s}\x1b[39m` : s)
};

export const err = (msg: string) => c.red(c.bold('✖ Error:')) + ' ' + msg;

// ─── CSV ──────────────────────────────────────────────────────────────────────

export const escapeCsvField = (value: string): string => {
  const needsQuotes = /[",\n\r]/.test(value);
  const escaped = value.replaceAll('"', '""');
  return needsQuotes ? `"${escaped}"` : escaped;
};

// ─── Progress bar ─────────────────────────────────────────────────────────────

export const renderProgress = (page: number, total: number): void => {
  const pct = Math.round((page / total) * 100);
  const filled = Math.round((page / total) * 20);
  const bar = '█'.repeat(filled) + '░'.repeat(20 - filled);
  process.stdout.write(`\r  [${bar}]  ${page}/${total} pages  ${pct}%`);
  if (page === total) process.stdout.write('\n');
};
