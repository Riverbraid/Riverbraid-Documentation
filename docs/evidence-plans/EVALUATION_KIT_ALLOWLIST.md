# Evidence Record: Evaluation Kit Command Policy

**Status**: EXECUTED_BOUNDED  
**Evidence date**: 2026-07-27  
**Repository**: `Riverbraid/Riverbraid-Evaluation-Kit`  
**Draft PR**: `#13`  
**Exact head**: `277065f8af53a0de5eaecd1671b970c8d8cfec40`  
**Workflow run**: `30282086825`

## Goal

Confirm that the shared command policy permits the declared verifier commands, rejects an unsupported command fail-closed, and runs the pinned 30-repository Evaluation Kit path with npm lifecycle scripts denied.

## Implemented control surface

- `command-policy.sh` is the single allowlisted command executor.
- `run-verification.sh` consumes that policy.
- `tests/command-policy-negative.sh` tests an unsupported command.
- CI requires the negative test before Docker build and full Evaluation Kit execution.
- npm dependency installation uses `--ignore-scripts`.

## Observed workflow steps

The exact-head workflow completed successfully with these relevant steps:

- required-file verification;
- 30-entry pinned-registry validation;
- `Verify unsupported commands fail closed`;
- Docker image build;
- full Evaluation Kit execution;
- verification success summary.

## Bounded result

```text
ALLOWLIST_NEGATIVE_TEST_PASS
NPM_LIFECYCLE_SCRIPTS_DENIED
REPRODUCTION_MATCH
```

This establishes only that the declared command policy and pinned evaluation path produced the observed result for the exact draft head and observed GitHub Actions environment.

## Remaining limitation

npm dependencies were acquired through the network. The evidence does not establish:

- offline reproduction;
- hermetic dependency resolution;
- vendored dependency completeness;
- immutable base-image identity;
- independent reproduction;
- equal behavioral verification depth across all registry entries.

The remaining network-bound dependency question stays tracked in `Riverbraid-Evaluation-Kit#8`. The Docker digest remains tracked in `#9`; registry freshness in `#10`; verification depth in `#11`.

## Boundary

This record does not mutate registry pins, expected results, releases, tags, repository settings, or the F0–F4 control package.

It does not establish certification, production readiness, external audit, complete AI safety, absolute security, adoption, or absence of defects.
