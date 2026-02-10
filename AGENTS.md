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

2.  **MCP Server (`mcp-server/`)**:
    - The AI interfacing layer. It wraps `src/services` into tools executable by LLMs.
    - See `.ai/MCP_ARCH.md` for specific rules.

3.  **App Server (`server/`)**:
    - A classic Express/Node server exposing the scraper as a REST API.

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
- Run `npm run demo` to verify basic functionality quickly.

## 🛠️ Common Tasks (Workflows)

**Task: Add a new field to Movie object**

1.  Update Interface in `src/dto/movie.ts`.
2.  Create a helper in `src/helpers/movie.helper.ts`.
3.  Update logic in `src/services/movie.service.ts`.
4.  Verify `mcp-server` exposes it (it usually does automatically via the service).

**Task: Add a new MCP Tool**

1.  See `.ai/MCP_ARCH.md`.

## 📦 Build System

- **Build everything:** `yarn build`
- **Build Server:** `yarn build:server`
- **Build MCP:** `yarn build:mcp`
- **Bundler:** The project uses `tsdown` and `esbuild`.
