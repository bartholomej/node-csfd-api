// import { writeFile } from 'fs';
import { csfd } from './src';

// Parse movie
csfd.cinema(1).then((cinema) => console.log(cinema));
// csfd.movie(10135).then((movie) => console.log(movie));

// csfd.search('matrix').then((search) => console.log(search));

// Parse creator
// csfd.creator(2120).then((creator) => console.log(creator));

/**
 * USER RATINGS
 */

// Save all pages in json file
// const userId = 912;

// csfd
//   .userRatings(userId, {
//     excludes: ['epizoda', 'pořad', 'série'],
//     allPages: false,
//     allPagesDelay: 2000
//   })
//   .then((ratings) => {
//     console.log('Saved in file:', `./${userId}.json`);
//     writeFile(`${userId}.json`, JSON.stringify(ratings), (err) => {
//       if (err) return console.log(err);
//     });
//   });

// Only TV series
// csfd
//   .userRatings('912-bart', { includesOnly: ['seriál'] })
//   .then((ratings) => console.log(ratings));
