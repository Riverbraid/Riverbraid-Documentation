# Riverbraid-Harness-Gold Future Work Intake — 2026-06-14

**Status**: FUTURE_WORK_INTAKE / REVIEWED_FOR_PLANNING  
**Target repository**: `Riverbraid/Riverbraid-Harness-Gold`  
**Source**: user-provided file-structure and batch packet, 2026-06-14  
**Boundary**: documentation intake only; no target-repository mutation, source implementation, workflow activation, release behavior, registry mutation, GitHub settings mutation, secret use, tag creation, GPG authority mutation, or evidence execution

## Purpose

This document records the provided Riverbraid-Harness-Gold file structure and batch content as future implementation input.

It does not copy the packet directly into the target repository because the packet includes workflow, release, security, source, test, evidence, governance, integration, and maturity claims that require reconciliation before mutation.

## Current observed repository boundary

The current `Riverbraid-Harness-Gold` README frames the repository as canonical harness and verification support for the Riverbraid governance floor.

It states:

- lifecycle category: `canonical`,
- normative source: `Riverbraid-Core`,
- claim boundary: `Declared Conditions Only`,
- role: harness and verification support,
- registry role: Harness domain inside the current Evaluation Kit registry,
- authority boundary: Riverbraid-Core remains the normative source for protocol semantics,
- non-claims: no certification, legal approval, production readiness, absolute security, external audit, complete AI safety, adoption, or absence of defects,
- status: Stationary `(v2.1.0)`,
- verification command: `npm test`,
- authority: `2-of-2 GPG Threshold`.

The same boundary must remain intact until stronger evidence exists.

## Intake summary

The packet proposes a full package-style harness repository structure with:

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

3. Documentation and CER templates
   - `docs/HARNESS_ARCHITECTURE.md`
   - `docs/TEST_PROTOCOL.md`
   - `docs/VALIDATION_RULES.md`
   - `docs/SUCCESSION_RULES.md`
   - `docs/EXPANSION_GATE.md`
   - `docs/GOVERNANCE.md`
   - `docs/templates/CLAIM_EVIDENCE_RECORD.md`

4. Claim Evidence Records
   - `claims/CER-001-Harness-Initialization.md`
   - `claims/CER-002-Test-Protocol-Validation.md`
   - `claims/CER-003-Validation-Rules-Compliance.md`
   - `claims/CER-004-Harness-Integration.md`

5. Schemas, scripts, source, tests, and configs
   - `schemas/test-schema.json`
   - `schemas/validation-schema.json`
   - `schemas/harness-schema.json`
   - `scripts/run-tests.js`
   - `scripts/validate-harness.js`
   - `scripts/audit-tests.js`
   - `scripts/generate-report.js`
   - `src/types.d.ts`
   - `src/harness/TestRunner.ts`
   - `src/harness/TestSuite.ts`
   - `src/harness/TestCase.ts`
   - `src/harness/ValidationEngine.ts`
   - `src/harness/Reporter.ts`
   - `src/utils/logger.ts`
   - `src/utils/validator.ts`
   - `src/utils/formatter.ts`
   - `src/index.ts`
   - `tests/harness/*`
   - `tests/core-error.test.js`
   - `configs/default-config.json`
   - `configs/gold-config.json`
   - `configs/refusal-config.json`

## Review findings before implementation

### 1. Packet is incomplete

The provided packet stops before several promised files are supplied.

Missing or incomplete from the packet:

- `.github/workflows/*.yml` contents,
- `.github/CODEOWNERS`, `.github/config.yml`, `.github/dependabot.yml` contents,
- issue and pull request templates,
- `src/harness/Reporter.ts`,
- `src/utils/logger.ts`,
- `src/utils/validator.ts`,
- `src/utils/formatter.ts`,
- `src/index.ts`,
- `tests/harness/test-runner.test.js`,
- `tests/harness/test-suite.test.js`,
- `tests/harness/validation-engine.test.js`,
- `tests/harness/reporter.test.js`,
- `tests/core-error.test.js`,
- final `package.json`.

Before implementation, this should be treated as a partial design packet, not a complete file set.

### 2. Do not overwrite the current README boundary blindly

The current target README already establishes a careful boundary: canonical harness support, declared conditions only, Riverbraid-Core normative authority, and explicit non-claims.

The proposed README contains stronger package/product language such as:

- `official test harness`,
- `standardized test execution across all Riverbraid repositories`,
- `validation frameworks for evidence-gated compliance`,
- `integration testing between Riverbraid components`,
- `Tool-Safe: Yes`,
- installation, CLI, and npm package usage examples that assume a complete package surface,
- CI/CD requirements that may not yet exist.

If README changes are made later, preserve the current non-claims and use bounded wording such as:

```text
planned
experimental
scaffold
not executed
not production-ready
verification support surface
not protocol authority
```

### 3. Workflows are trust-critical and remain deferred

The proposed structure includes `ci.yml`, `security.yml`, `codeql.yml`, `quality-gates.yml`, and `release.yml`, but their contents were not fully provided in the Harness packet.

