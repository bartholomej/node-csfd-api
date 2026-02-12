## 2025-02-12 - JSON-LD Parsing Optimization
**Learning:** The scraper was parsing the same JSON-LD string multiple times in different helper functions (`getMovieYear`, `getMovieDuration`).
**Action:** Parse JSON-LD once in the service layer and pass the object to helpers. This reduces CPU overhead and avoids redundant parsing.
