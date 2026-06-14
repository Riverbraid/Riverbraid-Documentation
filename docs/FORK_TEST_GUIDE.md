# Fork Test Guide

**Status**: DRAFT / ADAPTATION CHECKLIST  
**Scope**: how to test whether a fork or adaptation preserves Riverbraid claim boundaries  
**Protocol mutation**: NONE

## Purpose

Forks and adaptations can be useful, but they must not imply canonical Riverbraid authority unless a future governance process grants that status.

This guide helps a maintainer inspect whether a fork or adaptation preserved the claim boundaries needed for honest reuse.

## Minimum fork metadata

A fork should state:

```text
Forked from: [Riverbraid repository]
Source commit: [commit]
Fork maintainer: [name or organization]
Canonical Riverbraid authority: NOT CLAIMED
Riverbraid certification: NOT CLAIMED
```

## Required files for adaptations

A Riverbraid-based adaptation should include:

- `ADAPTATION.md`
- `CLAIMS.md`
- `NON_CLAIMS.md`
- `EVIDENCE.md`
- `KNOWN_LIMITATIONS.md`

If the adaptation adds a petal, it should include:

- `petal.json`
- a verifier
- test vectors or scaffold evidence
- non-claims
- execution evidence status

## Fork claim checks

| Check | Pass condition |
|---|---|
| Source commit named | Fork identifies the Riverbraid commit it came from. |
| Canonical status separated | Fork does not claim canonical Riverbraid status. |
| Claims bounded | Claims are tied to the fork's own evidence. |
| Non-claims present | Fork explicitly states what it does not prove. |
| Evidence present | Evidence path is discoverable. |
| Verifier depth honest | Claimed depth matches actual verifier depth. |
| Registry status honest | Fork does not imply Evaluation Kit registry inclusion. |

## Red flags

- `Riverbraid-certified`
- `official Riverbraid`
- `production approved`
- `externally audited` without actual audit evidence
- registry PASS language without running the registry path
- copied Riverbraid evidence used to claim fork behavior
- missing non-claims

## Compatibility labels

Acceptable labels may include:

- Riverbraid-aligned verifier
- Riverbraid-inspired governance surface
- Riverbraid-based pilot
- forked from Riverbraid at [commit]

Avoid labels that imply canonical authority.

## Minimal fork review procedure

1. Identify source repository and commit.
2. Read `CLAIMS.md` and `NON_CLAIMS.md`.
3. Confirm evidence path exists.
4. Confirm verifier depth matches claimed depth.
5. Confirm registry status is not overstated.
6. Confirm known limitations are visible.
7. Record findings in a review issue.

## Boundary

Passing this fork test does not make the fork canonical, certified, production ready, or externally audited.

## Non-claim

This guide does not approve any fork or adaptation. It provides a checklist for preserving claim boundaries.
