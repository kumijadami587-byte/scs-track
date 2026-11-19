# AI receipt log -- SCS3.5

Label: AI-assisted, directed by anur
Tool: Gemini (Apps Script assistant)
Spec initialled on (YYYY-MM-DD): 2026-11-19
First prompt sent on (YYYY-MM-DD HH:MM): 2026-11-19 10:15

## The one prompt, word for word
Write an Apps Script on Google Sheets with a comment on every line for a retail shop inventory workbook. The workbook has tabs Lists (columns: Item, Unit, Cost price, Sell price, Reorder level), Records (columns: Date, Item, In or out, Quantity, Unit price, Line total), and Settings (cell B1 holds the recipient email address such as owner@example.com). Read Lists and Records, calculate current stock per item from in and out movements, write any item whose stock is at or below its reorder level to a tab named Reorder with headings Item, Stock now, Reorder level, and send one summary email to Settings B1 when at least one item needs reordering. Use made-up sample items like Cooking oil 1L and Sugar 1kg and keep all sheets bound to the active spreadsheet.

## What came back, and what I changed by hand
The draft returned a single remindReorder() function reading Lists, Records, and Settings B1 and writing to Reorder. By hand, I updated line 2 with my AI-assisted label, changed lines 16-17 to normalize In/Out with String(way).trim().toLowerCase(), changed line 23 from < to <= with (stock[name] || 0) so items at or below reorder level are included, and changed line 30 from GmailApp.sendEmail to MailApp.sendEmail so the script only requests send-email permission instead of full Gmail access (commit 64b73b8).

## Iteration -- only if the draft missed a line of the spec (which line)
None — after patching lines 16-17, 23, and 30 by hand, every line of the initialled spec passed Test 1, Test 2, and the Edge case.

## The debug move -- one real error: the message pasted whole, what my trace said first, what the tool said
TypeError: Cannot read properties of null (reading 'getRange') at remindReorder(Code:28) — My trace showed that getSheetByName('Settings') returned null because I had not yet created the Settings tab with the recipient address in B1 on the Copy spreadsheet. Adding the Settings tab with the test recipient in B1 resolved the error without needing any AI rewrite.
