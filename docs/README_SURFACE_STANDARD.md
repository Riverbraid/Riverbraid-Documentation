# README Surface Standard

**Status**: TEMPLATE / INFORMATIVE
**Authority boundary**: Communication standard only
**Implementation claim**: NONE
**Verification claim**: NONE

## Purpose

This document defines the common README shape used across Riverbraid repositories so the estate feels familiar, navigable, and honest to open source readers.

This standard improves communication consistency only.

It does not change repository authority, verification status, registry status, implementation status, protocol behavior, release state, or security settings.

## Canonical identity line

Riverbraid is an open source deterministic integrity floor for AI governance: a fail closed, byte auditable architecture that makes structure, authority, and drift visible before trust is granted.

This line may be included in public README surfaces, but each repository should still explain its own role plainly.

## Preferred README shape

```md
# Repository Name

Riverbraid is an open source deterministic integrity floor for AI governance: a fail closed, byte auditable architecture that makes structure, authority, and drift visible before trust is granted.

## Role in Riverbraid

This repository is...

## Start Here

...

## Verification or Evidence Path

...

## What This Does Not Claim

...

## Contribution Posture

...

## Help, Issues, and Security

...

## Next Link

...
```

## Required communication fields

A major public README should make clear:

- identity
- repository role
- start path
- evidence path
- non claims
- contribution posture
- help or issue path
- security report path
- next link

## Contribution posture labels

Allowed labels:

- OPEN
- LIMITED
- DOCUMENTATION ONLY
- NOT READY
- PARKED

A repository may be readable without being mechanically mature.

A repository may be welcoming without being contribution ready.

A repository may be directional without being verified.

Each state must be labeled.

## Evidence linked status language

Badges, status labels, maturity labels, verification labels, and public claims should point to addressable evidence where possible.

Preferred evidence record shape:

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

A status claim without an evidence surface remains scaffold or draft.
