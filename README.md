[![npm version](https://badge.fury.io/js/node-csfd-api.svg)](https://badge.fury.io/js/node-csfd-api)
[![License](https://img.shields.io/npm/l/node-csfd-api.svg)](https://www.npmjs.com/node-csfd-api)
[![Build & Publish](https://github.com/bartholomej/node-csfd-api/workflows/Publish/badge.svg)](https://github.com/bartholomej/node-csfd-api/actions)
[![Coverage](https://codecov.io/gh/bartholomej/node-csfd-api/branch/master/graph/badge.svg?token=YQH9UoVrGP)](https://codecov.io/gh/bartholomej/node-csfd-api)
[![npm downloads](https://img.shields.io/npm/dm/node-csfd-api.svg)](https://www.npmjs.com/node-csfd-api)

<div align="center">

# CSFD API 🎬 + CSFD Export 💾 + CSFD MCP 🤖

#### Modern TypeScript NPM library for scraping **CSFD.CZ**. Scraper, API Rest Server, Exporter and MCP Server in one package. _(unofficial)_

[Features](#-features) • [Installation](#-installation) • [Quick Start](#-quick-start) • [API Reference](#-api-reference) • [CLI](#-cli-tools) • [MCP Server](#-mcp-server-model-context-protocol) • [Docker](#-docker-support)

</div>

---

## ✨ Features

- 🎯 **Type-safe** - Full TypeScript support with type definitions
- 🧪 **Well-tested** - ~100% code coverage
- 🚀 **Universal** - Works in Node.js, browsers, and serverless environments
- 🐳 **Docker ready** - Pre-built Docker images available
- 🍺 **Homebrew support** - Easy globally installed CLI via Homebrew tap
- 🤖 **MCP Server** - Use CSFD data directly within LLMs like Claude Desktop
- 🔄 **Modern API** - Promise-based with async/await support
- 📦 **Few dependencies** - Lightweight and efficient

### Supported Platforms

- Node.js (ESM & CommonJS)
- Browsers (with CORS considerations)
- Docker containers
- macOS/Linux CLI (via Homebrew)
- MCP Server (Claude Desktop, etc.)
- Serverless (Firebase Functions, AWS Lambda, CloudFlare Workers, etc.)
- Chrome Extensions
- React Native (Yes, with Expo too!)

## 📦 Installation

```bash
npm install node-csfd-api
# yarn add node-csfd-api
# pnpm add node-csfd-api
```

## 🚀 Quick Start

```typescript
import { csfd } from 'node-csfd-api';

// Fetch movie details
const movie = await csfd.movie(535121);
console.log(movie.title); // "Na špatné straně"

// Search for content
const results = await csfd.search('Tarantino');
console.log(results.movies, results.tvSeries, results.users);

// Get creator info
const creator = await csfd.creator(2120);
console.log(creator.name); // "Quentin Tarantino"

// Get user ratings
const ratings = await csfd.userRatings('912');
console.log(ratings);

// Get user reviews
const reviews = await csfd.userReviews('195357-verbal');
console.log(reviews);
```

## 📖 Table of Contents

- [Movie Details](#movie)
- [Search](#search)
- [Creators](#creators)
- [User Ratings](#user-ratings)
- [User Reviews](#user-reviews)
- [Language & Request Options](#language--request-options)
- [Error Handling](#error-handling)
- [Browser Verification Cookie](#browser-verification-cookie)
- [CLI Tools](#-cli-tools)
- [MCP Server](#-mcp-server-model-context-protocol)
- [Docker Support](#-docker-support)
- [REST API](#rest-api)
- [Development](#-development)

## 📚 API Reference

### Movie

> Retrieve comprehensive information about a movie or TV series by its ČSFD ID.

**Method:** `csfd.movie(id: number | string, options?: CSFDOptions): Promise<CSFDMovie>`

The ID can be a number, a slug (`'535121-na-spatne-strane'`) or a full ČSFD URL. The same works for creators and users.

```typescript
import { csfd } from 'node-csfd-api';

// Using async/await
const movie = await csfd.movie(535121);

// Alternatively, using promises
csfd.movie(535121).then((movie) => console.log(movie));
```

<details>
  <summary>🔎 Click here to see full result example</summary>

```javascript
{
  id: 535121,
  title: 'Na špatné straně',
  year: '2018',
  descriptions: [
    'Otupělý policejní veterán Ridgeman (Mel Gibson)...',
    'Brett je policajt tesne ...'
  ],
  genres: [ 'Krimi', 'Drama', 'Thriller' ],
  type: 'film',
  url: 'https://www.csfd.cz/film/535121',
  origins: [ 'USA', 'Kanada' ],
  colorRating: 'good',
  rating: 73,
  ratingCount: 6654,
  photo: '//image.pmgstatic.com/cache/resized/w1326/files/images/film/photos/162/980/162980090_bbffbb.jpg',
  trivia: ['Když Henry (Tory Kittles) se svým mladším bratrem...', 'Ve filmu se střídají...'],
  titlesOther: [
    { country: 'USA', title: 'Dragged Across Concrete' },
    { country: 'Kanada', title: 'Dragged Across Concrete' },
    { country: 'Slovensko', title: 'Na zlej strane' },
    { country: 'Austrálie', title: 'Dragged Across Concrete' },
    { country: 'Velká Británie', title: 'Dragged Across Concrete' }
  ],
  poster: 'https://image.pmgstatic.com/cache/resized/w1080/files/images/film/posters/163/579/163579352_bf8737.jpg',
  creators: {
    directors: [
    {
      id: 87470,
      name: 'S. Craig Zahler',
      url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }
    ],
    actors: [
      {
        id: 1,
        name: 'Mel Gibson',
        url: 'https://www.csfd.cz/tvurce/1-mel-gibson/'
      }
    ],
    basedOn: [],
    writers: [
      {
        id: 87470,
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }
    ],
    music: [
      {
        id: 203209,
        name: 'Jeff Herriott',
        url: 'https://www.csfd.cz/tvurce/203209-jeff-herriott/'
      }
    ],
    producers: [
      {
        id: 320006,
        name: 'Sefton Fincham',
        url: 'https://www.csfd.cz/tvurce/320006-sefton-fincham/'
      }
    ]
  },
  vod: [
    {
      title: 'Voyo',
      url: 'https://voyo.nova.cz/filmy/4604-na-spatne-strane'
    },
    {
      title: 'DVD',
      url: 'https://filmy.heureka.cz/na-spatne-strane-dvd/#utm_source=csfd.cz&utm_medium=cooperation&utm_campaign=csfd_movies_feed'
    }
  ],
  tags: ['město', 'sledování'],
  premieres: [
   {
      country: 'Česko',
      format: 'Na Blu-ray',
      date: '07.08.2019',
      company: 'Magic Box'
    },
    {
      country: 'USA',
      format: 'V kinech',
      date: '22.03.2019',
      company: 'Lionsgate US'
    }
  ]
}
```

</details>

### Search

> Search for movies, TV series, creators and users across the ČSFD database.

**Method:** `csfd.search(query: string, options?: CSFDOptions): Promise<CSFDSearch>`

```typescript
import { csfd } from 'node-csfd-api';

const results = await csfd.search('bart');

// Access different result types
console.log(results.movies); // Array of movies
console.log(results.tvSeries); // Array of TV series
console.log(results.users); // Array of users
```

<details>
  <summary>🔎 Click here to see full result example</summary>

```javascript
[
  {
    id: 19653,
    title: 'Black Bart',
    year: '1975',
    url: 'https://www.csfd.cz/film/19653-black-bart/',
    type: 'tv-film',
    colorRating: 'bad',
    poster: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    origins: ['USA'],
    creators: {
      directors: [{
        id: 87470,
        name: 'S. Craig Zahler',
        url: 'https://www.csfd.cz/tvurce/87470-s-craig-zahler/'
      }],
      actors: [{
        id: 1,
        name: 'Mel Gibson',
        url: 'https://www.csfd.cz/tvurce/1-mel-gibson/'
      }]
    }
  }
],
tvSeries: [
  {
    id: 71924,
    title: 'Království',
    year: 1994,
    url: 'https://www.csfd.cz/film/71924-kralovstvi/',
    type: 'series',
    colorRating: 'good',
    poster: 'https://image.pmgstatic.com/cache/resized/w60h85/files/images/film/posters/166/708/166708064_2da697.jpg',
    origins: ['Dánsko'],
    creators: []
  }
],
users: [
  {
    id: 912,
    user: 'BART!',
    userRealName: 'Lukáš Barták',
    avatar: 'https://image.pmgstatic.com/cache/resized/w45h60/files/images/user/avatars/000/281/281554_1c0fef.jpg',
    url: 'https://www.csfd.cz/uzivatel/912-bart/'
  }
]
```

</details>

### Creators

> Get detailed information about a creator including their biography and filmography.

**Method:** `csfd.creator(id: number | string, options?: CSFDOptions): Promise<CSFDCreator>`

```typescript
import { csfd } from 'node-csfd-api';

const creator = await csfd.creator(2120); // Quentin Tarantino

console.log(creator.name); // Name
console.log(creator.bio); // Biography
console.log(creator.films); // Filmography
console.log(creator.birthday); // Birth date
// ... many more properties, see example
```

<details>
  <summary>🔎 Click here to see full result example</summary>

```javascript
{
  id: 2120,
  name: 'Quentin Tarantino',
  birthday: '27.03.1963',
  birthplace: 'Knoxville, Tennessee, USA',
  photo: 'https://image.pmgstatic.com/cache/resized/w100h132crop/files/images/creator/photos/164/515/164515525_b98f8a.jpg',
  age: 58,
  bio: 'Quentin Tarantino se narodil 27. března roku 1963 v americkém Knoxville teprve šestnáctileté Connie Tarantinové. Své jméno Quentin dostal podle matčiny oblíbené televizní postavy Quinta ze seriálu "Gunsmoke". Quentinův otec byl jistý Tony Tarantino, který rodinu opustil když byl Quentin ještě malinký. Jeho dětství a dospívání ovlivnily nejen filmy, ale pop kultura obecně. Televizní seriály, komiksy, populární hudba, to vše jako mladý hltal ve velkém a stále neměl…',
  films: [
    {
      id: 527699,
      title: 'Tenkrát v Hollywoodu',
      year: 2019,
      colorRating: 'good'
    },
    {
      id: 362228,
      title: 'Osm hrozných',
      year: 2015,
      colorRating: 'good'
    },
    {
      id: 294824,
      title: 'Nespoutaný Django',
      year: 2012,
      colorRating: 'good'
    },
    {
      id: 117077,
      title: 'Hanebný pancharti',
      year: 2009,
      colorRating: 'good'
    },
    {
      id: 229384,
      title: 'Grindhouse: Auto zabiják',
      year: 2007,
      colorRating: 'average'
    },
    {
      id: 178904,
      title: 'Sin City - město hříchu',
      year: 2005,
      colorRating: 'good'
    },
    {
      id: 136304,
      title: 'Kill Bill 2',
      year: 2004,
      colorRating: 'good'
    },
    { id: 43483, title: 'Kill Bill', year: 2003, colorRating: 'good' },
    {
      id: 8850,
      title: 'Jackie Brown',
      year: 1997,
      colorRating: 'good'
    },
    {
      id: 7743,
      title: 'Čtyři pokoje',
      year: 1995,
      colorRating: 'good'
    },
    {
      id: 8852,
      title: 'Pulp Fiction: Historky z podsvětí',
      year: 1994,
      colorRating: 'good'
    }
  ]
}
```

</details>

### User Ratings

> Retrieve user ratings from their ČSFD profile.

**Method:** `csfd.userRatings(user: number | string, config?: CSFDUserRatingConfig, options?: CSFDOptions): Promise<CSFDUserRatings[]>`

#### Basic Usage

```typescript
import { csfd } from 'node-csfd-api';

// Latest ratings (first page, ~50 items)
const ratings = await csfd.userRatings('912-bart');
```

#### Advanced Options

```typescript
// Get specific page
const page2 = await csfd.userRatings('912-bart', { page: 2 });

// Get all ratings (use with caution - rate limiting applies)
const allRatings = await csfd.userRatings('912-bart', {
  allPages: true,
  allPagesDelay: 2000 // 2 second delay between requests
});

// Filter by content type
const onlyMovies = await csfd.userRatings('912-bart', {
  includesOnly: ['film']
});

const excludeEpisodes = await csfd.userRatings('912-bart', {
  excludes: ['episode', 'season']
});
```

> ⚠️ **Be considerate**: `allPages` sends one request per page. Keep a delay between them (`allPagesDelay`) so you don't put unnecessary load on ČSFD.

<details>
  <summary>🔎 Click here to see full result example</summary>

```javascript
[
  {
    id: 812944,
    title: 'David Attenborough: Život na naší planetě',
    year: 2020,
    type: 'film',
    url: 'https://www.csfd.cz/film/812944-david-attenborough-zivot-na-nasi-planete/',
    colorRating: 'good',
    userDate: '2020-11-01',
    userRating: 5
  },
  {
    id: 912552,
    title: 'Coronation',
    year: 2020,
    type: 'film',
    url: 'https://www.csfd.cz/film/912552-coronation/',
    colorRating: 'good',
    userDate: '2020-10-28',
    userRating: 4
  }
];
```

</details>

#### CSFDUserRatingConfig

| Option          | Type                                    | Default     | Description                                                      |
| --------------- | --------------------------------------- | ----------- | ---------------------------------------------------------------- |
| `includesOnly`  | `CSFDFilmTypes[]`                       | `null`      | Include only specific content types (e.g., `['film', 'series']`) |
| `excludes`      | `CSFDFilmTypes[]`                       | `null`      | Exclude specific content types (e.g., `['episode']`)             |
| `allPages`      | `boolean`                               | `false`     | Fetch all pages of ratings                                       |
| `allPagesDelay` | `number`                                | `0`         | Delay between page requests in milliseconds                      |
| `page`          | `number`                                | `1`         | Fetch specific page number                                       |
| `onProgress`    | `(page: number, total: number) => void` | `undefined` | Called on each page fetch — use for progress bars or logging     |

> 📝 **Note**: `includesOnly` and `excludes` are mutually exclusive. If both are provided, `includesOnly` takes precedence.
>
> 🔗 See [CSFDFilmTypes definition](https://github.com/bartholomej/node-csfd-api/blob/master/src/dto/global.ts)

### User Reviews

> Retrieve detailed user reviews from their ČSFD profile.

**Method:** `csfd.userReviews(user: number | string, config?: CSFDUserReviewsConfig, options?: CSFDOptions): Promise<CSFDUserReviews[]>`

#### Basic Usage

```typescript
import { csfd } from 'node-csfd-api';

// Get latest reviews
const reviews = await csfd.userReviews(195357);
```

#### Advanced Options

```typescript
// Get specific page
const page2 = await csfd.userReviews(195357, { page: 2 });

// Get all reviews with rate limiting
const allReviews = await csfd.userReviews(195357, {
  allPages: true,
  allPagesDelay: 2000
});

// Filter by content type
const filtered = await csfd.userReviews(195357, {
  excludes: ['episode', 'season']
});
```

<details>
  <summary>🔎 Click here to see full result example</summary>

```javascript
[
  {
    id: 1391448,
    title: 'Co s Péťou?',
    year: 2025,
    type: 'film',
    url: 'https://www.csfd.cz/film/1391448-co-s-petou/prehled/',
    colorRating: 'good',
    userDate: '2025-11-27',
    userRating: 4,
    text: 'Co s Péťou? Inu, co by? Každý normální Sparťan by to okamžitě...',
    poster:
      'https://image.pmgstatic.com/cache/resized/w240h339/files/images/film/posters/170/492/170492173_1l3djd.jpg'
  },
  {
    id: 1530416,
    title: 'Kouzlo derby',
    year: 2025,
    type: 'film',
    url: 'https://www.csfd.cz/film/1530416-kouzlo-derby/prehled/',
    colorRating: 'average',
    userDate: '2025-11-26',
    userRating: 1,
    text: 'Typické kolečkoidní sebevykradačské pásmo klišovitých...',
    poster:
      'https://image.pmgstatic.com/cache/resized/w240h339/files/images/film/posters/170/230/170230377_cimu90.jpg'
  }
];
```

</details>

#### CSFDUserReviewsConfig

Same options as [CSFDUserRatingConfig](#csfduserratingconfig).

### Language & Request Options

Every method accepts `CSFDOptions` as its last argument:

| Option     | Type                   | Description                                                   |
| ---------- | ---------------------- | ------------------------------------------------------------- |
| `language` | `'cs' \| 'en' \| 'sk'` | Language of titles, genres etc. (default `cs`)                |
| `request`  | `RequestInit`          | Extra `fetch` options, e.g. custom headers or an abort signal |

```typescript
import { csfd } from 'node-csfd-api';

// For a single call
const movie = await csfd.movie(535121, { language: 'en' });
const ratings = await csfd.userRatings(912, { page: 2 }, { language: 'sk' });

// For all subsequent calls
csfd.setOptions({ language: 'en' });
```

### Error Handling

When a page can't be fetched, methods reject with a `CsfdError`. Its `reason` tells you why:

| `reason`    | Meaning                                                |
| ----------- | ------------------------------------------------------ |
| `not-found` | The movie, creator or user doesn't exist (HTTP 404)    |
| `blocked`   | ČSFD declined the request, e.g. too many requests      |
| `http`      | ČSFD answered with another error status                |
| `network`   | The request didn't complete (offline, DNS, timeout, …) |

```typescript
import { csfd, CsfdError } from 'node-csfd-api';

try {
  await csfd.movie(999999999);
} catch (error) {
  if (error instanceof CsfdError && error.reason === 'not-found') {
    console.log(`Not found: ${error.url} (HTTP ${error.status})`);
  }
}
```

### Browser Verification Cookie

ČSFD sometimes asks visitors to complete a short browser verification. The library completes it automatically and reuses the resulting cookie for the following requests. The cookie is tied to your IP address and stays valid for about a week, so you can keep it between runs:

```typescript
import { getAnubisCookie, resetAnubisCookie, setAnubisCookie } from 'node-csfd-api';

const cookie = getAnubisCookie(); // Save it, e.g. to a file or a database
setAnubisCookie(cookie); // Restore it on the next start
resetAnubisCookie(); // Forget it and verify again on the next request
```

## 💻 CLI Tools

This library ships with a CLI exposing several tools. Choose the installation method that fits your workflow.

### Installation

**Option A: npx** _(no installation required)_

> Runs directly via Node.js

```bash
npx node-csfd-api <command>
```

**Option B: Homebrew** _(macOS & Linux)_

```bash
brew install bartholomej/tap/csfd
```

**Option C: Install script** _(macOS & Linux)_

> Installs the latest stable release as a standalone binary to `~/.local/bin/csfd`.

```bash
curl -fsSL https://raw.githubusercontent.com/bartholomej/node-csfd-api/master/install.sh | bash
## Install specific version
# curl -fsSL https://raw.githubusercontent.com/bartholomej/node-csfd-api/master/install.sh | CSFD_VERSION=5.5.0 bash
```

**Option D: Windows** _(manual download)_

Download `csfd-windows-x64.zip` from the [latest release](https://github.com/bartholomej/node-csfd-api/releases/latest), extract `csfd.exe`, and add it to your `PATH`.

> ⚠️ Windows may show a SmartScreen warning ("Windows protected your PC") because the binary is not code-signed. To proceed: click **More info** → **Run anyway**. Alternatively, right-click the `.exe` → Properties → check **Unblock**.

---

### CLI Examples

> 💡 The examples below use `csfd` (Options B, C & D). If you use npx, replace it with `npx node-csfd-api` — e.g. `npx node-csfd-api export ratings 912`.

#### 1. Search

```bash
csfd search tarantino
# npx node-csfd-api search tarantino
csfd search "blade runner" --json   # raw JSON output
# npx node-csfd-api search "blade runner" --json
```

#### 2. Movie Details

```bash
csfd movie 535121             # by ID
# npx node-csfd-api movie 535121
csfd movie "blade runner"     # by title — searches and shows the top result
# npx node-csfd-api movie "blade runner"
csfd movie 535121 --json      # raw JSON output, pipe-friendly
# npx node-csfd-api movie 535121 --json
```

#### 3. Export Ratings (CSV, JSON & Letterboxd)

> Backup your personal user ratings. _Use this tool just to keep a local copy of your data._

```bash
csfd export ratings 912            # CSV (default) -> <userId>-ratings.csv
# npx node-csfd-api export ratings 912
csfd export ratings 912 --json     # JSON -> <userId>-ratings.json
# npx node-csfd-api export ratings 912 --json
csfd export ratings 912 --letterboxd  # Letterboxd CSV -> <userId>-for-letterboxd.csv
# npx node-csfd-api export ratings 912 --letterboxd
```

#### 3. Export Reviews (CSV & JSON)

```bash
csfd export reviews 912            # CSV (default) -> <userId>-reviews.csv
# npx node-csfd-api export reviews 912
csfd export reviews 912 --json     # JSON -> <userId>-reviews.json
# npx node-csfd-api export reviews 912 --json
```

#### 4. REST API Server

```bash
csfd server
# npx node-csfd-api server
```

#### 5. MCP Server for AI Agents

```bash
csfd mcp
# npx node-csfd-api mcp
```

## 🤖 MCP Server (Model Context Protocol)

This library includes a built-in [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server. This allows you to use ČSFD data directly within LLMs like **Claude Desktop**.

### Features

- **Search**: Search for movies, TV series, creators and users.
- **Details**: Get comprehensive details about movies and creators.
- **Users**: Read user ratings and reviews.

### Usage with Claude Desktop

Add the following configuration to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "csfd": {
      "command": "npx",
      "args": ["-y", "node-csfd-api", "mcp"]
    }
  }
}
```

### Other Clients

**Claude Code**

```bash
claude mcp add csfd -- npx -y node-csfd-api mcp
```

**Cursor:** add the same `mcpServers` configuration as for Claude Desktop to `~/.cursor/mcp.json` (or `.cursor/mcp.json` in your project).

**VS Code:** add this to `.vscode/mcp.json` in your project:

```json
{
  "servers": {
    "csfd": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "node-csfd-api", "mcp"]
    }
  }
}
```

### Over HTTP

The REST server also serves MCP at `/mcp`, so one running instance, e.g. the Docker image, can be shared by several clients. It is protected by the same `API_KEY` as the REST API.

```bash
docker run -p 3000:3000 -e API_KEY=my-secret bartholomej/node-csfd-api
```

**Claude Code**

```bash
claude mcp add --transport http csfd http://localhost:3000/mcp --header "x-api-key: my-secret"
```

**VS Code** (`.vscode/mcp.json`):

```json
{
  "servers": {
    "csfd": {
      "type": "http",
      "url": "http://localhost:3000/mcp",
      "headers": { "x-api-key": "my-secret" }
    }
  }
}
```

**Cursor** (`~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "csfd": {
      "url": "http://localhost:3000/mcp",
      "headers": { "x-api-key": "my-secret" }
    }
  }
}
```

### Supported Tools

- `search`: Search movies, TV series, creators and users (returns IDs for the other tools)
- `get_movie`: Movie or TV series details by ID
- `get_creator`: Creator details and filmography by ID
- `get_user_ratings`: User ratings (by page)
- `get_user_reviews`: User reviews (by page)
- `get_cinemas`: Cinema showtimes

Every tool returns structured data with a declared output schema, so clients know which fields to expect. There is also an `actor-top-rated` prompt that finds and ranks the best movies of an actor or creator.

## 🐳 Docker Support

Run the CSFD API as a standalone REST service using Docker.

### Using Pre-built Image

```bash
# Pull the latest image
docker pull bartholomej/node-csfd-api

# Run the container
docker run -p 3000:3000 bartholomej/node-csfd-api
```

### Building Your Own Image

```bash
# Build the image
docker build -t node-csfd-api .

# Run the container
docker run -p 3000:3000 node-csfd-api
```

### REST API

Start the server with Docker (above), `csfd server` or `npx node-csfd-api server`, then access it at `http://localhost:3000`. The same server also serves [MCP over HTTP](#over-http) at `/mcp`.

| Endpoint            | Description                | Example                              |
| ------------------- | -------------------------- | ------------------------------------ |
| `/movie/:id`        | Movie or TV series details | `/movie/535121`                      |
| `/search/:query`    | Search                     | `/search/tarantino`                  |
| `/creator/:id`      | Creator details            | `/creator/2120`                      |
| `/user-ratings/:id` | User ratings               | `/user-ratings/912-bart?page=2`      |
| `/user-reviews/:id` | User reviews               | `/user-reviews/195357?allPages=true` |
| `/cinemas`          | Today's showtimes in Praha | `/cinemas`                           |

All endpoints accept `?language=cs|en|sk`. User ratings and reviews also accept `page`, `allPages`, `allPagesDelay`, `includesOnly` and `excludes` (comma-separated, e.g. `?excludes=episode,season`).

**Configuration** (environment variables):

| Variable       | Description                                                                     |
| -------------- | ------------------------------------------------------------------------------- |
| `PORT`         | Port to listen on (default `3000`)                                              |
| `API_KEY`      | One or more comma-separated keys. When set, every request must send one of them |
| `API_KEY_NAME` | Request header carrying the key (default `x-api-key`)                           |
| `LANGUAGE`     | Default language: `cs`, `en` or `sk`                                            |
| `VERBOSE`      | Set to `true` to log successful requests as well                                |

```bash
docker run -p 3000:3000 -e API_KEY=my-secret bartholomej/node-csfd-api
```

**Errors** are returned as JSON (`{ "error": "MOVIE_FETCH_FAILED", "message": "…" }`) with a matching status:

| Status | When                                                          |
| ------ | ------------------------------------------------------------- |
| `400`  | The ID isn't a valid ČSFD ID, slug or URL                     |
| `401`  | API key is missing or invalid                                 |
| `404`  | The movie, creator or user doesn't exist, or unknown endpoint |
| `502`  | ČSFD is unreachable or answered with an error                 |
| `503`  | ČSFD declined the request                                     |
| `500`  | Unexpected error                                              |

**Docker Hub:** [bartholomej/node-csfd-api](https://hub.docker.com/r/bartholomej/node-csfd-api)

## 🌟 Real-World Usage

This library powers several production applications:

### Browser Extensions

- **[Netflix ČSFD Extension](https://chrome.google.com/webstore/detail/netflix-csfd/eomgekccbddnlpmehgdjmlphndjgnlni)** - Shows ČSFD ratings on Netflix ([source](https://github.com/bartholomej/netflix-csfd-ext))
- **[Dafilms Extension](https://chrome.google.com/webstore/detail/dafilms/hgcgneddmgflnbmhkjnefiobjgobbmdm)** - ČSFD integration for Dafilms ([source](https://github.com/bartholomej/dafilms-ext))
- **[Kviff.tv Extension](https://chrome.google.com/webstore/detail/kvifftv-%20-csfd/ihpngekoejodiligajlppbeedofhnmfm)** - ČSFD ratings for Kviff.tv ([source](https://github.com/bartholomej/kviff-ext))

### Web Applications

- **[bartweb.cz](https://bartweb.cz)** - Personal website using Firebase Functions for "Last Seen" movie tracking

### Mobile Applications

- **[KinoKlub](https://play.google.com/store/apps/details?id=com.aquasoup)** - React Native app for AeroFilms cinema chain (Android & iOS)

## 🔮 Roadmap

### Completed Features ✅

- **Movies & TV Series**
  - Basic info (title, year, rating, poster, duration)
  - Detailed metadata (genres, origins, VOD platforms)
  - Cast & crew (directors, actors, writers, composers, producers, etc.)
  - Related content (similar movies, trivia)
  - Alternative titles, premieres, tags
- **Search**
  - Movies, TV series, Creators and users
- **Creators**
  - Biography and filmography
- **User Data**
  - Ratings with pagination and filtering
  - Reviews with pagination and filtering

### Planned Features 🚧

- [x] Search: Creator search functionality
- [ ] Movie: reviews from movie detail page
- [ ] Movie: Original soundtracks (OST) information
- [ ] Server: Caching layer for improved performance
- [ ] Server: Rate limiting helpers

## 🛠️ Development

Want to run the project locally, start the REST or MCP server from source, or run the tests? Everything is in [CONTRIBUTING.md](CONTRIBUTING.md).

## 🤝 Contributing

Contributions are welcome! Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

Found a bug or have an idea? [Open an issue](https://github.com/bartholomej/node-csfd-api/issues/new/choose).

## ⭐️ Support

If you find this project useful and you are brave enough consider [making a donation](https://github.com/sponsors/bartholomej) for some 🍺 or 🍵 ;)

- Giving it a ⭐️ on [GitHub](https://github.com/bartholomej/node-csfd-api)
- Sharing it with others who might benefit
- [Sponsoring the project](https://github.com/sponsors/bartholomej) to support ongoing development

Your support helps maintain and improve this library! 🙏

## 🔒 Privacy & Security

**This library does not collect, store, or transmit any user data.**

All requests are made directly from your application to ČSFD.cz. No intermediary servers are involved, and no data is logged or stored by this library.

I physically can't. I have nowhere to store it. I don't even have a server database to store it. So even if Justin Bieber asked nicely to see your data, I wouldn't have anything to show him.

### Important Notes

- This is a **scraping library** - use it responsibly and respect ❤️ ČSFD's terms of service
- Implement appropriate rate limiting in production
- Consider caching responses to minimize server load
- Be aware of CORS restrictions when using in browsers

## 📝 License

MIT © 2020 - 2026 [Lukas Bartak](http://bartweb.cz)

See [LICENSE](LICENSE) for full details.

---

<div align="center">

**Built with ❤️ by [Lukas Bartak](https://bartweb.cz)**

Powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺

[⭐ Star on GitHub](https://github.com/bartholomej/node-csfd-api) • [📦 NPM Package](https://www.npmjs.com/node-csfd-api) • [🐳 Docker Hub](https://hub.docker.com/r/bartholomej/node-csfd-api)

</div>
