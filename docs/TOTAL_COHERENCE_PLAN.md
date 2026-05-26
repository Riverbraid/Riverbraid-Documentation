# Riverbraid Total Coherence Plan

This document defines the next surface coherence pass for Riverbraid.

It is documentation and public packaging guidance only. It does not change protocol authority, verifier behavior, registry entries, workflow logic, hashes, seals, licensing, or repository structure.

## Current evidence base

The uploaded audit material identifies the main public coherence problem as a mismatch between the visible repository surface and the verified Evaluation Kit boundary.

Current measured surface:

- 52 visible public repositories
- 30 repositories in the Evaluation Kit verification registry
- 22 visible repositories outside the Evaluation Kit registry
- 23 repositories missing GitHub topics
- 22 repositories missing visible license files or license signals
- 45 repositories missing SECURITY policy coverage
- 51 repositories missing CONTRIBUTING guidance
- 52 repositories missing changelog discipline
- 32 repositories with thin README surfaces
- 12 repositories missing visible CI
- 2 repositories with releases

The strongest current public story is:

> Riverbraid is an open source deterministic integrity floor for AI governance with a preferred public entry point in the Evaluation Kit.

The coherence issue is not that Riverbraid lacks a story. The issue is that the public surface is larger than the canonical verified floor, and the outer repositories are not yet labeled clearly enough for a new visitor.

## Total coherence definition

Total coherence means a new technically fluent visitor can answer these questions in less than one minute:

1. What is Riverbraid?
2. Where do I start?
3. Which repositories are canonical?
4. Which repositories are outer, experimental, parked, legacy, or support surfaces?
5. What can be verified now?
6. What is not being claimed?
7. How do I inspect or reproduce the public floor?
8. How do I contribute, report a concern, or evaluate reuse?

Total coherence does not mean adoption, certification, production readiness, external audit, complete AI safety, or universal technical maturity.

## Phase 1: Declare source of truth

### Required result

The Evaluation Kit registry is the current public canonical verification floor.

### Required files

- `Riverbraid-Evaluation-Kit/verified-repo-registry.json`
- `Riverbraid-Documentation/docs/SYSTEM_MAP.md`
- `Riverbraid-Documentation/docs/REPOSITORY_LIFECYCLE_INDEX.md`

### Required wording

```text
The Evaluation Kit registry is the current public canonical verification floor for Riverbraid. Other manifests, maps, or repository lists are historical, auxiliary, experimental, documentation, tooling, or subordinate unless explicitly marked otherwise.
```

### Stop condition

Do not modify registry entries in this phase.

## Phase 2: Build a public system map

### Required result

Every visible repository is listed once with a lifecycle status.

### Lifecycle vocabulary

Use only these labels:

- canonical
- outer
- support
- documentation
- experimental
- parked
- legacy
- successor
- demo

### Minimum fields per repository

```json
{
  "repository": "Riverbraid/<name>",
  "lifecycle_status": "canonical | outer | support | documentation | experimental | parked | legacy | successor | demo",
  "in_evaluation_registry": true,
  "primary_role": "short role statement",
  "verification_surface": "registry command | README only | not applicable",
  "claim_boundary": "does not inherit canonical verification unless listed in Evaluation Kit registry"
}
```

### Stop condition

Do not rename, delete, archive, or move repositories in this phase.

## Phase 3: Normalize top level public metadata

### Required result

Every top public repository has role specific metadata.

### First target set

- Riverbraid-Evaluation-Kit
- Riverbraid-Core
- Riverbraid-Golds
- Riverbraid-Documentation
- Riverbraid-Crypto-Gold
- Riverbraid-Safety-Gold
- Riverbraid-Refusal-Gold
- Riverbraid-Judicial-Gold

### Required metadata

- About description
- Topics
- Homepage or preferred starting link where applicable
- Clear README first paragraph
- Link back to Evaluation Kit

### Stop condition

Metadata updates are GitHub platform settings. They cannot be completed by pull request alone.

## Phase 4: Add universal repository role block

### Required result

Every README has the same small structure near the top.

### Template

