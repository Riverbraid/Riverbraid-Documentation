# Evidence Portability

**Status**: PROTOTYPE / LOCKED
**Authority boundary**: Future work only
**Implementation claim**: NONE
**Canonical output claim**: NONE

## Purpose

This document captures the future evidence portability direction for Riverbraid.

## Future direction

Riverbraid may later prototype portable attestation receipts or cryptographic manifests that make verification outputs easier to preserve, share, cite, and attach to external review.

## Boundary

If a receipt generator uses timestamps, random IDs, optional PDF generation, or non canonical formatting, it is a receipt generator, not deterministic protocol output.

Do not call attestation canonical until a schema, generator, verifier, and tests exist.

This document does not add an attestation module, schema, verifier, receipt generator, or release artifact.
