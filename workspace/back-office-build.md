# Back-Office Build Notes — SCS 3.4

## Overkill Verdict

| Overkill Question | Client Answer |
| :--- | :--- |
| 1. Monthly row volume? | Under 150 invoices per month, well within Google Sheets limits. |
| 2. Concurrent editors needed? | Only 1 to 2 people (owner and clerk) update records at different times. |
| 3. Complex relational lookups or permissions? | Simple three-tab structure (Lists, Records, Dashboard) with basic dropdowns is enough. |
| 4. Automated external integrations required? | None needed; manual entry and monthly Excel backup fit the workflow. |
| 5. Owner comfort and budget? | Zero software budget and the owner already understands basic spreadsheets. |

Verdict: Sheets.  Pattern: inventory.  Because: It costs nothing to run, the owner can track unpaid invoices and totals without IT support, and it easily handles fewer than 150 transactions a month.

## Validation and Protection
- **Data Validation (Records tab):**
  - Category column (`Lists!A2:A20`, reject input) — tested garbage input `"RandomStuff"`, rejected with error message.
  - Status column (`Lists!B2:B10`, reject input) — tested garbage input `"MaybePaid"`, rejected with error message.
  - Amount column (Number greater than 0, reject input) — tested garbage input `"abc"` and `-50`, rejected with error message.
- **Range Protection:**
  - Protected `Dashboard!A1:F30` (warning/editor lock) so KPI formulas cannot be overwritten.
  - Protected `Records!A1:H1` (header row) so column headings stay intact while new rows can still be added below.
  - Protected `Lists!A1:D30` so reference dropdown items are not accidentally deleted.

## AI Receipts

| Ask (Column Headings Only) | Formula | What I Changed | Hand Check (Log Row) |
| :--- | :--- | :--- | :--- |
| Sum Amount where Status is Paid and Date is in current month (`Date`, `Status`, `Amount`) | `=SUMIFS(Records!F2:F, Records!E2:E, "Paid", Records!A2:A, ">="&EOMONTH(B1,-1)+1, Records!A2:A, "<="&EOMONTH(B1,0))` | Changed bounded `F2:F100` to open-ended `F2:F` so new rows calculate automatically. | Row 1 (`Dashboard!B4` — expected 48500, sheet 48500, Match) |
| Sum Amount where Status is Pending (`Status`, `Amount`) | `=SUMIFS(Records!F2:F, Records!E2:E, "Pending")` | Verified status label matches Lists tab exact spelling. | Row 2 (`Dashboard!B5` — expected 16200, sheet 16200, Match) |
| Count rows where Status is Paid and Date is in current month (`Date`, `Status`) | `=COUNTIFS(Records!E2:E, "Paid", Records!A2:A, ">="&EOMONTH(B1,-1)+1, Records!A2:A, "<="&EOMONTH(B1,0))` | Added date bounds referencing as-of date in `B1` and trimmed trailing spaces in Lists. | Row 3 (`Dashboard!B6` — expected 11, sheet 11, Match) |
| Flag when pending total exceeds threshold (`Pending Total`) | `=IF(B5>10000, "FLAG: Review Overdue", "OK")` | Set threshold to 10,000 KES based on owner's credit limit rule. | Row 4 (`Dashboard!B7` — expected FLAG: Review Overdue, sheet FLAG: Review Overdue, Match) |

## Break the books

| Attack (Drill Card) | What I Said Would Happen | What Happened | Held or Fix |
| :--- | :--- | :--- | :--- |
| 1. Type an unlisted category in Records | Data validation will block the entry and show an error alert. | Entry was rejected immediately with a validation error pop-up. | Held |
| 2. Enter text (`"five hundred"`) in the numeric Amount column | Numeric validation will reject non-numeric input. | Sheet blocked the text and kept the cell empty. | Held |
| 3. Enter a future or malformed date (`"32/13/2026"`) in Date | Date validation will refuse invalid calendar dates. | Sheet flagged and rejected the invalid date string. | Held |
| 4. Overwrite a Dashboard formula cell as a secondary editor | Range protection will prevent typing over Dashboard formulas. | Edit was blocked by protected range permissions. | Held |
| 5. Delete a header cell on Records (`Records!A1`) | Protected header range will stop header deletion. | Edit was refused for non-owner editor. | Held |
| 6. Add a backdated row from last month to test monthly filter | Monthly KPIs will ignore last month's row while all-time total updates. | Monthly sum stayed unchanged; fixed one formula where month filter was missing. | Fix applied to monthly COUNTIFS range |
| 7. Overwrite an existing row instead of adding a correction row | Version history will show the change, violating ledger audit rules. | Confirmed policy and trained clerk to append negative/adjustment rows instead. | Held (process rule enforced) |
