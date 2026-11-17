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
