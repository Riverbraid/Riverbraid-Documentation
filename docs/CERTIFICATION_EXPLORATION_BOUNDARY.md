# Certification Exploration Boundary

**Status**: BOUNDARY ACTIVE - certification is NOT claimed and may NOT be claimed  
**Current claim level**: PROOF_OF_CONCEPT_SCOPE_GREEN

This document defines the hard boundary around certification and compliance language.

It does not create a certification process. It does not imply one is imminent.

## Why this document exists

Riverbraid may attract interest from people who want to know whether it is certified, compliant, or usable to satisfy a regulatory requirement.

The honest current answer is:

```text
Certification: NOT CLAIMED
Compliance: NOT CLAIMED
External audit: NOT CLAIMED
```

This document makes that boundary explicit.

## What certification would require

Certification is a specific claim: that an independent, qualified party reviewed a system against defined criteria and found it to meet those criteria within a defined scope, valid until a defined expiration or renewal.

None of the following currently exist for Riverbraid:

- certifying body or process
- defined certification criteria
- independent review against those criteria
- preserved audit trail from such a review
- bounded certification scope
- expiration or renewal process
- downstream false-certification policy with enforcement

Until these exist, no certification language may be used.

## Prohibited language

Do not use:

- Riverbraid-certified
- certified by Riverbraid
- passed Riverbraid certification
- meets Riverbraid compliance standards
- Riverbraid-approved
- officially approved
- production approved
- externally audited, unless an actual external audit occurred
- third-party certified
- compliance-verified
- meets [standard name] through Riverbraid

These phrases remain prohibited regardless of good intent, proof-of-concept closeout, informal positive feedback, or implementation quality.

## Permitted language

Use bounded language such as:

- Riverbraid proof-of-concept scope: closed
- Riverbraid Evaluation Kit: PASS, scope: pinned registry
- Riverbraid-aligned
- Riverbraid-based pilot
- Riverbraid-inspired governance surface
- governance floor verified in GitHub Actions as of [date]

## Compliance exploration

If Riverbraid eventually engages with a formal compliance framework, the sequence is:

1. Identify the framework and requirements.
2. Map Riverbraid's current state against those criteria.
3. Do not assume existing evidence satisfies requirements not written to those requirements.
4. Engage an independent qualified assessor.
5. Preserve all findings, including negative findings.
6. Scope the claim precisely.
7. Define renewal or expiration before publishing the claim.
8. Publish non-claims alongside any future compliance claim.

None of these steps have occurred.

Compliance exploration is optional and far future.

## Applied profiles

An applied profile may have its own domain compliance requirements.

Those requirements are separate from Riverbraid's certification status.

An applied profile may satisfy its own domain requirements independently, but it may not claim that Riverbraid itself is certified.

Applied profiles must maintain their own claims and non-claims.

## Registry and this boundary

Adding a repository to the Evaluation Kit registry is not a certification event.

It is a verification event: the repository was cloned at a pinned commit, its configured verifier ran, and the output matched expected results.

A registry PASS is not:

- a security audit
- a code review
- a compliance check
- a certification

## Current status summary

```text
Certification: NOT CLAIMED
Compliance: NOT CLAIMED
External audit: NOT CLAIMED
Independent review: NOT COMPLETED
Certifying body: DOES NOT EXIST
Certification criteria: NOT DEFINED
Potential future certification scope: NOT DEFINED
```

This status is not a deficiency. It is part of the trust surface.

Known limitations are not hidden failures. They are the current edge of the evidence.

## Non-claim

This document does not move Riverbraid toward certification. It describes what certification would require and prohibits premature certification language.
