/*
 * Export reviews in various formats (CSV by default, JSON supported)
 */

import { writeFile } from 'node:fs/promises';
import { csfd } from '..';
import { CSFDUserReviewsConfig } from '../dto/user-reviews';
import { escapeCsvField, renderProgress } from './utils';

export interface ExportReviewsOptions {
  format: 'json' | 'csv';
  userReviewsOptions: CSFDUserReviewsConfig;
}

export async function runReviewsExport(userId: number, options: ExportReviewsOptions) {
  try {
    console.log(`Fetching reviews for user ${userId} (${options.format.toUpperCase()})...`);

    const reviews = await csfd.userReviews(userId, {
      ...options.userReviewsOptions,
      onProgress: renderProgress
    });

    console.log(`Fetched ${reviews.length} reviews.`);

    let content = '';
    let fileName = '';

    if (options.format === 'json') {
      content = JSON.stringify(reviews, null, 2);
      fileName = `${userId}-reviews.json`;
    } else {
      const headers = ['id', 'title', 'year', 'type', 'colorRating', 'userRating', 'date', 'url', 'text'];
      content = [
        headers.join(','),
        ...reviews.map((r) =>
          [
            r.id,
            escapeCsvField(r.title ?? ''),
            r.year ?? '',
            escapeCsvField(r.type ?? ''),
            escapeCsvField(r.colorRating ?? ''),
            r.userRating ?? '',
            escapeCsvField(r.userDate ?? ''),
            escapeCsvField(r.url ?? ''),
            escapeCsvField(r.text ?? '')
          ].join(',')
        )
      ].join('\n');
      fileName = `${userId}-reviews.csv`;
    }

    await writeFile(fileName, content);
    console.log('Saved in file:', `./${fileName}`);
  } catch (error) {
    console.error('Error exporting reviews:', error);
    throw error;
  }
}
