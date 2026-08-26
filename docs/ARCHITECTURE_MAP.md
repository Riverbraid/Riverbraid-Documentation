# Riverbraid Architecture Map

**Status:** CURRENT R3 STRUCTURAL REFERENCE  
**Protocol mutation:** NONE — documentation only

Riverbraid separates four planes so that implementation rigor does not become semantic authority.

## 1. Mechanical protocol plane

**Repository:** `Riverbraid-Core`

Core standardizes only the mechanics necessary for interoperable records and attributed assertions: identity, references, preservation, structural validation, declared scope, evidence references, extensions, and bounded result transport.

Core does not define universal relationship meanings or decide truth, trust, evidentiary weight, legitimacy, risk, readiness, certification, or correct interpretation.

## 2. Declared profile and vocabulary plane

A profile may define a bounded evaluator/check contract. A vocabulary may define the meaning of namespaced predicates.

Those meanings are attributable to that profile or vocabulary. They do not become universal Core semantics.

A vocabulary mapping is itself an attributed assertion, not a hidden equivalence.

## 3. Riverbraid project-governance plane

**Repository:** `Riverbraid-Governance`

This plane records Riverbraid's own adoption, supersession, release, archive, stewardship, and decision process. Project authority can decide what Riverbraid publishes or adopts. It cannot make an external interpretation true.

## 4. Build/qualification plane

F0-F4 controls, authorization records, custody receipts, hashes, stop conditions, and implementation qualification protect how Riverbraid is built. They are not protocol primitives merely because Riverbraid uses them internally.

## Public repository topology

- 5 active architectural surfaces
- 5 active experimental/noncontrolling surfaces
- 42 historical repositories pending archive

The former petal-equals-repository and Ring/constellation structures are historical. A concept earns an independent repository only when it has an independently justified lifecycle or implementation boundary.

## Primitive test

A Core primitive must make something necessary inspectable while imposing as little meaning as possible. If legitimate downstream users must route around an assumption merely to preserve interpretive difference, that assumption belongs at another layer.
