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

Do not perform broad license normalization until a focused license audit identifies the exact files, current license text, expected holder text, and any verifier or release implications.

Do not delete or centralize scripts until dependency checks are complete.

Do not patch manifests until verifier expectations are checked.

Do not clean tags or releases until release discipline is defined.

## Boundary

Deferred maintenance is not cleanup for convenience.

It affects public meaning, release history, legal signals, and verifier expectations.

The license holder decision resolves one prerequisite, but it does not unlock broad license patching by itself.

No deferred maintenance action is authorized by this document.
