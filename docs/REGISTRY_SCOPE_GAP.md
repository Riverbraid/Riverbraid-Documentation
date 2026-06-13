# Registry Scope Gap

**Status**: INVENTORY SCAFFOLD

## Current boundary

The Evaluation Kit currently defines a pinned registry of 30 entries.

The active Riverbraid constellation currently tracks 52 repositories in the Phase 4 proof-of-concept scope.

This means there are active repositories that are not part of the current Evaluation Kit registry snapshot.

## Required future work

For every active repository not in the registry, record:

- repository name
- lifecycle status
- role in constellation
- candidate for future registry inclusion: YES / NO / UNKNOWN_PENDING_EVIDENCE
- required verifier depth
- known blockers
- evidence needed before inclusion

## Rule

Do not expand the registry until registry succession rules exist.

## Boundary

This file documents scope separation only. It does not mutate registry pins or create registry freshness.
