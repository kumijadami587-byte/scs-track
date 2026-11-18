# Back-Office Build Notes — SCS 3.4

## Overkill Verdict
Google Sheets is the right fit for this business rather than a custom database or ERP. Transaction volume is under a few hundred rows per month, the owner already knows basic spreadsheets, and a three-tab workbook (Lists, Records, Dashboard) handles daily tracking without hosting costs or software maintenance.

## Validation and Protection
- **Data Validation (Records tab):** Applied dropdown validation referencing the Lists tab for Category, Item/Service, Payment Status, and Staff/Member columns, with "Reject input" enabled so invalid entries are blocked. Applied date validation on the Date column and numeric validation (> 0) on Quantity and Amount.
- **Range Protection (Dashboard & Lists):** Protected the entire Dashboard tab and the header rows of Records so editors cannot overwrite summary formulas or typed labels, while leaving new entry rows open on Records.
- **Ledger Rule:** Corrections are recorded as new adjustment rows rather than overwriting historical entries, preserving a clear audit trail in Version history.

## AI Receipts
- **Prompt 1 (Formulas):** Asked for `SUMIFS` and `COUNTIFS` formulas using only column headings (`Date`, `Category`, `Amount`, `Status`) with zero customer names, phone numbers, or financial figures included.
- **Verification & Adjustment:** Adjusted the generated range references from `Records!A2:E100` to open-ended columns (`Records!A2:E`) so new rows added past row 100 are automatically included on the Dashboard.

## Break the Books
- **Test 1 (Invalid Category / Text in Amount):** Attempted to enter an unlisted category and text inside the Amount column as a secondary editor; data validation rejected both inputs immediately.
- **Test 2 (Formula Overwrite on Dashboard):** Attempted to type directly over a Dashboard KPI cell as an editor; range protection blocked the edit.
- **Test 3 (Cross-Month Date Filtering):** Added a backdated transaction from the previous month to verify the Dashboard's monthly `COUNTIFS`/`SUMIFS` formulas excluded it from current-month totals.
