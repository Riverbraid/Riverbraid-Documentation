# Riverbraid-Refusal-Gold Future Work Intake — 2026-06-14

**Status**: FUTURE_WORK_INTAKE / REVIEWED_FOR_PLANNING  
**Target repository**: `Riverbraid/Riverbraid-Refusal-Gold`  
**Source**: user-provided file-structure and batch packet, 2026-06-14  
**Boundary**: documentation intake only; no target-repository mutation, source implementation, workflow activation, release behavior, registry mutation, GitHub settings mutation, secret use, tag creation, or evidence execution

## Purpose

This document records the provided Riverbraid-Refusal-Gold file structure and batch content as future implementation input.

It does not copy the packet directly into the target repository because the packet includes workflow, release, security, source, test, evidence, governance, and maturity claims that require reconciliation before mutation.

## Current observed repository boundary

The current `Riverbraid-Refusal-Gold` README describes the repository as refusal and boundary verification support for the Riverbraid governance floor.

It says the repository focuses on refusal boundaries, invalid transition rejection, and fail-closed policy surfaces.

It also states that registry membership does not imply certification, external audit, production readiness, complete AI safety, absolute security, registry freshness, or absence of defects.

The same boundary must remain intact until stronger evidence exists.

## Intake summary

The packet proposes a full package-style repository structure with:

1. Core root files
   - `.gitignore`
   - `.gitattributes`
   - `README.md`
   - `CHANGELOG.md`
   - `EVIDENCE_LEDGER.md`
   - `CLAIM_LEDGER.md`
   - `KNOWN_LIMITATIONS.md`
   - `package.json`

2. GitHub workflows and configuration
   - `.github/workflows/ci.yml`
   - `.github/workflows/security.yml`
   - `.github/workflows/codeql.yml`
   - `.github/workflows/quality-gates.yml`
   - `.github/workflows/release.yml`
   - `.github/CODEOWNERS`
   - `.github/config.yml`
   - `.github/dependabot.yml`
   - issue templates
   - pull request template

3. Documentation
   - `docs/REFUSAL_POLICY.md`
   - `docs/REFUSAL_MATRIX.md`
   - `docs/SUCCESSION_RULES.md`
   - `docs/EXPANSION_GATE.md`
   - `docs/GOVERNANCE.md`
   - `docs/templates/CLAIM_EVIDENCE_RECORD.md`

4. Claim Evidence Records
   - `claims/CER-001-Refusal-Policy-Initialization.md`
   - `claims/CER-002-Refusal-Matrix-Validation.md`
   - `claims/CER-003-Refusal-Test-Coverage.md`

5. Schema, scripts, source, and tests
   - `schemas/refusal-schema.json`
   - `scripts/audit-refusals.js`
   - `scripts/validate-refusals.js`
   - `scripts/test-refusal-matrix.js`
   - `src/types.d.ts`
   - `src/refusalEngine.ts`
   - `src/refusalRules.ts`
   - `tests/refusal-engine.test.js`
   - `tests/refusal-rules.test.js`
   - `tests/core-error.test.js`

## Review findings before implementation

### 1. Packet contains duplicate pasted sections

The user-provided packet contains duplicated Batch 3 material and an interrupted or nested `docs/GOVERNANCE.md` section.

Before implementation, the content must be de-duplicated and reconstructed into one canonical version per file.

### 2. Do not overwrite the current README boundary blindly

The current target README already establishes a careful evidence boundary and non-claims.

The proposed README contains stronger package/product language such as:

- `refusal policy engine`,
- `defines, validates, and enforces`,
- `Tool-Safe: Yes`,
- CI/CD requirements that may not yet exist,
- installation and usage examples that assume a compiled package surface.

If README changes are made later, they should preserve current non-claims and use bounded language such as:

```text
planned
experimental
scaffold
not executed
not production-ready
verification surface only
```

### 3. Workflow files are trust-critical and remain deferred

The proposed workflow set should not be added without a separate workflow-hardening pass.

Reasons:

- `release.yml` publishes to npm and creates GitHub releases.
- Workflows reference secrets such as `NPM_TOKEN` and `SNYK_TOKEN`.
- Workflows use tag-pinned actions rather than SHA-pinned actions.
- `trufflesecurity/trufflehog@main` tracks a moving branch.
- `dependabot/dependabot-core@v0.250.0` is not a normal Dependabot workflow pattern and requires review.
- Workflows assume `develop` exists.
- Workflows assume package scripts and build artifacts exist.
- Workflow check names in `.github/config.yml` may not match actual generated check names.
- Release workflow is irreversible enough to require explicit approval.

