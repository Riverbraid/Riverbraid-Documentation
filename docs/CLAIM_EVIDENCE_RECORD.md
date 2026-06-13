# Claim Evidence Record

**Status**: FORMAT DRAFT  
**Purpose**: portable claim-to-evidence record

A Claim Evidence Record (CER) links a bounded claim to the repositories, commits, verifier outputs, workflow runs, limitations, and evidence files supporting it.

## Required fields

```yaml
claim_id:
claim_text:
claim_level:
timestamp_utc:
repo_commits:
  - repository:
    commit:
workflow_runs:
  - repository:
    run_id:
    conclusion:
verifiers:
  - repository:
    command:
    result:
evidence_files:
  - path:
known_limitations:
  - limitation:
non_claims:
  - non_claim:
signature:
  status: OPTIONAL
```

## Claim level examples

- DOCUMENTATION_ONLY
- STATIC_INVENTORY
- PATCHED_UNVERIFIED
- EXECUTION_EVIDENCED
- PROOF_OF_CONCEPT_SCOPE_CLOSED
- MANUAL_CONFIRMATION_REQUIRED
- UNKNOWN_PENDING_EVIDENCE

## Boundary

A CER records evidence. It does not make a claim stronger than the evidence it links.
