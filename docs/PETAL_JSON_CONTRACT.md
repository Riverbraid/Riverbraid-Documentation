# Petal JSON Contract

**Status**: DRAFT / STRUCTURAL REFERENCE  
**Scope**: required and optional fields for a Gold petal manifest  
**Registry mutation**: NONE

## Purpose

Every Gold petal in the Riverbraid constellation should be able to declare itself in a machine-readable form.

The `petal.json` file is not the verifier. It is the petal's self-declaration: what it claims to check, what it explicitly does not check, and how to run it.

## File location

Each Gold petal repository should contain:

```text
petal.json
CLAIMS.md
NON_CLAIMS.md
KNOWN_LIMITATIONS.md
```

This document defines the `petal.json` contract. The markdown files provide human-readable claim, non-claim, and limitation boundaries.

## Required fields

### `id`

Type: string  
Format: `[OrganizationName]-[PetalName]-Gold`  
Example: `Riverbraid-Refusal-Gold`

The canonical identifier for this petal. It must match the GitHub repository name exactly.

### `domain`

Type: string  
Example: `refusal`

The bounded behavioral domain this petal covers.

### `version`

Type: string  
Format: semver  
Example: `1.0.0`

The version of this petal manifest. It is independent of Core versioning.

### `claim_level`

Type: string

Allowed values:

```text
PRESENCE_CHECK
SCHEMA_CHECK
DETERMINISTIC_VECTOR_CHECK
NEGATIVE_FAIL_CLOSED_CHECK
DOMAIN_INVARIANT_CHECK
CROSS_REPO_CONSISTENCY_CHECK
CRYPTOGRAPHIC_PROVENANCE_CHECK
```

This field declares the deepest level of verification the petal actually performs.

Do not claim a higher level than the verifier implements. When in doubt, claim lower.

### `verifier`

Type: object

Example:

```json
{
  "command": "npm test",
  "entry_point": "verifier.mjs",
  "exit_zero_means": "boundary satisfied",
  "exit_nonzero_means": "boundary violated or check could not complete"
}
```

The `command` field must be the exact command used in CI. The `entry_point` identifies the file that performs the check.

### `failure_behavior`

Type: string

Plain-language description of what the verifier does when it fails. This must confirm fail-closed behavior.

### `scope`

Type: array of strings

What this petal checks. Be specific. Do not use vague language like `verifies AI safety`.

### `non_scope`

Type: array of strings

What this petal explicitly does not check. This field is required.

A petal without `non_scope` is overclaiming by omission.

### `maintainer`

Type: string

For canonical Golds, use `Riverbraid`. For adapted or third-party petals, use the actual maintainer.

## Optional fields

### `dependencies`

Type: array of strings

Other Riverbraid repositories this petal depends on for its verifier to run.

### `execution_evidence`

Type: string

Allowed values:

```text
EXECUTION_EVIDENCED
PATCHED_UNVERIFIED
SCAFFOLD_ONLY
ABSENT
```

This is the current execution-evidence status. It is not a guarantee.

### `registry_status`

Type: string

Examples:

```text
pinned
not_in_registry
candidate
unknown
```

Informational only. Do not modify this field to force inclusion.

### `known_limitations`

Type: array of strings

Current limitations of this petal's verification. Limitations are part of the trust surface.

### `adaptation_note`

Type: string or null

For third-party or adapted petals only. Describes the relationship to any canonical petal.

## Validation rules

A valid `petal.json`:

1. contains all required fields
2. has `id` matching the repository name
3. has non-empty `non_scope`
4. has `claim_level` matching actual verifier depth
5. has `failure_behavior` confirming fail-closed behavior
6. has `verifier.command` matching the command used in CI

A `petal.json` that claims a higher `claim_level` than its verifier implements is a claim-boundary violation, not a minor inconsistency.

## What `petal.json` is not

- not a security audit
- not a certification
- not execution evidence
- not a registry entry
- not a guarantee of correctness

## Schema reference

See `schemas/petal-contract.schema.json`.

## Example

See `examples/petal.json`.

## Non-claim

This contract does not admit any petal to the registry and does not upgrade verifier depth.
