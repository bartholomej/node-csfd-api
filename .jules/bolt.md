## 2024-05-18 - Remove noise from loops
**Learning:** `console.log` statements inside loops are slow I/O blocking operations that heavily impact performance especially for scraper services with high iterations over multiple pages.
**Action:** Always clean up console.log statements when they are in iteration paths.

## 2024-05-18 - Optimize membership checks
**Learning:** `Array.prototype.some` lookup is $O(M)$ inside loops, which causes $O(N \cdot M)$ complexity.
**Action:** When filtering array items in a loop using an external constraints array, pre-calculate `Set` objects to reduce membership checks to $O(1)$.
