## 2025-02-18 - Optimized Movie Creators Parsing
**Learning:** `node-html-parser`'s `querySelectorAll` performs a full subtree traversal. Calling it repeatedly (10+ times) on the same element to find different child groups is O(N*M). Querying once and filtering in memory reduces it to O(N).
**Action:** When extracting multiple groups from the same container, query the container's children once and map them to the target fields.
