import { z } from 'zod';

// Lenient on purpose: the MCP SDK validates every result against these schemas,
// so a field ČSFD happens to leave empty must not turn a good answer into an error.
const nullish = <T extends z.ZodType>(schema: T) => schema.nullish();

const screening = {
  id: z.number(),
  title: nullish(z.string()),
  year: nullish(z.number()),
  url: nullish(z.string()),
  type: nullish(z.string()).describe('film, series, season, episode, tv-film, …'),
  colorRating: nullish(z.string()).describe(
    'Overall rating as a color: good, average, bad or unknown'
  )
};

const person = z.object({
  id: z.number(),
  name: nullish(z.string()),
  url: nullish(z.string())
});

const titleRef = z.object({
  id: z.number(),
  title: nullish(z.string()),
  url: nullish(z.string())
});

const userRating = nullish(z.number()).describe('Stars given by the user (0–5)');

export const searchOutput = {
  movies: z.array(z.object(screening)),
  tvSeries: z.array(z.object(screening)),
  creators: z.array(person),
  users: z.array(
    z.object({
      id: z.number(),
      user: nullish(z.string()).describe('Username'),
      userRealName: nullish(z.string()),
      url: nullish(z.string())
    })
  )
};

export const movieOutput = {
  ...screening,
  rating: nullish(z.number()).describe('Average rating in percent (0–100)'),
  ratingCount: nullish(z.number()),
  duration: nullish(z.union([z.number(), z.string()])).describe('Duration in minutes'),
  genres: nullish(z.array(z.string())),
  origins: nullish(z.array(z.string())).describe('Countries of origin'),
  descriptions: nullish(z.array(z.string())).describe('Plot descriptions'),
  creators: nullish(z.record(z.string(), nullish(z.array(person)))).describe(
    'People by role: directors, writers, actors, music, …'
  ),
  seasons: nullish(z.array(titleRef)),
  episodes: nullish(z.array(titleRef)),
  episodeCode: nullish(z.string()).describe('e.g. S01E08'),
  parent: nullish(
    z.object({
      season: nullish(z.object({ id: z.number(), title: nullish(z.string()) })),
      series: nullish(z.object({ id: z.number(), title: nullish(z.string()) }))
    })
  ).describe('Season and series an episode or season belongs to')
};

export const creatorOutput = {
  id: z.number(),
  name: nullish(z.string()),
  birthday: nullish(z.string()),
  birthplace: nullish(z.string()),
  age: nullish(z.union([z.number(), z.string()])),
  bio: nullish(z.string()),
  films: nullish(
    z.array(
      z.object({
        id: z.number(),
        title: nullish(z.string()),
        year: nullish(z.number()),
        colorRating: nullish(z.string())
      })
    )
  ).describe('Filmography')
};

export const userRatingsOutput = {
  results: z.array(
    z.object({
      ...screening,
      userRating,
      userDate: nullish(z.string()).describe('Date of the rating (YYYY-MM-DD)')
    })
  )
};

export const userReviewsOutput = {
  results: z.array(
    z.object({
      ...screening,
      userRating,
      userDate: nullish(z.string()).describe('Date of the review (YYYY-MM-DD)'),
      text: nullish(z.string()).describe('Review text')
    })
  )
};

export const cinemasOutput = {
  results: z.array(
    z.object({
      id: z.number(),
      name: nullish(z.string()),
      city: nullish(z.string()),
      url: nullish(z.string()),
      screenings: nullish(
        z.array(
          z.object({
            date: nullish(z.string()),
            films: nullish(
              z.array(
                z.object({
                  id: nullish(z.number()),
                  title: nullish(z.string()),
                  url: nullish(z.string())
                })
              )
            )
          })
        )
      )
    })
  )
};
