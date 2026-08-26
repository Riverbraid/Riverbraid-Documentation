# What a scoped PASS means

`PASS` has no Riverbraid-wide meaning by itself.

A PASS is valid only relative to an exact:

- subject;
- subject identity/commit;
- profile or check contract;
- evaluator and evaluator identity;
- environment;
- executed checks;
- evidence references;
- explicit nonclaims.

For the current mechanical reproduction profile, PASS means only that the exact bound Core check-contract bytes were present at the exact subject commit and the declared mechanical checks returned PASS under the recorded evaluator/environment.

PASS does **not** mean truth, trustworthiness, evidentiary weight, certification, legal approval, production readiness, external audit, complete safety, general suitability, or proof of downstream AI behavior.

`FAIL`, `BLOCKED`, `UNAVAILABLE`, `NOT_ASSESSED`, and `INVALID_ATTEMPT` are equally scoped outcomes. None is a global semantic judgment about the subject.
