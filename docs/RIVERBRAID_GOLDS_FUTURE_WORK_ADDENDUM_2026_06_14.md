# Riverbraid-Golds Future Work Addendum — 2026-06-14

**Status**: FUTURE_WORK_INTAKE / REVIEWED_FOR_PLANNING  
**Target repository**: `Riverbraid/Riverbraid-Golds`  
**Source**: additional user-provided missing-file reference packet, 2026-06-14  
**Boundary**: documentation intake only; no source, workflow, release, registry, security-setting, secret, tag, or execution mutation

## Purpose

This addendum records the additional Riverbraid-Golds reference material for future implementation.

The material includes governance documentation, claim evidence record templates, registry-level CER drafts, and script drafts for audit, sync, and validation.

This addendum does **not** treat those files as implemented, executed, validated, approved, or authoritative. It preserves them as future work input that must be reconciled before mutation into `Riverbraid-Golds`.

## Relationship to existing implementation queue

This addendum extends `docs/RIVERBRAID_GOLDS_IMPLEMENTATION_QUEUE.md`.

The existing queue already records the first missing-file packet and the main implementation lanes:

- documentation-only intake,
- package-surface reconciliation,
- source and tests,
- workflow hardening,
- registry succession and expansion gate,
- release and publication.

This addendum adds more detail for:

- governance policy drafts,
- claim evidence record normalization,
- script reconciliation,
- ledger and evidence wording cleanup,
- workflow/configuration review items that must remain gated.

## Additional file references received

### Governance and policy documentation

The packet provides or expands:

- `docs/GOVERNANCE.md`
- `docs/templates/CLAIM_EVIDENCE_RECORD.md`
- `docs/REGISTRY_POLICY.md`
- `docs/SUCCESSION_RULES.md`
- `docs/EXPANSION_GATE.md`
- `CHANGELOG.md`
- `EVIDENCE_LEDGER.md`
- `CLAIM_LEDGER.md`
- `KNOWN_LIMITATIONS.md`

### Claim Evidence Records

The packet provides draft registry-level CER files:

- `claims/CER-001-Gold-Registry-Initialization.md`
- `claims/CER-002-Succession-Rules-Validation.md`
- `claims/CER-003-Expansion-Gate-Enforcement.md`
- `claims/CER-004-Gold-Metadata-Integrity.md`
- `claims/CER-005-Registry-Synchronization.md`

### Scripts

The packet provides draft script variants:

- `scripts/audit-registry.js`
- `scripts/sync-registry.js`
- `scripts/validate-golds.js`

### GitHub workflow and configuration files

The packet repeats or extends references for:

- `.github/workflows/ci.yml`
- `.github/workflows/security.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/quality-gates.yml`
- `.github/workflows/release.yml`
- `.github/CODEOWNERS`
- `.github/config.yml`
- `.github/dependabot.yml`
- `.github/ISSUE_TEMPLATE/bug_report.md`
- `.github/ISSUE_TEMPLATE/feature_request.md`
- `.github/PULL_REQUEST_TEMPLATE.md`

These remain workflow/configuration-gated and should not be applied blindly.

## Review findings before implementation

### 1. Governance document is useful but must be converted to draft authority language

The proposed `docs/GOVERNANCE.md` is structurally useful as a future governance scaffold.

Before implementation, it must be rewritten to avoid claiming currently active institutions, people, teams, calendars, email addresses, security teams, board seats, or response-time obligations unless those are actually established and evidenced.

Terms to convert to bounded draft language include:

- `Governance Board`
- `Current Members`
- `Security Team`
- `Current Maintainers`
- official emails and Slack/Zoom/PagerDuty references
- meeting schedules
- annual elections and term rules
- active CLA requirements
- active branch-protection obligations
- external communication authority

Recommended replacement style:

```text
Proposed governance role
Proposed maintainer lane
To be confirmed
Requires explicit authority approval
Requires repository settings evidence
Not yet active
```

### 2. CER drafts must not be marked validated without evidence artifacts

