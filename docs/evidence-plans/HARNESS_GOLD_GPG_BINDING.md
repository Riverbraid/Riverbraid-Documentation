# Evidence Plan: Harness-Gold Runtime GPG Binding

**Status**: PLAN_ONLY  
**Execution**: NOT_EXECUTED

## Goal

Confirm that the patched runtime binding uses bounded GPG verification behavior and fails on invalid inputs.

## Required evidence

- repository commit under test
- valid signature path output
- invalid signature path output
- missing anchor output
- missing signature output
- exit codes
- confirmation that CI-specific skip behavior is not active

## Expected result

- valid case: success
- invalid or missing case: nonzero failure

## Boundary

This plan does not handle private keys or secrets. It does not execute tests.