```markdown
## Role in Riverbraid

[Repository name] is a [canonical / outer / support / documentation / experimental / parked / legacy / successor / demo] surface within Riverbraid.

## Public verification boundary

This repository [is / is not] part of the current Evaluation Kit canonical verification registry.

## Evidence boundary

This repository does not claim certification, legal approval, production readiness, absolute security, external audit, complete AI safety, adoption, or absence of defects.
```

### Stop condition

Do not claim a repository is canonical unless it appears in the current Evaluation Kit registry.

## Phase 5: Add governance files through the profile support surface

### Required result

Public governance expectations exist once and can be referenced by other repositories.

### Target repository

- `Riverbraid/.github`

### Required files

- `SECURITY.md`
- `CONTRIBUTING.md`
- `CODE_OF_CONDUCT.md`

### Required boundary

These files must not imply support capacity, guaranteed response times, security certification, legal review, or staffed maintenance that does not exist.

### Stop condition

Do not add fake contact addresses. Use GitHub issues or repository discussions only if intentionally enabled.

## Phase 6: Release and changelog discipline

### Required result

A visitor can distinguish verified snapshots from current active development.

### First target set

- Riverbraid-Evaluation-Kit
- Riverbraid-Core
- Riverbraid-Golds
- Riverbraid-Safety-Gold
- Riverbraid-Refusal-Gold

### Required files

- `CHANGELOG.md`
- release notes where applicable
- explicit pinned snapshot language where applicable

### Stop condition

Do not create tags or releases automatically without manual browser confirmation.

## Phase 7: Registry freshness review

### Known stale pinned entries from the registry comparison

The registry comparison identified these Evaluation Kit entries where the pinned commit did not match current visible HEAD at the time of audit:

- Riverbraid-Crypto-Gold
- Riverbraid-Golds
- Riverbraid-Judicial-Gold
- Riverbraid-Refusal-Gold
- Riverbraid-Safety-Gold

### Required decision for each

- keep pinned commit as verified snapshot and document newer HEAD as unverified active development
- or intentionally refresh the registry after verification

### Stop condition

Do not refresh pinned commits without a separate verification gate.

## Phase 8: Profile surface completion

### Required result

The profile surface makes the public entry path obvious.

### Recommended bio

```text
Open source deterministic integrity floor for AI governance.
```

### Recommended pinned repositories

1. Riverbraid-Evaluation-Kit
2. Riverbraid-Core
3. Riverbraid-Golds
4. Riverbraid-Documentation
5. Riverbraid-Safety-Gold
6. Riverbraid-Refusal-Gold

### Optional profile README repository

Create:

```text
Riverbraid/Riverbraid
```

Purpose:

```text
GitHub profile README surface for Riverbraid.
```

### Stop condition

The available connector cannot create repositories, edit profile bio, or pin repositories. These remain browser UI actions.

## Phase 9: Coherence completion checklist

Total coherence is reached when all of the following are true:

- Evaluation Kit is declared as the current canonical floor
- every visible repository has a lifecycle label
- every visible repository has a role statement
- every visible repository has an evidence boundary
- top 8 repositories have About descriptions and topics
- outer repositories are visibly marked as non canonical unless registered
- .github contains bounded governance files
- release notes and changelog surfaces exist for priority repositories
- stale pinned commit differences are documented or refreshed through verification
- profile bio and pinned repositories point visitors to the correct entry path

## Allowed claim after completion

```text
Riverbraid's public GitHub surface is coherently mapped, visibly bounded, and easier for builders and reviewers to inspect.
```

## Blocked claims

Do not claim:

- adoption
- certification
- production readiness
- external audit
- complete AI safety
- legal approval
- absolute security
- absence of defects
- full technical maturity across all repositories

## Next exact execution gate

Create the following documentation files by pull request:

1. `docs/SYSTEM_MAP.md`
2. `docs/REPOSITORY_LIFECYCLE_INDEX.md`
3. `.github/SECURITY.md`
4. `.github/CONTRIBUTING.md`
5. `.github/CODE_OF_CONDUCT.md`

After those are merged, proceed to README role blocks and repository metadata UI updates.
