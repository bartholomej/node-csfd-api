# Bolt's Journal

## 2024-05-22 - Initial Setup
**Learning:** Always check for the existence of the journal file before reading.
**Action:** Create the file if it doesn't exist.

## 2024-05-22 - Performance Opportunity
**Learning:** `getMovieCreators` helper function constructs an array of localized labels on every invocation, leading to unnecessary memory allocation and property access overhead.
**Action:** Memoize the localized labels array creation to be computed once per language, reducing overhead in the scraping loop.
