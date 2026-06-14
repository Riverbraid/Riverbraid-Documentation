# Riverbraid-Golds Implementation Queue

**Status**: FUTURE_WORK_INTAKE / NOT_IMPLEMENTED  
**Source**: user-provided missing-file reference packet, 2026-06-14  
**Target repository**: `Riverbraid/Riverbraid-Golds`  
**Current boundary**: planning only

## Purpose

This document records the Riverbraid-Golds missing-file packet as future implementation input.

It does not copy the packet directly into the active repository, because the packet contains workflow, release, security, evidence, and maturity claims that require reconciliation before mutation.

## Current known repo state

`Riverbraid-Golds` currently functions as a constellation coordination / registry-support surface.

The current implementation is not yet the full Node package described in the missing-file packet.

## Non-claims

This queue does not claim:

- Riverbraid-Golds is production ready.
- Riverbraid-Golds is certified.
- Riverbraid-Golds is externally audited.
- Riverbraid-Golds has completed registry succession implementation.
- Riverbraid-Golds has completed expansion-gate enforcement.
- Riverbraid-Golds has completed security hardening.
- Riverbraid-Golds has completed CI/CD hardening.
- The pasted files have been executed or validated.
- The pasted evidence and claim ledgers are true evidence.
- The registry currently has verified 32 entries unless confirmed by the active canonical registry surface.

## Intake summary

The packet proposes future files in these categories:

1. GitHub workflows
   - `.github/workflows/ci.yml`
   - `.github/workflows/security.yml`
   - `.github/workflows/codeql.yml`
   - `.github/workflows/quality-gates.yml`
   - `.github/workflows/release.yml`

2. GitHub configuration
   - `.github/CODEOWNERS`
   - `.github/config.yml`
   - `.github/dependabot.yml`

3. GitHub templates
   - `.github/ISSUE_TEMPLATE/bug_report.md`
   - `.github/ISSUE_TEMPLATE/feature_request.md`
   - `.github/PULL_REQUEST_TEMPLATE.md`

4. Root documentation and ledgers
   - `CHANGELOG.md`
   - `EVIDENCE_LEDGER.md`
   - `CLAIM_LEDGER.md`
   - `KNOWN_LIMITATIONS.md`

5. Policy documentation
   - `docs/REGISTRY_POLICY.md`
   - `docs/SUCCESSION_RULES.md`
   - `docs/EXPANSION_GATE.md`

## Reconciliation issues before implementation

### 1. Workflow mutation is trust-critical

The proposed workflow files are not safe to add blindly.

They introduce or reference:

- external services such as Codecov and Snyk,
- repository or organization secrets such as `CODECOV_TOKEN`, `SNYK_TOKEN`, and `NPM_TOKEN`,
- release publishing behavior,
- changelog mutation from CI,
- tag-triggered release behavior,
- `ubuntu-latest` runner selection,
- tag-pinned actions rather than SHA-pinned action references,
- scripts that may not yet exist in the active package surface.

Workflow additions require a separate workflow-hardening review and explicit approval before mutation.

### 2. Release workflow is especially sensitive

The proposed release workflow would publish to npm and create GitHub releases.

This is not appropriate for the current proof-of-concept boundary without:

- release criteria,
- signed tag policy,
- checksum policy,
- artifact policy,
- npm package identity decision,
- secret handling review,
- rollback path,
- governance approval.

### 3. Evidence and claim ledgers contain unverified claims

The proposed ledgers use language such as `PASSED`, `Evidence collected`, `All Golds validated`, `Succession graph verified acyclic`, and `Complete Gold management system`.

Those statements must not be treated as true until execution artifacts exist.

For initial implementation, ledger entries should default to:

```text
PLANNED
PENDING_EVIDENCE
NOT_EXECUTED
UNVERIFIED
```

### 4. Maturity language must be reduced

The packet contains phrases such as:

