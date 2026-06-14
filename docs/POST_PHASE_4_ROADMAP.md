# Post-Phase-4 Roadmap

**Status**: ROADMAP / EVIDENCE-GATED  
**Phase 4 proof-of-concept scope**: CLOSED  
**Security claim**: NONE  
**Production readiness claim**: NONE  
**External audit claim**: NONE  
**Certification claim**: NONE

## Current bounded claim

```text
PROOF_OF_CONCEPT_SCOPE_GREEN_SYNCED_LOCAL_AND_REMOTE_EXTRA_ARTIFACT_AUDITED_NOT_CERTIFICATION_NOT_PRODUCTION_NOT_EXTERNAL_AUDIT
```

## Decision rule

```text
Choose the option that makes the smallest claim while still being useful.
If two choices are equally coherent, choose the one that requires less future maintenance.
Every claim must remain smaller than or equal to the available evidence.
```

## Phase 0 - Closeout and documentation

- Update Phase 4 remediation status.
- Update Phase 4 audit gap report.
- Reconcile Phase 4 completion wording.
- Create repo-by-repo issue inventory.
- Document Evaluation Kit registry scope gap.
- Add remediation addenda only when historical records need preservation.

## Phase 1 - Evidence reconciliation and issue hygiene

- Inventory open issues by repository.
- Classify issues by phase and evidence state.
- Close duplicates only with canonical references.
- Update stale issue bodies.
- Confirm open PR residue.

## Phase 2 - Execution evidence for patched items

- Refusal-Gold fail-closed behavior.
- Harness-Gold runtime GPG binding.
- Evaluation Kit verifier allowlist.
- Gold-V2 dependency fail-closed behavior and neighboring-repo boundary.
- Bounded `audit_final.js` scaffold checks.

## Phase 2.6 - Petal depth execution evidence

The question is not whether a petal is generally functional. The question is whether its claimed verifier depth matches its actual verifier depth.

A presence-check petal is coherent when it documents that limit.

The four petals requiring execution evidence are:

- Memory-Gold: stub-to-behavioral replacement done, execution unverified.
- Judicial-Gold: stub-to-behavioral replacement done, execution unverified.
- Safety-Gold: stub-to-behavioral replacement done, execution unverified.
- Integration-Gold: stub-to-behavioral replacement done, execution unverified.

Reference: `docs/evidence-plans/PHASE_2_6_PETAL_DEPTH_EXECUTION.md`.

## Phase 3 - GitHub security settings and repository hardening

- Branch protection.
- Repository rulesets.
- Force-push and branch deletion protection.
- Required status checks.
- Secret scanning and push protection.
- Private vulnerability reporting.
- Dependabot.
- CodeQL/default scanning where relevant.

## Phase 4 - Secret, history, and artifact safety

- Git history secret scanning.
- Release asset review if releases exist.
- Workflow artifact review.
- Local evidence packet review before external sharing.
- Current-tree versus history-audit boundary documentation.

## Phase 5 - Reproducibility and supply chain

- Docker digest evidence and possible pinning.
- Environment lock update.
- `ubuntu-latest` inventory and runner boundary.
- Tag-pinned action inventory and SHA-pin decision.
- Dependency policy, vulnerability scans, license scans, and SBOM decision.

## Phase 6 - Verification depth and registry truth

- Package-script-level verifier classification.
- Presence-check-only repository handling.
- Registry succession rules.
- Registry refresh authorization and rollback path.
- Refusal-Gold pin refresh only after evidence.
- Registry expansion gate before moving beyond 30 entries.

## Phase 7 - License, community health, and contribution infrastructure

- Full license audit.
- Central `.github` versus per-repo community health decision.
- Issue templates.
- PR templates.
- Security concern, registry change, new petal, and external finding templates.

## Phase 8 - Readiness matrix and evidence ledger

- Repo-by-repo readiness matrix.
- Evidence ledger.
- Claim ledger.
- Known limitations ledger.
- Claim Evidence Record format.

## Phase 9 - Release, tag, and archive discipline

- Tag inventory.
- Release inventory.
- Deprecation policy.
- Versioning and changelog policy.
- Signed tag and checksum decisions.
- Evidence attachment policy.

