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
      if (args[1] === 'letterboxd') {
        const userIdRaw = args[2];
        const userId = Number(userIdRaw);

        if (!userIdRaw || isNaN(userId)) {
          console.error('Error: Please provide a valid numeric User ID.');
          console.log('Usage: npx node-csfd-api export letterboxd <userId>');
          process.exit(1);
        }

        try {
          // Dynamic import of the built module
          const { runLetterboxdExport } = await import(
            path.join(__dirname, 'bin/letterboxd-export.mjs')
          );
          await runLetterboxdExport(userId);
        } catch (error) {
          console.error('Failed to run export:', error);
          process.exit(1);
        }
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
  export letterboxd <userId> Export user ratings to CSV for Letterboxd import
  help                       Show this help message
`);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
