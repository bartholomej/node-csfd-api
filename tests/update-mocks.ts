import fs from 'fs';
import path from 'path';

// Find the mocks directory relative to the current file
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const mocksDir = path.join(__dirname, 'mocks');

async function downloadMocks() {
  const files = fs.readdirSync(mocksDir).filter(f => f.endsWith('.ts'));

  for (const file of files) {
    const filePath = path.join(mocksDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Find the export declaration at the beginning of the file
    const exportMatch = content.match(/^(export const \w+\s*=\s*`)/);
    if (!exportMatch) {
      console.log(`\u23ed\ufe0f  Skipping ${file}: No 'export const ... = \`' found`);
      continue;
    }
    const prefix = exportMatch[1];
    
    // Try to find the source URL in the original mock file
    let url = '';
    const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)">/);
    const ogMatch = content.match(/<meta property="og:url" content="([^"]+)">/);
    const alternateMatch = content.match(/<link rel="alternate" hreflang="cs-cz" href="([^"]+)"/);

    if (canonicalMatch) {
      url = canonicalMatch[1];
    } else if (alternateMatch) {
      url = alternateMatch[1];
    } else if (ogMatch) {
      url = ogMatch[1];
    } else {
      console.log(`\u274c Skipping ${file}: No source URL found.`);
      continue;
    }

    console.log(`\u2b07\ufe0f  Downloading ${url} for ${file}...`);
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          'Accept-Language': 'cs-CZ,cs;q=0.9,en;q=0.8'
        }
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      
      let html = await res.text();
      
      // Sanitize HTML to safely inject it as a template literal string
      // 1. Escape backslashes
      // 2. Escape backticks (\`)
      // 3. Escape syntax for variables \${} in string literals
      html = html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
      
      // Write the updated content back to the mock file
      fs.writeFileSync(filePath, `${prefix}\n${html}\`;\n`);
      console.log(`\u2705 Successfully updated ${file}`);
    } catch (err) {
      console.error(`\u274c Error updating ${file}:`, err instanceof Error ? err.message : err);
    }
  }
}

downloadMocks();
