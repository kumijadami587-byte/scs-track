# The nine breaks -- SCS3.5

| # | Break | Cannot happen because ... (line) | Found -- patched at (line, commit) |
|---|---|---|---|
| 1 | The header row counted | Cannot happen because line 11 starts Records loop at r = 1 and line 20 starts Lists loop at i = 1, skipping index 0 headers. | |
| 2 | The wrong tab | Cannot happen because lines 8, 9, 25, and 28 explicitly select tabs by exact name ('Lists', 'Records', 'Reorder', 'Settings'). | |
| 3 | The number read as text | Cannot happen because line 14 reads numeric quantities from validated column D in Records and lines 16-17 apply arithmetic + and -. | |
| 4 | The boundary | | Found -- draft used strict < so stock equal to reorder level was missed; patched to <= at line 23, commit 64b73b8 |
| 5 | The overwrite | Cannot happen because line 25 isolates output to 'Reorder' only and line 26 clears only 'Reorder' before line 27 writes fresh rows. | |
| 6 | The invented piece | Cannot happen because every function (remindReorder) was executed in full during the Apps Script test run on 2026-11-19. | |
| 7 | The silent assumption | | Found -- draft assumed uppercase 'In'/'Out' and defined stock[name]; patched with toLowerCase() and (stock[name] || 0) at lines 16-17 and 23, commit 64b73b8 |
| 8 | The trigger that runs too often | Cannot happen because trigger settings run once daily between 7am and 8am (never onEdit or everyMinutes). | |
| 9 | The confident wrong answer | | Found -- Edge case test caught Sugar 1kg (stock 5 = reorder level 5) omitted; patched at line 23, commit 64b73b8 |
