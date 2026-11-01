# Observation frames and blind spots

**Status:** Documentation review, November 1, 2026. **Authority:** informative only. This page does not amend a verifier, registry, Core rule, or F gate, and does not certify a current run.

A result is complete only for the observation frame that produced it. Before carrying it to a larger claim, name the universe, denominator, instrument, time, excluded cases, other plausible view, and claim ceiling.

## Findings bound to public source

| Public surface | What the observation leaves out | Evidence and limit |
|---|---|---|
| Core byte audit | Git failures in branch, commit, status, and tracked-file enumeration become empty strings, while null commit and zero tracked files do not block `BYTE_VERIFIED`. | At Core `b5c8cde0ebb56ac98bc738545a8e80c10c67b191`, `byte-audit.mjs` has an `allowFailure` path for these calls. An isolated non-Git directory with a present required README and `verify-output.json` status `VERIFIED` returned `BYTE_GATE_PASS_VERIFIED`, null branch/commit, zero tracked files. This demonstrates a false-positive route in this public script, not a false PASS in a real Riverbraid run. |
| Evaluation Kit command aggregation | Four of the thirty registry entries use `test -f README.md`. A success count therefore does not mean thirty equally deep behavior checks. | Kit `cd814ac415d7952e524c8edd5c595d77189ed24d`, `verified-repo-registry.json` and `run-verification.sh`; see [verification depth](VERIFICATION_DEPTH_CLASSIFICATION.md). No new thirty-repository run was performed for this review. |
| Evaluation Kit independence label | `external_reproduction` is calculated solely as `$failing == 0` and expected to be `true`. It does not measure operator, acquisition, workspace, evaluation, or intervention independence. | Same Kit commit and `expected-results.json`. Treat the field as a legacy aggregate runner output, not independent F2 evidence. |
| Evaluation Kit setup failure | With `set -e`, an unhandled `npm ci` error can exit before the final result JSON. | Source path only; this review did not execute a setup-failure case. Preserve partial logs and classify the result as incomplete, not a completed pass. |

The public Documentation repository was inspected at `541d3f62f9e70e38f5ea4338d9799540f148469c`. Current default-branch files, the Kit's pinned commits, and any later separately prepared candidate are different subjects. This page describes the public sources above at those commits; it does not decide current qualification or adoption state.

## Reading an observation without enlarging it

1. **Select the question.** A file-presence result, byte result, native process result, integrated behavior, and practical utility answer different questions.
2. **State the frame.** List observed roots/repositories, version or commit, selected files and commands, environment, time, inclusion/exclusion rule, and the denominator.
3. **Carry contrary and missing cases.** An unreadable file, failed collector, missing final summary, skipped root, unrun negative fixture, and evidence held by another actor are not interchangeable.
4. **Check another view only when material.** Ask whether an excluded plausible case could reverse this specific conclusion. If so, preserve an unresolved gap or use the smallest authorized independent observation. If not, keep the bounded result.
5. **Separate a result from its interpretation.** Command exit, verified bytes, review independence, integration, and real-world benefit need their own evidence. Do not use a single green count as their substitute.

These reading steps are documentary guidance, not a new mandatory schema or universal test. They align with the existing claim boundaries and [known limitations](KNOWN_LIMITATIONS.md). NIST's [AI RMF Core](https://airc.nist.gov/airmf-resources/airmf/5-sec-core/) likewise calls for documenting evaluation design, data selection, construct validity, and limits beyond the tested conditions; it does not establish Riverbraid conformance.

## Follow-up under a selected code change

- Core: make failed Git observations an explicit blocking result; require a valid repository identity and tracked-byte coverage for a byte-verified claim. Keep the isolated non-Git fixture as a regression case.
- Kit: preserve per-repository command depth in output; rename or separately substantiate the independence assertion; capture setup failures in a final bounded result.
- Before any change to pinned expected results, registry, verifier, or public status, bind its exact source, review, evidence, and applicable authority. This document does none of those actions.
