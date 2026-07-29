# Public Repository Classification Crosswalk

**Status:** INFORMATIVE HUMAN VIEW  
**Machine record:** `Riverbraid/Riverbraid-Golds/PUBLIC-REPOSITORY-CLASSIFICATION.json`  
**As of:** 2026-07-27

## Purpose

Riverbraid has 52 public repositories under the `Riverbraid` GitHub user account, while the current Evaluation Kit contains a pinned 30-repository registry.

The machine-readable Golds record is the account-wide role-classification surface. This documentation crosswalk explains how it relates to existing public records without collapsing distinct dimensions.

## Dimension separation

| Question | Controlling public surface |
|---|---|
| What broad role does each of the 52 public repositories have? | `Riverbraid-Golds/PUBLIC-REPOSITORY-CLASSIFICATION.json` |
| What lifecycle label and public packaging posture was previously assigned? | `docs/REPOSITORY_LIFECYCLE_INDEX.md` |
| Which exact repositories and commits are in the pinned evaluation profile? | `Riverbraid-Evaluation-Kit/verified-repo-registry.json` |
| How deep is each current registry command? | `docs/VERIFICATION_DEPTH_CLASSIFICATION.md` |
| Which repositories belong to an adopted F3/F4 functional core? | Not yet assessed or adopted |

## Canonical role vocabulary

Every public repository appears exactly once under one of:

- `CORE_REQUIRED`
- `CORE_SUPPORT`
- `EXTENSION_PROFILE`
- `EXPERIMENTAL`
- `DOCUMENTATION`
- `SUPERSEDED`
- `ARCHIVED`

This vocabulary is a public role classification. It is not a maturity ladder and does not replace lifecycle, registry, verification-depth, execution-evidence, or gate records.

## Claim boundary

The classification record does not establish that all 52 repositories are verified, operational, current, maintained, or members of the Riverbraid F3/F4 functional core.

Registry membership does not imply equal verification depth. File presence does not establish behavioral verification. Public visibility does not establish operational membership.

## Review triggers

Review this crosswalk when:

- a repository is added, removed, renamed, transferred, archived, or superseded;
- the Evaluation Kit registry is succeeded;
- verification depth changes;
- an F3 functional-core profile is adopted;
- a lifecycle, authority, or claim-boundary contradiction is found.
