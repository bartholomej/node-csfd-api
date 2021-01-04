import { csfd } from './src';

// Parse movie
// csfd.movie(535121).then((movie) => console.log(movie));

// Exclude seasons and episodes
csfd
  .userRatings('1331', {
    excludes: ['epizoda', 'TV pořad', 'série'],
    allPages: false
  })
  .then((ratings) => ratings.map((x) => console.log(x)));

// // Only TV series
// csfd
//   .userRatings('912-bart', { includesOnly: ['TV seriál'] })
//   .then((ratings) => ratings.map((x) => console.log(x.type)));
