# Truth Surface Separation

**Status**: SCAFFOLD / INFORMATIVE
**Authority boundary**: Documentation only
**Implementation claim**: NONE
**Verification claim**: NONE

## Purpose

This document separates Riverbraid truth surfaces so stale reports, local drift, AI generated analysis, or documentation scaffolds do not become false public claims.

## Truth surfaces

- local workspace state
- remote GitHub state
- verified registry state
- workflow evidence
- release state
- scaffold state
- public claim state
- manual GitHub settings
- external review

## Core rule

No local terminal report, AI generated report, pasted analysis, or documentation scaffold becomes Riverbraid truth until checked against the relevant truth surface.

Local drift is not public failure.

Public GitHub state is not local machine state.

Registry state is not release state.

Scaffold state is not verified state.

Documentation state is not implementation state.

AI generated analysis is low trust input until checked.

## AI analysis boundary

AI generated reports, audits, trajectory documents, and certifications are low trust scaffold inputs.

They may help identify gaps.

They may not certify Riverbraid state.

They must be checked against the relevant truth surface before becoming public truth.

## Manual settings boundary

GitHub settings that require UI confirmation cannot be treated as complete from documentation alone.

This includes branch protection, repository rulesets, force push blocks, secret scanning, push protection, private vulnerability reporting, and required status checks.

Until manually checked, these remain inventory items.
