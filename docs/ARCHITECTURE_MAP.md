# Riverbraid Architecture Map

**Status**: DRAFT / STRUCTURAL REFERENCE  
**Scope**: full-constellation orientation only  
**Registry mutation**: NONE  
**Protocol mutation**: NONE  
**Claim mutation**: NONE

## Core idea

Riverbraid is a deterministic behavioral attestation system.

It does not judge AI outputs. It witnesses whether a defined behavioral boundary was crossed and records that witness in a verifiable, reproducible form.

The architecture has one job:

```text
make the gap between a claimed state and an executed state visible
```

## Layer structure

```text
Layer 0 - Constitutional ground
  Riverbraid-Core
  Genesis floor. Fail-closed. Witness-not-judgment.

Layer 1 - Behavioral petals
  Gold petals define bounded behavioral domains.
  They are not general-purpose functional tools.
  Each petal must state what it checks and what it does not check.

Layer 2 - Harness and verification surface
  Harness-Gold, Verification-Suite, Gold-V2, Governance-Gold.
  These coordinate runtime checks, cross-repo consistency, and bounded governance behavior.

Layer 3 - Entry and evaluation
  Riverbraid-Evaluation-Kit.
  Public entry point for the current pinned verification surface.
  Registry scope is 30 pinned entries.

Layer 4 - Documentation and claim boundaries
  Riverbraid-Documentation, Riverbraid-Governance, central .github community health.

Layer 5 - Support infrastructure
  Types, Build, TSH, Wasm-Bridge, Integrity-Floors, Standard-IO, Secrets-Safe,
  Liminal-Monitoring, RDK, Gold-UI, Cognition, Lang, SSG, p5, Hydra, Lite.

Layer 6 - Adaptations and applied profiles
  Future domain-specific governance surfaces built on the Riverbraid pattern.
```

## Petal depth rule

The right question is not whether a petal is generally functional.

The right question is:

```text
Does the claimed verifier depth match the actual verifier depth?
```

A petal that performs a presence check and clearly documents that limit is coherent as-is.

A petal only needs remediation when its claim exceeds its evidence, or when a planned stub-to-behavioral-verifier replacement has not yet been execution-evidenced.

## Phase 2.6 depth-evidence items

The following petals need execution evidence because stub-to-behavioral-verifier replacement work was performed but remains unverified:

| Repository | Current attention needed | Required next step |
|---|---|---|
| Riverbraid-Memory-Gold | Stub-to-behavioral replacement execution unverified | Run verifier, record output, update status. |
| Riverbraid-Judicial-Gold | Stub-to-behavioral replacement execution unverified | Run verifier, record output, update status. |
| Riverbraid-Safety-Gold | Stub-to-behavioral replacement execution unverified | Run verifier, record output, update status. |
| Riverbraid-Integration-Gold | Stub-to-behavioral replacement execution unverified | Run verifier, record output, update status. |

## Registry scope gap

The Evaluation Kit currently covers a pinned 30-entry registry while the active constellation contains 52 repositories.

This is not a defect. It is a documented scope boundary.

Repositories outside the registry should not be treated as broken or verified by implication. Their status must be assessed relative to their own lifecycle role and evidence path.

## Data flow during Evaluation Kit verification

```text
GitHub Actions trigger
  -> verified-repo-registry.json
  -> clone each registry entry at pinned commit
  -> run configured verification command
  -> capture output
  -> compare against expected-results.json
  -> PASS or FAIL
  -> JSON summary emitted
```

## Architectural principles

- Fail closed: ambiguity resolves to failure, not silent success.
- Witness-not-judgment: Riverbraid records whether a declared boundary was crossed.
- Non-expansion: claim surface does not grow without evidence.
- Coupling: a petal's verifier speaks only to its own bounded domain.
- Determinism: same input, same output, same boundary.
- Claim-depth matching: every verifier depth must be named honestly.

## Known architectural blockers

These require future evidence or precise boundary documents:

1. Guardian key ceremony and real key handling remain outside the completed proof-of-concept closeout.
2. Mutable timestamp or similar mutable fields in constitutional/evidence surfaces must be resolved or explicitly bounded.
3. Registry succession rules must exist before registry refresh or expansion.
4. Applied governance profiles remain future surfaces until created and evidence-bounded.
5. Production deployment topology is not claimed.

## Navigation path

1. `Riverbraid-Evaluation-Kit`
2. `docs/RIVERBRAID_IN_10_MINUTES.md`
3. `docs/WHAT_PASS_MEANS.md`
4. `docs/REGISTRY_SCOPE_GAP.md`
5. `docs/VERIFICATION_DEPTH_CLASSIFICATION.md`
6. `docs/KNOWN_LIMITATIONS.md`
7. This architecture map

## Non-claim

This map does not certify, audit, approve, or production-harden any repository in the constellation.