The five CER files are useful as examples of the evidence format, but the submitted wording marks them as `validated`, `approved`, or `all criteria passed`.

Those claims must be downgraded before implementation unless matching execution artifacts exist.

Recommended initial status fields:

```text
Status: draft
Validation: NOT_EXECUTED
Evidence status: PENDING_EVIDENCE
Approval: NOT_APPROVED
Validator: TBD
Validation date: TBD
```

The CERs should initially be placed in a `drafts/` or `planned/` lane, or clearly marked as examples.

### 3. Evidence and claim ledgers must remain pending until execution

The proposed ledgers contain statements such as:

- `Evidence collected`
- `All Golds validated`
- `Succession graph verified acyclic`
- `Current Claims (PASSED)`
- `Active Claims (PASSED)`
- `Validation passed`

These should not be implemented as factual claims until supported by test runs, audit logs, static checks, and command outputs.

Initial implementation should use:

```text
PLANNED
PENDING_EVIDENCE
NOT_EXECUTED
UNVERIFIED
DRAFT
```

### 4. Script drafts are helpful but internally inconsistent

The script drafts provide useful intent, but they need reconciliation before use.

#### `scripts/audit-registry.js`

Safe direction: read-only audit script.

Needs reconciliation:

- registry path convention: `registry/` vs `golds/` vs package-managed data path,
- required fields: `hash`, `timestamp`, `source` may not match the intended Gold metadata model,
- `execSync` is imported but unused,
- output path and evidence policy must be defined,
- audit report generation should not create false evidence claims.

Recommended first implementation: read-only audit that exits nonzero on structural failures and writes a clearly labeled local artifact only when explicitly expected.

#### `scripts/sync-registry.js`

This script is **not** simple low-risk read-only work because it performs network fetches and writes registry files.

Needs explicit gate before implementation:

- remote registry authority decision,
- network source trust policy,
- add/update/remove authorization policy,
- rollback path,
- canonical registry source decision,
- dry-run mode,
- mutation approval gate,
- evidence artifact policy.

Also requires correction of likely implementation issues:

- `fs.readFileSync(EVIDENCE_LEDGER.md, 'utf8')` references `EVIDENCE_LEDGER.md` as an undefined variable rather than using `EVIDENCE_LEDGER_PATH`,
- sync writes to the evidence ledger directly,
- sync removes local files based on remote state,
- no signature verification is present,
- no fail-closed remote trust boundary is defined.

Recommended first implementation: `sync-registry.js --dry-run` only, with no remote mutation and no ledger mutation.

#### `scripts/validate-golds.js`

Useful direction: validate Gold entries against schema.

Needs reconciliation:

- source directory: `golds/` vs `registry/`,
- schema path: `schemas/gold-schema.json` must exist or be replaced by the intended schema,
- status vocabulary: `active/deprecated/retired` vs `experimental/functional/production-ready/deprecated`,
- ledger mutation policy,
- claim wording must remain `pending` until executed,
- JSON Schema validation should be considered instead of hand-rolled partial checks if schema becomes authoritative.

Recommended first implementation: read-only validation with clear output and no automatic claim-ledger mutation.

### 5. Workflow files remain trust-critical

The workflow references remain deferred pending hardening.

Specific review items:

- `ubuntu-latest` should be reviewed or pinned to an explicit runner version,
- `actions/checkout@v4`, `actions/setup-node@v4`, CodeQL, gitleaks, codecov, snyk, and release actions should be SHA-pin-reviewed or clearly marked tag-pinned with accepted boundary,
- external services such as Codecov and Snyk require configuration and secret decisions,
- release workflow uses `NPM_TOKEN` and publishes packages,
- release workflow self-mutates `CHANGELOG.md`, commits, and pushes from CI,
- `npm run build:analyze` is referenced but may not exist,
- local workflow call `uses: ./.github/workflows/codeql.yml` must be checked against GitHub reusable workflow requirements,
- workflow permissions must be least-privilege,
- every referenced script must exist before workflow activation.

