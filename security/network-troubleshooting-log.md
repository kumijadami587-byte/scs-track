## Fault 1 -- station
Symptom: Station link had no connectivity.
My guess: cable
The rung I expected: rung 1
| Step | What changed |
|---|---|
| 1 | Swapped patch cable | nothing changed |
| 2 | Moved port on switch | link came up |
The rung that failed: rung 1
The fault was: Faulty patch cable or switch port.
Fixed by: Replaced with a known-good cable.
Put back: Returned original setup after testing.

## Fault 2 -- station
Symptom: Station could not reach local gateway.
My guess: network
The rung I expected: rung 3
| Step | What changed |
|---|---|
| 1 | Checked interface status | no change |
| 2 | Renewed DHCP lease | gateway reachable |
The rung that failed: rung 3
The fault was: Stale or missing IP configuration.
Fixed by: Renewed address configuration.
Put back: Restored station to normal state.

## Fault 3 -- fault card, I was the fixer
Symptom: Lab device failed connectivity check.
My guess: device
The rung I expected: rung 2
| Step | What changed |
|---|---|
| 1 | Checked physical connection | nothing changed |
| 2 | Corrected interface setting | traffic passed |
The rung that failed: rung 2
The fault was: Misconfigured device setting.
Fixed by: Restored proper setting.
Proved on the lab device: Rungs 1 to 4 passed after fix.
Put back: Returned lab device to automatic DHCP.
Sealed log fingerprint: 63006152cd93
Card number: 27

## The card I planted
Card number: 28
The step break.sh printed: Manual fault step applied on lab device.
The undo: Reverted manual change and verified normal operation.
