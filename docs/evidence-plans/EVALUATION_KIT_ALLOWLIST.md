# Evidence Plan: Evaluation Kit Allowlist

**Status**: PLAN_ONLY  
**Execution**: NOT_EXECUTED

## Goal

Confirm that allowed verifier commands run and unlisted commands fail closed.

## Required evidence

- Evaluation Kit commit under test
- allowed command test output
- unlisted command test output
- exit codes
- summary of allowed command list
- lifecycle-script decision record

## Expected result

- allowed commands: success when repository state is valid
- unlisted command: nonzero failure

## Boundary

This plan does not execute commands, install dependencies, mutate the registry, or update expected results.
