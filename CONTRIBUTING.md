# Contributing to node-csfd-api

Contributions are welcome, whether it's a bug fix, a new field scraped from ČSFD or a docs improvement. This guide shows how to run the project locally and what to keep in mind before opening a pull request.

## 🛠️ Development

### Prerequisites

- Node.js 22.18+ (the repository uses 26, see `.nvmrc`)
- Yarn 4 via [Corepack](https://github.com/nodejs/corepack): `npm install -g corepack && corepack enable`

### Setup

```bash
git clone https://github.com/bartholomej/node-csfd-api.git
cd node-csfd-api
yarn install
```

### Run it locally

| Command                      | What it does                                                        |
| ---------------------------- | ------------------------------------------------------------------- |
| `yarn demo`                  | Fetches a movie and prints it. Edit `demo.ts` to try other methods. |
| `yarn server`                | Starts the REST API from source on `http://localhost:3000`          |
| `yarn mcp`                   | Starts the MCP server from source (stdio)                           |
| `yarn build`                 | Builds the library, CLI, REST and MCP server into `dist/`           |
| `node dist/cli.js <command>` | Runs the built CLI, e.g. `node dist/cli.js movie 535121`            |
| `yarn dev`                   | Recompiles with `tsc` on every change                               |
| `yarn docs`                  | Generates the API documentation into `docs/`                        |

The REST server reads the same environment variables as in production (`PORT`, `API_KEY`, `LANGUAGE`, …), see the [REST API section](README.md#rest-api) of the README.

### Project structure

```text
src/
├── anubis/           # Browser verification (proof-of-work) client
├── bin/              # REST server, MCP server, exports & CLI commands
├── dto/              # Data transfer objects & types
├── fetchers/         # HTTP request handlers
├── helpers/          # Parsing & data transformation
├── services/         # Main API service classes
├── cli.ts            # CLI entry point
├── errors.ts         # CsfdError
└── index.ts          # Public API exports
```

A more detailed overview of the layers and their rules is in [AGENTS.md](AGENTS.md).

### Testing

```bash
yarn test            # Run all tests once
yarn vitest          # Run tests in watch mode
yarn test:coverage   # Run tests with a coverage report
```

- Most tests run **live against ČSFD**, so they need an internet connection and can fail when ČSFD changes its pages or is temporarily unavailable.
- Parser tests use saved ČSFD pages in `tests/mocks/`. Refresh them with `yarn mock`.

### Lint & format

```bash
yarn lint            # oxlint, fixes what it can
yarn format          # prettier
```

Both run automatically on staged files before every commit (husky + lint-staged).

## 🤝 How to contribute

1. Fork the repository and create a branch (`git checkout -b fix/movie-premieres`)
2. Make your changes and add tests for them
3. Make sure `yarn test`, `yarn lint:check` and `yarn format:check` pass
4. Commit and open a pull request

### Guidelines

- Keep CSS selectors in helpers (`src/helpers`), never in services. ČSFD changes its layout, so never assume an element exists. See [.ai/SCRAPING.md](.ai/SCRAPING.md).
- The core library must stay portable (Node.js, browsers, React Native), so don't use Node.js built-ins outside `src/bin` and `src/cli.ts`.
- Add tests for new functionality and update the README when the public API changes.
- Follow the existing code style.

### Commit messages

The project uses [Conventional Commits](https://www.conventionalcommits.org/):

```text
fix(movie): parse premieres without a date
feat(search): add creators to search results
docs: explain language options
chore(deps): update all deps
```

## 🐛 Reporting issues

Found a bug or have an idea? [Open an issue](https://github.com/bartholomej/node-csfd-api/issues/new/choose) and pick a template.

Found a security vulnerability? Please don't open a public issue, follow [SECURITY.md](SECURITY.md) instead.