- `First stable release`
- `Complete Gold management system`
- `Status: Active`
- `Functional`
- `All files completed`

These overstate the current evidence surface.

Future implementation should use bounded language such as:

```text
EXPERIMENTAL
PLANNED
SCAFFOLD
NOT_EXECUTED
EVIDENCE_REQUIRED
```

unless and until execution evidence supports a stronger claim.

### 5. Node and package surface must be reconciled

The packet mixes Node 18 and Node 20 assumptions.

Before implementation, decide:

- canonical Node version,
- package name,
- package version,
- supported npm scripts,
- whether this repo is a package, a registry, a coordination surface, or a hybrid.

### 6. Registry count must come from canonical evidence

The packet says the registry is locked at 32/30.

That number must be reconciled against the active Evaluation Kit registry and any post-Phase-4 registry-succession decision.

Until then, future docs should say:

```text
Registry expansion status requires canonical registry confirmation.
```

### 7. GitHub configuration is declarative only unless applied

`.github/config.yml` does not itself prove branch protection, rulesets, or repository settings are active.

Repository settings still require manual confirmation or API-backed evidence.

### 8. Organization team references may not exist

The packet references teams such as:

- `@riverbraid/golds-maintainers`
- `@riverbraid/docs-team`
- `@riverbraid/devops`

These should be verified before being added to CODEOWNERS or reviewer configuration.

## Future implementation lanes

### Lane A — Documentation-only intake

Safe/reversible future work:

- add bounded policy drafts,
- add template drafts,
- add pending evidence ledgers,
- add known limitation drafts,
- add claim-boundary warnings,
- add future implementation plan.

This lane must not claim execution or functional completion.

### Lane B — Package-surface reconciliation

Required before source/test implementation:

- decide Node version,
- reconcile package name and version,
- define supported scripts,
- align source APIs with tests,
- remove unreachable or mismatched scripts,
- decide whether `Riverbraid-Golds` should expose runtime APIs or remain coordination-only.

### Lane C — Source and tests

Can proceed only after Lane B:

- implement `src/registry/GoldRegistry.js`,
- implement `src/registry/SuccessionRules.js`,
- implement `src/registry/ExpansionGate.js`,
- implement `src/errors/CoreError.js`,
- implement `src/index.js`,
- add tests that match the actual API,
- run local or CI evidence,
- record outputs and exit codes.

### Lane D — Workflow hardening

Requires explicit approval before mutation.

Before adding workflows:

- remove release/publish behavior unless separately approved,
- remove external service dependencies unless configured and approved,
- avoid self-committing release workflows,
- pin actions by SHA or document tag-pin boundary,
- decide runner version policy,
- ensure every referenced npm script exists,
- ensure workflow permissions are least-privilege,
- verify no secrets are required for ordinary proof-of-concept checks.

### Lane E — Registry succession and expansion gate

Requires evidence-gated governance decision.

Future work:

- define authorization process,
- define evidence required before registry pin updates,
- define rollback path,
- define expected-results update process,
- define expansion exceptions,
- reconcile active repositories not in the canonical 30-entry registry.

### Lane F — Release and publication

Blocked until release discipline exists.

Required first:

- tag inventory,
- release inventory,
- versioning policy,
- changelog policy,
- signed tag decision,
- checksum decision,
- npm publication decision,
- release artifact evidence policy.

## Recommended next step

Create a bounded Riverbraid-Golds implementation plan in the target repo or documentation repo before adding executable files.

Minimum plan contents:

- exact file list for first implementation pass,
- files explicitly deferred,
- forbidden claims,
- scripts expected to pass,
- evidence required before status upgrades,
- workflow mutation approval gate,
- registry mutation approval gate,
- release mutation approval gate.

## Boundary

This document is future-work tracking only.

It does not implement Riverbraid-Golds source code, workflows, release behavior, registry mutation, security settings, secrets, tags, or evidence execution.
