---
name: stock-check
description: Use when auditing or updating the hardware shop reorder scripts before sharing output.
---

# Weekly Stock Reorder Check

Use when preparing the weekly supplier reorder list from `stock-export.csv`.

1. Run `cd workspace/stock-tools && node --test` to verify all unit tests pass.
2. Check `send-sms.js` to confirm `SMS_API_KEY` is read from `process.env` and not hardcoded.
3. Run `node workspace/stock-tools/reorder.js workspace/stock-tools/stock-export.csv` and verify boundary items (`In stock == Reorder at`) appear.
4. Review `git diff` to ensure no secrets or out-of-scope edits are staged.

Done when: All tests pass, boundary items appear in the printed reorder list, and `git status` shows no secrets.
Ran: 2026-11-23 -- 6/6 tests passed and boundary items verified.