Even if later provided, workflow mutation should remain deferred until a separate workflow-hardening pass because Harness-Gold currently carries a `2-of-2 GPG Threshold` authority boundary.

Any future workflow work must verify:

- runner policy,
- permissions,
- action pinning,
- branch assumptions,
- package scripts,
- secret references,
- artifact behavior,
- release/tag behavior,
- GPG threshold implications,
- whether workflow output can be used as evidence.

No workflow mutation should occur until source/test/package surfaces are reconciled and ordinary proof-of-concept checks can run without secrets.

### 4. Ledgers and CERs overclaim execution

The proposed ledgers and CER template include factual claims such as:

- `PASSED`,
- `Validated`,
- `Active`,
- `100% test coverage`,
- `All unit tests passed`,
- `All schemas validated`,
- `Integration with Riverbraid-Refusal-Gold`,
- `Quality gates passed`,
- `Initial release`,
- `Evidence Gate ... PASSED`,
- `240 tests passed`.

Those statements must be downgraded unless actual execution artifacts exist.

Initial implementation should use:

```text
DRAFT
PLANNED
PENDING_EVIDENCE
NOT_EXECUTED
UNVERIFIED
NOT_APPROVED
NOT_RELEASED
```

### 5. Harness authority must not expand protocol authority

Harness-Gold can verify harness surfaces, run tests, collect artifacts, and report evidence.

It should not redefine Riverbraid protocol semantics. Riverbraid-Core remains the normative source.

Future docs should explicitly distinguish:

```text
Harness executes checks.
Harness reports evidence.
Harness does not create protocol truth.
Harness does not certify safety.
Harness does not replace reviewer judgment.
Harness does not override Riverbraid-Core.
```

### 6. Package/source surface is internally inconsistent

The source design is useful as a scaffold, but likely will not compile or pass without reconciliation.

Known reconciliation points:

- `src/types.d.ts` is declaration-only and cannot provide runtime error classes imported by implementation files.
- Several implementation files import runtime errors/classes from `../types`, but `.d.ts` output does not create runtime JavaScript.
- `TestCase.collectEvidence` is declared `private`, but `TestSuite` and `TestRunner` call it externally.
- `TestSuite` calls `suite.getDefinition()`, but `TestSuite` does not define `getDefinition()`.
- `TestRunner.runTestCase()` calls `testCase.execute(testFn, suiteContext)`, but `TestCase.execute()` only accepts one argument in the provided code.
- `ValidationEngine.validateDuration()` references `data.timeout`, but `TestCaseResult` does not define `timeout`.
- `ValidationEngine.validateRunResult()` validates a partial object against `testRunResult` before `validation` is populated.
- `ValidationEngine.validateAgainstSchema(..., 'testRunResult')` requires a registered schema name that may not exist as a compiled top-level schema.
- `ConfigLoader`, `ConfigValidator`, `Logger`, `Reporter`, `validator`, and `formatter` are referenced but not fully provided.
- Scripts import from `../dist/...`, but `npm test` or script execution does not necessarily build first.
- Config files reference neighboring repositories and test files that may not exist locally.
- The proposed harness assumes integration with Refusal-Gold, but Refusal-Gold package surface is itself future-work and not executable yet.

A package-surface decision and compile-pass design are required before implementation.

### 7. Schema review required

The proposed schemas are useful draft material, but should not become authoritative without review.

Known review points:

- `$schema` URLs use draft-07; Ajv date-time format support may require `ajv-formats`.
- `extends` and `outputDir` regex patterns may be malformed or too restrictive.
- `oneOf` schema strategy may make harness configuration validation fail if top-level docs are mixed.
- Schema names in code (`testResult`, `testRunResult`, `harnessConfig`) must align with actual Ajv registration strategy.
- `additionalProperties: false` may conflict with flexible report/config extension.
- `ValidationError` is both an interface name and a class name in `src/types.d.ts`, creating TypeScript conflict risk.
- `EvidenceData` requires `category` and `priority`, but skipped/error paths may not always supply the same semantic fields safely.

### 8. Scripts are not all read-only as written

The scripts are marked tool-safe/read-only in comments, but several write artifacts by default.

Examples:

- `run-tests.js` writes reports through the runner/reporters.
- `validate-harness.js` writes `validation-report.json` by default.
- `audit-tests.js` writes `audit-report.json` by default.
- `generate-report.js` writes output reports by design.

Future script design should split:

```text
read-only inspection
local artifact writing
ledger mutation
evidence capture
release/report publication
```

Artifact writing can be tool-safe if explicitly local and gitignored, but it should not be described as read-only.

### 9. Config integration assumptions are blocked

The proposed configs reference paths such as:

- `../riverbraid-refusal-gold/src/refusalEngine.ts`,
- `../riverbraid-refusal-gold/tests/refusal-engine.test.js`,
- `../riverbraid-gold/schemas/gold-schema.json`,
- `./tests/integration/gold-integration.test.js`,
- `./tests/integration/refusal-engine-integration.test.js`,
- `./tests/validation/refusal-validation.test.js`.

These paths must be verified in a local workspace before use.

Until verified, configs should be marked:

```text
DRAFT
PATHS_UNVERIFIED
INTEGRATION_NOT_EXECUTED
```

