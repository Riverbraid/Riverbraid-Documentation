# Security Floor Inventory

**Status**: ACTIVE_INVENTORY / MIXED_EVIDENCE_STATES  
**As of**: 2026-07-27  
**Authority boundary**: Self-assessment inventory only  
**Security claim**: NONE  
**External audit claim**: NONE

## Purpose

This document inventories security-relevant Riverbraid surfaces without claiming security certification, external audit, complete hardening, production readiness, or absence of defects.

Security posture remains bounded by exact evidence, configuration visibility, and unresolved manual settings.

## Current known findings and remediation state

1. `Riverbraid-Refusal-Gold#6`: `PATCHED_UNVERIFIED`. The verifier now fails closed in source, but attributable valid/invalid execution evidence remains required.
2. `Riverbraid-Evaluation-Kit#8`: `PARTIALLY_REMEDIATED / NETWORK_BOUND_DEPENDENCY_ACQUISITION_REMAINS`.
   - Exact draft head `868341e2a26ae1ac912be170a2930034b06623ee` passed workflow run `30286309516`, job `90044856022`.
   - Command execution is allowlisted; unsupported commands fail closed; npm lifecycle scripts are denied; actions and runner are pinned; the Docker base identity is digest-pinned.
   - Remaining risk: OS packages acquired through `apt-get` and npm dependencies acquired through the network.
3. `Riverbraid-Evaluation-Kit#9`: `COMPLETED_BOUNDED`. Docker base digest `sha256:ecc9a2581f8588014a49a523a9ed146d27963f6d988d11bd16bbdcb3598f5f98` is bound in the Dockerfile and environment lock and exact-head executed successfully.
4. `Riverbraid-Harness-Gold#5`: `PATCHED_UNVERIFIED`. Argument-array GPG verification is present, but execution evidence remains required.
5. `Riverbraid-Core#6`: `PATCHED_AND_EXECUTED_AS_LIVE_COMPATIBILITY / UNMERGED`. Core PR #7 explicitly distinguishes mutable-default-branch compatibility from pinned Evaluation Kit evaluation and has a successful exact-head workflow.
6. `Riverbraid-Gold-V2#2`: `PARTIALLY_REMEDIATED / PATCHED_UNVERIFIED`. CI now fails closed on dependency-install failure, but neighboring-repository coupling remains evidence-gated.
7. `Riverbraid/.github#5`: `PREPARED_UNMERGED`. Shared governance, contribution-rights, fork, release/support, security-routing, and PR-template candidates are present. Account-level profile rendering and private vulnerability-reporting settings remain manual.

## Security surfaces still requiring inventory or manual confirmation

- branch protection status;
- repository rulesets;
- force-push and branch-deletion protection;
- required pull requests and status checks;
- secret scanning and push protection;
- private vulnerability reporting;
- GitHub Actions default token permissions across repositories;
- CodeQL or code scanning where applicable;
- Dependabot alert and update status;
- GPG or signing-key validity;
- release and tag security posture;
- dependency vulnerability and license scans;
- Git history, release assets, workflow artifacts, local archives, and private surfaces.

## Evidence-class rule

```text
Repository files are file evidence.
Workflow results are execution evidence for an exact subject.
GitHub settings are configuration evidence.
Documentation cannot substitute for configuration evidence.
One component's result cannot upgrade another component or the account as a whole.
```

## Non-claims

This document does not claim Riverbraid is secure, fully hardened, audited, penetration-tested, production-ready, vulnerability-free, independently reviewed, compliant with any security standard, or free of defects.
