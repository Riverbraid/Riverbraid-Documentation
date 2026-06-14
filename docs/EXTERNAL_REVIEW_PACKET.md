# External Review Packet

**Status**: PACKET SCAFFOLD / REVIEW NOT YET CLAIMED  
**Scope**: materials to provide to future reviewers  
**External review status**: NOT_COMPLETED

## Purpose

This packet gathers the documents a reviewer should read before assessing Riverbraid.

It does not claim that an external review has occurred.

## Required packet contents

### First-reader surface

- `docs/RIVERBRAID_IN_10_MINUTES.md`
- `docs/ARCHITECTURE_MAP.md`
- `docs/WHAT_PASS_MEANS.md`
- `docs/FAILURE_EXPLAINER.md`
- `docs/KNOWN_LIMITATIONS.md`

### Claim and evidence surface

- `docs/CLAIM_LEDGER.md`
- `docs/EVIDENCE_LEDGER.md`
- `docs/CLAIM_EVIDENCE_RECORD.md`
- `docs/REGISTRY_SCOPE_GAP.md`
- `docs/VERIFICATION_DEPTH_CLASSIFICATION.md`

### Governance surface

- `docs/GOVERNANCE_AUTHORITY_BOUNDARIES.md`
- `docs/FORKS_AND_ADAPTATIONS.md`
- `docs/FORK_TEST_GUIDE.md`
- `docs/DOMAIN_EXPERT_REVIEW_LANES.md`

### Gates and non-claims

- `docs/PRODUCTION_READINESS_GATE.md`
- `docs/CERTIFICATION_EXPLORATION_BOUNDARY.md`
- `docs/BOUNDED_PROOF_BADGE.md`

### Execution evidence plans

- `docs/evidence-plans/REFUSAL_GOLD_FAIL_CLOSED.md`
- `docs/evidence-plans/HARNESS_GOLD_GPG_BINDING.md`
- `docs/evidence-plans/EVALUATION_KIT_ALLOWLIST.md`
- `docs/evidence-plans/GOLD_V2_DEPENDENCY_BOUNDARY.md`
- `docs/evidence-plans/AUDIT_FINAL_SCAFFOLD_CHECKS.md`
- `docs/evidence-plans/PHASE_2_6_PETAL_DEPTH_EXECUTION.md`

## Reviewer instructions

Reviewers should file findings as bounded observations:

```yaml
reviewer_lane:
repository_or_doc:
observed_claim:
evidence_reviewed:
assessment:
recommendation:
out_of_scope_notes:
```

## Finding statuses

- ACCEPTED
- UNDER_REVIEW
- DEFERRED
- OUT_OF_SCOPE
- DISPUTED

Dissenting findings should be preserved.

## Non-claim

This packet is not an audit report. It does not claim external review has occurred.
