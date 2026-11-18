# SCS 3.4 Method Note — Back-Office Build in Google Sheets

1. Separate tabs were structured for Lists, Records, and Dashboard so data entry never mixes with summary formulas.
2. Data validation rules and range protections were applied to Records and Dashboard to prevent invalid entries or accidental formula overwrites.
3. Dynamic summary formulas (SUMIFS, COUNTIFS, IF) were built using column ranges rather than hardcoded cell values.
4. Every Dashboard formula was verified by hand against test rows, including cross-month entries, with results logged in hand-check-log.md.
5. Build decisions, validation rules, AI prompt receipts, and stress-test results were documented in workspace/back-office-build.md without exposing private client data.
6. What I might be wrong about: I assumed the current business volume and single-editor workflow fit comfortably within Google Sheets without hitting row limits or concurrency conflicts; I would find out by checking monthly transaction growth and testing simultaneous multi-user edits with the owner.
