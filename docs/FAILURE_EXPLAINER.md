# Failure Explainer

**Status**: DRAFT / REFERENCE  
**Scope**: how to read Riverbraid verification failures  
**Protocol mutation**: NONE

## Purpose

When the Evaluation Kit or a Gold verifier returns a failure, the output may be precise but not immediately readable to someone unfamiliar with Riverbraid.

This document translates common failure modes into plain language, explains what each failure does and does not mean, and describes the correct next action.

## First: what failure means

Riverbraid is fail-closed.

A failure is not automatically a system malfunction. It may be the system working as designed.

Failure means:

```text
the configured verifier ran, and the behavioral boundary it checks was not satisfied by the current state
```

Failure does not mean:

- the entire system is broken
- all claims are invalid
- the repository is abandoned
- an attack occurred
- the result should be overridden or ignored

If a verifier returns a nonzero exit code or FAIL status, treat that as a signal requiring investigation.

## Failure type reference

### Type 1 - Registry validation failure

Example:

```text
registry validation: FAILED
expected 30 entries, found 29
```

Meaning: `verified-repo-registry.json` does not match the expected structure.

Does not mean: the underlying repositories are broken.

Correct next action: compare the registry file against the last known-good commit. If the registry was intentionally updated, update expected results through the registry succession process, not ad hoc.

### Type 2 - Clone failure

Example:

```text
clone failed: Riverbraid-Refusal-Gold at commit abc1234
git exit code: 128
```

Meaning: the repository could not be cloned at the pinned commit.

Common causes include network failure, rate limit, renamed repository, deleted repository, or unreachable commit.

Correct next action: re-run once to rule out a transient failure. If persistent, check whether the repository and pinned commit remain reachable.

### Type 3 - Verifier execution failure

Example:

```text
Riverbraid-Refusal-Gold: FAIL
exit code: 1
stdout: [verifier output]
stderr: [error output]
```

Meaning: the verifier ran and exited nonzero. The behavioral boundary check failed.

Correct next action: read stdout/stderr and identify the failure class: missing file, schema mismatch, hash mismatch, deterministic-vector failure, or dependency/runtime failure.

Do not suppress the exit code. Do not claim the verification passed.

### Type 4 - Expected results mismatch

Example:

```text
results comparison: FAILED
expected: { "Riverbraid-Refusal-Gold": "PASS" }
actual: { "Riverbraid-Refusal-Gold": "FAIL" }
```

Meaning: verification ran, but actual output did not match `expected-results.json`.

Correct next action: decide whether the actual result is the correct new target state. If yes, update expected results only through the proper evidence and registry process.

### Type 5 - Docker build failure

Example:

```text
docker build: FAILED
exit code: 1
```

Meaning: the container could not be built.

Does not mean: the verifier logic is wrong.

Correct next action: check whether the failure is transient. If persistent, inspect the failing dependency or Dockerfile layer. Do not change base images without updating the environment lock and documenting the change.

### Type 6 - File presence check failure

Example:

```text
required file missing: CLAIM_LEVELS.md
presence check: FAILED
```

Meaning: a required file is not present at the checked commit.

Does not mean: the file never existed.

Correct next action: compare current state and pinned state. If the file was added after the pin, registry succession may be needed.

## Failure severity classification

| Failure type | Severity | Blocks which claim |
|---|---|---|
| Registry validation failure | High | Registry-dependent claims |
| Persistent clone failure | High | Reproduction claims |
| Verifier nonzero exit | High | The specific petal's behavioral claim |
| Expected results mismatch | Medium | Reproduction claim for affected repos |
| Docker build failure | Medium | Docker-path reproduction claim |
| File presence failure | Low-Medium | Presence-check claims for affected repo |

## What a failure does not block

- A failure in one petal does not automatically block claims about other petals.
- A Docker-path failure does not necessarily block a separate GitHub Actions verification path.
- A transient clone failure does not invalidate a pinned commit or registry entry.

## What to file when you find a failure

Open an issue in the affected repository unless the failure is a Core invariant failure.

Include:

- exact failure output
- verification path used
- date and time of the run
- commit under test
- whether any file was modified before running

Do not:

- modify registry files to force a pass
- modify expected results before understanding the failure
- change verifier scripts before preserving the original failure evidence
- claim `EXECUTION_EVIDENCED` without attached output

## Non-claim

This document does not guarantee that all failure modes are covered. Unexpected failures should be treated as signals requiring investigation, not noise requiring suppression.
