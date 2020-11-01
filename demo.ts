import { Csfd } from './src';

const csfd = new Csfd();

// Exclude seasons and episodes
csfd
  .userRatings('912-bart', {
    excludes: ['epizoda', 'TV pořad', 'série']
  })
  .then((ratings) => ratings.map((x) => console.log(x)));

// Only TV series
// csfd
//   .userRatings('912-bart', { includesOnly: ['TV seriál'] })
// .then((ratings) => ratings.map((x) => console.log(x.type)));
