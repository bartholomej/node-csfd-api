## 2025-02-23 - Helper Function Object Allocation
**Learning:** Helper functions that return static data (like localization maps) should define the data outside the function scope. `getLocalizedCreatorLabel` was re-creating a large object on every call (10x per movie), causing unnecessary GC pressure.
**Action:** Always check if constant data structures inside loop-heavy helpers can be hoisted to module scope.
