# Riverbraid System Map

This document maps the visible Riverbraid GitHub surface into a bounded public structure.

It is a documentation surface only. It does not define protocol authority, alter registry entries, update verification commands, change workflow behavior, create certification, or expand any technical claim.

## Current public source of truth

The current public canonical verification floor is the Evaluation Kit registry.

```text
Riverbraid-Evaluation-Kit/verified-repo-registry.json
```

Other manifests, maps, repository lists, or documentation surfaces are historical, auxiliary, experimental, documentation, tooling, or subordinate unless explicitly marked otherwise.

## Surface summary

| Surface | Count |
|---|---:|
| Visible repositories audited | 52 |
| Canonical lifecycle entries in this map | 31 |
| Documentation surfaces | 1 |
| Support surfaces | 11 |
| Outer Gold surfaces | 5 |
| Experimental surfaces | 2 |
| Demo or prototype surfaces | 2 |

## Canonical entry path

1. Start with `Riverbraid-Evaluation-Kit`.
2. Read the claim boundaries.
3. Inspect the pinned registry.
4. Run or review the available verification path.
5. Treat every repository outside the current Evaluation Kit registry as non canonical unless it is explicitly brought into a later verified registry.

## Canonical verification floor

The following repositories are currently mapped as canonical because they are either the public Evaluation Kit entry surface or listed in the Evaluation Kit registry.

| Repository | Role |
|---|---|
| `Riverbraid/Riverbraid-Action-Gold` | Action domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Audio-Gold` | Audio domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Bio-Gold` | Bio domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Bridge-Gold` | Bridge domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Cognition` | Cognition and reasoning support surface within Riverbraid. |
| `Riverbraid/Riverbraid-Core` | Core protocol and invariant authority surface for Riverbraid. |
| `Riverbraid/Riverbraid-Crypto-Gold` | Crypto domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Evaluation-Kit` | Primary public evaluation and starter surface for the current Riverbraid verification floor. |
| `Riverbraid/Riverbraid-Flow-Gold` | Flow domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-GPG-Gold` | Gpg domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Golds` | Constellation coordination and registry-orientation surface for Riverbraid. |
| `Riverbraid/Riverbraid-Governance-Gold` | Governance domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Harness-Gold` | Harness domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Identity-Gold` | Identity domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Integration-Gold` | Integration domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Interface-Gold` | Interface domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Judicial-Gold` | Judicial domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Lite` | Lightweight Riverbraid entry surface for inspection and adaptation. |
| `Riverbraid/Riverbraid-Manifest-Gold` | Manifest domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Memory-Gold` | Memory domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Network-Gold` | Network domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Refusal-Gold` | Refusal domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Safety-Gold` | Safety domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Security-Gold` | Security domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Standard-IO` | Standard input and output support surface. |
| `Riverbraid/Riverbraid-Storage-Gold` | Storage domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Temporal-Gold` | Temporal domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Types` | Shared type and structure support surface. |
| `Riverbraid/Riverbraid-Verification-Suite` | Verification suite support surface. |
| `Riverbraid/Riverbraid-Vision-Gold` | Vision domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Weave-Gold` | Weave domain surface within the Riverbraid constellation. |

## Non canonical public surfaces

These repositories are visible public surfaces, but they should not be read as inheriting the current Evaluation Kit verification claim unless separately listed in the registry.

| Repository | Lifecycle | Role |
|---|---|---|
| `Riverbraid/Riverbraid-Documentation` | `documentation` | Public documentation and coherence planning surface for Riverbraid. |
| `Riverbraid/.github` | `support` | Profile, community health, and shared GitHub governance support surface. |
| `Riverbraid/Riverbraid-Build-V5` | `support` | Other/support surface within the Riverbraid public repository set. |
| `Riverbraid/Riverbraid-Governance` | `support` | Governance support surface outside the current canonical registry unless separately listed. |
| `Riverbraid/Riverbraid-Integrity-Floors` | `support` | Integrity floor support surface outside the current canonical registry. |
| `Riverbraid/Riverbraid-Lang` | `support` | Tooling support surface outside the current canonical registry. |
| `Riverbraid/Riverbraid-Liminal-Monitoring` | `support` | Monitoring support surface outside the current canonical registry. |
| `Riverbraid/Riverbraid-RDK` | `support` | Developer kit and tooling support surface. |
| `Riverbraid/Riverbraid-Secrets-Safe` | `support` | Secrets and safety support surface outside the current canonical registry. |
| `Riverbraid/Riverbraid-Wasm-Bridge` | `support` | WebAssembly bridge support surface. |
| `Riverbraid/riverbraid-ssg` | `support` | Tooling support surface outside the current canonical registry. |
| `Riverbraid/riverbraid-tsh` | `support` | Tooling support surface outside the current canonical registry. |
| `Riverbraid/Riverbraid-Discovery-Gold` | `outer` | Discovery domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Nexus-Gold` | `outer` | Nexus domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Pulse-Gold` | `outer` | Pulse domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Resonance-Gold` | `outer` | Resonance domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Spatial-Gold` | `outer` | Spatial domain surface within the Riverbraid constellation. |
| `Riverbraid/Riverbraid-Hydra` | `experimental` | Experimental creative interface surface. |
| `Riverbraid/Riverbraid-p5` | `experimental` | Experimental creative interface surface. |
| `Riverbraid/Riverbraid-Gold-UI` | `demo` | User interface prototype surface. |
| `Riverbraid/Riverbraid-Gold-V2` | `demo` | Product/UI prototype surface within the Riverbraid public repository set. |

## Lifecycle vocabulary

Use only these labels for public classification:

- `canonical`: current public verification floor or primary entry surface
- `documentation`: explanatory surface
- `support`: helper, tooling, profile, or infrastructure surface
- `outer`: related Riverbraid surface outside the current canonical registry
- `experimental`: creative, research, or exploratory surface
- `parked`: intentionally inactive surface
- `legacy`: retained historical surface
- `successor`: later replacement surface
- `demo`: prototype or demonstration surface

## Evidence boundary

This map does not claim adoption, certification, legal approval, production readiness, absolute security, external audit, complete AI safety, or absence of defects.

## Maintenance rule

When a repository is added, removed, renamed, archived, or moved into the Evaluation Kit registry, update this system map and the lifecycle index in the same documentation pass.
