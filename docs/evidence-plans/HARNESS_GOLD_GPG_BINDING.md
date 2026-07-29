# Evidence Status: Harness-Gold Runtime GPG Binding

**Status**: BLOCKED_BY_SOURCE_CONTRACT  
**GPG execution**: NOT_ASSESSED  
**Repository**: `Riverbraid/Riverbraid-Harness-Gold`  
**Draft PR**: `#6`  
**Exact head**: `e054407becc9d995b023042a24eaf0c7cae5e0b7`

## Intended goal

Confirm that the patched runtime binding uses argument-array GPG verification, does not skip verification when `CI=true`, and fails closed for invalid or missing inputs.

## Source-bound blockers

Both observed entrypoints:

```text
runtime-binding.js
src/runtime-binding.js
```

require:

```text
bin/verify-swarm.cjs
riverbraid-shield.js
```

Neither required dependency exists on the observed default branch.

The package also declares `type: module` while both `.js` entrypoints use CommonJS `require` and `module.exports` syntax.

The runtime-binding subject therefore cannot be honestly described as executable from the observed source contract. Direct valid/invalid GPG evidence has not been produced.

## Draft precision evidence

Draft PR `#6` adds a machine-readable blocked-state record and validator, and replaces a no-op integrity workflow with the actual repository-local verifier.

Successful exact-head workflows:

1. Repaired verification gate: run `30289790880`, job `90056469679`.
2. Existing verifier: run `30289790890`, job `90056470184`.

Bounded status marker:

```text
RUNTIME_BINDING_BLOCKED_STATE_CONFIRMED
```

This marker confirms that the recorded blocker matches the observed source tree. It is **not** GPG execution evidence.

## Required future evidence

After the source contract is repaired:

- exact repaired repository commit;
- declared runtime consumer and module format;
- valid signature result;
- invalid signature result;
- missing anchor result;
- missing signature result;
- `CI=true` invalid-signature result proving no skip;
- exit codes and attributable logs;
- direct and regression test identities.

## Required repair sequence

1. Recover or implement `bin/verify-swarm.cjs` under an attributable specification.
2. Recover or implement `riverbraid-shield.js` under an attributable specification.
3. Reconcile the entrypoint module format with the package and consumers.
4. Add isolated-keyring GPG tests.
5. Execute and preserve the exact repaired subject.

## Boundary

This status does not claim compromise, GPG success, GPG failure, production readiness, security hardening, external audit, independent reproduction, certification, or absence of defects. A green repository-local verifier does not close the runtime-binding fault.
