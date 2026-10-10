import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import packageJson from '../../package.json' with { type: 'json' };
import { createMcpServer } from './mcp-app';

// Start the server using stdio transport
async function main() {
  const transport = new StdioServerTransport();
  await createMcpServer().connect(transport);
  console.error(`--- CSFD MCP Server (v${packageJson.version}) ---`);
  console.error('Status: Running via Stdio');
  console.error('\nTo use this server in Claude Desktop, add this to your config:');

  // console.error('\nOption A: Direct via npx (recommended for users)');
  console.error(
    JSON.stringify(
      {
        'node-csfd-api': {
          command: 'npx',
          args: ['-y', 'node-csfd-api', 'mcp']
        }
      },
      null,
      2
    )
  );

  // console.error('\nOption B: Local build (recommended for developers)');
  // console.error(
  //   JSON.stringify(
  //     {
  //       'node-csfd-api-local': {
  //         command: 'node',
  //         args: [process.argv[1]] // Dynamically takes the path to the currently running file
  //       }
  //     },
  //     null,
  //     2
  //   )
  // );
}

main().catch((error) => {
  console.error('Fatal error in MCP server:', error);
  process.exit(1);
});
