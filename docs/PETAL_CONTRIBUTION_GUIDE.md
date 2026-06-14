# Petal Contribution Guide

**Status**: DRAFT / GUIDANCE  
**Audience**: domain experts who are not protocol engineers  
**Protocol mutation**: NONE

## Who this is for

This guide is for domain experts who understand a field such as law, public health, energy infrastructure, education, security, creative systems, or data governance, but do not necessarily write verifier code.

A domain expert contributes the boundary knowledge. A technical collaborator implements the verifier. Both must agree before a petal makes a public claim.

## What a Gold petal is

A Gold petal is a bounded behavioral verifier for a specific domain.

It answers one question:

```text
Was a defined behavioral boundary present in the system state at verification time?
```

It does not answer:

- Is this system good?
- Is this system safe?
- Does this system comply with regulations?
- Should this system be deployed?

A petal is a witness, not a judge. The domain expert's job is to define what the petal witnesses.

## Step 1 - Define the domain boundary

Before anything is built, answer these questions in plain language:

### What behavior are we checking for?

Be specific.

`AI safety` is not a boundary.

`The system has a documented refusal policy with at least three defined refusal categories` is a boundary.

### What does a violation look like?

Describe the state that would cause the verifier to fail.

If you cannot describe a failure state, the boundary is not defined yet.

### What is outside this petal's scope?

A petal that implies it checks things it does not check is more dangerous than a narrow petal.

Write the boundary in plain language first. The technical collaborator can translate it into verifiable form.

## Step 2 - Provide test vectors

A test vector is a concrete example of a state that should pass or fail.

Passing example:

- a configuration file where boundary fields are present, non-empty, and structurally correct

Failing examples:

- the configuration file is absent
- a required field is null or empty
- a boundary field has been tampered

A boundary that cannot fail is not a boundary.

## Step 3 - Distinguish evidence from interpretation

Evidence is something the verifier can observe directly.

Interpretation is a judgment call about what the evidence means.

| Statement | Type | In verifier? |
|---|---|---|
| The policy document exists at the configured path. | Evidence | Yes |
| The policy has at least three defined categories. | Evidence if schema-checkable | Yes, if encoded. |
| The policy is adequate for deployment. | Interpretation | No |
| The system will behave correctly in production. | Interpretation | No |

Riverbraid verifiers witness evidence. They do not make broad interpretive judgments.

## Step 4 - Document failure behavior

For the domain, describe what should happen when the verifier fails.

Riverbraid petals are fail-closed by default.

If the domain has a reason to deviate, document it explicitly and require maintainer agreement.

## Step 5 - Write non-claims

Before publication, produce a non-claims list.

Start with:

- regulatory compliance
- runtime behavior
- completeness
- production readiness
- external audit
- certification

Then add domain-specific non-claims.

Non-claims are part of the trust surface, not admissions of weakness.

## Step 6 - Review the verifier before publication

Ask:

- Does the verifier check the boundary we defined?
- Does it fail on the failing examples?
- Does it pass on the passing example?
- Does `claim_level` in `petal.json` match the verifier depth?
- Does `non_scope` include everything agreed out of scope?

The domain expert does not need to read all code. They need to see the verifier run against the test vectors and confirm the output matches the boundary.

## Step 7 - Maintain the boundary over time

Domain boundaries drift. Standards change. Best practices evolve.

The domain expert is responsible for flagging when a boundary may no longer be accurate.

The technical maintainer implements verifier changes. The domain expert helps decide when changes are needed.

## What not to do

- Do not claim a verifier checks something it does not check.
- Do not upgrade `claim_level` without execution evidence.
- Do not publish a petal without non-claims.
- Do not use certification language.
- Do not treat a presence-check petal as a deeper verifier.

## How to propose a new petal

Open an issue in `Riverbraid-Documentation` using the New Petal Proposal template.

Include:

- domain name
- plain-language boundary definition
- at least two failing examples
- at least one passing example
- initial non-claims list
- proposed maintainer

Proposals missing these items should be returned for revision, not rejected.

## Compatibility language

Use:

```text
[System] uses a Riverbraid-aligned governance surface for [domain].
Verification scope: [what the petal checks]
Non-claims: [what the petal does not check]
Evidence: [where the evidence lives]
This is not a Riverbraid certification.
```

## Non-claim

This guide does not admit a petal to the registry, assign maintainer authority, or upgrade verifier depth.
