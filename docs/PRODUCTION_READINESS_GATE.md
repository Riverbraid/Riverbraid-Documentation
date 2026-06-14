# Production Readiness Gate

**Status**: GATE OPEN - production readiness is NOT claimed  
**Current claim level**: PROOF_OF_CONCEPT_SCOPE_GREEN

This document defines what must be true before any production-readiness claim is made.

It does not move any repository toward production readiness by its existence.

## Why this document exists

Riverbraid's current strongest claim is bounded:

```text
Phase 4 proof-of-concept scope: CLOSED
Security hardening: NOT CLAIMED
Production readiness: NOT CLAIMED
Certification: NOT CLAIMED
External audit: NOT CLAIMED
```

Without an explicit gate, the gap between proof-of-concept closed and production-ready is invisible to a reader.

Production readiness requires every item in this gate to be satisfied with attached evidence.

## Gate conditions

Every condition must be marked `SATISFIED` with evidence before production-readiness language is used anywhere in the constellation.

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
| Dependabot alerts active | NEEDS_VERIFICATION |
| Dependabot security updates active | NEEDS_VERIFICATION |
| Code scanning active where relevant | NEEDS_VERIFICATION |
| GitHub Actions default token permissions confirmed read-only | NEEDS_VERIFICATION |

### Cryptographic infrastructure

| Condition | Status |
|---|---|
| Guardian key ceremony completed with real keys | BLOCKER_OR_NOT_REQUIRED_DECISION_NEEDED |
| Signing policy defined | NEEDS_VERIFICATION |
| Mutable timestamp or mutable evidence fields resolved or precisely bounded | BLOCKER_OR_BOUNDARY_DECISION_NEEDED |

### Execution evidence

| Condition | Status |
|---|---|
| Refusal-Gold fail-closed behavior evidenced | PATCHED_UNVERIFIED |
| Harness-Gold GPG binding evidenced | PATCHED_UNVERIFIED |
| Evaluation Kit allowlist evidenced | PATCHED_UNVERIFIED |
| Gold-V2 dependency boundary evidenced | PATCHED_UNVERIFIED |
| Memory-Gold behavioral verifier evidenced | PATCHED_UNVERIFIED |
| Judicial-Gold behavioral verifier evidenced | PATCHED_UNVERIFIED |
| Safety-Gold behavioral verifier evidenced | PATCHED_UNVERIFIED |
| Integration-Gold behavioral verifier evidenced | PATCHED_UNVERIFIED |
| `audit_final.js` scaffold checks evidenced across identified repositories | UNVERIFIED |

### Reproducibility

| Condition | Status |
|---|---|
| Docker base image digest pinned or boundary documented | OPEN |
| Environment lock updated | OPEN |
| `ubuntu-latest` usage inventoried and policy decided | OPEN |
| GitHub Actions SHA-pinning policy decided | OPEN |
| Workflow timeouts added where appropriate | OPEN |
| npm lockfiles reviewed | OPEN |
| Rust/Cargo dependency boundaries reviewed | OPEN |

### Registry and verification

| Condition | Status |
|---|---|
| Registry succession rules defined | OPEN |
| Registry refresh authorization defined | OPEN |
| Registry rollback path defined | OPEN |
| Package-script verification-depth classification complete | OPEN |
| Presence-check-only entries decided | OPEN |
| Refusal-Gold registry pin refreshed after evidence | BLOCKED_ON_EVIDENCE |

### Secret and history safety

| Condition | Status |
|---|---|
| Git history scanned for secrets across active repositories | OPEN |
| Release assets reviewed where present | OPEN |
| Private key material absence verified in current tree and history | UNVERIFIED |
| `.env`, token, or credential material absence verified in history | UNVERIFIED |

### Supply chain

| Condition | Status |
|---|---|
| Dependency vulnerability scan completed | OPEN |
| Dependency license scan completed | OPEN |
| SBOM decision made | OPEN |
| Lifecycle script policy defined | OPEN |

### External review

| Condition | Status |
|---|---|
| External review packet created | OPEN |
| At least one targeted external reviewer invited | OPEN |
| Reviewer findings documented | OPEN |
| Dissenting findings preserved | OPEN |

The gate does not require that all findings be resolved. It requires that review occurred and findings are preserved.

### Release discipline

| Condition | Status |
|---|---|
| Semantic versioning policy defined | OPEN |
| Changelog format defined | OPEN |
| Tag signing policy decided | OPEN |
| Release checksum policy decided | OPEN |
| Deprecation policy defined | OPEN |

### Operational boundaries

| Condition | Status |
|---|---|
| Incident response route defined | OPEN |
| Support expectations defined | OPEN |
| Deployment boundaries defined | OPEN |

## Current gate status

```text
GATE STATUS: OPEN
Production readiness: NOT CLAIMED
```

## How this gate is resolved

Gate items are not resolved by documentation alone.

Each requires:

1. evidence that the condition is met
2. a commit updating the item's status
3. no retroactive back-dating of evidence

## Required language after gate satisfaction

```text
Production readiness: CLAIMED
Gate satisfied: [date]
Evidence ledger: [location]
Scope: [bounded description]
External review: [present / absent with reason]
Known remaining limitations: [list]
```

## What production readiness does not mean

Even if this gate is satisfied, production ready does not mean:

- defect-free
- certified by any authority
- suitable for all deployment contexts
- externally audited unless external audit actually occurred

## Non-claim

This document does not move Riverbraid toward production readiness. It describes what movement would require.
