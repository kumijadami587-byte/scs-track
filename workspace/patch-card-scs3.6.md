# Patch Card -- SCS3.6

The bug: `reorderList()` in `workspace/stock-tools/reorder.js` uses `<` instead of `<=`, silently dropping items whose `In stock` equals `Reorder at` (`grinding discs 115 mm` at 20/20), and `parseCsv()` splits quoted commas.
Which check: Edge cases
The spec: Change `reorderList()` in `workspace/stock-tools/reorder.js` so items with `In stock` less than or equal to `Reorder at` (`<=`) are included, without altering unrelated functions.
The test that shows it: `test("includes items at exact reorder level")` in `workspace/stock-tools/reorder.test.js` with `In stock = 20` and `Reorder at = 20` (fails on starting state, passes after patch).
The prompt: Patch `reorderList` in `workspace/stock-tools/reorder.js` so `In stock <= Reorder at` is included per the spec; do not rewrite other functions.
Tests after the patch: 6 of 6 tests pass via `node --test workspace/stock-tools/reorder.test.js`.

## The diff, read whole

| Line | Change | Verdict |
|---|---|---|
| `reorder.js:23` | Changed `<` to `<=` in `reorderList` comparison | SPEC |
| `reorder.js:13` | Updated `parseCsv` cell splitter to preserve quoted commas | BEYOND (kept and verified so `"Nails, 3 inch"` parses cleanly) |

## Six-line receipt

Label: AI-assisted patch (scs3.6-patch)
Tool and tier: Gemini in Chrome (Free / BootCamp tier)
Tests or checks: `node --test workspace/stock-tools/reorder.test.js` (6 pass, 0 fail)
Rights line: not checked
Cost: 0 KES (free tier; ~450 tokens estimated)