No workflow mutation should occur until source/test/package surfaces are reconciled and ordinary proof-of-concept checks can run without secrets.

### 4. Ledgers and CERs overclaim execution

The proposed ledgers and CER language includes factual claims such as:

- `PASSED`,
- `Validated`,
- `100% test coverage`,
- `All unit tests passed`,
- `All files validated`,
- `Evidence Gate ... PASSED`,
- `Initial release`,
- `Quality gates passed`.

Those statements must be downgraded unless actual execution artifacts exist.

Initial implementation should use:

```text
DRAFT
PLANNED
PENDING_EVIDENCE
NOT_EXECUTED
UNVERIFIED
NOT_APPROVED
```

### 5. Refusal policy and matrix require policy review

A refusal policy is not just ordinary code. It can encode safety, legal, medical, privacy, and human-rights boundaries.

The proposed policy should be treated as a draft taxonomy and test-fixture scaffold, not as active policy.

Future review should verify:

- alignment with current Riverbraid non-claims,
- whether the repo should define policy or verify policy boundaries,
- how refusal categories are represented without creating unsafe or excessive examples,
- crisis/self-harm handling boundaries,
- whether medical/legal/financial categories should be refusal, disclaimer, or safe-completion lanes,
- whether adult-content and misinformation categories are too broad or policy-dependent,
- how to avoid reducing nuanced policy to keyword-only matching.

### 6. Package/source/test surface is internally inconsistent

The source and tests are useful as a starting concept, but they likely will not compile or pass without redesign.

Known reconciliation points:

- `src/types.d.ts` is declaration-only and cannot provide runtime exports such as error classes for `refusalEngine.ts`.
- `refusalEngine.ts` imports runtime error classes from `./types`, which would not exist at runtime if only `.d.ts` is present.
- `IRefusalEngine` declares synchronous `check`, while implementation returns `Promise<RefusalDecision>`.
- `RefusalDecision.evidence` is typed as `Record<EvidenceField, ...>`, but implementation writes fields such as `priority` that are not in `EvidenceField`.
- Tests use custom categories such as `Test Category`, but the type/schema category list does not allow them.
- Tests import from `../dist/src/...`, but `npm test` does not necessarily build before running.
- `matchesClassifier` always returns false, so classifier-only expectations may not match intended behavior.
- Safe inputs may be refused by the default fallback rule depending on implementation details.
- Regex strings in `refusalRules.ts` include delimiter-like syntax such as `/.../i`, but the engine wraps strings in `new RegExp(pattern, 'i')`, which may not behave as intended.
- Scripts attempt to parse TypeScript source with regex and `JSON.parse`, but the rule file is TypeScript object syntax, not JSON.
- Some tests expect errors to expose properties not defined on the thrown error class.

A package-surface decision and compile-pass design are required before implementation.

### 7. Schema requires JSON Schema review

The proposed `schemas/refusal-schema.json` is useful, but should be reviewed before it becomes authoritative.

Known review points:

- `evidenceFields` uses array-level `enum`; item-level enum may be needed for intended validation.
- `format: date-time` may require `ajv-formats` depending on Ajv setup.
- `uniqueItems` on rule objects does not ensure unique rule IDs.
- `additionalProperties: false` may make future extension hard unless intentionally chosen.
- Refusal categories and priority vocabulary must be canonicalized against Riverbraid governance language.

### 8. Scripts are not all read-only as written

The scripts are marked tool-safe/read-only in comments, but several write artifacts or mutate ledgers.

Examples:

- `audit-refusals.js` writes `audit-log.json`.
- `validate-refusals.js` writes `validation-log.json` and appends `EVIDENCE_LEDGER.md`.
- `test-refusal-matrix.js` writes `matrix-test-log.json` and appends `EVIDENCE_LEDGER.md`.

Future script design should split:

```text
read-only validation
artifact-writing validation
ledger-mutating evidence capture
```

Ledger mutation should require an explicit evidence-capture mode, not happen by default.

### 9. GitHub configuration and teams must be verified

The packet references teams and settings such as:

