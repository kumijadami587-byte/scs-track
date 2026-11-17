# Reference Access Map

| Person | Admin Role | OU | Groups | Why |
|---|---|---|---|---|
| Owner | super-admin | /Management | management@client.org, all-staff@client.org | Owner needs full tenant control and billing; anyone else with super-admin could lock out the business; decided by owner. |
| Manager | Groups Admin | /Operations | operations@client.org, all-staff@client.org | Manager needs to manage team mailing lists; super-admin exposes billing and security settings; decided by owner. |
| Accountant | none | /Finance | finance@client.org, all-staff@client.org | Accountant needs shared drive access for budgets; admin rights risk unauthorized user changes; decided by owner. |
| Support Lead | Help Desk Admin | /Support | support@client.org, all-staff@client.org | Support needs to reset forgotten staff passwords; full User Admin allows deleting accounts; decided by manager. |
| Front Desk 1 | none | /Front Desk | front-desk@client.org, all-staff@client.org | Reception needs email and calendar only; admin access risks accidental policy edits; decided by manager. |
| Front Desk 2 | none | /Front Desk | front-desk@client.org, all-staff@client.org | Coordinator needs basic communication tools; extra permissions expose internal folders; decided by manager. |
| Field Staff | none | /Field | field@client.org, all-staff@client.org | Field staff need mobile mail and docs; admin privileges create device theft risks; decided by manager. |
