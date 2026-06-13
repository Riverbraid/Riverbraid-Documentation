# Riverbraid Glossary

**Status**: ORIENTATION / DEFINITIONS  
**Claim boundary**: explanatory only

## Terms

**Riverbraid**: An open-source deterministic integrity floor for AI governance.

**Core**: The canonical protocol authority and audit-behavior surface.

**Gold**: A domain or trust surface that expresses a bounded verifier, invariant, or governance role.

**Petal**: A domain-specific extension surface that can be inspected without redefining Core authority.

**Assembler**: A component or pattern that reads multiple surfaces into a coherent governance view.

**Registry**: A pinned list of repositories, commits, and configured verification commands.

**Deterministic integrity floor**: A minimum evidence and verification substrate that must hold before stronger claims are made.

**Fail closed**: A failure posture where an unmet condition blocks stronger claims instead of silently passing.

**Proof surface**: The bounded artifact, command, workflow, or evidence path that supports a claim.

**Evidence path**: The route from claim to artifact to verifier to result.

**Claim boundary**: The exact limit of what a result supports.

**Non-claim**: A statement explicitly saying what is not proven.

**Verifier depth**: How strong a verifier is, from presence-check-only to domain-invariant or cryptographic verification.

**Pinned snapshot**: A registry or evidence state fixed to exact commits.

**Registry freshness**: Whether a registry pin reflects a newer repository state after an approved succession process.

**Adaptation**: A fork or applied version of Riverbraid that must state its divergence and evidence boundaries.

**Riverbraid-aligned**: Inspired by or consistent with Riverbraid principles, without claiming canonical authority.

**Lifecycle status**: A label such as canonical, registry-listed, support, experimental, concept-demo, deprecated, archived, or external-adaptation.

**Stationary state**: A bounded state where the declared verification conditions hold for the stated scope.

**Guardian / steward**: A person or role responsible for maintaining claim boundaries, evidence quality, or a petal surface.

**Proof-of-concept scope**: A bounded maturity level showing the system is inspectable and coherent enough to test, not production-ready.

## Boundary

These definitions are explanatory. Repository-specific files may define narrower technical meanings for their own surfaces.
