# Reference Access Map

| Person | Role / Title | OU | Groups | Admin Role | Why |
|---|---|---|---|---|---|
| Owner | Business Owner | /Management | management@client.org, all-staff@client.org | Super Admin | Owner needs full tenant control and billing; anyone else with Super Admin could lock out the business; decided by owner. |
| Manager | Operations Manager | /Operations | operations@client.org, all-staff@client.org | Groups Admin | Manager needs to manage team mailing lists; Super Admin exposes billing and security settings; decided by owner. |
| Accountant | Finance Lead | /Finance | finance@client.org, all-staff@client.org | none | Accountant needs shared drive access for budgets; admin rights risk unauthorized user changes; decided by owner. |
| Support Lead | IT & Help Desk | /Support | support@client.org, all-staff@client.org | Help Desk Admin | Support needs to reset forgotten staff passwords; full User Admin allows deleting accounts; decided by manager. |
| Front Desk 1 | Receptionist | /Front Desk | front-desk@client.org, all-staff@client.org | none | Reception needs email and calendar only; admin access risks accidental policy edits; decided by manager. |
| Front Desk 2 | Visitor Coordinator | /Front Desk | front-desk@client.org, all-staff@client.org | none | Coordinator needs basic communication tools; extra permissions expose internal folders; decided by manager. |
| Field Staff | Field Coordinator | /Field | field@client.org, all-staff@client.org | none | Field staff need mobile mail and docs; admin privileges create device theft risks; decided by manager. |
