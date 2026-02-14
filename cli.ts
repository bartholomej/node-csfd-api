#!/usr/bin/env node

/**
 * Main CLI entry point for node-csfd-api.
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  switch (command) {
    case 'server':
    case 'api':
      try {
        await import(path.join(__dirname, 'bin/server.mjs'));
      } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
      }
      break;

    case 'mcp':
      try {
        await import(path.join(__dirname, 'bin/mcp-server.mjs'));
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
          console.log('Usage: npx node-csfd-api export ratings <userId> [options]');
          process.exit(1);
        }

        // Parse simplified flags manually for now to avoid dependencies
        // Check for --letterboxd flag
        const isLetterboxd = args.includes('--letterboxd');
        const format = isLetterboxd ? 'letterboxd' : 'json';

        // Future TODO: Parse other args like --lang=cs, --only=film
        // const langArg = args.find(a => a.startsWith('--lang='));
        // const language = langArg ? langArg.split('=')[1] : undefined;

        try {
          // Dynamic import of the built module
          // Note: The build script will output to dist/bin/export-ratings.mjs
          const modulePath = path.join(__dirname, 'bin/export-ratings.mjs');
          const { runRatingsExport } = await import(modulePath);

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
      }
      // Legacy support or specific command for letterboxd if desired,
      // but 'export ratings ... --letterboxd' is the new standard.
      else if (args[1] === 'letterboxd') {
        // Deprecated or alias handling
        console.warn(
          'Deprecation Warning: "export letterboxd" is deprecated. Please use "export ratings <id> --letterboxd" instead.'
        );
        // Redirect to new logic...
        // For now, just exit with instruction
        console.log('Usage: npx node-csfd-api export ratings <userId> --letterboxd');
        process.exit(1);
      } else {
        console.error(`Unknown export target: ${args[1]}`);
        printUsage();
        process.exit(1);
      }
      break;

    case 'help':
    case '--help':
    case '-h':
    default:
      printUsage();
      break;
  }
}

function printUsage() {
  console.log(`
Usage: npx node-csfd-api <command> [options]

Commands:
  server, api                Start the REST API server
  mcp                        Start the MCP (Model Context Protocol) server for AI agents
  export ratings <userId>    Export user ratings to JSON (default) or CSV
    Options:
      --letterboxd           Export to Letterboxd-compatible CSV format
  help                       Show this help message
`);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
