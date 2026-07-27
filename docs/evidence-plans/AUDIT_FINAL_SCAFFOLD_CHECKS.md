# Evidence Record: Bounded `audit_final.js` Scaffold Checks

**Status**: EXECUTED_BOUNDED  
**Execution date**: 2026-07-27  
**Contract**: `docs/evidence-plans/AUDIT_FINAL_SCAFFOLD_CONTRACT.json`  
**Harness**: `scripts/verify-audit-final-scaffolds.mjs`  
**Documentation head at execution**: `7ecd4231fe61c0aaa62a8b881cd0daef65b4fda4`  
**Workflow run**: `30290915464`  
**Workflow job**: `90060197818`

## Goal

Confirm that seven existing `audit_final.js` scripts execute as described, remain explicitly bounded to presence or basic JSON-parse checks, and fail closed when a required file is removed from a disposable copy.

## Exact source subjects

| Repository | Exact commit | Declared scope |
|---|---|---|
| Riverbraid-Governance-Gold | `adc3ec8709565b48ec33766d8afcb7bed2cafa4c` | `workflow-target-presence-check` |
| Riverbraid-Types | `b5bf4c5535328d2ef09ace6f2c4435ea6483766f` | `workflow-target-presence-and-json-parse-check` |
| Riverbraid-Standard-IO | `0131ff432d601adc3f324716fbeaf64fc40cc651` | `workflow-target-presence-check` |
| Riverbraid-Build-V5 | `4d4af57b18445f4ec73e8b48ce3cf9c737bb2589` | `workflow-target-presence-check` |
| Riverbraid-Liminal-Monitoring | `cd43c2293211d61434d7a55571bc6e9585cdb5cf` | `workflow-target-presence-check` |
| Riverbraid-Secrets-Safe | `6738580043137117b0450da756878f72d735f5fb` | `workflow-target-presence-check` |
| Riverbraid-Verification-Suite | `d02c146a298577225fb05f436cf1fb402015f77f` | `workflow-target-presence-check` |

The harness acquired each repository from public GitHub at the exact commit, verified the observed checkout head, calculated the `audit_final.js` SHA-256, and executed the source script unchanged using:

```text
node --experimental-default-type=module audit_final.js
```

## Positive execution contract

Every exact source subject was required to:

- exit `0`;
- write `audit-final-output.json`;
- emit `SCAFFOLD_CHECK_PASSED`;
- report no missing files;
- preserve its exact declared audit scope;
- preserve `presence-check-only-not-full-verification` as the claim boundary.

All seven positive cases passed.

## Disposable negative execution contract

For each repository, the harness created a new temporary directory containing the exact `audit_final.js` and other declared required inputs, but intentionally omitted `README.md`.

Every negative case was required to:

- exit `1`;
- write `audit-final-output.json`;
- emit `SCAFFOLD_CHECK_FAILED`;
- identify `README.md` in `missing_files`;
- preserve the exact declared audit scope;
- preserve `presence-check-only-not-full-verification` as the claim boundary.

All seven negative cases passed.

## Bounded workflow result

The GitHub Actions job completed successfully with:

```text
AUDIT_FINAL_SCAFFOLD_SUITE_PASS
AUDIT_FINAL_SCAFFOLD_RESULT_RECORD_VALID
```

The runtime result record contained seven repository subresults and status:

```text
AUDIT_FINAL_SCAFFOLD_CONDITIONS_MET
```

## Interpretation

This evidence establishes only that each exact script performed its declared bounded presence or parse check and failed closed for the exercised missing-README condition.

The repository names and filenames do not enlarge the verification depth. In particular:

- `Riverbraid-Verification-Suite` remains a README-presence scaffold under this command;
- `Riverbraid-Governance-Gold` remains a README-presence scaffold under this command;
- `Riverbraid-Types` adds package JSON parsing but does not validate type semantics;
- no result establishes protocol behavior, integration, security, governance correctness, or account-wide operation.

## Evidence limits

The generated `audit-final-scaffold-results.json` was exposed in the attributable workflow log but was not committed back into a source repository or presented as an immutable release artifact.

The run used public GitHub reads during exact source acquisition. It was not offline or independently reproduced.

Only the missing-README negative condition was exercised. Other unreadable-file, malformed-package, source-drift, or runner-failure cases remain outside this record unless separately tested.

## Nonclaims

This record does not establish:

- full repository verification;
- behavioral protocol verification;
- certification;
- external audit;
- production readiness;
- security hardening;
- registry freshness;
- F3 integration;
- independent reproduction;
- F0–F4 adoption or gate advancement;
- absence of defects.
