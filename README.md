[![npm version](https://badge.fury.io/js/node-csfd-api.svg)](https://badge.fury.io/js/node-csfd-api)
[![License](https://img.shields.io/npm/l/node-csfd-api.svg)](https://www.npmjs.com/node-csfd-api)
[![Build & Publish](https://github.com/bartholomej/node-csfd-api/workflows/Publish/badge.svg)](https://github.com/bartholomej/node-csfd-api/actions)
[![Coverage](https://codecov.io/gh/bartholomej/node-csfd-api/branch/master/graph/badge.svg?token=YQH9UoVrGP)](https://codecov.io/gh/bartholomej/node-csfd-api)
[![npm downloads](https://img.shields.io/npm/dm/node-csfd-api.svg)](https://www.npmjs.com/node-csfd-api)

<div align="center">

# CSFD API 🎬 + MCP Server 🤖

#### Modern TypeScript NPM library for scraping **CSFD.CZ**. Scraper, API, and MCP Server in one package. _(unofficial)_

[Features](#-features) • [Installation](#-installation) • [Quick Start](#-quick-start) • [API Reference](#-api-reference) • [Examples](#-usage-examples) • [MCP Server](#-mcp-server-model-context-protocol) • [Docker](#-docker-support)

</div>

---

## ✨ Features

- 🎯 **Type-safe** - Full TypeScript support with type definitions
- 🧪 **Well-tested** - ~100% code coverage
- 🚀 **Universal** - Works in Node.js, browsers, and serverless environments
- 🐳 **Docker ready** - Pre-built Docker images available
- 🤖 **MCP Server** - Use CSFD data directly within LLMs like Claude Desktop
- 🔄 **Modern API** - Promise-based with async/await support
- 📦 **Few dependencies** - Lightweight and efficient

### Supported Platforms

- Node.js (ESM & CommonJS)
- Browsers (with CORS considerations)
- Docker containers
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
- [MCP Server](#-mcp-server-model-context-protocol)
- [Docker Support](#-docker-support)
- [Development](#-development)

## 📚 API Reference

### Movie

> Retrieve comprehensive information about a movie or TV series by its ČSFD ID.

**Method:** `csfd.movie(id: number): Promise<Movie>`

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
  tags: ['policie', 'zbraně', 'zloděj', 'město', 'sledování'],
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

> Search for movies, TV series, and users across the ČSFD database.

**Method:** `csfd.search(query: string): Promise<SearchResults>`

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
    type: 'TV film',
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
    type: 'seriál',
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

**Method:** `csfd.creator(id: number): Promise<Creator>`

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

**Method:** `csfd.userRatings(username: string, options?: UserRatingsOptions): Promise<Rating[]>`

#### Basic Usage

```typescript
import { csfd } from 'node-csfd-api';

// Get last page of ratings (~50 items)
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
  exclude: ['epizoda', 'série']
});
```

> ⚠️ **Rate Limiting Warning**: When fetching all pages, use appropriate delays to avoid detection. Consider implementing exponential backoff for large datasets.

<details>
  <summary>🔎 Click here to see full result example</summary>

```javascript
[
  {
    title: 'David Attenborough: Život na naší planetě',
    year: 2020,
    type: 'film',
    url: 'https://www.csfd.cz/film/812944-david-attenborough-zivot-na-nasi-planete/',
    colorRating: 'good',
    userDate: '01.11.2020',
    userRating: 5
  },
  {
    title: 'Coronation',
    year: 2020,
    type: 'film',
    url: 'https://www.csfd.cz/film/912552-coronation/',
    colorRating: 'good',
    userDate: '28.10.2020',
    userRating: 4
  }
];
```

</details>

#### UserRatingsOptions

| Option          | Type              | Default | Description                                                      |
| --------------- | ----------------- | ------- | ---------------------------------------------------------------- |
| `includesOnly`  | `CSFDFilmTypes[]` | `null`  | Include only specific content types (e.g., `['film', 'seriál']`) |
| `exclude`       | `CSFDFilmTypes[]` | `null`  | Exclude specific content types (e.g., `['epizoda']`)             |
| `allPages`      | `boolean`         | `false` | Fetch all pages of ratings                                       |
| `allPagesDelay` | `number`          | `0`     | Delay between page requests in milliseconds                      |
| `page`          | `number`          | `1`     | Fetch specific page number                                       |

> 📝 **Note**: `includesOnly` and `exclude` are mutually exclusive. If both are provided, `includesOnly` takes precedence.
>
> 🔗 See [CSFDFilmTypes definition](https://github.com/bartholomej/node-csfd-api/blob/master/src/dto/global.ts)

### User Reviews

> Retrieve detailed user reviews from their ČSFD profile.

**Method:** `csfd.userReviews(userId: number | string, options?: UserReviewsOptions): Promise<Review[]>`

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
  includesOnly: ['film'],
  exclude: ['epizoda']
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
    userDate: '27.11.2025',
    userRating: 4,
    text: 'Co s Péťou? Inu, co by? Každý normální Sparťan by to okamžitě mrdnul z útesu...',
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
    userDate: '26.11.2025',
    userRating: 1,
    text: 'Typické kolečkoidní sebevykradačské pásmo klišovitých...',
    poster:
      'https://image.pmgstatic.com/cache/resized/w240h339/files/images/film/posters/170/230/170230377_cimu90.jpg'
  }
];
```

</details>

#### UserReviewsOptions

Same options as [UserRatingsOptions](#userrationsoptions).

## 💻 CLI Tools

This library comes with a powerful CLI that exposes several tools.

### 1. Export Ratings (JSON & Letterboxd)

> Backup your personal user ratings to JSON or CSV format (compatible with Letterboxd). Use this tool just to keep a local copy of your data.

```bash
# Export to JSON (default) -> saves as <userId>-ratings.json
npx node-csfd-api export ratings 912

# Export to Letterboxd CSV -> saves as <userId>-for-letterboxd.csv
npx node-csfd-api export ratings 912 --letterboxd
```

### 2. REST API Server

Run a standalone REST API server.

```bash
npx node-csfd-api server
# Server listening on port 3000
```

### 3. MCP Server

Run the Model Context Protocol server for AI agents.

```bash
npx node-csfd-api mcp
```

## 🤖 MCP Server (Model Context Protocol)

This library includes a built-in [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server. This allows you to use ČSFD data directly within LLMs like **Claude Desktop**.

### Features

- **Search**: Search for movies, TV series, and users.
- **Details**: Get comprehensive details about movies, creators, and users.
- **Reviews**: Read user reviews and ratings.

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

### Supported Tools

- `search`: Search query (returns movies, series, users)
- `movie_details`: Get movie details by ID
- `creator_details`: Get creator details by ID
- `user_ratings`: Get user ratings
- `user_reviews`: Get user reviews

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

### REST API Endpoints

Once running, access the API at `http://localhost:3000`:

| Endpoint                  | Description       | Example                  |
| ------------------------- | ----------------- | ------------------------ |
| `/movie/:id`              | Get movie details | `/movie/535121`          |
| `/search/:query`          | Search content    | `/search/tarantino`      |
| `/creator/:id`            | Get creator info  | `/creator/2120`          |
| `/user-ratings/:username` | Get user ratings  | `/user-ratings/912-bart` |
| `/user-reviews/:userId`   | Get user reviews  | `/user-reviews/195357`   |

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
  - Movies, TV series, and users
- **Creators**
  - Biography and filmography
- **User Data**
  - Ratings with pagination and filtering
  - Reviews with pagination and filtering

### Planned Features 🚧

- [ ] Movie: reviews from movie detail page
- [ ] Movie: Original soundtracks (OST) information
- [ ] Search: Creator search functionality
- [ ] Server: Caching layer for improved performance
- [ ] Server: Rate limiting helpers

## 🛠️ Development

### Prerequisites

- Node.js 18+
- yarn/npm/pnpm/...

### Setup

```bash
# Clone the repository
git clone https://github.com/bartholomej/node-csfd-api.git
cd node-csfd-api

# Install dependencies
yarn install

# Run tests
yarn test

# Run tests with coverage
yarn test:coverage

# Start development mode
yarn start

# Run the demo
yarn demo
```

### Project Structure

```text
src/
├── dto/              # Data transfer objects & types
├── fetchers/         # HTTP request handlers
├── helpers/          # Parsing & data transformation
├── services/         # Main API service classes
└── index.ts          # Public API exports
```

### Testing

The project maintains ~100% code coverage. Tests are located in the `tests/` directory.

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Generate coverage report
yarn test:coverage
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Add tests** for new functionality
5. **Ensure tests pass** (`yarn test`)
6. **Commit your changes** (`git commit -m 'Add amazing feature'`)
7. **Push to the branch** (`git push origin feature/amazing-feature`)
8. **Open a Pull Request**

### Guidelines

- Write clear, concise commit messages
- Add tests for new features
- Update documentation as needed
- Follow the existing code style
- Ensure all tests pass before submitting PR

### Reporting Issues

Found a bug? Have a feature request? Please [open an issue](https://github.com/bartholomej/node-csfd-api/issues) with:

- Clear description of the problem
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Environment details (Node version, OS, etc.)

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
