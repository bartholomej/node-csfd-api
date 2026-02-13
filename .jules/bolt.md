## 2026-02-13 - JSON-LD Parsing Overhead
**Learning:** `JSON.parse` is synchronous and can be expensive when called repeatedly for the same large JSON string (like JSON-LD on movie pages). The codebase was parsing the same JSON-LD string in multiple helper functions (`getMovieYear`, `getMovieDuration`).
**Action:** Parse JSON-LD once in the service layer and pass the object to helpers. This pattern should be applied to any other structured data extraction.