- `@riverbraid/core`,
- `@riverbraid/docs`,
- `@riverbraid/schemas`,
- `@riverbraid/automation`,
- `@riverbraid/engineering`,
- `@riverbraid/qe`,
- `@riverbraid/security`,
- branch protection,
- required reviews,
- required contexts,
- Dependabot reviewers.

These must be verified or replaced with neutral placeholders before CODEOWNERS or reviewer configuration is added.

### 10. Release and package identity remain blocked

The proposed `package.json` uses:

- version `1.0.0`,
- npm publishing configuration,
- public package identity,
- author email placeholder,
- release scripts,
- `prepublish` / `prepare` behavior.

This should be downgraded to experimental or withheld until release discipline exists.

Required first:

- package name decision,
- npm publication decision,
- versioning policy,
- build/test evidence,
- tag policy,
- changelog policy,
- release artifact policy,
- rollback path,
- secret-handling review.

## Future implementation lanes

### Lane A — Documentation-only intake

Safe/reversible:

- add or update planning docs,
- normalize the file list,
- preserve current evidence boundaries,
- create draft docs with `DRAFT / NOT_EXECUTED` language,
- record known contradictions and missing evidence.

Do not claim active policy, validation, release, or test completion.

### Lane B — Package-surface decision

Required before source/test implementation:

- decide whether this repo is a verification surface, package, policy engine, or hybrid,
- decide canonical Node version,
- decide package name and version boundary,
- decide CommonJS vs ESM vs TypeScript output,
- decide whether tests run against `src` or `dist`,
- decide whether refusal rules are TypeScript, JSON, or both.

### Lane C — Source contract reconciliation

Required before executable source:

- split runtime types/errors from declaration-only types,
- align async/sync interfaces,
- define `RefusalDecision` shape,
- define safe default behavior for non-matching inputs,
- make rule parsing machine-readable,
- remove placeholder classifier claims or mark them explicitly as stubs,
- define fail-closed behavior without over-refusing safe prompts.

### Lane D — Read-only validation scripts

First executable scripts should be local-only and read-only by default:

1. `scripts/validate-refusals.js` — schema and structure validation, no ledger mutation.
2. `scripts/audit-refusals.js` — consistency audit, no ledger mutation by default.
3. `scripts/test-refusal-matrix.js` — matrix/source consistency test, no ledger mutation by default.

A separate evidence-capture mode can later write artifacts and ledgers after approval.

### Lane E — Tests after source contract

Tests should be written only after source contract decisions are made.

Required:

- compile tests,
- runtime behavior tests,
- no false claims of 100% coverage,
- safe fixture design,
- expected outcomes documented,
- output artifacts captured before claims are upgraded.

### Lane F — Workflow preflight and hardening

Before adding workflows:

- verify package scripts exist,
- remove or defer release/publish behavior,
- avoid secrets for ordinary checks,
- pin or explicitly justify action versions,
- choose runner policy,
- verify branch names,
- verify team names,
- make permissions least-privilege,
- ensure local evidence exists before CI claim language.

### Lane G — Release and publication

Blocked until:

- release discipline is approved,
- tags and package identity are decided,
- artifact and checksum policy exists,
- npm publishing is explicitly authorized,
- rollback path exists,
- legal/license boundary is reviewed.

## Recommended next ordered work

1. Inventory the current `Riverbraid-Refusal-Gold` repository state before mutation.
2. Create a target-repo implementation plan or keep it in the documentation repo as a planning artifact.
3. De-duplicate the pasted packet and identify one canonical version per file.
4. Preserve the current README non-claims before any README rewrite.
5. Draft a package-surface decision doc.
6. Draft a bounded refusal-policy scope doc that distinguishes policy definition from policy verification.
7. Draft the schema as `DRAFT / NOT_AUTHORITY / NOT_EXECUTED`.
8. Implement read-only validation script only after schema/rule data format is decided.
9. Implement source only after TypeScript/runtime/test contract is settled.
10. Defer workflows, release, Dependabot, CODEOWNERS, branch protection, secrets, npm publication, and active CER validation until explicit approval and evidence exist.

## Boundary

This document is future-work tracking only.

It does not implement Riverbraid-Refusal-Gold source code, tests, workflows, release behavior, registry mutation, package publication, GitHub settings, organization teams, secrets, tags, evidence execution, policy activation, CER validation, or production readiness.
