# F0–F4 Control-Package Source Custody and Comparison Preparation

**Status:** `ACTIVE_NONCONTROLLING_COMPARISON_PREPARATION`  
**As of:** 2026-07-29 UTC  
**Current active gate:** `P0-DISC-001`  
**Control-package status:** `V0_3_PROPOSED_NOT_ADOPTED_NOT_EXECUTED`  
**Historical lineage:** `v0.2-proposed`

## Purpose

This record makes the current source-custody, identity, and GitHub-observation boundary explicit before P0 and F0.

It prepares Riverbraid for a future byte-level comparison or source-bound rebind when the exact current package bytes are placed in one controlled workspace. It does not adopt, execute, publish, normalize, merge, or supersede any control-package artifact.

## Current source relationship

The current proposed implementation-control basis is reported as:

```text
RB-F0-F4-IMPLEMENTATION-CONTROL-MANUAL-001
VERSION:
v0.3-proposed

ADOPTION:
NOT ISSUED

P0:
NOT EXECUTED

F0:
NOT CLOSED
```

The prior v0.2 manual, adoption candidate, and machine-package bindings remain historical lineage.

GitHub has not been established as the canonical custody location for either the current v0.3 control package or the historical v0.2 package. Their absence from the observed GitHub surface is therefore not a defect and does not invalidate their reported source custody.

## Known pre-P0 identity split

The current v0.3 manual/adoption path and the older machine package are not yet one coherent identity chain:

```text
CURRENT_V0_3_MANUAL_DIGEST_PREFIX:
1643b9d9

LEGACY_MACHINE_PACKAGE_MANUAL_DIGEST_PREFIX:
5a6be223

STATUS:
PRE_P0_HOLD / MACHINE_PACKAGE_REBIND_REQUIRED
```

The full digests must be calculated or confirmed from the exact source bytes in a common byte-preserving workspace. Digest prefixes are identity aids only and must not be substituted for complete SHA-256 values.

Do not issue overlapping adoption instruments that bind different manual identities.

The bounded resolution is:

1. Retrieve the exact v0.3 manual and companion-profile bytes without normalization.
2. Rebuild or amend the machine manifest and package identity against those bytes.
3. Issue one successor or consolidated adoption identity for the coherent v0.3 package.
4. Recompute the complete checksum set.
5. Rerun the schema, fixture, canonicalization, and end-to-end self-tests.
6. Preserve v0.2 as historical lineage.
7. Emit `PRE_P0_READY` only if all applicable holds are closed.

## GitHub observation

The connected `Riverbraid` account is a GitHub user account with 52 accessible public repositories.

The observation covered:

- exact-name and content search on connected default-branch surfaces;
- direct inspection of likely authority, evaluation, registry, documentation, and profile repositories;
- current metadata for these eight open preparation pull requests:
  - `Riverbraid/Riverbraid-Core#7`;
  - `Riverbraid/Riverbraid-Evaluation-Kit#13`;
  - `Riverbraid/Riverbraid-Golds#6`;
  - `Riverbraid/Riverbraid-Documentation#26`;
  - `Riverbraid/.github#5`;
  - `Riverbraid/Riverbraid-Refusal-Gold#7`;
  - `Riverbraid/Riverbraid-Harness-Gold#6`;
  - `Riverbraid/Riverbraid-Gold-V2#3`.

The exact current v0.3 manual, current successor adoption identity, companion profile, machine package, and complete schema bundle were not located on that observed GitHub surface.

This is a bounded non-finding. It does not prove absence from every historical commit, unindexed branch, unenumerated ref, private surface, local archive, document library, or external custody location.

The machine-readable observation is recorded in:

```text
docs/F0_F4_GITHUB_COMPARISON_PREPARATION.json
```

The exact GitHub preparation handoff is recorded in:

```text
docs/PRE_P0_GITHUB_HANDOFF.md
docs/PRE_P0_GITHUB_HANDOFF.json
```

## Current and historical file identities

### Current proposed basis

```text
RB-F0-F4-IMPLEMENTATION-CONTROL-MANUAL-001_v0.3-proposed.md
```

