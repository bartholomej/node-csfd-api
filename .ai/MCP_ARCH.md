# MCP Server Architecture

This explains how the Model Context Protocol (MCP) is implemented in `node-csfd-api`.

## 📂 Location

- Entry point: `mcp-server/index.ts`
- Build output: `dist/mcp-server.mjs`

## 🤖 Philosophy

The MCP server wrappers exist to make `node-csfd-api` usable by LLMs (Claude, Cursor, etc.).

- Tools should be **atomic**.
- Tools should return **JSON** strings in the `content` block.
- Error handling must be explicit, not throwing crashes.

## ➕ How to Add a New Tool

1.  **Define Zod Schema**:
    Describe every parameter. This description is prompt-engineered into the LLM.

    ```typescript
    const args = {
      query: z.string().describe('The accurate movie title to search for...')
    };
    ```

2.  **Register Tool**:
    Use the `server.tool` method.
    ```typescript
    server.tool(
      'tool_name',
      'Description for AI: interactions, when to use, what it returns.',
      args, // Zod schema
      async (params) => {
        try {
          // CALL THE SERVICE
          const result = await csfd.someFunction(params.query);
          return {
            content: [{ type: 'text', text: JSON.stringify(result, null, 2) }]
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

1.  Build: `yarn build:mcp`
2.  Run: `npx @modelcontextprotocol/inspector node dist/mcp-server.mjs`
