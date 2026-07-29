# Riverbraid Pre-P0 GitHub Preparation Handoff

**Record ID:** `RB-PRE-P0-GITHUB-HANDOFF-001`  
**Status:** `PROPOSED_NONCONTROLLING_GITHUB_PREPARATION_HANDOFF`  
**Recorded:** 2026-07-29 UTC  
**Current active gate:** `P0-DISC-001`  
**P0:** `NOT_EXECUTED`  
**F0:** `NOT_CLOSED`  
**Claim effect:** `NONE`

## Purpose

This record freezes the bounded GitHub preparation state needed before Riverbraid begins the adopted read-only P0 discovery sequence.

It does not adopt the F0–F4 control package, execute P0, close F0, merge any preparation pull request, update registry pins, alter releases or tags, configure repository settings, or establish F3/F4 membership.

## Current control-package identity

The current proposed implementation-control basis is `v0.3-proposed`.

The prior `v0.2-proposed` package remains historical lineage and must not be silently issued alongside the current adoption path.

A known pre-P0 identity split remains:

```text
CURRENT_V0_3_MANUAL_DIGEST_PREFIX:
1643b9d9

LEGACY_MACHINE_PACKAGE_MANUAL_DIGEST_PREFIX:
5a6be223

STATUS:
PRE_P0_HOLD / MACHINE_PACKAGE_REBIND_REQUIRED
```

The full v0.3 source bytes, full digests, companion profile, machine manifest, successor adoption identity, checksum set, and self-test results remain source-bound outside this GitHub handoff. They must be rebound and verified in a byte-preserving controlled workspace before `PRE_P0_READY` or founder adoption may be asserted.

## Exact GitHub preparation subjects

| Pull request | Branch | Observed source identity | State | Evidence | Bounded role |
|---|---|---|---|---|---|
| Riverbraid-Core#7 | `agent/precision-hardening` | `699567de01e83494a8f4a00b503b322ff61b410c` | Open / draft / mergeable | Run `30285743307` succeeded | Live compatibility and claim-boundary preparation only |
| Riverbraid-Evaluation-Kit#13 | `agent/claim-ceiling` | `868341e2a26ae1ac912be170a2930034b06623ee` | Open / draft / mergeable | Run `30286309516`, job `90044856022` succeeded | Pinned-profile execution evidence under a bounded claim ceiling |
| Riverbraid-Golds#6 | `agent/public-repository-classification` | `57fcbdbe9677debd6795ee3b423d99dccbc9b7f0` | Open / draft / mergeable | Run `30287153753`, job `90047680173` succeeded | 52-repository classification; F3/F4 membership remains not assessed |
| Riverbraid-Documentation#26 | `agent/classification-crosswalk` | `d41c1a19f707654378648b48fefc29aef6f4bfb7` before this handoff update | Open / draft / mergeable | Runs `30291197926` and `30291197712` succeeded before this update | Central noncontrolling preparation record; post-update head requires fresh observation |
| Riverbraid/.github#5 | `agent/public-entry-claim-precision` | `40916bf7425821ed29e8cf405500387eaffe5129` | Open / draft / mergeable | Runs `30288559207` and `30288559466` succeeded | Governance/community-health candidate; manual settings remain open |
| Riverbraid-Refusal-Gold#7 | `agent/fail-closed-execution-evidence` | `a05c341af05fe9b5663c5dc8d6e85084e0118cdc` | Open / draft / mergeable | Run `30288938156`, job `90053623558` succeeded | Exact-draft positive and missing-file fail-closed evidence |
| Riverbraid-Harness-Gold#6 | `agent/runtime-binding-blocked-state` | `e054407becc9d995b023042a24eaf0c7cae5e0b7` | Open / draft / mergeable | Runs `30289790880` and `30289790890` succeeded | Blocker-state evidence only; GPG execution remains not assessed |
| Riverbraid-Gold-V2#3 | `agent/workspace-dependency-boundary` | `9124578dbc7ec1285accc7098df6453fbbab51ec` | Open / draft / mergeable | Run `30289561901`, job `90055700184` succeeded | Optional-workspace boundary; real pinned sibling execution remains open |

## Freeze and disposition rule

All eight subjects remain draft and unmerged.

Any head movement creates a new source subject. A later disposition must re-observe the exact head, workflow evidence, changed-file set, and claim boundary before using or merging that subject.

P0 does not authorize mutation of these branches. Successful draft-head workflows are bounded preparation evidence only; they are not F0–F4 closure evidence and do not create adoption authority.

## Remaining pre-P0 holds outside GitHub

The following work remains source-bound and execution-earned:

- rebind the machine package and one successor or consolidated adoption identity to the exact v0.3 manual and companion-profile bytes;
- recompute the complete SHA-256 set and preserve v0.2 lineage;
- acquire the pinned validation and canonicalization dependencies;
- execute Draft 2020-12 validation, all 156 fixtures, RFC 8785 finalization, and the end-to-end self-test;
- bind the founder shell, candidate roots, authorized output root, evidence home, recovery destination, custody method, and authority record;
- emit `PRE_P0_READY` only if the required checks pass;
- obtain founder adoption and one explicit read-only P0 authorization.

## GitHub readiness outcome

```text
GITHUB_PREPARATION:
STAGED_AND_EXACT_SUBJECTS_RECORDED

CONTROL_PACKAGE_ADOPTION:
NOT_PERFORMED

PRE_P0_READY:
NOT_ESTABLISHED

P0:
NOT_EXECUTED

F0:
NOT_CLOSED
```

## Next permitted GitHub action

Preserve this handoff and the explicit machine-package rebind hold.

Do not merge the eight preparation pull requests merely to prepare for P0. Merge or other disposition belongs to a later attributable authority decision after the v0.3 control identity is coherent and the applicable source subjects are revalidated.

## Companion machine-readable record

```text
docs/PRE_P0_GITHUB_HANDOFF.json
```

## Non-claims

This record does not establish certification, production readiness, external audit, independent reproduction, complete security assurance, full-constellation operation, universal compatibility, or absence of defects.
