# Security Floor Inventory

**Status**: TEMPLATE / INFORMATIVE
**Authority boundary**: Self assessment inventory only
**Security claim**: NONE
**External audit claim**: NONE

## Purpose

This document inventories security relevant Riverbraid surfaces without claiming security certification, external audit, hardening, production readiness, or absence of defects.

Security posture is inventory only until evidence surfaces are checked and findings are resolved or explicitly bounded.

## Current known findings and remediation state

1. `Riverbraid-Refusal-Gold/verify.mjs` previously exited success even when internal verification state was unverified. Tracked as `Riverbraid-Refusal-Gold#6`. Current state: PATCHED_UNVERIFIED. The file now exits `process.exit(ok ? 0 : 1)`, but the current main commit had no workflow runs or combined statuses returned during the tool evidence check.
2. `Riverbraid-Evaluation-Kit/run-verification.sh` executes resolved verifier commands through `bash -lc` and runs `npm ci`. Tracked as `Riverbraid-Evaluation-Kit#8`. Current state: OPEN INVENTORY ITEM.
3. `Riverbraid-Evaluation-Kit/Dockerfile` uses a tag-pinned base image rather than an immutable digest. Tracked as `Riverbraid-Evaluation-Kit#9`. Current state: OPEN INVENTORY ITEM.
4. `Riverbraid-Harness-Gold/runtime-binding.js` and `Riverbraid-Harness-Gold/src/runtime-binding.js` previously skipped GPG verification in CI and used shell-string execution. Tracked as `Riverbraid-Harness-Gold#5`. Current state: PATCHED_UNVERIFIED. Both files now use argument-array GPG verification and no longer intentionally skip GPG verification in CI, but execution evidence still needs to be checked.
5. `Riverbraid-Core/.github/workflows/verify.yml` clones sibling repositories from mutable branch state and must be distinguished from pinned verification. Tracked as `Riverbraid-Core#6`. Current state: OPEN INVENTORY ITEM.
6. `Riverbraid-Gold-V2` previously continued after `npm ci` failure. Tracked as `Riverbraid-Gold-V2#2`. Current state: PARTIALLY_REMEDIATED / PATCHED_UNVERIFIED. The workflow now fails closed on `npm ci` failure, but neighboring repository script coupling remains.

## Security surfaces to inventory

- branch protection status
- force push protection
- PR requirement status
- required status checks
- secret scanning
- push protection
- private vulnerability reporting
- SECURITY.md
- CodeQL or code scanning where applicable
- Dependabot alert status
- CI status
- GPG or signing key surfaces
- known security gaps
- manual settings still required

## Evidence class rule

Repository files are file evidence.

GitHub settings are configuration evidence.

Configuration evidence requires manual or API visible confirmation.

Documentation cannot substitute for configuration evidence.

## Non claims

This document does not claim Riverbraid is secure, hardened, audited, penetration tested, production ready, vulnerability free, externally reviewed, or compliant with any security standard.
