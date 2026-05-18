# Repository Boundary Map
Riverbraid separates repositories by claim boundary.
## Core authority
### Riverbraid-Core
Core is the normative protocol authority. It defines the audit floor, claim boundaries, and verification records.
Outer repositories must not redefine Core protocol semantics.
## Verified Phase 24 registry
The Phase 24 registry contains 30 repositories that passed the cluster verification gate.
Those repositories have the strongest current functional registry claim.
## Outer surface
The outer surface contains documentation, support tooling, experimental surfaces, legacy workspaces, visualization layers, language surfaces, and future candidates.
Phase 25E verified the local alignment and cleanliness of the outer surface. That does not make every outer repository part of the Phase 24 verified 30 registry.
## Local archival exception
Riverbraid-Downstream-Bridge is preserved as LOCAL_ONLY_ARCHIVAL_EVIDENCE.
It is clean locally, but it has no upstream tracking branch. It is not part of the active public remote surface.
## Boundary rule
A repository only gets the claim level that has been proven for that repository.
No repository inherits a stronger claim from another repository by name, theme, or proximity.
