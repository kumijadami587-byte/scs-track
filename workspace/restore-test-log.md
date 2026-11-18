# Restore test log -- the practice business (2026-11-18)

A backup nobody has restored from is a hope.  'It worked' is not an entry: say what did not come back,
or what you checked to be sure nothing is missing.

| # | Restore | What I deleted or suspended | How I restored it | How long | What came back | What did not come back |
|---|---|---|---|---|---|---|
| 1 | The suspended user, restored whole | Suspended practice user account (jane.doe@sandbox.learninglions.org) | Admin console > Directory > Users > Reactivate user | 2 minutes | User profile, OU placement, group memberships, Gmail inbox, and My Drive files all returned intact | Active sign-in sessions and third-party OAuth app tokens had to be re-authenticated on next login |
| 2 | A file from the shared drive's trash | Deleted `Q4-Price-List.gsheet` from the Operations Shared Drive | Opened Shared Drive > Trash > selected file > Restore | 1 minute | The spreadsheet, cell formulas, folder path, and Shared Drive member permissions came back intact | Nothing was missing; checked version history and confirmed all edits and comments were preserved |
| 3 | A user's deleted file, restored by the admin | Permanently deleted `Supplier-Contract.pdf` from user's Drive Trash | Admin console > Directory > Users > select user > Restore data (last 25 days) | 3 minutes | The PDF file returned to the user's My Drive root folder with its original content | Original subfolder placement and previous external link sharing permissions did not come back |
| 4 | One file from the export | Extracted `Client-Onboarding-Checklist.docx` from the Google Takeout zip archive | Downloaded Takeout zip, extracted archive locally, and uploaded file back into Drive | 4 minutes | All document text, headings, and tables came back readable inside Drive | Original Google Doc comment threads, version history, and native sharing permissions did not come back because Takeout converted it to .docx |
