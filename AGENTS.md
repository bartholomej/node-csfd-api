# AI Agent Guide for node-csfd-api

This file serves as the primary context source for AI agents (Claude, Gemini, GPT) working on this repository.

## 🧠 Project Identity

**Project:** `node-csfd-api`
**Description:** A TypeScript wrapper and scraper for CSFD.cz (Czecho-Slovak Film Database). It exposes data via a Node.js API and a Model Context Protocol (MCP) server for AI consumption.
**Core Stack:** TypeScript, Node.js, `node-html-parser`, Zod, Express.

## 🗺️ High-Level Architecture

The project is divided into layers. Do not mix concerns.

1.  **Core Scraper (`src/`)**:
    - **Fetchers** (`src/fetchers`): Handles HTTP requests, User-Agents, and cookies.
    - **Helpers** (`src/helpers`): **CRITICAL.** Pure functions that take HTML Elements and return raw data strings/objects.
    - **Services** (`src/services`): Orchestrators. They call Fetchers, then use Helpers to parse data, and return typed DTOs.
    - **DTOs** (`src/dto`): TypeScript interfaces defining the shape of the data.
    - **Anubis** (`src/anubis`): Self-contained client for ČSFD's proof-of-work browser check. It must stay portable (Node, browsers, React Native), so no Node built-ins.

2.  **MCP Server (`src/bin/mcp-server.ts`)**:
    - The AI interfacing layer. It wraps `src/services` into tools executable by LLMs.
    - See `.ai/MCP_ARCH.md` for specific rules.

3.  **REST Server (`src/bin/server.ts`)**:
    - A classic Express/Node server exposing the scraper as a REST API.

4.  **CLI (`src/cli.ts`)**:
    - The `csfd` command. Subcommands (exports, search, movie lookup) live in `src/bin/`.

## ⚡ Golden Rules for Code Generation

### 1. Scraping & robustness

- **Never** put CSS selectors directly in Service classes. Always wrap them in a Helper function in `src/helpers`.
- **Never** assume an element exists. CSFD changes layouts. Use optional chaining `?.` or `try/catch` inside helpers.
- See `.ai/SCRAPING.md` for the parsing strategy.

### 2. File Structure & Imports

- Use standard ES imports.
- When importing local files, use the `.js` extension in imports where necessary for ESM compatibility (e.g., `import { x } from './file.js'`), but follow the existing pattern in the file you are editing.

### 3. Testing

- Use `vitest`.
- Prefer integration tests against live CSFD for critical paths (or use recorded mocks if available).
- Run `yarn demo` to verify basic functionality quickly.
- To check live ČSFD data while working on parsers, use the `csfd-dev` MCP server from `.mcp.json` (runs `yarn mcp` from source).

### 4. Code Style

- Use `async/await`.
- Prefer `const` over `let`.
- Use specific types, avoid `any`.

## 🛠️ Common Tasks (Workflows)

**Task: Add a new field to Movie object**

1.  Update Interface in `src/dto/movie.ts`.
2.  Create a helper in `src/helpers/movie.helper.ts`.
3.  Update logic in `src/services/movie.service.ts`.
4.  Verify `src/bin/mcp-server.ts` exposes it (it usually does automatically via the service).

**Task: Add a new MCP Tool**

1.  See `.ai/MCP_ARCH.md`.

## 📦 Build System

- **Build everything:** `yarn build` (library, CLI, REST and MCP server into `dist/`)
- **Run from source:** `yarn server` (REST), `yarn mcp` (MCP)
- **Docs:** `yarn docs` (typedoc runs with TypeScript 6, as it doesn't support TypeScript 7 yet)
- **Bundler:** `tsdown` (powered by rolldown).
