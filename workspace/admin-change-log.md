# Admin change log -- SCS3.1

Date: 2026-11-17
Sandbox admin sign-in: anur@sandbox.learninglions.org
My unit: /Trainees/anur
Naming convention: first.last

| # | Ticket | Logged at | What I am about to change (console path) | Who or what it affects | Why (the three questions, one line) | How I checked it | Audit log |
|---|---|---|---|---|---|---|---|
| 1 | 1 New starter | 09:10 | Directory > Users > Add new user | jane.doe@sandbox.learninglions.org in /Trainees/anur | New front desk starter needs basic account access; extra admin rights risk data leaks; decided by team lead. | Checked user list and handed temporary password by voice. | 09:15 |
| 2 | 2 Groups | 09:20 | Directory > Groups > Create group | front-desk@sandbox.learninglions.org | Front desk staff need shared inbox mail; individual forwarding breaks tracking; decided by operations manager. | Verified group membership list in Directory > Groups. | 09:25 |
| 3 | 3 Units | 09:30 | Directory > Organizational units > Create organizational unit | /Trainees/anur/Front Desk | Front desk needs YouTube disabled to stay focused; unrestricted video slows campus bandwidth; decided by supervisor. | Signed in as Jane Doe and confirmed YouTube is unavailable. | 09:35 |
| 4 | 4 Delegated role | 09:40 | Account > Admin roles > Help Desk Admin > Assign admin | john.smith@sandbox.learninglions.org | Accountant needs password reset rights for staff; Super Admin allows deleting the whole tenant; decided by owner. | Tested role limits as John Smith on three restricted screens. | 09:45 |
| 5 | 5 Rollback | 09:50 | Account > Admin roles > Help Desk Admin > Unassign admin | john.smith@sandbox.learninglions.org | Temporary delegation task finished and access must be revoked; lingering admin roles widen attack surface; decided by policy. | Confirmed John Smith no longer sees the Admin tile. | 09:55 |

## Gaps

No gaps found between logged actions and console audit events.

## Audit match

Rows matched: 5 of 5.  Gaps explained: 0.

## SCS3.2 -- sharing, security, backups, offboarding (2026-11-18)

Practice OU only.  Every row written before the click; the check column filled after it.

| # | Time | What I am about to change (console path) | Who or what it affects | Why, in one line | How I checked it | Undo |
|---|---|---|---|---|---|---|

| 1 | 09:05 | Apps > Google Workspace > Drive and Docs > Sharing settings > Sharing outside organization | /Trainees/anur | Restrict external sharing to allowlisted domains and warn users to prevent accidental data leaks. | Checked Drive share dialog as practice user and confirmed external warning appears. | Change Sharing outside organization back to ON without restrictions. |
| 2 | 09:12 | Apps > Google Workspace > Drive and Docs > Sharing settings > Link sharing | /Trainees/anur | Turn off Anyone with the link (public) sharing so internal records cannot be exposed on the web. | Verified public link option is disabled in Drive sharing menu. | Re-enable Anyone with the link default in Sharing settings. |
| 3 | 09:20 | Apps > Google Workspace > Drive and Docs > Manage shared drives > Create shared drive | Operations Shared Drive (/Trainees/anur) | Create central team storage so business files belong to the company instead of personal My Drives. | Opened Google Drive and confirmed Operations Shared Drive is visible to assigned members. | Delete Operations Shared Drive in Manage shared drives. |
| 4 | 09:28 | Apps > Google Workspace > Drive and Docs > Manage shared drives > Settings | Operations Shared Drive (/Trainees/anur) | Block non-members and external users from accessing Shared Drive files by default. | Tested sharing a Shared Drive file outside the team and confirmed it is blocked. | Relax Shared Drive external access toggles in Manage shared drives. |
| 5 | 09:36 | Security > Authentication > 2-step verification | /Trainees/anur | Enforce 2-Step Verification for all practice OU users to protect accounts from stolen passwords. | Signed in as practice user and verified 2SV setup prompt is enforced. | Uncheck Turn on 2-Step Verification for /Trainees/anur. |
| 6 | 09:44 | Security > Authentication > 2-step verification > Allowed methods | /Trainees/anur | Allow authenticator app and backup codes while disabling weak SMS/voice prompts where policy requires. | Checked practice user security settings to confirm authenticator and backup codes work. | Reset Allowed 2SV methods back to Any in Security settings. |
| 7 | 09:52 | Devices > Mobile and endpoints > Settings > Universal > General > Mobile management | /Trainees/anur | Enable Basic mobile management so company data is only accessed on managed endpoints. | Confirmed practice test device registers under Devices > Mobile and endpoints. | Set Mobile management back to Unmanaged for /Trainees/anur. |
| 8 | 10:00 | Devices > Mobile and endpoints > Settings > Universal > Password requirements | /Trainees/anur | Require screen lock password on mobile devices accessing Workspace data. | Verified password policy applies to test profile on mobile endpoint settings. | Disable Require password in Universal device settings. |
| 9 | 10:15 | Directory > Users > jane.doe@sandbox.learninglions.org > Security > Reset password | jane.doe@sandbox.learninglions.org | First offboarding step: rotate password immediately so departing user cannot sign in. | Confirmed old password fails at Google sign-in screen. | Set a new temporary password and share securely if reactivating. |
| 10 | 10:20 | Directory > Users > jane.doe@sandbox.learninglions.org > Security > Sign-in cookies > Reset | jane.doe@sandbox.learninglions.org | Revoke active browser and mobile sessions so existing tokens expire immediately. | Verified active session in second browser profile is logged out. | User must sign in again with valid credentials to create new cookies. |
| 11 | 10:25 | Directory > Users > jane.doe@sandbox.learninglions.org > Suspend user | jane.doe@sandbox.learninglions.org | Suspend departing user account while preserving data for transfer and audit. | Checked user status shows Suspended and sign-in is blocked. | Click Reactivate user in Directory > Users. |
| 12 | 10:32 | Apps > Google Workspace > Drive and Docs > Transfer ownership | jane.doe@sandbox.learninglions.org -> john.smith@sandbox.learninglions.org | Transfer departing user's Drive files and ownership to manager so no business records are lost. | Verified transferred folder appears in manager's My Drive and Drive audit log shows ownership transfer. | Transfer ownership back from manager to reactivated user. |
