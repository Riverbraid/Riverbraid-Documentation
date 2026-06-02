# Deferred Maintenance Decision Locks

**Status**: LOCKED / INFORMATIVE
**Authority boundary**: Decision lock record only
**Implementation claim**: NONE

## Purpose

This document holds Phase 4 maintenance areas until explicit gates are opened.

## Deferred maintenance areas

- registry freshness
- licensing normalization
- script deduplication
- manifest hygiene
- tag cleanup
- release cleanup

## Current decisions

Keep registry pins as verified snapshots until a separate verification gate is run.

License holder decision is now recorded as:

- Copyright (c) 2026 Riverbraid

Visible license holder mismatch found by repository search was corrected in `Riverbraid-Refusal-Gold/LICENSE`.

Current search-limited license note:

- `Riverbraid-Safety-Gold/LICENSE` uses Riverbraid.
- `Riverbraid-Refusal-Gold/LICENSE` now uses Riverbraid.

A full license audit remains separate because repository search does not prove every file, release artifact, package manifest, generated artifact, or historical reference has been exhaustively reviewed.

Do not delete or centralize scripts until dependency checks are complete.

Do not patch manifests until verifier expectations are checked.

Do not clean tags or releases until release discipline is defined.

## Boundary

Deferred maintenance is not cleanup for convenience.

It affects public meaning, release history, legal signals, and verifier expectations.

The license holder decision resolves one prerequisite, and the visible mismatch found by search was corrected, but this does not complete a full license audit.

No deferred maintenance action beyond the exact visible license mismatch correction is authorized by this document.
