# JavaScript Logic Flow — Conditionals, Truthy/Falsy & Ternary Operations (Q45–60)

A hands-on coding suite marking Day 10 of the 100-day coding challenge. This repository focuses on foundational decision-making structures, branch evaluation using `if/else`, identifying truthy and falsy primitives and reference values, and writing concise inline conditionals using the ternary operator.

---

## 🚀 Key Learnings & Core Concepts

### 1. Conditional Branching (`if...else if...else`)
- **Number & Parity Checks:** Implemented basic sign detection (positive/negative) and checked even/odd status via modulo arithmetic (`num % 2 === 0`)[cite: 3].
- **Threshold Evaluations:** Validated voting eligibility against threshold ages and designed a multi-tier academic grading scale (`marks > 90`, `> 75`, `> 50`)[cite: 3].
- **Compound Relational Logic:** Compared multiple variables to locate maximum values across two and three variables using combined logical AND (`&&`) operators[cite: 3].
- **Calendar & Divisibility Rules:** Computed leap year conditions and verified multi-number divisibility (`% 3 === 0 && % 5 === 0`).
- **Authentication & Character Inspection:** Simulated authentication credential validation (`username === "admin" && password === 1234`) and checked case-insensitive vowel sets using chained OR (`||`) conditions.

### 2. Truthy & Falsy Evaluations
- Inspected JavaScript's implicit boolean conversions using explicit `Boolean()` wrappers.
- Demonstrated that empty strings `""` and numeric `0` coerce to `false`.
- Verified that empty reference structures like arrays `[]` evaluate to truthy values.

### 3. Ternary Operator (`condition ? exprIfTrue : exprIfFalse`)
- Replaced verbose branching with concise inline checks for value presence, parity validation, and voting eligibility.
- Constructed chained ternary expressions to evaluate bounds and determine the largest value among sets.
- Implemented dynamic user status string generation based on boolean flags.


