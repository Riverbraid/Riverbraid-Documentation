# Evidence Packet Generator Design

**Status**: DRAFT / DESIGN ONLY  
**Scope**: standardized Riverbraid evidence packet generation  
**Implementation status**: NOT_IMPLEMENTED  
**Cryptographic signing status**: DESIGN_ONLY / NOT_CLAIMED

## Executive summary

The Evidence Packet Generator is a proposed Riverbraid component for standardizing the output of verification processes.

Evidence packets are intended to become portable, machine-readable records of:

- repository state
- commit under test
- verifier command
- verification result
- limitations
- non-claims
- optional cryptographic proof material

This document describes a target design. It does not claim the generator exists today.

## Core principles

- **Standardization**: evidence packets should follow a versioned schema.
- **Verifiability**: packets should contain enough information to inspect and reproduce the verification path.
- **Completeness**: packets should record command, commit, result, environment, and non-claims.
- **Extensibility**: schema should allow future evidence types.
- **Machine-readability**: packets should be parseable by CLI, dashboards, and auditors.
- **Claim-boundedness**: packets must not imply certification, external audit, production readiness, or registry inclusion unless separately evidenced.

## Packet structure

Each evidence packet should be a JSON document.

Required top-level fields:

| Field | Type | Description |
|---|---|---|
| `schema_version` | string | Evidence packet schema version. |
| `timestamp` | string | UTC timestamp when the packet was generated. |
| `repository_id` | string | Repository identifier. |
| `commit_sha` | string | Exact commit verified. |
| `ring` | integer or null | Riverbraid ring level if applicable. |
| `petal` | string or null | Petal name if applicable. |
| `invariant` | string | Invariant or boundary under test. |
| `status` | string | `VERIFIED`, `FAILED`, `PARTIAL`, or `ERROR`. |
| `verification_details` | object | Tool, version, command, and individual results. |
| `non_claims` | array | Explicit non-claims for this packet. |
| `known_limitations` | array | Current limitations of the evidence. |

Optional top-level fields:

| Field | Type | Description |
|---|---|---|
| `cryptographic_proofs` | object | Hashes, Merkle root, or signature material if implemented. |
| `metadata` | object | Environment, actor, workflow run, or other context. |
| `source_artifacts` | array | Files, workflow runs, or logs used to generate packet. |

## Example packet skeleton

```json
{
  "schema_version": "riverbraid.evidence.v1.0.0",
  "timestamp": "2026-06-14T12:34:56Z",
  "repository_id": "Riverbraid__Riverbraid-Core",
  "commit_sha": "a1b2c3d4e5f67890a1b2c3d4e5f67890a1b2c3d4",
  "ring": 0,
  "petal": "Core",
  "invariant": "CLUSTER_STATIONARY",
  "status": "VERIFIED",
  "verification_details": {
    "tool": "cluster-verify.mjs",
    "version": "1.0.0",
    "command": "npm test",
    "results": [
      {
        "check": "local_remote_aligned",
        "pass": true,
        "message": "Local and remote main branches are aligned."
      }
    ]
  },
  "cryptographic_proofs": {
    "status": "NOT_IMPLEMENTED_IN_THIS_DESIGN_DOC"
  },
  "non_claims": [
    "not a certification",
    "not an external audit",
    "not a production readiness claim"
  ],
  "known_limitations": [],
  "metadata": {}
}
```

## Generation process

Target process:

1. Collect repository path, commit SHA, verifier command, and config.
2. Ensure the verifier runs against the declared commit.
3. Execute verifier or ingest already-preserved verifier output.
4. Aggregate stdout, stderr, exit code, and result status.
5. Record non-claims and known limitations.
6. Optionally hash relevant files and outputs.
7. Optionally sign the packet if a key procedure exists.
8. Write the final JSON packet to a deterministic output path.

## Integration with RB-CLI

Target command:

```text
rb evidence generate
```

Additional commands:

```text
rb evidence validate <path>
rb evidence publish <path>
```

## Cryptographic proof boundary

Merkle roots and digital signatures are future design targets.

They must not be claimed until:

- the signing process exists
- keys are managed under a defined procedure
- unsigned fields are clearly excluded from signature calculation
- verification command is documented
- negative verification examples exist

## Non-claim

This document does not create an evidence packet generator, a signing procedure, or cryptographic evidence. It defines a target packet shape and generation process.
