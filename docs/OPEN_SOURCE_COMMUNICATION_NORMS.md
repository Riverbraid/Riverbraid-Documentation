# Open Source Communication Norms

**Status**: SCAFFOLD / INFORMATIVE
**Authority boundary**: Communication guidance only
**Implementation claim**: NONE
**Verification claim**: NONE

## Purpose

This document captures familiar open source documentation patterns Riverbraid should use for clarity and reader trust.

These norms are communication refinements only.

They do not change protocol behavior, verifier behavior, registry state, release state, security settings, package behavior, canonical authority, or implementation status.

## Communication goal

The public interface should enhance understanding without inflating meaning.

Riverbraid should feel familiar enough to enter and precise enough not to misread.

## Community health files to inventory

- README.md
- LICENSE
- SECURITY.md
- CONTRIBUTING.md
- CODE_OF_CONDUCT.md
- SUPPORT.md
- GOVERNANCE.md
- CHANGELOG.md

These files are communication surfaces.

They do not imply mature community operations unless the relevant process exists.

## Expected public routes

A public repository should eventually make clear:

- how to start
- how to inspect evidence
- how to report an issue
- how to report a security concern
- whether contributions are currently appropriate
- where the reader should go next

## Version and release language discipline

Do not use version labels, release titles, or milestone names that imply stable public API, production release, compliance readiness, security hardening, external audit, or registry freshness unless the matching gate exists.

Changelog entries may describe public communication changes.

Changelog entries do not imply release readiness unless tied to a release gate.

## License communication boundary

License normalization remains locked until the holder decision is made.

The unresolved holder options are:

- Copyright (c) 2026 Riverbraid
- Copyright (c) 2026 Michael John Tilk

No broad license patching should occur until the holder decision is made.

## Issue and PR template direction

Future issue and PR templates should ask:

- What surface are you referring to?
- Is this documentation, verifier behavior, registry state, release state, or security posture?
- What evidence are you citing?
- What claim do you think is unclear?

## Core rule

Every public surface should make the next honest action obvious.