The exact successor or consolidated adoption filename, companion-profile filename, machine-manifest filename, and any complete current checksum filename remain source-bound and must be taken from the actual v0.3 package. This record does not invent them.

### Historical lineage

```text
RB-F0-F4-IMPLEMENTATION-CONTROL-MANUAL-001_v0.2-proposed.md
RB-F0-F4-IMPLEMENTATION-CONTROL-MANUAL-001-ADOPTION-001_v0.2-proposed.md
```

### Schema candidates expected in the source-bound bundle

```text
p0-discovery.schema.json
p0-exclusion-ledger.schema.json
p0-reentry-state.schema.json
p0-expected-record-registry.schema.json
evaluator-result.schema.json
evidence-envelope.schema.json
fault-record.schema.json
repair-attempt.schema.json
current-status-view.schema.json
advancement-authority.schema.json
SCHEMA-BUNDLE-MANIFEST.json
```

## Current comparison state

```text
ACTUAL_V0_3_SOURCE_BYTES:
AVAILABLE_OUTSIDE_GITHUB / NOT_RETRIEVED_IN_A_COMMON_COMPARISON_WORKSPACE

GITHUB_CANDIDATE_BYTES:
NONE IDENTIFIED

COMMON_WORKSPACE_SHA256:
NOT COMPUTED

BYTE_COMPARISON:
NOT READY

MACHINE_PACKAGE_REBIND:
REQUIRED BEFORE PRE_P0_READY
```

A GitHub blob SHA is not a SHA-256 digest and must not be substituted for one.

## Future byte-comparison and rebind procedure

The current package may be compared or rebound only after exact source identities are available in a controlled workspace.

Required inputs:

1. Byte-preserving retrieval of every actual source artifact.
2. Exact current role and filename for every package component.
3. Exact candidate repository/ref/path for any GitHub candidate, if one is later designated.
4. A common workspace in which all byte streams can be observed without normalization.

Required observations for every file:

- source byte length;
- candidate byte length, when applicable;
- source SHA-256;
- candidate SHA-256, when applicable;
- UTF-8 BOM presence;
- line-ending profile;
- byte-identical, byte-different, missing, or not-comparable result;
- provenance and custody identity.

Allowed comparison results:

```text
BYTE_IDENTICAL
BYTE_DIFFERENT
SOURCE_MISSING
CANDIDATE_MISSING
NOT_COMPARABLE
```

Comparison does not create adoption, authority, execution evidence, validation, or gate closure.

## Prohibited actions and inferences

This preparation record does not authorize:

- uploading or normalizing the v0.3 manual, companion profile, schemas, or machine package;
- issuing both a v0.2-bound and a v0.3-bound adoption instrument;
- adopting the manual or any adoption instrument;
- executing P0 discovery;
- merging any of the eight GitHub preparation pull requests as part of P0;
- changing registry pins, releases, tags, or repository settings;
- validating schemas as proof of implementation;
- treating planned evidence as performed evidence;
- treating successful draft-head workflows as F0–F4 closure evidence;
- advancing F0, F1, F2, F3, or F4.

## Controlling state

```text
CURRENT_ACTIVE_GATE:
P0-DISC-001

CURRENT_CONTROL_BASIS:
v0.3-proposed

CONTROL_PACKAGE_STATUS:
PROPOSED_NOT_ADOPTED_NOT_EXECUTED

HISTORICAL_LINEAGE:
v0.2-proposed

GITHUB_COPY_STATUS:
NOT LOCATED ON OBSERVED SURFACE

PRE_P0_HOLD:
MACHINE PACKAGE REBIND REQUIRED

NEXT_PERMITTED_ACTION:
COMPLETE THE SOURCE-BOUND V0.3 REBIND, CHECKSUMS, AND SELF-TESTS; THEN ISSUE PRE_P0_READY ONLY IF SUPPORTED
```

## Review triggers

Review this record when:

- the exact v0.3 source bytes and full digests are placed in one controlled workspace;
- the successor or consolidated adoption identity is finalized;
- the machine package is rebound;
- checksums or self-test outcomes change;
- an exact GitHub candidate is designated;
- any of the eight preparation pull-request heads move;
- the control package is adopted or superseded;
- the active gate changes.
