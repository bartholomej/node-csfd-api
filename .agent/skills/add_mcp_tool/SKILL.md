---
name: Add MCP Tool
description: How to expose a CSFD scraper function as a tool for AI agents via the Model Context Protocol server.
---

# Add MCP Tool

This skill explains how to Register a new tool in the MCP server so it can be used by LLMs.

## Prerequisites

The functionality must already exist in a Service (e.g., `csfd.movie(id)`). If not, use the `implement_scraper_feature` skill first.

## 1. LOCATE the Server Entry

- **File**: `mcp-server/index.ts`

## 2. DEFINE Input Schema

Use Zod to define the input arguments.
**Rule**: Every `.describe()` call is part of the prompt for the AI. Be descriptive!

```typescript
const toolArgs = {
  myParam: z.string().describe('Description of what this parameter does...')
};
```

## 3. REGISTER the Tool

Add the `server.tool()` call.

```typescript
server.tool(
  'tool_name_snake_case',
  'A clear, action-oriented description of what the tool does. Mention required inputs.',
  toolArgs,
  async ({ myParam }) => {
    try {
      // 1. Call the service
      const result = await csfd.someMethod(myParam);

      // 2. Return JSON content
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2)
          }
        ]
      };
    } catch (error) {
      // 3. Handle errors gracefully
      return {
        content: [{ type: 'text', text: `Error: ${error}` }],
        isError: true
      };
    }
  }
);
```

## 4. TEST the Tool

- **Command**: `yarn build:mcp` (to check types)
- **Manual Test**: You can temporarily add a call to `main()` or use the MCP Inspector if configured.
