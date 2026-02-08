import * as v from 'valibot';
import { CSFDColorRatingSchema, CSFDFilmTypesSchema, CSFDStarsSchema } from './user-ratings.schema';

export const CSFDUserReviewsSchema = v.object({
  id: v.number(),
  title: v.string(),
  year: v.number(),
  url: v.string(),
  type: CSFDFilmTypesSchema,
  colorRating: CSFDColorRatingSchema,
  userRating: CSFDStarsSchema,
  userDate: v.string(),
  text: v.string(),
  poster: v.nullable(v.string())
});
