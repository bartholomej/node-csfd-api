/*
 * Export my ratings to CSV for Letterboxd
 *
 * 1. Get my ratings
 * 2. Convert to CSV
 * 3. Save to file
 * 4. Import to Letterboxd
 */

import { writeFile } from 'node:fs';
import { csfd } from '../src';

const userId = process.argv[2] ? Number(process.argv[2]) : null;

if (!userId) {
  console.error('Please provide a user ID as an argument.');
  console.log('Usage: npx -p node-csfd-api letterboxd-export <userId>');
  process.exit(1);
}

csfd.setOptions({ language: 'en' });

csfd
  .userRatings(userId, {
    includesOnly: ['film'],
    allPages: true,
    allPagesDelay: 1000
  })
  .then((ratings) => {
    const escapeCsvField = (value: string) => {
      const needsQuotes = /[",\n\r]/.test(value);
      const escaped = value.replaceAll('"', '""');
      return needsQuotes ? `"${escaped}"` : escaped;
    };

    const csv = [
      'Title,Year,Rating,WatchedDate',
      ...ratings.map((r) => {
        const title = escapeCsvField(r.title ?? '');
        const year = r.year ?? '';
        const rating = r.userRating ?? '';
        const watchedDate = escapeCsvField(r.userDate ?? '');
        return `${title},${year},${rating},${watchedDate}`;
      })
    ].join('\n');

    console.log('Saved in file:', `./${userId}.csv`);
    writeFile(`${userId}.csv`, csv, (err) => {
      if (err) return console.log(err);
    });
  });
