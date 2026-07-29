# Production Readiness Gate

**Status**: GATE OPEN — production readiness is NOT claimed  
**Current claim level**: PROOF_OF_CONCEPT_SCOPE_GREEN  
**As of**: 2026-07-27

This document defines what must be true before any production-readiness claim is made.

It does not move any repository toward production readiness by its existence.

## Current bounded state

```text
Phase 4 proof-of-concept scope: CLOSED
Security hardening: NOT CLAIMED
Production readiness: NOT CLAIMED
Certification: NOT CLAIMED
External audit: NOT CLAIMED
```

Every condition must be satisfied with attributable evidence before production-readiness language is used.

## Gate conditions

### Security settings

| Condition | Status |
|---|---|
| Branch protection confirmed on active repositories | NEEDS_VERIFICATION |
| Repository rulesets confirmed | NEEDS_VERIFICATION |
| Force-push protection confirmed | NEEDS_VERIFICATION |
| Required status checks active | NEEDS_VERIFICATION |
| Secret scanning active | NEEDS_VERIFICATION |
| Push protection active | NEEDS_VERIFICATION |
| Private vulnerability reporting active | NEEDS_VERIFICATION |
| Dependabot alerts and security updates active | NEEDS_VERIFICATION |
| Code scanning active where relevant | NEEDS_VERIFICATION |
| GitHub Actions default token permissions confirmed | NEEDS_VERIFICATION |

### Cryptographic infrastructure

| Condition | Status |
|---|---|
| Guardian key ceremony completed with real keys | BLOCKER_OR_NOT_REQUIRED_DECISION_NEEDED |
| Signing policy defined | NEEDS_VERIFICATION |
| Mutable evidence fields resolved or precisely bounded | BLOCKER_OR_BOUNDARY_DECISION_NEEDED |

### Execution evidence

| Condition | Status |
|---|---|
| Refusal-Gold fail-closed behavior evidenced | PATCHED_UNVERIFIED |
| Harness-Gold GPG binding evidenced | PATCHED_UNVERIFIED |
| Evaluation Kit command and environment controls evidenced | SATISFIED_BOUNDED_FOR_EXACT_DRAFT_HEAD |
| Gold-V2 dependency boundary evidenced | PATCHED_UNVERIFIED |
| Memory-Gold behavioral verifier evidenced | PATCHED_UNVERIFIED |
| Judicial-Gold behavioral verifier evidenced | PATCHED_UNVERIFIED |
| Safety-Gold behavioral verifier evidenced | PATCHED_UNVERIFIED |
| Integration-Gold behavioral verifier evidenced | PATCHED_UNVERIFIED |
| `audit_final.js` scaffold checks evidenced where active | UNVERIFIED |

Evaluation Kit evidence is bounded to head `868341e2a26ae1ac912be170a2930034b06623ee`, run `30286309516`, job `90044856022`. It does not satisfy other repositories or establish production readiness.

### Reproducibility and supply chain

| Condition | Status |
|---|---|
| Evaluation Kit Docker base image digest pinned and exact-head executed | SATISFIED_BOUNDED |
| Evaluation Kit environment lock updated and identity-checked | SATISFIED_BOUNDED |
| Evaluation Kit npm lifecycle scripts denied | SATISFIED_BOUNDED |
| Evaluation Kit OS/npm dependency acquisition offline or hermetic | OPEN / NETWORK_BOUND |
| Critical draft workflows use fixed runner versions | PARTIALLY_SATISFIED |
| Critical draft workflows use SHA-pinned actions | PARTIALLY_SATISFIED |
| Account-wide runner and action policy complete | OPEN |
| Workflow timeouts added where appropriate | OPEN |
| npm lockfiles reviewed | OPEN |
| Rust/Cargo dependency boundaries reviewed | OPEN |

The pinned Evaluation Kit digest is:

```text
sha256:ecc9a2581f8588014a49a523a9ed146d27963f6d988d11bd16bbdcb3598f5f98
```

### Registry and verification

| Condition | Status |
|---|---|
| Registry succession rules defined | OPEN |
| Registry refresh authorization defined | OPEN |
| Registry rollback path defined | OPEN |
| Package-script verification-depth classification complete | OPEN |
| Presence-check-only entries decided | OPEN |
| Refusal-Gold registry pin refreshed after evidence | BLOCKED_ON_EVIDENCE |
| 52-repository role/lifecycle/depth classification internally validated | SATISFIED_BOUNDED_UNMERGED |
| F3/F4 functional-core profile adopted | NOT_ASSESSED / NOT_ADOPTED |

### Secret and history safety

| Condition | Status |
|---|---|
| Git history scanned for secrets across active repositories | OPEN |
| Release assets reviewed where present | OPEN |
| Private key material absence verified in current tree and history | UNVERIFIED |
| `.env`, token, or credential material absence verified in history | UNVERIFIED |

### Dependency and release discipline

| Condition | Status |
|---|---|
| Dependency vulnerability scan completed | OPEN |
| Dependency license scan completed | OPEN |
| SBOM decision made | OPEN |
| Account-wide lifecycle-script policy defined | OPEN |
| Semantic versioning or alternative version policy defined | POLICY_CANDIDATE_UNMERGED |
| Changelog format defined | OPEN |
| Tag-signing policy decided | OPEN |
| Release checksum policy decided | OPEN |
| Deprecation policy defined | POLICY_CANDIDATE_UNMERGED |

### External review

| Condition | Status |
|---|---|
| External review packet created | OPEN |
| At least one targeted external reviewer invited | OPEN |
| Reviewer findings documented | OPEN |
| Dissenting findings preserved | OPEN |

The gate does not require that all findings be favorable. It requires that review occurred and findings are preserved.

### Operational boundaries

| Condition | Status |
|---|---|
| Incident-response route defined and privately usable | PARTIAL / PRIVATE_SETTING_UNCONFIRMED |
| Support expectations defined | POLICY_CANDIDATE_UNMERGED |
| Governance and maintainer authority defined | POLICY_CANDIDATE_UNMERGED |
| Personal GitHub profile entrance renders correctly | MANUAL_ACTION_REQUIRED |
| Deployment boundaries defined | OPEN |

## Current gate status

```text
GATE STATUS: OPEN
Production readiness: NOT CLAIMED
```

## Resolution rule

Gate items are not resolved by documentation alone. Each requires:

1. evidence that the condition is met;
2. exact subject and environment identity;
3. an attributable status update;
4. no retroactive back-dating or broadening of evidence.

## What production readiness would not mean

Even if this gate is satisfied, production-ready would not mean defect-free, certified, suitable for every deployment, or externally audited unless those claims are separately established.

## Non-claim

This document does not adopt the F0–F4 control package, execute P0, satisfy this gate, or create production readiness.
