# Evidence Record: Refusal-Gold Fail-Closed Behavior

**Status**: EXECUTED_BOUNDED_ON_DRAFT  
**Main incorporation**: PENDING  
**Repository**: `Riverbraid/Riverbraid-Refusal-Gold`  
**Draft PR**: `#7`  
**Exact head**: `a05c341af05fe9b5663c5dc8d6e85084e0118cdc`  
**Workflow run**: `30288938156`  
**Workflow job**: `90053623558`

## Goal

Confirm that the patched verifier exits successfully for a valid state and exits nonzero while preserving attributable bounded output for an invalid or unverified state.

## Executed cases

### Positive case

The exact repository verifier executed and was required to produce:

```text
status: VERIFIED
failure_codes: []
exit_code: 0
```

Bounded marker:

```text
REFUSAL_GOLD_POSITIVE_PASS
```

### Missing-required-file negative case

The exact verifier subject was copied into an isolated temporary workspace. Required `AUTHORITY.md` was removed before execution.

The test required:

- exit code `1`;
- `verify-output.json` still written;
- status `FILES_PRESENT_UNVERIFIED`;
- `AUTHORITY.md` present in `missing_files`;
- `REQUIRED_FILES_MISSING` present in `failure_codes`;
- the declared claim boundary retained.

Bounded marker:

```text
REFUSAL_GOLD_FAIL_CLOSED_NEGATIVE_PASS
```

## Result

The exact draft head passed both positive and missing-required-file fail-closed assertions in GitHub Actions.

## Remaining limitation

The evidence-producing test and pinned workflow remain in an unmerged draft PR. Main-branch incorporation and a resulting exact-main-head run are separate evidence events.

This record does not test every malformed, nondeterministic, protocol-invalid, or unreadable-file condition.

## Boundary

This evidence applies only to the exact source, cases, workflow, and environment identified above. It does not establish certification, production readiness, external audit, independent reproduction, complete security assurance, registry freshness, F0–F4 adoption, or absence of defects.
