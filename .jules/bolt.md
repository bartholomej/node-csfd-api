## 2024-03-05 - Combine DOM queries for multiple attributes
**Learning:** Calling `querySelectorAll` multiple times on the same block of elements to extract different specific items (e.g. directors and actors from a list of paragraphs) leads to redundant, expensive DOM traversals.
**Action:** Traverse the elements once, classify and extract the necessary data for all required fields simultaneously. This reduced execution time by more than 50% in the search creators extraction benchmark.
