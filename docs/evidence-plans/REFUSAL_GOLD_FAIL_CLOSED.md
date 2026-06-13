# Evidence Plan: Refusal-Gold Fail-Closed Behavior

**Status**: PLAN_ONLY  
**Execution**: NOT_EXECUTED

## Goal

Confirm that the patched Refusal-Gold verifier exits successfully for a valid state and exits nonzero for an invalid or unverified state.

## Required evidence

- repository commit under test
- command run
- valid-state output
- invalid-state output
- exit codes
- summary of what passed or failed

## Expected result

- valid state: success
- invalid or missing state: nonzero failure

## Boundary

This plan does not execute tests. It does not update registry pins or expected results.
