import fs from 'fs';
import path from 'path';
import { fetchPage } from '../src/fetchers';

// Find the mocks directory relative to the current file
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const mocksDir = path.join(__dirname, 'mocks');

const mockName = (file: string): string => file.split('.')[0];

const findSourceUrl = (html: string): string | null =>
  html.match(/<link rel="canonical" href="([^"]+)">/)?.[1] ??
  html.match(/<link rel="alternate" hreflang="cs-cz" href="([^"]+)"/)?.[1] ??
  html.match(/<meta property="og:url" content="([^"]+)">/)?.[1] ??
  null;

async function downloadMocks(only: string[]) {
  const allFiles = fs.readdirSync(mocksDir).filter((f) => f.endsWith('.ts'));

  const unknown = only.filter((name) => !allFiles.some((f) => mockName(f) === name));
  if (unknown.length) {
    console.error(`❌ Unknown mocks: ${unknown.join(', ')}`);
    process.exitCode = 1;
    return;
  }

  const files = only.length ? allFiles.filter((f) => only.includes(mockName(f))) : allFiles;

  for (const file of files) {
    const filePath = path.join(mocksDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Find the export declaration at the beginning of the file
    const exportMatch = content.match(/^(export const \w+\s*=\s*`)/);
    if (!exportMatch) {
      console.log(`⏭️  Skipping ${file}: No 'export const ... = \`' found`);
      continue;
    }
    const prefix = exportMatch[1];

    const url = findSourceUrl(content);
    if (!url) {
      console.log(`❌ Skipping ${file}: No source URL found.`);
      continue;
    }

    console.log(`⬇️  Downloading ${url} for ${file}...`);
    try {
      let html = await fetchPage(url);

      // Without it the next run could not tell where to download the mock from
      if (!findSourceUrl(html)) {
        throw new Error('Downloaded page has no source URL, keeping the old mock');
      }

      // Sanitize HTML to safely inject it as a template literal string
      // 1. Escape backslashes
      // 2. Escape backticks (\`)
      // 3. Escape syntax for variables \${} in string literals
      html = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

      // Write the updated content back to the mock file
      fs.writeFileSync(filePath, `${prefix}\n${html}\`;\n`);
      console.log(`✅ Successfully updated ${file}`);
    } catch (err) {
      console.error(`❌ Error updating ${file}:`, err instanceof Error ? err.message : err);
      process.exitCode = 1;
    }
  }
}

downloadMocks(process.argv.slice(2));
