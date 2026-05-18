# Fork and Reuse
Riverbraid can be forked or reused as a governance starting point.
## What to keep
If you fork Riverbraid, keep:
- Explicit claim levels.
- Clean separation between verified and experimental work.
- Fail closed verification behavior.
- Public non claims.
- Exact commands for inspection.
- Local and remote alignment checks.
- CI checks tied to exact commits.
## What to change
A fork should change:
- Project names where appropriate.
- Repository boundary map.
- Verification artifacts.
- Release scope.
- Registry membership.
A fork must not imply that it inherits Riverbraid verification results.
## Safe reuse pattern
1. Fork or clone the relevant repository.
2. Run the verification commands.
3. Record actual outputs.
4. Define your own claim boundary.
5. Publish non claims.
6. Avoid claiming certification unless certification exists.
## Minimal reuse statement
This project uses Riverbraid as an auditable governance starting point. It does not inherit Riverbraid verification claims unless those claims are independently reproduced in this fork.
