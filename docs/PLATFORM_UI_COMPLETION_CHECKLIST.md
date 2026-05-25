# Platform UI Completion Checklist

This document records the remaining Riverbraid visibility actions that cannot be completed through pull requests alone.

It is a visibility surface only. It does not define protocol authority, verification rules, governance claims, technical correctness, adoption, certification, or external validation.

## Purpose

The file based visibility surface is now documented through committed repository files. The remaining work lives in GitHub platform metadata and release interfaces.

This checklist keeps those actions visible without pretending they are code, verifier, registry, workflow, hash, seal, or protocol changes.

## Remaining UI only actions

### 1. Publish the Evaluation Kit GitHub Release

Repository:

```text
Riverbraid-Evaluation-Kit
```

Release page:

```text
https://github.com/Riverbraid/Riverbraid-Evaluation-Kit/releases/new
```

Tag:

```text
v0.1.0-governance-floor
```

Title:

```text
Riverbraid Evaluation Kit v0.1.0 governance floor
```

Target:

```text
main
```

Use the release body recorded in:

```text
Riverbraid-Evaluation-Kit/docs/EVALUATION_KIT_RELEASE_NOTES_v0.1.0-governance-floor.md
```

### 2. Apply top 8 repository About descriptions

Use the repository metadata guide at:

```text
Riverbraid-Documentation/docs/TOP8_REPOSITORY_METADATA_GUIDE.md
```

The About descriptions must remain short, role specific, and bounded.

### 3. Apply top 8 repository topics

Use the common and role specific topics listed in:

```text
Riverbraid-Documentation/docs/TOP8_REPOSITORY_METADATA_GUIDE.md
```

Topics improve discoverability only. They do not prove maturity, usage, verification, or safety.

### 4. Update the Riverbraid profile surface

Profile bio text:

```text
Open source deterministic integrity floor for AI governance, making structure, authority, and drift visible before trust is granted.
```

### 5. Pin the six priority repositories

Recommended pinned repositories:

1. Riverbraid-Evaluation-Kit
2. Riverbraid-Core
3. Riverbraid-Golds
4. Riverbraid-Documentation
5. Riverbraid-Safety-Gold
6. Riverbraid-Refusal-Gold

## Completion record template

When these UI actions are completed, record the result as:

```json
{
  "evaluation_kit_release": "release URL or blocked reason",
  "top_8_metadata": "confirmed or deferred",
  "profile_surface": "confirmed or blocked reason"
}
```

## Non claims

Completing these actions does not claim:

- More adoption
- More technical maturity
- Functional verification beyond existing Evaluation Kit claims
- Production readiness
- Certification
- External audit
- Legal approval
- Absolute security
- Absence of defects

Allowed claim after completion:

```text
Riverbraid's public visibility surface has been improved for readability and discoverability.
```
