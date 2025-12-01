import { parse } from 'node-html-parser';
import {
  getUserReviewColorRating,
  getUserReviewDate,
  getUserReviewId,
  getUserReviewRating,
  getUserReviewText,
  getUserReviewTitle,
  getUserReviewType,
  getUserReviewUrl,
  getUserReviewYear
} from './src/helpers/user-reviews.helper.js';
import { userReviwsMock } from './tests/mocks/userReviews.html';

const run = async () => {
  const items = parse(userReviwsMock);
  const reviews = items.querySelectorAll('.box-user-reviews .article');

  console.log(`Found ${reviews.length} reviews`);

  for (const el of reviews) {
    const review = {
      id: getUserReviewId(el),
      title: getUserReviewTitle(el),
      year: getUserReviewYear(el),
      type: getUserReviewType(el),
      url: getUserReviewUrl(el),
      colorRating: getUserReviewColorRating(el),
      userDate: getUserReviewDate(el),
      userRating: getUserReviewRating(el),
      text: getUserReviewText(el)
    };
    console.log(review);
  }
};

run();
