# MCP Server Architecture

This explains how the Model Context Protocol (MCP) is implemented in `node-csfd-api`.

## 📂 Location

- Tools and prompts: `createMcpServer()` in `src/bin/mcp-app.ts`
- Entry point (stdio): `src/bin/mcp-server.ts`
- HTTP: the stateless `/mcp` route in `src/bin/server-app.ts`, protected by the REST server's `API_KEY`
- Build output: `dist/bin/mcp-server.js`
- Started by: `csfd mcp` / `npx node-csfd-api mcp`, or `yarn mcp` from source

## 🤖 Philosophy

The MCP server wrappers exist to make `node-csfd-api` usable by LLMs (Claude, Cursor, etc.).

- Tools should be **atomic**.
- Tools return the data as `structuredContent` and a short human-readable summary in the `content` block.
- Output schemas live in `src/bin/mcp-schemas.ts`. Always use `z.looseObject`: clients reject any field the schema doesn't list, and ČSFD data has more fields than the schemas describe.
- Error handling must be explicit, not throwing crashes.

## ➕ How to Add a New Tool

1.  **Define Zod Schema**:
    Describe every parameter. This description is prompt-engineered into the LLM.

    ```typescript
    const inputSchema = {
      query: z.string().describe('The accurate movie title to search for...')
    };
    ```

2.  **Register Tool**:
    Use the `server.registerTool` method (`server.tool` is deprecated in the MCP SDK).
    ```typescript
    server.registerTool(
      'tool_name',
      {
        title: 'Tool Name',
        description: 'Description for AI: interactions, when to use, what it returns.',
        inputSchema, // Zod schema
        annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false }
      },
      async ({ query }) => {
        try {
          // CALL THE SERVICE
          const result = await csfd.someFunction(query);
          return {
            structuredContent: result as unknown as Record<string, unknown>,
            content: [{ type: 'text', text: `Found ${result.length} results.` }]
          };
        } catch (e) {
          return {
            content: [{ type: 'text', text: `Error: ${e}` }],
            isError: true // Important for LLM to know it failed
          };
        }
      }
    );
    ```

## 🧪 Testing MCP

You can test the MCP server without a full client using the inspector.

1.  Build: `yarn build`
2.  Run: `npx @modelcontextprotocol/inspector node dist/bin/mcp-server.js`
