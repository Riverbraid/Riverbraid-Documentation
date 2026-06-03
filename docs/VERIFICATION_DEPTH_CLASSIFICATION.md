# Verification Depth Classification

**Status**: TEMPLATE / INFORMATIVE
**Authority boundary**: Audit classification only
**Registry mutation**: NONE
**Verification claim**: NONE
**Completion claim**: NONE

## Purpose

This document classifies the current Evaluation Kit registry verification commands by verification depth.

It does not change the registry.

It does not claim every repository is verified to the same depth.

## Source surface

Source reviewed:

- `Riverbraid-Evaluation-Kit/verified-repo-registry.json`

The registry contains 30 pinned entries and configured verification commands.

## Depth labels

- `STATIC_VECTOR_OR_CORE_SCRIPT`: command executes a repository script, but the audit found that the command may not equal the full available audit path.
- `FEATURE_FLOW_SCRIPT`: command executes a feature-flow verifier or repo-specific feature verification script.
- `NPM_TEST_REPO_VERIFIER`: command executes package `test`; depth depends on that repository's package script and verifier implementation.
- `PRESENCE_CHECK_ONLY`: command checks file presence only, such as `test -f README.md`.
- `UNKNOWN_UNTIL_EXECUTED`: command exists but current execution evidence was not checked in this classification pass.

## Registry command classification

| Repository | Registry command | Depth classification | Boundary |
|---|---|---|---|
| Riverbraid-Core | `npm run test:riverbraid` | STATIC_VECTOR_OR_CORE_SCRIPT | Does not equal the full Core byte and constellation audit path unless that path is explicitly run. |
| Riverbraid-Golds | `npm run verify:feature-flow` | FEATURE_FLOW_SCRIPT | Feature-flow check, not external audit. |
| Riverbraid-Action-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Audio-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Cognition | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Crypto-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-GPG-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script, verifier implementation, and GPG workflow boundaries. |
| Riverbraid-Governance-Gold | `test -f README.md` | PRESENCE_CHECK_ONLY | File presence check only. Not full verification. |
| Riverbraid-Harness-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script, verifier implementation, and runtime binding evidence. |
| Riverbraid-Identity-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Integration-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Interface-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Judicial-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Lite | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Manifest-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and manifest verifier implementation. |
| Riverbraid-Memory-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Network-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Refusal-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Registry pin predates later fail-closed patch. Current main remains separate from registry snapshot. |
| Riverbraid-Safety-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and workflow evidence. |
| Riverbraid-Security-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Standard-IO | `test -f README.md` | PRESENCE_CHECK_ONLY | File presence check only. Not full verification. |
| Riverbraid-Storage-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Temporal-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Types | `test -f README.md` | PRESENCE_CHECK_ONLY | File presence check only. Not full verification. |
| Riverbraid-Verification-Suite | `test -f README.md` | PRESENCE_CHECK_ONLY | File presence check only. Not full verification. |
| Riverbraid-Vision-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Weave-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Bridge-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Bio-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |
| Riverbraid-Flow-Gold | `npm test` | NPM_TEST_REPO_VERIFIER | Depends on package script and verifier implementation. |

## Required claim rule

A registry pass means the configured command exited successfully for the pinned commit.

A registry pass does not mean every repository was verified to the same depth.

A presence check is not a deterministic verifier.

An `npm test` command is only as strong as the package script and verifier it invokes.

## Follow-up required

- Populate actual package-script targets for every `npm test` repository.
- Check workflow execution evidence for patched repositories.
- Decide whether presence-check-only repositories should remain presence checks, gain explicit support-surface labels, or receive real verifiers under a separate gate.
- Keep registry freshness locked until registry succession rules exist.
