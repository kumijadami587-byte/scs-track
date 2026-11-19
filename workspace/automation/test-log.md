# Test log -- SCS3.5

| Case | Input rows (made up) | Expected (by hand, before the run) | Actual (after the run) | Pass or fail | Patch (line, commit) |
|---|---|---|---|---|---|
| Test 1 | Cooking oil 1L: 10 in, 7 out (Reorder level 5) | Stock now = 3; Cooking oil 1L appears on Reorder tab and in email | Initially missed lowercase 'in'/'out'; after patch, Stock now = 3 listed on Reorder tab | fail -> pass | lines 16-17, 64b73b8 |
| Test 2 | Bar soap: 20 in, 5 out (Reorder level 6) | Stock now = 15 (above 6); Bar soap does NOT appear on Reorder tab | Bar soap excluded from Reorder tab; only low items written | pass | none |
| Edge case | Sugar 1kg: 8 in, 3 out (Reorder level 5 — stock equals reorder level) | Stock now = 5 (at reorder level 5); Sugar 1kg MUST appear on Reorder tab | Initially skipped because draft used < instead of <=; after patch, Sugar 1kg listed at 5 | fail -> pass | line 23, 64b73b8 |
| Second edge case (optional, SGL menu) | Tea leaves 250g in Lists with 0 rows in Records (Reorder level 4) | Stock now = 0 (<= 4); Tea leaves 250g appears on Reorder tab with stock 0 | Listed Tea leaves 250g with Stock now = 0 | pass | line 23, 64b73b8 |
| Partner as a careless owner | Partner ran script twice with no items below reorder level and lowercase 'out' rows | Reorder tab cleared cleanly with header only; no duplicate rows; no crash | Reorder tab cleared and showed header row only; no email sent when low.length === 1 | pass | lines 16-17, 64b73b8 |
| Re-run in front of the trainer | Re-ran remindReorder() on Copy of SCS3.4 Retail Shop Back Office during live check | Matches hand-calculated Reorder rows and sends one email to Settings B1 | Reorder tab and email matched expected list cleanly | pass | 64b73b8 |
