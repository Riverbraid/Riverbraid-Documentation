# F0–F4 Control-Package Source Custody and Comparison Preparation

**Status:** ACTIVE_NONCONTROLLING_COMPARISON_PREPARATION  
**As of:** 2026-07-27  
**Current active gate:** `P0-DISC-001`  
**Control-package status:** `PROPOSED_NOT_ADOPTED_NOT_EXECUTED`

## Purpose

This record makes the current source-custody and GitHub-observation boundary explicit before F0–F4 begins.

It prepares Riverbraid for a future byte-level comparison of the actual implementation-control manual and actual schema bundle if that comparison is explicitly directed.

It does not adopt, execute, publish, normalize, modify, merge, or supersede any control-package artifact.

## Current source relationship

The actual v0.2 implementation-control manual and schema bundle are reported as existing in the Library and source-bound local preparation package.

GitHub has not been established as their current canonical custody location.

Therefore, failure to locate matching filenames on the observed GitHub surface is not a defect, does not invalidate the source package, and does not block honest pre-P0 preparation.

## GitHub observation

The connected Riverbraid account is a GitHub **user account** with 52 accessible public repositories.

The observation covered:

- exact-name and content search on connected default-branch surfaces;
- direct inspection of the most likely authority, evaluation, registry, documentation, and profile repositories;
- changed-file inventories for the known open preparation pull requests:
  - `Riverbraid-Core#7`;
  - `Riverbraid-Evaluation-Kit#13`;
  - `Riverbraid-Golds#6`;
  - `Riverbraid-Documentation#26`.

The exact filenames for the manual, adoption candidate, eleven schemas, and schema-bundle manifest were **not located on that observed surface**.

This is a bounded non-finding. It does not prove absence from every historical commit, unindexed branch, unenumerated ref, private surface, local archive, or external custody location.

The machine-readable observation is recorded in:

```text
docs/F0_F4_GITHUB_COMPARISON_PREPARATION.json
```

## Exact files prepared for future comparison

```text
RB-F0-F4-IMPLEMENTATION-CONTROL-MANUAL-001_v0.2-proposed.md
RB-F0-F4-IMPLEMENTATION-CONTROL-MANUAL-001-ADOPTION-001_v0.2-proposed.md
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
ACTUAL_SOURCE_BYTES:
AVAILABLE_OUTSIDE_GITHUB / NOT_RETRIEVED_BY_THIS RECORD

GITHUB_CANDIDATE_BYTES:
NONE_IDENTIFIED

COMMON_WORKSPACE_SHA256:
NOT_COMPUTED

BYTE_COMPARISON:
NOT_READY_NO_GITHUB_CANDIDATE
```

A GitHub blob SHA is not a SHA-256 digest and must not be substituted for one.

## Future byte-comparison procedure

A comparison may occur only after explicit direction identifies the candidate source precisely.

Required inputs:

1. Byte-preserving retrieval of the actual source artifact.
2. Exact candidate repository.
3. Exact branch, tag, commit, or pull-request head.
4. Exact candidate path.
5. A common controlled workspace in which both byte streams can be observed without normalization.

Required observations for each file:

- source byte length;
- candidate byte length;
- source SHA-256;
- candidate SHA-256;
- UTF-8 BOM presence;
- line-ending profile;
- byte-identical or byte-different result;
- missing-source, missing-candidate, or not-comparable state where applicable.

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

- uploading the manual or schemas to GitHub;
- rewriting or normalizing their bytes;
- adopting the manual or adoption instrument;
- executing P0 discovery;
- validating schemas as proof of implementation;
- merging a candidate merely because it is byte-identical;
- treating planned evidence as performed evidence;
- advancing F0, F1, F2, F3, or F4.

## Controlling state

```text
CURRENT_ACTIVE_GATE:
P0-DISC-001

CONTROL_PACKAGE_STATUS:
PROPOSED_NOT_ADOPTED_NOT_EXECUTED

GITHUB_COPY_STATUS:
NOT_LOCATED_ON_OBSERVED_SURFACE

NEXT_PERMITTED_ACTION:
NONE UNTIL EXPLICITLY DIRECTED

FUTURE_PERMITTED_ACTION:
READ_ONLY BYTE-LEVEL COMPARISON AGAINST AN EXPLICITLY IDENTIFIED CANDIDATE
```

## Review triggers

Review this record when:

- an exact GitHub candidate is identified;
- source bytes or source digests change;
- the control package is adopted or superseded;
- a broader history or branch inventory is completed;
- the active gate changes.
