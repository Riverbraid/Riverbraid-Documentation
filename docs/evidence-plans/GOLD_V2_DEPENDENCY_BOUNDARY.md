# Evidence Record: Gold-V2 Dependency Boundary

**Status**: BOUNDARY_EXECUTED_BOUNDED_ON_DRAFT  
**Real workspace execution**: NOT_ASSESSED  
**Repository**: `Riverbraid/Riverbraid-Gold-V2`  
**Draft PR**: `#3`  
**Exact head**: `9124578dbc7ec1285accc7098df6453fbbab51ec`  
**Workflow run**: `30289561901`  
**Workflow job**: `90055700184`

## Goal

Make the neighboring-repository dependency boundary explicit and confirm that missing optional workspace dependencies produce a classified unavailable outcome rather than an opaque shell failure or implied self-contained PASS.

## Adopted draft decision

The neighboring repositories remain **optional workspace-only dependencies** for the bounded Gold V2 concept/demo surface.

Repository-local commands remain separate:

```text
npm run verify
npm test
npm run build
```

Optional workspace commands remain:

```text
npm run rb-check
npm run rb-test
npm run rb-build
```

They are now routed through `workspace-dependency-contract.json` and a non-shell runner.

## Executed boundary cases

Using an isolated empty workspace root, all three optional workspace commands were required to:

- identify the missing sibling;
- emit `WORKSPACE_DEPENDENCY_UNAVAILABLE`;
- exit with code `2`;
- retain the contract identity and command name;
- avoid converting the unavailable state into PASS.

Bounded marker:

```text
GOLD_V2_WORKSPACE_BOUNDARY_PASS
```

## Exact-head workflow result

The workflow successfully completed:

- `npm ci --ignore-scripts`;
- repository-local verification;
- deterministic workspace-boundary tests;
- repository-local demo build.

## Remaining limitation

The exact draft does not pin or execute real sibling commits for `riverbraid-tsh` or `riverbraid-wasm-bridge`.

Actual prepared-workspace execution remains separately evidence-gated and must not be inferred from the unavailable-state test or local build.

The draft PR remains unmerged; main-branch incorporation is a separate event.

## Boundary

This evidence does not establish F3 integration, workspace portability, a self-contained workspace proof path, Evaluation Kit registry status, certification, production readiness, external audit, independent reproduction, or absence of defects.
