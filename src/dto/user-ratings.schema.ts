import * as v from 'valibot';

export const CSFDColorRatingSchema = v.union([
  v.literal('bad'),
  v.literal('average'),
  v.literal('good'),
  v.literal('unknown')
]);

export const CSFDStarsSchema = v.union([
  v.literal(0),
  v.literal(1),
  v.literal(2),
  v.literal(3),
  v.literal(4),
  v.literal(5)
]);

export const CSFDFilmTypesSchema = v.union([
  v.literal('film'),
  v.literal('TV film'),
  v.literal('pořad'),
  v.literal('seriál'),
  v.literal('divadelní záznam'),
  v.literal('koncert'),
  v.literal('série'),
  v.literal('studentský film'),
  v.literal('amatérský film'),
  v.literal('hudební videoklip'),
  v.literal('epizoda')
]);

export const CSFDUserRatingsSchema = v.object({
  id: v.number(),
  title: v.string(),
  year: v.number(),
  url: v.string(),
  type: CSFDFilmTypesSchema,
  colorRating: CSFDColorRatingSchema,
  userRating: CSFDStarsSchema,
  userDate: v.string()
});
