# Scraping & Parsing Strategy

This document defines how to safely scrape data from CSFD.cz using `node-html-parser`.

## 🧱 The Pattern: Fetch -> Parse -> Helper

### 1. The Service Layer (`src/services/*.ts`)

The service should **only** coordinate fetching and delegating parsing.

```typescript
// BAD
const title = root.querySelector('h1').innerText; // Logic in service

// GOOD
const title = getMovieTitle(root); // Logic in helper
```

### 2. The Helper Layer (`src/helpers/*.ts`)

Helpers are pure functions. They receive a `HTMLElement` (from `node-html-parser`) and return data.

**Key Guidelines:**

- **Trim Everything:** CSFD data often contains newlines and tabs. Always use `.trim()`.
- **Handle Missing Elements:** `querySelector` returns `null` if not found.
- **Type Safety:** Return explicit types or `primitive | null`.

**Template for a Helper:**

```typescript
import { HTMLElement } from 'node-html-parser';

export const getSomeData = (el: HTMLElement): string | null => {
  const node = el.querySelector('.some-class .sub-class');
  if (!node) {
    return null; // Or generic default based on context
  }
  return node.innerText.trim();
};
```

## ⚠️ Common Pitfalls handling `node-html-parser`

- It is **not** a full browser DOM. Methods like `innerText` work, but some advanced traversals might differ.
- `classNames` returns a string, not a DOMTokenList.
- Be careful with `childNodes` vs `children`.

## 🔍 Selector Strategy

CSFD uses slightly obfuscated or generic classes sometimes.

- Prefer specific ID selectors if available.
- Use attribute selectors if classes are messy: `querySelector('div[data-truncate="60"]')`.
- If a localized label is needed (e.g., extracting "Režie" vs "Director"), use helper functions to detect the label safely.
