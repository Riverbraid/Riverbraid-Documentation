# Dependency Boundary Policy

**Status**: DRAFT / INFORMATIVE
**Authority boundary**: Documentation only
**Implementation claim**: NONE

## Purpose

This document prevents hidden dependency drift by defining future dependency boundary language.

## Future rule shape

- no source code edits inside `node_modules`
- no modified dependency folders treated as canonical source
- no generated folder becomes authority
- dependency boundaries must be explicit
- upstream source belongs in its own repository
- downstream consumers must not silently redefine upstream behavior

## Boundary

This document does not change package behavior, dependency versions, verifier behavior, registry state, release state, or security settings.

Any dependency mutation requires a separate explicit gate.
