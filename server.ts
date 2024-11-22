import express from 'express';
import { csfd } from './src';
import { CSFDFilmTypes } from './src/interfaces/global';

const app = express();
const port = process.env.PORT || 3000;

app.get('/movie/:id', async (req, res) => {
  try {
    const movie = await csfd.movie(+req.params.id);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch movie data' });
  }
});

app.get('/creator/:id', async (req, res) => {
  try {
    const result = await csfd.creator(+req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch creator data: ' + error });
  }
});

app.get('/search/:query', async (req, res) => {
  try {
    const result = await csfd.search(req.params.query);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch search data: ' + error });
  }
});

app.get('/user-ratings/:id', async (req, res) => {
  const { allPages, allPagesDelay, excludes, includesOnly } = req.query;
  try {
    const result = await csfd.userRatings(req.params.id, {
      allPages: allPages === 'true',
      allPagesDelay: allPagesDelay ? +allPagesDelay : undefined,
      excludes: excludes ? (excludes as string).split(',') as CSFDFilmTypes[] : undefined,
      includesOnly: includesOnly ? (includesOnly as string).split(',') as CSFDFilmTypes[] : undefined
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user-ratings data: ' + error });
  }
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
