# Domain Expert Review Lanes

**Status**: DRAFT / STRUCTURAL REFERENCE  
**Scope**: lane-scoped review guidance  
**Protocol mutation**: NONE

## Purpose

Riverbraid's behavioral boundaries span multiple domains. No single reviewer can assess all of them.

This document defines review lanes: which expertise is relevant to which part of the system, what those reviewers are asked to assess, and what they are not asked to assess.

A reviewer in one lane does not speak for another lane's scope.

## How to use these lanes

Each lane defines:

- required expertise
- assessment scope
- non-scope
- most relevant repositories
- useful finding shape

Reviewers should produce bounded findings: what was observed, which claim is relevant, and whether the claim is supported, unsupported, or outside the reviewer's lane.

## Lane 1 - Security

Expertise: application security, infrastructure security, supply-chain security, or cryptographic security.

Asked to assess:

- branch protection and rulesets
- GitHub Actions permission model
- secret scanning and push protection configuration
- Dependabot configuration
- signing consistency
- dependency supply-chain risk
- Docker base image posture
- workflow timeout and concurrency controls
- guardian key ceremony design

Not asked to assess:

- legal compliance
- domain-specific behavioral correctness
- prose quality
- whether Riverbraid should exist

Most relevant repositories:

- Riverbraid-Core
- Riverbraid-Harness-Gold
- Riverbraid-GPG-Gold
- Riverbraid-Evaluation-Kit
- Riverbraid-Secrets-Safe
- Riverbraid-Security-Gold

## Lane 2 - Law and policy

Expertise: technology law, AI governance policy, regulatory compliance, public-sector procurement, or adjacent governance review.

Asked to assess:

- claim-language accuracy
- non-claim adequacy
- compatibility language
- proof-of-concept boundary defensibility
- certification boundary language
- adaptation separation from canonical authority

Not asked to assess:

- verifier implementation
- cryptographic soundness
- infrastructure operations

Most relevant repositories:

- Riverbraid-Documentation
- Riverbraid-Governance
- Riverbraid-Evaluation-Kit
- `.github`

## Lane 3 - Infrastructure and operations

Expertise: cloud infrastructure, CI/CD, container security, DevOps, or reproducibility.

Asked to assess:

- Docker digest and base image policy
- runner version policy
- workflow reproducibility
- environment lock accuracy
- local/Docker reproduction path
- npm and Cargo dependency consistency

Not asked to assess:

- behavioral domain boundaries
- legal language
- governance authority

Most relevant repositories:

- Riverbraid-Evaluation-Kit
- Riverbraid-Build-V5
- Riverbraid-Gold-V2
- Riverbraid-Types
- riverbraid-tsh
- Riverbraid-Wasm-Bridge

## Lane 4 - Cryptography

Expertise: applied cryptography, GPG/PGP infrastructure, signing systems, or key ceremony design.

Asked to assess:

- guardian key ceremony design
- GPG binding in Harness-Gold
- signing model and immutability claims
- mutable timestamp or mutable evidence fields
- cryptographic surfaces in related support repositories

Not asked to assess:

- non-cryptographic behavioral boundaries
- legal language
- infrastructure operations

Most relevant repositories:

- Riverbraid-Harness-Gold
- Riverbraid-GPG-Gold
- Riverbraid-Crypto-Gold
- Riverbraid-Core
- riverbraid-tsh
- Riverbraid-Wasm-Bridge

## Lane 5 - Energy, water, and physical infrastructure

Expertise: data-center operations, energy systems, water systems, grid management, or infrastructure governance.

Asked to assess:

- data-center / AI infrastructure evidence surfaces
- heat reuse, water use, grid flexibility, and compute commons evidence categories
- public benefit ledger concept
- agency responsibility map
- failure behavior in physical infrastructure governance contexts

Not asked to assess:

- cryptographic implementation
- GitHub security settings
- legal compliance

Most relevant surfaces:

- Riverbraid-Documentation applied profiles
- future infrastructure templates

## Lane 6 - Education and research

Expertise: educational technology, AI in education, research integrity, or academic AI governance.

Asked to assess:

- education AI oversight profile scope
- research reproducibility profile evidence requirements
- proof-of-concept framing for academic reviewers
- first-reader document accessibility

Not asked to assess:

- cryptographic implementation
- infrastructure operations
- legal compliance

Most relevant repositories:

- Riverbraid-Documentation
- Riverbraid-Evaluation-Kit

## Lane 7 - Accessibility and inclusion

Expertise: accessibility standards, inclusive design, or public-facing communication design.

Asked to assess:

- first-reader documentation accessibility
- glossary completeness
- adoption tier clarity
- readability for non-technical readers

Not asked to assess:

- technical implementation
- legal language
- cryptographic soundness

Most relevant repository:

- Riverbraid-Documentation

## Lane 8 - Creative systems

Expertise: creative AI, generative art governance, creative rights, or provenance.

Asked to assess:

- creative AI provenance evidence surfaces
- witness-not-judgment principle in creative domains
- provenance framing for creative practitioners

Not asked to assess:

- infrastructure security
- supply-chain hardening
- unrelated legal frameworks

Most relevant surface:

- future Creative AI Provenance profile

## What happens with reviewer findings

1. Findings are recorded in a review tracking issue.
2. Each finding is classified as accepted, under review, deferred, or out of scope.
3. Dissenting findings are preserved.
4. Findings do not automatically change registry entries, verifiers, or claim language.
5. No reviewer speaks outside their lane in official finding records.

A review does not constitute an audit. A finding does not constitute certification.

## How to engage as a reviewer

Open an issue in Riverbraid-Documentation describing the review lane, background, and scope.

Lane-scoped review is more useful than surface-level review of everything.

## Non-claim

This document does not claim review has occurred and does not create certification, audit, or production-readiness status.