No workflow should be added until a workflow-hardening pass is approved.

### 6. GitHub configuration is not proof of active settings

The provided `.github/config.yml`, CODEOWNERS, Dependabot config, and templates are useful scaffolds.

They do not prove:

- branch protection is enabled,
- rulesets are active,
- secret scanning is enabled,
- CodeQL is available,
- teams exist,
- reviewers can be resolved,
- signed commits are enforced.

Those require manual repository settings evidence or GitHub API-backed evidence.

### 7. Team and contact placeholders must be verified

The packet references organization teams and contacts such as:

- `@riverbraid/golds-maintainers`
- `@riverbraid/docs-team`
- `@riverbraid/devops`
- `@riverbraid/security-team`
- `governance@riverbraid.org`
- `security@riverbraid.org`
- `golds@riverbraid.org`

Before implementation, these should be marked `TBD` unless verified.

### 8. Package and runtime assumptions remain unresolved

The packet still mixes:

- Node 18 and Node 20 assumptions,
- package names `riverbraid-golds` and `@riverbraid/golds`,
- version states `0.1.0-experimental` and `1.0.0`,
- status labels `experimental/functional/production-ready` and `active/deprecated/retired`,
- package mode vs registry mode vs coordination-surface mode.

This stays in package-surface reconciliation before executable implementation.

## Added future implementation lanes

### Lane G — Governance draft normalization

Safe/reversible future work:

- create `docs/GOVERNANCE.md` as a proposed governance draft,
- replace unverified active-role claims with `proposed`, `TBD`, or `requires approval`,
- remove or soften unverified board/team/person/contact claims,
- separate policy aspiration from active repository setting claims,
- add a governance non-claims section,
- link governance decisions to evidence gates.

Do not claim active governance authority until approved.

### Lane H — CER and evidence-record normalization

Safe/reversible future work:

- add `docs/templates/CLAIM_EVIDENCE_RECORD.md`,
- add draft CER examples under a draft path or with clear `DRAFT / NOT_EXECUTED` status,
- map each CER to required future evidence,
- remove `validated`, `approved`, and `passed` language unless execution evidence exists,
- define a minimum CER schema.

Do not mark CERs validated until artifacts exist.

### Lane I — Script design reconciliation

Safe planning work:

- define script mode: read-only, dry-run, or mutating,
- define input paths,
- define output artifacts,
- define exit-code contract,
- define no-network vs network-permitted modes,
- define whether ledgers may be mutated by scripts,
- define fail-closed behavior.

Suggested first script order:

1. `scripts/validate-golds.js` read-only, local-only, no ledger mutation.
2. `scripts/audit-registry.js` read-only, local-only, writes report only if output path is explicit or documented.
3. `scripts/sync-registry.js` dry-run only until remote authority and rollback rules are approved.

### Lane J — Workflow/config preflight inventory

Before workflow mutation:

- verify target repository branch names,
- verify package scripts,
- verify secrets are not required for ordinary proof-of-concept checks,
- verify teams exist or replace them with neutral placeholders,
- choose runner version policy,
- choose action pinning policy,
- remove release publishing behavior until separately approved,
- add workflows only after source/tests produce evidence locally or in an approved CI lane.

## Recommended next ordered work

1. Update the main implementation queue with a reference to this addendum.
2. Create a bounded `Riverbraid-Golds` package-surface decision doc.
3. Normalize governance draft language.
4. Normalize CER template and example CER drafts.
5. Decide canonical status vocabulary.
6. Decide canonical package name and Node version.
7. Design read-only validation and audit script contracts.
8. Implement read-only `validate-golds.js` first.
9. Implement read-only `audit-registry.js` second.
10. Defer sync, workflows, release, secrets, branch protection, CODEOWNERS, and Dependabot until explicit approval and preflight evidence.

## Boundary

This addendum is future-work tracking only.

It does not implement Riverbraid-Golds source code, workflows, release behavior, registry sync behavior, GitHub settings, organization teams, secrets, tags, evidence execution, CER validation, or production readiness.
