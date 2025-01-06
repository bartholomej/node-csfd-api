[![npm version](https://badge.fury.io/js/node-csfd-api.svg)](https://badge.fury.io/js/node-csfd-api)
[![Package License](https://img.shields.io/npm/l/node-csfd-api.svg)](https://www.npmjs.com/node-csfd-api)
[![Build & Publish](https://github.com/bartholomej/node-csfd-api/workflows/Publish/badge.svg)](https://github.com/bartholomej/node-csfd-api/actions)
[![codecov](https://codecov.io/gh/bartholomej/node-csfd-api/branch/master/graph/badge.svg?token=YQH9UoVrGP)](https://codecov.io/gh/bartholomej/node-csfd-api)

# CSFD API 🎥 2025

> JavaScript NPM library for scraping **Czech Movie Database (csfd.cz)**
>
> - JavaScript / TypeScript
> - Browser + Node.js (SSR)
> - Tested (~100% Code coverage)
> - ✅ Ready for new ČSFD 2025!
> - You can use in:
>   - Docker – [_How to do it?_](#-docker)
>   - Firebase function
>   - AWS λ (lambda function)
>   - CloudFlare Worker
>   - Chrome extension
>   - React native app
>   - Browsers (Pay attention to CORS)

## 🗜️ Install

```bash
npm install node-csfd-api
# yarn add node-csfd-api
```

## 🛠️ Usage and examples

- [Movies and TV Series](#Movie)
- [User Ratings](#User-Ratings)
- [Search](#Search)
- [Creators](#Creators)

### Movie

> Get info about [this movie](https://www.csfd.cz/film/535121-na-spatne-strane/komentare/) _(id: 535121)_

```javascript
import { csfd } from 'node-csfd-api';

csfd.movie(535121).then((movie) => console.log(movie));
```

<details>
  <summary>Click here to see full result example</summary>
  
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

> Search movies, users and TV series

```javascript
import { csfd } from 'node-csfd-api';

csfd.search('bart').then((search) => console.log(search));
```

<details>
  <summary>Click here to see full result example</summary>
  
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

> Get creator info + filmography

```javascript
import { csfd } from 'node-csfd-api';

csfd.creator(2120).then((creator) => console.log(creator));
```

<details>
  <summary>Click here to see full result example</summary>

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

#### Last ratings (last page)

Get [my last 50 ratings](https://www.csfd.cz/uzivatel/912-bart/hodnoceni/)

```javascript
import { csfd } from 'node-csfd-api';

csfd.userRatings('912-bart').then((ratings) => console.log(ratings));
```

#### All ratings (all pages)

> Warning: Use it wisely. Can be detected and banned. Consider using it together with `allPagesDelay` attribute.

Get [all of my ratings](https://www.csfd.cz/uzivatel/912-bart/hodnoceni/)

```javascript
import { csfd } from 'node-csfd-api';

csfd
  .userRatings('912-bart', {
    allPages: true, // Download all pages (one by one)
    allPageDelay: 2000 // Make delay 2000ms on each page request
  })
  .then((ratings) => console.log(ratings));
```

<details>
  <summary>Click here to see full result example</summary>

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

#### Options for user ratings

| Option            | Type                                                                                                                                       | Default | Description                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------ |
| **includesOnly**  | [CSFDFilmTypes[]](https://github.com/bartholomej/node-csfd-api/blob/8fa5f9cbc7e7f2b62b0bd2c2b5a24c9a63444f6a/src/interfaces/global.ts#L25) | null    | Including only film types. eg. `['seriál', 'koncert']` |
| **exclude**       | [CSFDFilmTypes[]](https://github.com/bartholomej/node-csfd-api/blob/8fa5f9cbc7e7f2b62b0bd2c2b5a24c9a63444f6a/src/interfaces/global.ts#L25) | null    | Excluding film types eg. `['epizoda', 'série']`        |
| **allPages**      | boolean                                                                                                                                    | false   | Get all pages                                          |
| **allPagesDelay** | number                                                                                                                                     | 0       | Delay on each page request. In milliseconds            |

_Note: You can not use both parameters `includesOnly` and `excludes`. Parameter `includesOnly` has a priority._

## 📦 Docker

You can use this library in Docker.

We have [prepared a Docker image](https://hub.docker.com/r/bartholomej/node-csfd-api) for you.

### Prebuilt image

```bash
docker pull bartholomej/node-csfd-api
```

### Build & run your own image

> Build image

```bash
docker build -t node-csfd-api .
```

> Run image on port 3000

```bash
docker run -p 3000:3000 node-csfd-api
```

> Open http://localhost:3000

### API endpoints

> Some examples

- `/movie/535121`
- `/search/quentin+tarantino`
- `/creator/2120`
- `/user-ratings/912-bart`

## 🧑‍💻 Used by

### Web extensions

- [Netflix: chrome extension](https://chrome.google.com/webstore/detail/netflix-csfd/eomgekccbddnlpmehgdjmlphndjgnlni) ([code](https://github.com/bartholomej/netflix-csfd-ext))
- [Dafilms: chrome extension](https://chrome.google.com/webstore/detail/dafilms/hgcgneddmgflnbmhkjnefiobjgobbmdm) ([code](https://github.com/bartholomej/dafilms-ext))
- [Kviff.tv: chrome extension](https://chrome.google.com/webstore/detail/kvifftv-%20-csfd/ihpngekoejodiligajlppbeedofhnmfm) ([code](https://github.com/bartholomej/kviff-ext))

### Web applications

- [bartweb.cz](https://bartweb.cz) – **Last seen** section (**Firebase function**)

### Mobile applications

- [KinoKlub](https://play.google.com/store/apps/details?id=com.aquasoup) – Mobile application for AeroFilms (React Native: Android + iOS application)

## 🔮 Roadmap

### Scraping more pages

- [ ] Movies
  - [x] Titles
  - [x] Years
  - [x] Type
  - [x] User rating
  - [x] Color rating
  - [x] Poster
  - [x] Duration
  - [x] Origins
  - [x] Descriptions
  - [x] Genres
  - [x] VOD
  - [x] Tags
  - [x] Premieres
  - [x] Creators
    - [x] Directors
    - [x] Writers
    - [x] Cinematography
    - [x] Music
    - [x] Actors
    - [x] BasedOn
    - [x] Producers
    - [x] Film editors
    - [x] Costume designers
    - [x] Production designers
  - [x] Premieres
  - [x] Related movies
  - [x] Similar movies
  - [x] Trivia
  - [x] Photo from movie (random)
  - [ ] Reviews
  - [ ] OST
- [ ] Search
  - [x] Movies
  - [x] Users
  - [x] TV Series
  - [ ] Creators
- [x] Creators
  - [x] Bio
  - [x] Movies (TODO categories)
- [x] User Ratings
  - [x] Last ratings
  - [x] All pages

## 🛠️ Development

### Developing and debugging library

```bash
yarn start
```

### Run demo locally

You can find and modify it in [`./demo.ts`](https://github.com/bartholomej/node-csfd-api/blob/master/demo.ts) file

```bash
yarn demo
```

## 🤝 Contribution

I welcome you to customize this according to your needs ;)

Pull requests for any improvements would be great!

## ⭐️ Show your support

Give a ⭐️ if this project helped you!

Or if you are brave enough consider [making a donation](https://github.com/sponsors/bartholomej) for some 🍺 or 🍵 ;)

## 🕵️‍♀️ Privacy Policy

I DO NOT STORE ANY DATA. PERIOD.

I physically can't. I have nowhere to store it. I don't even have a server database to store it. So even if Justin Bieber asked nicely to see your data, I wouldn't have anything to show him.

That's why, with node-csfd-api, what happens on your device stays on your device till disappear.

## 📝 License

Copyright &copy; 2020 – 2025 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
