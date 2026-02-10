---
name: Implement Scraper Feature
description: A complete guide to adding a new data field to the CSFD scraper (e.g., extracting "budget" or "studio" from a movie page).
---

# Implement Scraper Feature

This skill guides you through the process of extracting a new piece of data from CSFD.cz.

## 1. Analyze the DOM

First, you need to find where the data is located in the HTML.

- **Action**: Use `curl` or open the page in a browser to inspect the element.
- **Goal**: Identify a unique CSS selector (class, ID, or structure).

## 2. Update the DTO (Data Transfer Object)

Define the shape of the new data.

- **File**: `src/dto/[entity].ts` (e.g., `src/dto/movie.ts`)
- **Action**: Add the new field to the interface.
  ```typescript
  export interface CSFDMovie {
    // ... existing fields
    newField: string | null;
  }
  ```

## 3. Create a Helper Function

**CRITICAL**: Never write parsing logic inside the Service. Always use a helper.

- **File**: `src/helpers/[entity].helper.ts`
- **Action**: Create a pure function exported from the helper file.

  ```typescript
  import { HTMLElement } from 'node-html-parser';

  export const getNewField = (el: HTMLElement): string | null => {
    const node = el.querySelector('.some-class');
    return node ? node.innerText.trim() : null;
  };
  ```

## 4. Integrate into Service

- **File**: `src/services/[entity].service.ts`
- **Action**: Call the helper function inside the `build[Entity]` method.
  ```typescript
  // inside buildMovie method
  return {
    // ...
    newField: getNewField(el)
  };
  ```

## 5. Verification

- **Action**: Run the demo script to see if the data appears.
- **Command**: `npm run demo` (you might need to modify `demo.ts` to log the new field).
