import { writeFile } from 'fs';
import { csfd } from './src';

// Parse movie
// csfd.movie(535121).then((movie) => console.log(movie));

// Save data in file
const userId = 912;

csfd
  .userRatings(userId, {
    excludes: ['epizoda', 'TV pořad', 'série'],
    allPages: true,
    allPagesDelay: 2000
  })
  .then((ratings) => {
    console.log('Saved in file:', `./${userId}.json`);
    writeFile(`${userId}.json`, JSON.stringify(ratings), (err) => {
      if (err) return console.log(err);
    });
  });

// // Only TV series
// csfd
//   .userRatings('912-bart', { includesOnly: ['TV seriál'] })
//   .then((ratings) => ratings.map((x) => console.log(x.type)));
