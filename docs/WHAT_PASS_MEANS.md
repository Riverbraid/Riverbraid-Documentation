# What PASS Means / Does Not Mean

**Status**: CLAIM BOUNDARY REFERENCE  
**Applies to**: Riverbraid verification surfaces unless a repository defines a narrower boundary.

## PASS means

A PASS means:

- the configured verifier completed successfully
- the configured evidence path was followed
- the bounded claim survived that specific check
- the result is inspectable within the stated scope

For the Evaluation Kit, PASS means the pinned registry was cloned at exact commits, configured verification commands completed, and outputs matched the expected results for that bounded surface.

## PASS does not mean

A PASS does **not** mean:

- certification
- legal approval
- production readiness
- external audit
- absolute security
- complete AI safety
- defect-free status
- compliance with any regulation or standard
- suitability for any specific risk profile
- uniform verifier depth across every repository
- proof of downstream AI system behavior

## FAIL means

A FAIL means the bounded claim did not survive that evidence path.

A fail-closed result should stop stronger claims until the cause is understood and new evidence exists.

## Required claim rule

```text
The claim must be smaller than or equal to the evidence.
```

## Boundary

This file is a claim-boundary reference. It does not change any verifier, registry pin, workflow, release, tag, protocol file, hash, seal, manifest, or secret.
