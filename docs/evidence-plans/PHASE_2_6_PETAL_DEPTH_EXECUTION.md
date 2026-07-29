# Evidence Record: Phase 2.6 Petal Depth Execution

**Status**: EXECUTED_BOUNDED_AT_PINNED_REGISTRY_COMMITS  
**Execution surface**: Evaluation Kit exact draft run  
**Evaluation Kit head**: `868341e2a26ae1ac912be170a2930034b06623ee`  
**Workflow run**: `30286309516`  
**Workflow job**: `90044856022`

## Purpose

Record the actual execution depth of the four Gold petals whose stub-to-behavioral-verifier replacements were previously described as unverified.

The governing rule remains:

```text
A petal is coherent when its claimed verifier depth matches its actual verifier depth.
```

## Execution relationship

The exact Evaluation Kit registry pinned and executed `npm test` for:

| Repository | Pinned commit | Test entrypoint |
|---|---|---|
| Riverbraid-Memory-Gold | `61f2d133c4871aabd4b9a8693d43b239aafe013a` | `node verify.mjs` |
| Riverbraid-Judicial-Gold | `a2264337c8f7f0309643a7e87013455a0b61885e` | `node verify.mjs` |
| Riverbraid-Safety-Gold | `a627835947c1a8787c4811c36e82f4680a83365a` | `node verify.mjs` |
| Riverbraid-Integration-Gold | `d000884e327bd68058d52a89a8cf82038a12c454` | `node verify.mjs` |

The full Evaluation Kit run completed successfully and emitted `REPRODUCTION_MATCH` for the exact registry and expected-result set.

This is repository-owned aggregate execution evidence. It is not independent reproduction and does not give every petal equal verification depth.

## Depth classification

### Riverbraid-Memory-Gold

**Status:** `EXECUTION_EVIDENCED_MULTI_VECTOR_BEHAVIORAL_VERIFIER`

The pinned verifier:

- requires the declared files and protocol identity;
- rejects forbidden nondeterministic source patterns;
- requires at least three test vectors;
- calls the exported `verify` function for each vector;
- compares actual pass results to expected results;
- writes a bounded result and exits nonzero on failure.

The implementation evaluates input validity, meaning-density floor, redundancy ceiling, duplicate rejection, and bounded ring-buffer behavior.

### Riverbraid-Judicial-Gold

**Status:** `EXECUTION_EVIDENCED_CANONICAL_VECTOR_BEHAVIORAL_CHECK`

The pinned verifier executes one canonical input through the exported `verify` function and compares the stationary result to the expected result.

The implementation contains invalid-input and stationary/drift behavior, but the declared `npm test` command executes only the canonical configured case. Negative-path execution is not established by this record.

### Riverbraid-Safety-Gold

**Status:** `EXECUTION_EVIDENCED_CANONICAL_VECTOR_BEHAVIORAL_CHECK`

The pinned verifier executes one canonical input through the exported `verify` function and compares the stationary result to the expected result.

The implementation contains invalid-input and stationary/drift behavior, but the declared `npm test` command executes only the canonical configured case. This does not establish broad safety behavior or negative-path coverage.

### Riverbraid-Integration-Gold

**Status:** `EXECUTION_EVIDENCED_CANONICAL_COHERENCE_CHECK_NOT_F3_INTEGRATION`

The pinned verifier executes one canonical petals array through deterministic logic that checks nonempty string identifiers and `active` status, then compares the resulting coherence value to the expected result.

This is a behavioral check of the provided input structure. It does not pass real data across repository boundaries and must not be described as F3 integration proof.

## Evidence limits

This record establishes command execution and the source-inspected depth of the exact pinned verifiers only.

It does not establish:

- direct preserved per-petal workflow artifacts separate from the aggregate Evaluation Kit run;
- negative-path execution for Judicial, Safety, or Integration;
- current default-branch freshness;
- independent reproduction;
- F3 cross-repository integration;
- production readiness, certification, external audit, or absence of defects.

## Review triggers

Reassess when:

- a registry pin changes;
- a package test script changes;
- a verifier or protocol vector changes;
- a petal claims deeper behavioral coverage;
- negative fixtures are added;
- F3 functional-core membership or integration is proposed.
