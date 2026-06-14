# Governance Authority Boundaries

**Status**: DRAFT / DECISION MAP  
**Scope**: identifies authority categories; does not assign authority without confirmation  
**Protocol mutation**: NONE

## Purpose

Riverbraid distributes trust across a constellation of repositories. That distribution only works if there are clear rules about who can change what.

This document names the authority categories that must be defined. It does not make final assignments.

Where a decision has been made, record it with a date. Where no decision exists, status remains `UNDEFINED`.

## Authority Category 1 - Core mutations

Covers changes to `Riverbraid-Core`, including constitutional, memory, gate, heartbeat, vector, and genesis-anchor surfaces.

Why this needs authority: Core is the constitutional ground. A change without process creates a gap between immutability language and practice.

Decision required:

- who may propose Core mutation
- who reviews it
- what evidence is required
- whether any genesis-anchor exception exists
- how Core version changes are documented

Current status: `UNDEFINED`

## Authority Category 2 - Registry pin changes

Covers changes to `verified-repo-registry.json`, `expected-results.json`, pinned commit hashes, registry entries, and verifier commands in the Evaluation Kit.

Why this needs authority: the registry is a public claim surface.

Decision required:

- who may propose registry changes
- required execution evidence
- rollback path
- review period
- approval rule

Current status: `UNDEFINED - registry succession rules not yet defined`

## Authority Category 3 - Gold admission

Covers creating a new Gold repository, adding it to active scope, and adding it to the registry.

Why this needs authority: each new Gold may extend the claim surface.

Decision required:

- who may propose a new Gold
- required proposal contents
- minimum verifier depth
- reviewer roles
- waiting or review period

Current status: `UNDEFINED`

## Authority Category 4 - Gold deprecation

Covers marking a Gold deprecated, removing it from registry, or archiving it.

Why this needs authority: removal changes what Riverbraid verifies and may affect downstream references.

Decision required:

- who may propose deprecation
- notice period
- dependent notification
- archive/delete/preserve policy
- registry removal versus deprecated marker

Current status: `UNDEFINED`

## Authority Category 5 - Disputed claims

Covers disputes about Riverbraid claims, verifier depth, PASS meaning, or evidence sufficiency.

Decision required:

- filing location
- triage owner
- response commitment
- claim downgrade path
- out-of-scope closure reason
- dissent preservation policy

Current status: `UNDEFINED`

## Authority Category 6 - Fork and adaptation provenance

Covers what forks and adaptations may claim and how provenance is recorded.

Decision required:

- minimum fork README language
- required `ADAPTATION.md`
- allowed compatibility labels
- prohibited canonical/certification language
- evidence required for adaptation claims

Current status: `UNDEFINED - partial guidance exists in forks and adaptations documents`

## Authority Category 7 - Stewardship and review cadence

Covers long-term responsibility for Core, registry, Golds, known limitations, and review schedules.

Decision required:

- Core steward
- registry steward
- per-Gold steward
- registry review cadence
- limitations review cadence
- unscheduled review triggers

Current status: `UNDEFINED`

## How to use this document

For each category, add a decision block when the decision is made:

```text
Decision made: [date]
Authority category: [category]
Decision:
- [rule]
- [evidence required]
- [review path]
```

Do not backdate.

`UNDEFINED` is not a failure state. It is the current edge of the governance model.

## What this document does not do

- does not assign final authority
- does not change any repository
- does not define key ceremony details
- does not mutate Core, registry, workflows, releases, tags, hashes, seals, manifests, or secrets

## Related future documents

- `FORK_TEST_GUIDE.md`
- `COMPATIBILITY_LANGUAGE.md`
- `CORE_AUTHORITY.md`
- `REGISTRY_AUTHORITY.md`
- `DISPUTE_RESOLUTION.md`

## Non-claim

This document does not certify, audit, approve, or finalize any governance structure. It names decisions that must be made.
