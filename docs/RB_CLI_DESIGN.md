# RB CLI Design

**Status**: DRAFT / DESIGN ONLY  
**Scope**: Riverbraid command-line interface design  
**Implementation status**: NOT_IMPLEMENTED  
**Registry mutation**: NONE  
**Workflow mutation**: NONE

## Executive summary

The Riverbraid CLI (`rb`) is a proposed command-line interface for reducing friction for developers, reviewers, and auditors interacting with Riverbraid.

It is intended to provide a unified interface for:

- repository inspection
- evidence packet generation and validation
- bounded verification
- drift monitoring

This document is a design surface only. It does not implement the CLI.

## Core principles

- **Consistency**: commands, flags, and output formats should be standardized.
- **Discoverability**: users should be able to find commands and understand usage quickly.
- **Automation-friendly**: commands should support CI/CD and scripting.
- **Mechanical honesty**: outputs should reflect the underlying deterministic process.
- **Feedback-rich**: errors should be clear, concise, and actionable.
- **Claim-bounded**: CLI output must not imply stronger claims than the executed command supports.

## Proposed command tree

```text
rb
  repo
  evidence
  verify
  drift
```

## `rb repo`

Repository management and metadata inspection.

| Command | Description | Example |
|---|---|---|
| `rb repo init <name>` | Initialize a Riverbraid-compatible repository structure. | `rb repo init my-new-gold` |
| `rb repo clone <url>` | Clone a repository and perform initial setup. | `rb repo clone github.com/Riverbraid/Riverbraid-Core` |
| `rb repo status` | Show local branch, cleanliness, and Riverbraid metadata. | `rb repo status` |
| `rb repo list` | List Riverbraid repositories in the local workspace. | `rb repo list` |

## `rb evidence`

Evidence packet generation and validation.

| Command | Description | Example |
|---|---|---|
| `rb evidence generate` | Generate an evidence packet for the current repository. | `rb evidence generate` |
| `rb evidence validate <path>` | Validate an evidence packet against its schema. | `rb evidence validate ./evidence.json` |
| `rb evidence publish <path>` | Publish an evidence packet to a configured destination. | `rb evidence publish ./evidence.json` |

Boundary: `publish` must not imply certification, external audit, registry inclusion, or production readiness.

## `rb verify`

Verification execution.

| Command | Description | Example |
|---|---|---|
| `rb verify local` | Run local verification checks for the current repository. | `rb verify local` |
| `rb verify constellation` | Run configured constellation verification. | `rb verify constellation` |
| `rb verify packet <path>` | Verify a specific evidence packet. | `rb verify packet ./external-packet.json` |

Verification commands must exit nonzero on failure or ambiguity.

## `rb drift`

Drift monitoring and reporting.

| Command | Description | Example |
|---|---|---|
| `rb drift check` | Check for detected drift in the local repository or constellation. | `rb drift check` |
| `rb drift history` | Display history of detected drift events. | `rb drift history` |
| `rb drift alert configure` | Configure alerts for drift detection. | `rb drift alert configure` |

Boundary: drift detection does not automatically resolve drift. It creates an inspectable signal.

## Output formats

Every command should support:

```text
--format human
--format json
--format yaml
```

Default output should be human-readable. Machine-readable output should be deterministic and schema-valid.

## Exit code policy

| Exit code | Meaning |
|---|---|
| `0` | Command completed and stated boundary was satisfied. |
| `1` | Boundary violated or verification failed. |
| `2` | Input/configuration error. |
| `3` | Required dependency missing. |
| `4` | Unsupported command or version. |
| `5` | Ambiguous state; fail closed. |

## Technical considerations

Potential implementation languages:

- Node.js for proximity to current JavaScript verifier surfaces.
- Rust for performance, static binaries, and strong packaging discipline.

The CLI should minimize dependencies and support cross-platform execution.

## Future enhancements

- external identity-provider integration for evidence publishing
- visualization of drift and verification status
- plugin architecture for custom verification logic
- local-to-CI output comparison

## Non-claim

This document does not implement the CLI, create a release, define a production command surface, or claim any command exists today.
