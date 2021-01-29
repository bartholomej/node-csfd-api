// import { writeFile } from 'fs';
import { csfd } from './src';

// Parse movie
csfd.movie(10135).then((movie) => console.log(movie));

// csfd.search('matrix').then((search) => console.log(search));

/**
 * USER RATINGS
 */

// Save all pages in json file
// const userId = 912;

// csfd
//   .userRatings(userId, {
//     excludes: ['epizoda', 'TV pořad', 'série'],
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
//   .userRatings('912-bart', { includesOnly: ['TV seriál'] })
//   .then((ratings) => console.log(ratings));
