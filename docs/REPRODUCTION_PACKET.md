# Reproduction Packet

**Status**: PACKET SCAFFOLD / REPRODUCTION GUIDE  
**Scope**: information needed to reproduce bounded Riverbraid verification paths  
**Execution status**: NOT_EXECUTED_BY_THIS_DOCUMENT

## Purpose

A reproduction packet gathers the information needed for another person or system to reproduce a Riverbraid verification result.

This document defines the packet contents. It does not execute verification.

## Required fields

```yaml
packet_id:
generated_at:
repository:
commit_sha:
verification_path:
command:
environment:
workflow_run:
stdout_artifact:
stderr_artifact:
exit_code:
result:
expected_result:
known_limitations:
non_claims:
```

## Required attachments or links

- repository URL
- commit SHA
- command run
- exact verifier entry point
- environment details
- workflow run or local execution output
- expected result source
- non-claims
- known limitations

## Reproduction levels

| Level | Meaning |
|---|---|
| STATIC_REFERENCE | Reader can inspect claims and expected commands. |
| LOCAL_COMMAND | Reader can run the command locally. |
| CI_REPLAY | Reader can inspect or rerun a CI path. |
| CONTAINER_REPRODUCTION | Reader can reproduce in a pinned container. |
| CRYPTOGRAPHIC_PACKET | Reader can verify packet signature or hash. |

## Minimum reproduction claim

Use:

```text
Reproduction packet prepared for [repository] at [commit].
Scope: [verification path]
Result: [result]
Non-claims: [list]
```

Do not use:

- certified
- production ready
- externally audited
- secure by default

## Non-claim

This packet scaffold does not prove reproduction occurred. It defines what should be preserved when reproduction evidence exists.
