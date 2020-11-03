# CSFD API

> Tiny NPM library for scraping CSFD `[work in progress]`
>
> - Browser + Node.js (SSR)
> - TypeScript

## Install

via yarn

```bash
yarn add node-csfd-api
```

via npm

```bash
npm install node-csfd-api
```

## Usage

### User Ratings

Get all of [my ratings](https://www.csfd.cz/uzivatel/912-bart/hodnoceni/)

```javascript
import { Csfd } from 'node-csfd-api';

const csfd = new Csfd();

csfd.userRatings('912-bart').then((ratings) => console.log(ratings));
```

#### Results

```javascript
[
  {
    title: 'David Attenborough: Život na naší planetě',
    year: 2020,
    type: 'film',
    rating: 5,
    url: 'https://www.csfd.cz/film/812944-david-attenborough-zivot-na-nasi-planete/',
    date: '01.11.2020',
    overallRating: 1
  },
  {
    title: 'Coronation',
    year: 2020,
    type: 'film',
    rating: 4,
    url: 'https://www.csfd.cz/film/912552-coronation/',
    date: '28.10.2020',
    overallRating: 1
  }
];
```

### More

Work in progress...

## Development

### Developing and debugging library

```bash
yarn start
```

### Run demo locally

You can find and modify it in `./demo.ts` file

```bash
yarn demo
```

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

Copyright &copy; 2020 [Lukas Bartak](http://bartweb.cz)

Proudly powered by nature 🗻, wind 💨, tea 🍵 and beer 🍺 ;)

All contents are licensed under the [MIT license].

[mit license]: LICENSE
