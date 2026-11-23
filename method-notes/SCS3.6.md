1. Reading the AI-generated stock tool line by line exposed four real bugs even though the existing tests passed.
2. Separating the failing test commit from the patch commit on `scs3.6-patch` proved the test caught the `<` vs `<=` bug.
3. Removing the hardcoded `SMS_API_KEY` by hand ensured the secret was never pasted into an AI prompt.
4. Keeping the agent on `scs3.6-agent` and rejecting its out-of-scope edits protected `main` and `GEMINI.md`.
5. Recording every step and token estimate makes the cost and scope auditable before client delivery.
6. The check I ran least carefully on my own patch was Edge cases for blank numeric cells in `stock-export.csv` (`Cement 50 kg`), and a unit test passing an empty `In stock` cell (`""`) to `reorderList()` would tell me whether blank stock counts are treated as zero or skipped.
