[![npm version](https://badge.fury.io/js/node-csfd-api.svg)](https://badge.fury.io/js/node-csfd-api)
[![Package License](https://img.shields.io/npm/l/node-csfd-api.svg)](https://www.npmjs.com/node-csfd-api)
[![Build & Publish](https://github.com/bartholomej/node-csfd-api/workflows/Publish/badge.svg)](https://github.com/bartholomej/node-csfd-api/actions)
[![codecov](https://codecov.io/gh/bartholomej/node-csfd-api/branch/master/graph/badge.svg?token=YQH9UoVrGP)](https://codecov.io/gh/bartholomej/node-csfd-api)

# CSFD API 2021

> Tiny NPM library for scraping csfd.cz
>
> - Browser + Node.js (SSR)
> - TypeScript 100%
> - ✅ Ready for CSFD 2021!

Scraper:

> - [Movies and TV Series](#Movie)
> - [User Ratings](#User-Ratings)
> - [Search](#Search)

## Install

via yarn

```bash
yarn add node-csfd-api
```

via npm

```bash
npm install node-csfd-api
```

## Movie

Get info about [this movie](https://www.csfd.cz/film/535121-na-spatne-strane/komentare/)

```javascript
import { csfd } from 'node-csfd-api';

csfd.movie(535121).then((movie) => console.log(movie));
```

### Results

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
  titlesOther: [
    { country: 'USA', title: 'Dragged Across Concrete' },
    { country: 'Kanada', title: 'Dragged Across Concrete' },
    { country: 'Slovensko', title: 'Na zlej strane' },
    { country: 'Austrálie', title: 'Dragged Across Concrete' },
    { country: 'Velká Británie', title: 'Dragged Across Concrete' }
  ],
  poster: '//img.csfd.cz/files/images/film/posters/163/579/163579352_bf8737.jpg?h180',
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

## Search

> Search movies and users

```javascript
import { csfd } from 'node-csfd-api';

csfd.search('bart').then((search) => console.log(search));
```

### Results

```javascript
movies: [
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
users: [
  {
    id: 912,
    user: 'BART!',
    userRealName: 'Lukáš Barták',
    avatar: '//image.pmgstatic.com/cache/resized/w45h60/files/images/user/avatars/000/281/281554_1c0fef.jpg',
    url: 'https://www.csfd.cz/uzivatel/912-bart/'
  }
]
```

## User Ratings

### Last ratings (last page)

Get [my last 50 ratings](https://www.csfd.cz/uzivatel/912-bart/hodnoceni/)

```javascript
import { csfd } from 'node-csfd-api';

csfd.userRatings('912-bart').then((ratings) => console.log(ratings));
```

### All ratings (all pages)

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

### Results

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

### Options

| Option            | Type                                                                                                                                       | Default | Description                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------- |
| **includesOnly**  | [CSFDFilmTypes[]](https://github.com/bartholomej/node-csfd-api/blob/8fa5f9cbc7e7f2b62b0bd2c2b5a24c9a63444f6a/src/interfaces/global.ts#L25) | null    | Including only film types. eg. `['TV Seriál', 'koncert']` |
| **exclude**       | [CSFDFilmTypes[]](https://github.com/bartholomej/node-csfd-api/blob/8fa5f9cbc7e7f2b62b0bd2c2b5a24c9a63444f6a/src/interfaces/global.ts#L25) | null    | Excluding film types eg. `['epizoda', 'série']`           |
| **allPages**      | boolean                                                                                                                                    | false   | Get all pages                                             |
| **allPagesDelay** | number                                                                                                                                     | 0       | Delay on each page request. In milliseconds               |

_Note: You can not use both parameters 'includesOnly' and 'excludes'. Parameter 'includesOnly' has a priority._

## Used by

- [Dafilms web extension](https://chrome.google.com/webstore/detail/dafilms/hgcgneddmgflnbmhkjnefiobjgobbmdm?hl=en) ([code](https://github.com/bartholomej/dafilms-ext)) – Parser for film ratings (web extension)
- [bartweb.cz](https://bartweb.cz) – **Last seen** section (Firebase function)
- KinoKlub – Mobile application for Aerofilms (native Adnroid + iOS application)

## Roadmap

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
  - [ ] All images
  - [ ] Reviews
  - [ ] Related movies
  - [ ] Connected movies
  - [ ] OST
- [ ] Search
  - [x] Movies
  - [x] Users
  - [ ] Creators
  - [ ] TV Series
- [ ] Creators
  - [ ] Bio
  - [ ] Movies
- [x] User Ratings
  - [x] Last ratings
  - [x] All pages

## Development

### Developing and debugging library

```bash
yarn start
```

### Run demo locally

You can find and modify it in [`./demo.ts`](https://raw.githubusercontent.com/bartholomej/node-csfd-api/search/demo.ts) file

```bash
yarn demo
```

## Development (notes for me)

### Publish Stable

```shell
yarn release:patch
# yarn release:minor
# yarn release:major
```

### Publish next channel

1. Bump version `-beta.0` in `package.json`
2. `yarn release:beta`

## Contribution

I welcome you to customize this according to your needs ;)

Pull requests for any improvements would be great!

## Donation

If this project have helped you save time please consider [making a donation](https://github.com/sponsors/bartholomej) for some 🍺 or 🍵 ;)

## Privacy Policy

I DO NOT STORE ANY DATA. PERIOD.

I physically can't. I have nowhere to store it. I don't even have a server database to store it. So even if Justin Bieber asked nicely to see your data, I wouldn't have anything to show him.

That's why, with CSFD Api, what happens on your device stays on your device till disappear.

## License

Copyright &copy; 2021 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
