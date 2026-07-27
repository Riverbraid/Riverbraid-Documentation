# Known Limitations

**Status**: EVIDENCE LEDGER / NOT AN APOLOGY  
**As of**: 2026-07-27  
**Security claim**: NONE  
**Production readiness claim**: NONE  
**External audit claim**: NONE

Known limitations are the current edge of the evidence. They are not hidden. They are not failure. They are part of the Riverbraid trust surface.

## Current limitations

| Limitation | Current status | What is needed |
|---|---|---|
| Security hardening not complete | EVIDENCE_GATED | Confirm branch protection, rulesets, secret scanning, push protection, Dependabot, CodeQL, vulnerability reporting, and required checks. |
| External audit not complete | NOT_CLAIMED | Independent review or audit with preserved findings. |
| Production readiness not complete | NOT_CLAIMED | Security review, deployment boundary, support model, incident response, registry succession, and negative tests. |
| Registry covers 30 entries while the public account has 52 repositories | SCOPE_GAP_CLASSIFIED | Preserve role, lifecycle, registry membership, verification depth, and future F3/F4 membership as separate dimensions. |
| Verification depth varies across registry entries | CLASSIFIED_AT_COMMAND_LEVEL | Package-script-level and domain-verifier-depth classification. |
| Presence-check-only repositories exist | BOUNDED | Keep as explicitly limited surfaces or upgrade under a separately authorized registry gate. |
| Refusal-Gold fail-closed patch requires execution evidence | PATCHED_UNVERIFIED | Valid and invalid-state execution outputs proving fail-closed behavior. |
| Harness-Gold runtime GPG patch requires execution evidence | PATCHED_UNVERIFIED | Valid and invalid GPG-path outputs proving fail-closed behavior. |
| Evaluation Kit command policy and lifecycle-script controls | EXECUTED_BOUNDED | Exact draft head `277065f8af53a0de5eaecd1671b970c8d8cfec40` passed run `30282086825`, including unsupported-command denial, lifecycle-script denial, Docker build, and `REPRODUCTION_MATCH`. Network dependency acquisition remains. |
| Evaluation Kit dependency acquisition uses the network | OPEN / NON_HERMETIC_BOUNDARY | Adopt an offline or frozen dependency profile with exact identities and execution evidence, or explicitly accept the bounded network-dependent profile. |
| Gold-V2 dependency boundary remains | PATCHED_UNVERIFIED / DEPENDENCY_BOUNDARY | Dependency-boundary decision and failure evidence. |
| Docker base image digest remains evidence-gated | OPEN | Exact image digest evidence, Dockerfile update decision, and environment-lock update. |
| Workflows use `ubuntu-latest` in some repositories | INVENTORY_ITEM | Runner pinning decision or explicit reproducibility boundary. |
| Workflows use tag-pinned actions in some repositories | INVENTORY_ITEM | SHA-pinning decision or explicit boundary. |
| Current-tree audit is not a full history audit | BOUNDED_NON_FINDING | Git history, release asset, workflow artifact, and local archive scans. |
| F0–F4 manual and schema filenames were not located on the observed GitHub surface | BOUNDED_NON_FINDING | No action is required unless an exact candidate is identified. Any future comparison must use byte-preserving retrieval and SHA-256 in a common controlled workspace. |
| F0–F4 control package is not adopted or executed | PROPOSED_NOT_ADOPTED_NOT_EXECUTED | Explicit founder adoption and subsequent gate-authorized execution only when the controlling package permits it. |
| License audit remains incomplete | OPEN | Full license surface inventory and legal review where needed. |
| Community health normalization remains a policy decision | OPEN | Decide central `.github` only versus per-repository files. |

## Required claim rule

```text
A limitation may be reduced only by evidence.
A limitation may not be removed by confidence, intent, or narrative coherence.
```

## Boundary

This file does not claim Riverbraid is defective. It records where the available evidence currently stops.
