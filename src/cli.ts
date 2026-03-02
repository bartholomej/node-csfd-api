/**
 * Main CLI entry point for node-csfd-api.
 */

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
          console.log('Usage: npx node-csfd-api export ratings <userId> [options]');
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
  export ratings <userId>    Export user ratings to CSV (default), JSON, or Letterboxd format
    Options:
      --csv                  Export to CSV format (default)
      --json                 Export to JSON format
      --letterboxd           Export to Letterboxd-compatible CSV format
  help                       Show this help message
`);
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
