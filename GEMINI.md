# Project Rules

## Stack
Node.js (v22.22.1) CLI scripts for the hardware and welding shop (`workspace/stock-tools`), zero external npm dependencies.

## Tests
Run the test suite with:
`cd workspace/stock-tools && node --test`

## Never
- Never commit API keys, tokens, or `.env` files to the repository.
- Never trust `line.split(",")` on raw CSV exports or skip boundary tests (`<=` vs `<`).
- Never use unverified Node imports without checking `typeof` in Node first.

## Skills
- `skills/stock-check/SKILL.md`
