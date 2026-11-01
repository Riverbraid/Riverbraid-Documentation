# Known Limitations

**Status**: EVIDENCE LEDGER / NOT AN APOLOGY  
**Security claim**: NONE  
**Production readiness claim**: NONE  
**External audit claim**: NONE

Known limitations are the current edge of the evidence. They are not hidden. They are not failure. They are part of the Riverbraid trust surface.


**November 1, 2026 observation addendum:** The following source findings concern the public Core and Evaluation Kit at the pinned commits in [Observation frames and blind spots](OBSERVATION_FRAME_AND_BLIND_SPOTS.md). They do not report a new live run or change the separately governed implementation state.

## Current limitations

| Limitation | Current status | What is needed |
|---|---|---|
| Security hardening not complete | EVIDENCE_GATED | Confirm branch protection, rulesets, secret scanning, push protection, Dependabot, CodeQL, vulnerability reporting, and required checks. |
| External audit not complete | NOT_CLAIMED | Independent review or audit with preserved findings. |
| Production readiness not complete | NOT_CLAIMED | Security review, deployment boundary, support model, incident response, registry succession, and negative tests. |
| Registry covers 30 entries while active constellation has 52 repositories | SCOPE_GAP_DOCUMENTED | Registry expansion gate, candidate classification, evidence, verifier depth, and expected-results update. |
| Verification depth varies across registry entries | CLASSIFIED_AT_COMMAND_LEVEL | Package-script-level and domain-verifier-depth classification. |
| Presence-check-only repositories exist | BOUNDED | Keep as support surfaces or upgrade under a separate gate. |
| Refusal-Gold fail-closed patch requires execution evidence | PATCHED_UNVERIFIED | Valid and invalid-state execution outputs proving fail-closed behavior. |
| Harness-Gold runtime GPG patch requires execution evidence | PATCHED_UNVERIFIED | Valid and invalid GPG-path outputs proving fail-closed behavior. |
| Evaluation Kit allowlist patch requires execution evidence | PATCHED_UNVERIFIED | Allowed command success and unlisted command fail-closed output. |
| Gold-V2 dependency boundary remains | PATCHED_UNVERIFIED / DEPENDENCY_BOUNDARY | Dependency-boundary decision and failure evidence. |
| Docker base image digest remains evidence-gated | OPEN | Exact image digest evidence, Dockerfile update decision, and environment lock update. |
| Workflows use `ubuntu-latest` in some repositories | INVENTORY_ITEM | Runner pinning decision or explicit reproducibility boundary. |
| Workflows use tag-pinned actions in some repositories | INVENTORY_ITEM | SHA-pinning decision or explicit boundary. |
| Current-tree audit is not a full history audit | BOUNDED_NON_FINDING | Git history, release asset, workflow artifact, and local archive scans. |
| Public Core byte-audit Git observation failure can yield a false byte PASS | REPRODUCED_IN_ISOLATED_FIXTURE | Make Git failures explicit and block a byte-verified claim without a valid repository identity and tracked-file observation. |
| Kit aggregate `external_reproduction` field does not measure independence | SOURCE_CONFIRMED | Separate command success from independently controlled operator and evaluation evidence. |
| Kit setup failure may leave no final result object | SOURCE_PATH_IDENTIFIED / NOT_EXECUTED | Capture installation failure and partial output as a bounded incomplete result. |
| License audit remains incomplete | OPEN | Full license surface inventory and legal review where needed. |
| Community health normalization remains a policy decision | OPEN | Decide central `.github` only versus per-repo files. |

## Required claim rule

```text
A limitation may be reduced only by evidence.
A limitation may not be removed by confidence, intent, or narrative coherence.
```

## Boundary

This file does not claim Riverbraid is defective. It records where the available evidence currently stops.
