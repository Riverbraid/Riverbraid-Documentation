# Custom Verifier Examples

**Status**: DRAFT / EXAMPLES ONLY  
**Scope**: patterns for Riverbraid-aligned verifiers  
**Implementation status**: EXAMPLE_ONLY

## Purpose

This document gives simple patterns for building Riverbraid-aligned verifiers.

A verifier should:

1. define a bounded claim
2. read a deterministic input
3. check a specific boundary
4. exit zero only when satisfied
5. exit nonzero on failure or ambiguity
6. document non-scope

## Example 1 - Presence check

Claim level:

```text
PRESENCE_CHECK
```

```js
#!/usr/bin/env node
import { existsSync } from 'fs';

const required = 'CLAIMS.md';

if (!existsSync(required)) {
  console.error(`FAIL: missing ${required}`);
  process.exit(1);
}

console.log(`PASS: ${required} exists`);
process.exit(0);
```

This verifies only that the file exists.

It does not verify the correctness or completeness of the file.

## Example 2 - Schema check

Claim level:

```text
SCHEMA_CHECK
```

```js
#!/usr/bin/env node
import { readFileSync } from 'fs';

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exit(1);
}

let data;
try {
  data = JSON.parse(readFileSync('petal.json', 'utf8'));
} catch (error) {
  fail(`could not parse petal.json: ${error.message}`);
}

for (const field of ['id', 'domain', 'claim_level', 'verifier', 'scope', 'non_scope']) {
  if (!data[field]) fail(`missing required field: ${field}`);
}

if (!Array.isArray(data.non_scope) || data.non_scope.length === 0) {
  fail('non_scope must be non-empty');
}

console.log('PASS: petal.json has required fields');
process.exit(0);
```

This verifies structural fields only.

## Example 3 - Deterministic vector check

Claim level:

```text
DETERMINISTIC_VECTOR_CHECK
```

```js
#!/usr/bin/env node
import { createHash } from 'crypto';

const input = 'refusal-boundary:v1:required-fields-present';
const expected = '9d7f4a6c1a2b9e3f0d4c8b7a6f1e2d3c4b5a697887766554433221100ffeedd';
const actual = createHash('sha256').update(input).digest('hex');

if (actual !== expected) {
  console.error(`FAIL: vector mismatch expected=${expected} actual=${actual}`);
  process.exit(1);
}

console.log('PASS: deterministic vector matched');
process.exit(0);
```

A real verifier should compute vectors from real fixture files, not hard-coded examples.

## Example 4 - Negative fail-closed check

Claim level:

```text
NEGATIVE_FAIL_CLOSED_CHECK
```

Pattern:

```text
1. Run verifier on valid fixture; expect exit 0.
2. Run verifier on missing required field; expect nonzero.
3. Run verifier on tampered value; expect nonzero.
4. Fail if any invalid fixture exits 0.
```

## Claim-depth rule

Do not declare a higher `claim_level` than the verifier implements.

A presence-check verifier is coherent when it says it is a presence check.

A deterministic-vector verifier requires actual deterministic vectors.

A negative fail-closed verifier requires negative-case execution evidence.

## Non-claim

These examples are not production verifiers and do not admit any petal to the registry.
