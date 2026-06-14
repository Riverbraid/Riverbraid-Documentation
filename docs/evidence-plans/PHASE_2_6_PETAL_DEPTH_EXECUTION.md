# Evidence Plan: Phase 2.6 Petal Depth Execution

**Status**: PLAN_ONLY  
**Execution**: NOT_EXECUTED  
**Scope**: Memory-Gold, Judicial-Gold, Safety-Gold, Integration-Gold

## Purpose

This plan records the execution-evidence work needed for the four Gold petals where stub-to-behavioral-verifier replacement work was performed but remains unverified.

The goal is not to rearchitect the petals.

The goal is to prove that each petal's claimed verifier depth matches its actual behavior.

## Depth-matching rule

```text
A petal is coherent when its claimed verifier depth matches its actual verifier depth.
```

A presence-check petal is coherent if it accurately documents that it is a presence check.

A behavioral-verifier petal requires execution evidence if it claims behavioral verification.

## Repositories requiring Phase 2.6 evidence

| Repository | Current status | Required action |
|---|---|---|
| Riverbraid-Memory-Gold | Stub-to-behavioral replacement execution unverified | Run verifier, preserve output, update status. |
| Riverbraid-Judicial-Gold | Stub-to-behavioral replacement execution unverified | Run verifier, preserve output, update status. |
| Riverbraid-Safety-Gold | Stub-to-behavioral replacement execution unverified | Run verifier, preserve output, update status. |
| Riverbraid-Integration-Gold | Stub-to-behavioral replacement execution unverified | Run verifier, preserve output, update status. |

## Required evidence per repo

- repository commit under test
- command run
- environment
- stdout
- stderr
- exit code
- PASS/FAIL result
- claim-depth statement
- status update location

## Expected outcome

Each repository should end with one of these statuses:

- `EXECUTION_EVIDENCED_BEHAVIORAL_VERIFIER`
- `EXECUTION_FAILED_INVESTIGATION_REQUIRED`
- `CLAIM_DEPTH_REDUCED_TO_MATCH_ACTUAL_DEPTH`
- `UNKNOWN_PENDING_EVIDENCE`

## Boundary

This plan does not execute tests, update registry pins, update expected results, mutate workflows, or claim production readiness.
