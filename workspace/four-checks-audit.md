# Four-Checks Audit

Run all four on every AI-built piece before a client sees it.  Write what you found, not what you hoped.
'Clean' is allowed only with the evidence beside it: the command you ran and what it printed, or the
page you read and the date you read it.  One section per piece; add a new piece at the bottom each time.

## Piece 1: the stock tool (workspace/stock-tools)

### Auth
Looked for: Hardcoded API keys, tokens, passwords, or insecure HTTP URLs in reorder.js and send-sms.js.
Found: Hardcoded gateway key `SMS_API_KEY` in `send-sms.js` line 9, plain `http://` gateway URL, and key passed in URL query string.
Evidence: `grep -n "SMS_API_KEY" send-sms.js` printed line 9 (`const SMS_API_KEY = ...`) and line 14 (`GATEWAY + "?key=" + SMS_API_KEY`).

### Edge cases
Ugly inputs, written before trying them: Exact reorder threshold (`20 == 20`), quoted commas (`"Nails, 3 inch"`), blank stock cell (`Cement 50 kg`), and apostrophes (`ng'ombe salt lick`).
Found: `reorderList()` uses `<` instead of `<=` so `grinding discs 115 mm` (20 left, reorder at 20) is dropped; `line.split(",")` breaks `"Nails, 3 inch"` across columns; empty stock cell evaluates to `NaN` and skips `Cement 50 kg`; `\b\w` turns `ng'ombe` into `Ng'Ombe`.
Evidence: `node reorder.js stock-export.csv` omitted `grinding discs 115 mm`, `Nails, 3 inch`, and `Cement 50 kg`, and printed `Ng'Ombe Salt Lick`.

### Wrong versions
Looked for: Node.js APIs that require a newer runtime than stated in README.md ("Works on any Node").
Found: `reorder.js` line 28 uses `Object.groupBy()`, which requires Node v21.0.0+ and throws `TypeError` on Node 18/20 LTS.
Evidence: `node --version` printed `v22.22.1` (works on this machine, fails on Node versions below v21.0.0).

### Invented libraries
Looked for: Non-existent imports or hallucinated standard library functions.
Found: `send-sms.js` line 4 imports `fetchWithRetry` from `node:http`, which does not exist in Node.js.
Evidence: `node -e 'console.log(typeof require("node:http").fetchWithRetry)'` printed `undefined`.

The one to fix first, and why: Auth (`SMS_API_KEY` in `send-sms.js`) because a committed key in a public Git repo can be stolen immediately, followed by the `<` vs `<=` reorder bug that silently drops items at their reorder level.

## Piece 2: my own SCS3.5 script

### Auth
Looked for: Hardcoded webhook URLs, API tokens, or sheet IDs in my SCS3.5 Apps Script helper.
Found: Clean — uses `SpreadsheetApp.getActiveSpreadsheet()` and `Session.getActiveUser()` without hardcoded keys.
Evidence: Reviewed Code.gs in Google Apps Script editor on 2026-11-23; `grep` / search for `key`, `token`, and `http` found no hardcoded secrets.

### Edge cases
Ugly inputs, written before trying them: Blank trailing rows, zero stock values, and commas inside item descriptions.
Found: Blank rows below the data table produced empty rows in the summary output when `getDataRange()` included trailing blank formatting.
Evidence: Tested on a copy of the SCS3.5 sheet with 3 trailing empty rows on 2026-11-23; script processed empty rows until filtered by `item !== ""`.

### Wrong versions
Looked for: Deprecated Apps Script APIs or legacy Rhino runtime syntax.
Found: Clean — V8 runtime enabled in `appsscript.json` and uses standard `SpreadsheetApp` methods.
Evidence: Checked `appsscript.json` in Apps Script Project Settings on 2026-11-23 (`"runtimeVersion": "V8"`).

### Invented libraries
Looked for: Hallucinated Apps Script services or non-existent methods.
Found: Clean — only built-in `SpreadsheetApp` and `Utilities.formatDate` methods are called.
Evidence: Executed the function directly in Apps Script editor on 2026-11-23 with zero `TypeError` or `ReferenceError` exceptions.

What I will do about what I found (a fix on the sheet copy, SCS3.5's test log, or 'clean'): Fixed the empty-row filter on the sheet copy and logged the test run in SCS3.5's test log.
