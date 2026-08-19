# Verification Contract

A Riverbraid verification result is a bounded mechanical record, not a general verdict.

## Required result identity

A current mechanical reproduction result must record:

- `result_id`
- `subject_ref`
- exact `subject_commit`
- `profile_ref`
- exact profile-definition digest
- `evaluator_ref`
- exact `evaluator_commit`
- environment
- named checks and their scoped outcomes
- evidence references
- explicit nonclaims

## Check-contract binding

The current Evaluation-Kit successor profile also binds the exact SHA-256 bytes of Core's `mechanical-profile.json` and `mechanical-verify.mjs`.

The evaluator must refuse to accept PASS if the subject commit contains different check-contract bytes, even if a file with the same name reports PASS.

## Result vocabulary

Allowed scoped outcomes are:

`PASS`, `FAIL`, `BLOCKED`, `UNAVAILABLE`, `NOT_ASSESSED`, `INVALID_ATTEMPT`.

These terms do not imply truth, certification, evidentiary weight, maturity, risk, readiness, or general suitability.

## Historical profiles

The old 30-repository governance-floor profile retains a separate historical identity. Its prior results are not replayed as evidence for the successor profile.
