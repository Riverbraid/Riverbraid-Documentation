# Drift Monitoring Plan

**Status**: DRAFT / PLAN ONLY  
**Scope**: how Riverbraid may detect and report drift  
**Implementation status**: NOT_IMPLEMENTED

## Purpose

Drift monitoring is the process of detecting when a repository, verifier, registry entry, claim, or evidence surface moves away from its declared state.

The goal is not to prevent all change. The goal is to make unaccounted-for change visible.

## Drift categories

| Drift type | Description | Example |
|---|---|---|
| Claim drift | Documentation claims more than evidence supports. | A README implies production readiness. |
| Registry drift | Registry pin no longer reflects intended proof surface. | Refusal-Gold has a later fail-closed patch not reflected in the pinned registry. |
| Verifier-depth drift | A verifier's actual depth differs from declared depth. | Petal says deterministic-vector check but only checks file presence. |
| Workflow drift | CI path changes without evidence update. | Verification command changed but evidence ledger not updated. |
| Dependency drift | Dependencies change without boundary update. | Lockfile regenerated without recorded evidence. |
| Artifact drift | Generated files, logs, or evidence packets diverge from expected state. | Evidence packet schema changes without version bump. |
| Governance drift | Authority or decision process changes without recording. | Registry pin updated outside succession rules. |

## Detection sources

Potential sources:

- GitHub compare results
- GitHub Actions metadata
- Evidence packets
- claim ledger
- evidence ledger
- readiness matrix
- registry scope gap
- package lockfiles
- workflow files
- petal manifests

## Drift record format

```yaml
drift_id:
detected_at:
repository:
drift_type:
observed_change:
expected_state:
evidence_source:
severity:
status:
assigned_issue:
resolution:
non_claims:
```

Allowed statuses:

```text
OPEN
UNDER_REVIEW
ACCEPTED
FALSE_POSITIVE
RESOLVED
DEFERRED
```

## Severity guide

| Severity | Meaning |
|---|---|
| Low | Documentation or metadata drift that does not affect proof claims. |
| Medium | Drift that may affect claim clarity or reviewability. |
| High | Drift that affects verification behavior or registry truth. |
| Critical | Drift that may create a false public trust signal. |

## First implementation target

The first drift monitor should be static and report-only:

1. Compare tracked documentation claims against known non-claims.
2. Compare active repo list against registry list.
3. Compare declared verifier depth against known classification.
4. Report differences.
5. Open no automatic PRs.

## Fail-closed rule

If drift affects a proof claim, the affected claim should be downgraded to `UNKNOWN_PENDING_EVIDENCE` until reviewed.

## Non-claim

This plan does not implement drift monitoring and does not claim real-time monitoring exists.
