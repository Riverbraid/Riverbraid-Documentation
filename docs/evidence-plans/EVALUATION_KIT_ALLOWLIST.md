# Evidence Record: Evaluation Kit Command and Environment Policy

**Status**: EXECUTED_BOUNDED  
**Evidence date**: 2026-07-27  
**Repository**: `Riverbraid/Riverbraid-Evaluation-Kit`  
**Draft PR**: `#13`  
**Exact head**: `868341e2a26ae1ac912be170a2930034b06623ee`  
**Workflow run**: `30286309516`  
**Workflow job**: `90044856022`

## Goal

Confirm that the shared command policy permits the declared verifier commands, rejects an unsupported command fail-closed, runs the pinned 30-repository Evaluation Kit path with npm lifecycle scripts denied, and enforces one attributable Docker base-image identity.

## Implemented control surface

- `command-policy.sh` is the single allowlisted command executor.
- `run-verification.sh` consumes that policy.
- `tests/command-policy-negative.sh` tests an unsupported command.
- CI requires the negative test before Docker build and full Evaluation Kit execution.
- npm dependency installation uses `--ignore-scripts`.
- GitHub Actions uses `ubuntu-24.04`.
- `actions/checkout` is pinned to commit `11d5960a326750d5838078e36cf38b85af677262`.
- `Dockerfile` and `environment.lock.json` bind the base image to:

```text
node:20.11.0-bookworm-slim@sha256:ecc9a2581f8588014a49a523a9ed146d27963f6d988d11bd16bbdcb3598f5f98
```

- CI compares the observed tag digest, environment-lock digest, and Dockerfile digest and fails closed on disagreement.

## Observed workflow steps

The exact-head workflow completed successfully with these relevant steps:

- Docker base-image identity observation;
- environment-lock and Dockerfile identity matching;
- required-file verification;
- 30-entry pinned-registry validation;
- unsupported-command fail-closed test;
- digest-pinned Docker image build;
- full Evaluation Kit execution;
- verification success summary.

## Bounded result

```text
BASE_IMAGE_IDENTITY_LOCK_MATCH
ALLOWLIST_NEGATIVE_TEST_PASS
NPM_LIFECYCLE_SCRIPTS_DENIED
REPRODUCTION_MATCH
```

This establishes only that the declared command, environment-identity, and pinned evaluation paths produced the observed result for the exact draft head and observed GitHub Actions environment.

## Remaining limitation

Dependency acquisition remained network-bound:

- the Docker build used `apt-get` to acquire operating-system packages;
- repository npm dependencies were acquired from the configured npm registry.

The evidence does not establish:

- offline reproduction;
- hermetic OS-package or npm dependency resolution;
- vendored dependency completeness;
- fully preserved package-repository state;
- independent reproduction;
- equal behavioral verification depth across all registry entries.

The remaining network-bound dependency question stays tracked in `Riverbraid-Evaluation-Kit#8`; registry freshness in `#10`; verification depth in `#11`. Docker base-image digest issue `#9` is closed at the bounded exact-head level.

## Boundary

This record does not mutate registry pins, expected results, releases, tags, repository settings, or the F0–F4 control package.

It does not establish certification, production readiness, external audit, complete AI safety, absolute security, adoption, independent reproduction, or absence of defects.
