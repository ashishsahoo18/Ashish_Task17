# Division using Promises

An arrow function `divide(a, b)` that returns a Promise.

- Resolves with `a / b` when the division is valid.
- Rejects with `Division by zero is not allowed.` when `b` is `0`.
- Rejects with `Both inputs must be valid numbers.` for non-numeric input.

## Test cases
| Input | Outcome |
|-------|---------|
| 10 / 2 | Result: 5 |
| 10 / 0 | Error: Division by zero is not allowed. |
| 7 / 2 | Result: 3.5 |
| -9 / 3 | Result: -3 |
| 0 / 5 | Result: 0 |
| 100 / 4 | Result: 25 |
| 5 / "abc" | Error: Both inputs must be valid numbers. |

Each case is handled with `.then()` and `.catch()`.

## Files
- `index.html` – page structure
- `style.css` – styling
- `script.js` – Promise function and test cases
- `Readme.md` – this file

## How to run
Open `index.html` in a browser. Results appear on the page and in the console (F12).

## Deployed link
Add your link here (GitHub Pages / Netlify / Vercel).