## Phase 10 - First-reader and public coherence

Status: DROP 1 IMPLEMENTED AS BOUNDED DOCUMENTATION.

- Riverbraid Manifesto.
- Riverbraid in 10 minutes.
- What PASS means / does not mean.
- Minimum viable inspection path.
- Architecture map.
- Failure explainer.
- Integration guide.
- Glossary.
- Known limitations.
- FAQ / misconceptions.
- Non-technical reviewer guide.
- Production readiness gate.
- Certification exploration boundary.

## Phase 10A - Adoption enablement

- Adoption tiers.
- Forks and adaptations policy.
- Adaptation template.
- Use-case profiles.
- Hypothetical adoption stories.
- Pilot proposal template.
- External reviewer guide.
- Adoptability checklist.
- Bounded proof badge.

## Phase 11 - Developer experience and tooling

Status: DROP 3 IMPLEMENTED AS DESIGN DOCUMENTATION.

- `rb` CLI design.
- Evidence packet generator.
- Health dashboard.
- Custom verifier examples.

## Phase 12 - Ecosystem visualization and coherence

Status: DROP 3 PARTIALLY IMPLEMENTED AS PLAN DOCUMENTATION.

- Interactive system map.
- Static health dashboard.
- Coherence dashboard.
- Machine-readable lifecycle registry.
- Version/status reference.
- Claim drift, registry drift, workflow drift, and verifier-depth drift monitoring.

## Phase 13 - Extension API and third-party integration

Status: DROP 2 PARTIALLY IMPLEMENTED AS BOUNDED DOCUMENTATION.

- File-based `petal.json` contract.
- Example `examples/petal.json`.
- `schemas/petal-contract.schema.json`.
- New petal proposal template.
- Third-party contribution framework.
- Compatibility language.

## Phase 14 - Domain expert onboarding and petal governance

Status: DROP 2 PARTIALLY IMPLEMENTED AS BOUNDED DOCUMENTATION.

- Petal contribution guide.
- Domain expert review lanes.
- Petal governance model.
- Guardian dashboards.

## Phase 15 - Governance authority boundaries

Status: DROP 2 PARTIALLY IMPLEMENTED AS DECISION MAP.

- Core authority.
- Registry authority.
- Gold admission and deprecation.
- Fork/adaptation provenance rules.
- Dispute resolution.
- Staged governance path.

## Phase 16 - External review and audit readiness

Status: DROP 3 PARTIALLY IMPLEMENTED AS PACKET SCAFFOLDS.

- External review packet.
- Known limitations packet.
- Reproduction packet.
- Security inventory packet.
- Registry inventory packet.
- Evidence map.
- Fork test guide.

## Phase 17 - Applied governance profiles

Status: DROP 3 PARTIALLY IMPLEMENTED AS APPLIED PROFILE DRAFT.

- AI governance transparency.
- Data-center / AI infrastructure governance.
- Public-sector decision auditability.
- Education AI oversight.
- Safety-critical AI review.
- Creative AI systems governance.
- Research lab reproducibility.
- Climate / energy infrastructure accountability.

## Phase 18 - Data-center and AI infrastructure governance profile

Status: DROP 3 IMPLEMENTED AS APPLIED PROFILE DRAFT.

Future applied profile only. Not a Core mutation.

Potential surfaces:

- heat reuse evidence
- water use evidence
- grid flexibility evidence
- compute commons evidence
- transparency/sensor evidence
- public benefit ledger
- agency responsibility map
- claim-vs-evidence separation

## Phase 19 - Production readiness gate

No production-readiness claim until security, reproducibility, registry succession, verifier depth, and external review are materially stronger.

Most important gate: independent security review of CI/CD, registry update mechanisms, and secret handling.

## Phase 20 - Certification or compliance exploration

Optional and far future. Do not use certification language until a real process, criteria, evidence review, scope, expiration, and anti-false-certification policy exist.

## Boundary

This roadmap does not mutate registry pins, releases, tags, protocol files, hashes, seals, manifests, workflows, or secrets.

It does not claim security, production readiness, certification, legal approval, external audit, or absence of defects.
