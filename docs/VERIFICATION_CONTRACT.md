# Verification Contract

**Status**: DRAFT / INFORMATIVE
**Authority boundary**: Documentation only
**Verification claim**: NONE

## Purpose

This document defines what a repository must show before claiming verified status.

A repository should not claim verified status merely because files exist.

## Evidence ladder

Future verification language should separate:

- files present
- tests present
- verifier present
- verifier executed
- workflow passed
- registry pinned
- release tagged
- external review received

## Claim rule

A claim only graduates when the evidence surface supports it.

A repository with clear language but no verification path is readable, but not mechanically mature.

## Required evidence record

```md
Claim:
Evidence surface:
Repository:
Path:
Commit:
Workflow run:
Registry entry:
Current status:
Unverified boundary:
```

## Non claims

This document does not verify any repository.

This document does not create registry status, release status, security status, or external review status.