### 10. Governance and team references must be verified

The packet references teams and governance bodies such as:

- `@riverbraid/core`,
- `@riverbraid/qe`,
- `@riverbraid/security`,
- `@riverbraid/docs`,
- `@riverbraid/reviewers`,
- Riverbraid Steering Committee,
- Riverbraid Appeals Board,
- Compliance Officer,
- Release Manager,
- Security Responders.

These must be verified or replaced with neutral placeholders before CODEOWNERS, governance obligations, reviewer requirements, or branch protection configuration are added.

### 11. Release and npm publication remain blocked

The proposed changelog and README imply release/package behavior.

Do not add release or npm-publication claims until:

- package identity is approved,
- release discipline exists,
- tag policy exists,
- artifact/checksum policy exists,
- GPG authority implications are resolved,
- npm publication is explicitly authorized,
- rollback path exists,
- legal/license boundary is reviewed.

## Future implementation lanes

### Lane A — Documentation-only intake

Safe/reversible:

- record this packet as planning material,
- normalize the proposed file list,
- preserve current evidence boundaries,
- draft docs with `DRAFT / NOT_EXECUTED` language,
- record contradictions and missing artifacts.

Do not claim active harness, validation, release, integration, or test completion.

### Lane B — Current repository inventory

Required before mutation:

- list current files,
- identify existing `package.json`, scripts, tests, workflows, and configs,
- verify current `npm test` claim if execution is available,
- identify existing GPG-threshold surfaces,
- capture current workflow and release state,
- identify open issues tied to Harness-Gold runtime GPG binding patch evidence.

### Lane C — Harness scope decision

Required before source/test implementation:

- decide whether this repo is a package, test harness, verification support surface, CLI, or hybrid,
- decide whether it owns test semantics or only executes external declared tests,
- decide what evidence it may generate versus what evidence must be externally reviewed,
- decide how it treats neighboring repos and local paths,
- decide what fail-closed means in harness context.

### Lane D — Package and TypeScript contract

Required before executable source:

- replace declaration-only runtime error classes with real runtime exports,
- align CommonJS/ESM/TypeScript output,
- define whether scripts run from `src` or `dist`,
- define build-before-test behavior,
- make `TestCase`, `TestSuite`, `TestRunner`, and `ValidationEngine` interfaces compile together,
- decide public API surface,
- define report output contracts.

### Lane E — Read-only validation first

First executable work should be local-only and non-mutating by default:

1. schema/config inspection,
2. repository structure audit,
3. declared-test inventory,
4. evidence-ledger consistency check,
5. integration path existence check.

Artifact-writing modes should be explicit and gitignored.

### Lane F — Source after contract

Implement source only after the contract is settled.

Priority order:

1. runtime error and type exports,
2. logger/config loader/config validator,
3. minimal TestCase/TestSuite compile pass,
4. minimal TestRunner compile pass,
5. read-only ValidationEngine,
6. Reporter as local artifact writer,
7. CLI wrappers.

### Lane G — Tests after source

Tests should be written after source compiles.

Required:

- no false 100% coverage claims,
- safe fixtures,
- compile tests,
- runtime behavior tests,
- schema tests,
- artifact output tests,
- integration tests only after neighboring repo surfaces exist.

### Lane H — Workflow preflight and hardening

Before adding workflows:

- verify package scripts exist,
- avoid secret-dependent checks for ordinary CI,
- pin actions or explicitly record pin policy,
- remove or defer release/publish behavior,
- verify branch names,
- verify required contexts,
- use least-privilege permissions,
- preserve GPG threshold authority boundary.

### Lane I — Release and publication

Blocked until:

- release discipline is approved,
- tag/package identity is decided,
- artifact and checksum policy exists,
- npm publishing is explicitly authorized,
- rollback path exists,
- legal/license boundary is reviewed.

## Recommended next ordered work

1. Inventory the current `Riverbraid-Harness-Gold` repository state before mutation.
2. Create a target-repo implementation plan or keep it in the documentation repo as a planning artifact.
3. Mark this packet as partial/incomplete and identify missing files.
4. Preserve the current README non-claims and authority boundary before any README rewrite.
5. Draft `docs/HARNESS_SCOPE_BOUNDARY.md` to distinguish harness execution, evidence reporting, and protocol authority.
6. Draft `docs/PACKAGE_SURFACE_DECISION.md` to settle CLI/package/API boundaries.
7. Draft schemas as `DRAFT / NOT_AUTHORITY / NOT_EXECUTED`.
8. Implement read-only inventory and validation scripts only after schema/config formats are settled.
9. Implement source only after TypeScript/runtime/test contract is settled.
10. Defer workflows, release, Dependabot, CODEOWNERS, branch protection, GPG authority changes, secrets, npm publication, and active CER validation until explicit approval and evidence exist.

## Boundary

This document is future-work tracking only.

It does not implement Riverbraid-Harness-Gold source code, tests, workflows, release behavior, registry mutation, package publication, GitHub settings, organization teams, secrets, tags, GPG authority changes, evidence execution, integration validation, CER validation, or production readiness.
