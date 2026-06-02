# Local Environment Remediation

**Status**: SCAFFOLD / INFORMATIVE / LOCAL ONLY
**Authority boundary**: Local machine documentation only
**Public GitHub claim**: NONE

## Purpose

This document tracks local only drift classes without treating them as public repository truth.

## Local drift examples

- wrong remotes
- stashes
- Docker missing
- PowerShell parser failures
- null byte or encoding issues
- node_modules pollution
- manual success echoes after failed commands
- uncommitted local files
- local environment dependency failures

## Boundary

Local environment problems can block local work.

They do not automatically invalidate public GitHub state.

Public GitHub state must be checked on the relevant public surface.
