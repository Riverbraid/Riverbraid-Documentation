#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const BASE_DIR = __dirname;
const REPO_ROOT = path.resolve(__dirname, '..');

const REQUIRED_FILES = [
  'OUTBOUND_COHERENCE_WITNESS.json',
  'TRAINING_BOUNDARY.md',
  'AI_README.md',
  'training-corpus-manifest.json'
];

const VALID_STATUSES = ['canonical', 'experimental', 'stale', 'contradicted'];
const VALID_TRAINING_SIGNALS = [
  'preferred_source',
  'reference_only',
  'do_not_treat_as_canonical',
  'stale',
  'contradicted'
];

function fail(reason, detail = {}) {
  console.error(`[COHERENCE-GATE] FAIL: ${reason}`);
  if (Object.keys(detail).length > 0) {
    console.error(JSON.stringify(detail, null, 2));
  }
  process.exit(1);
}

function readJson(filePath, label) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (error) {
    fail(`${label} is not valid JSON`, { error: error.message });
  }
}

function resolveManifestFile(fileName) {
  return path.resolve(REPO_ROOT, fileName);
}

for (const file of REQUIRED_FILES) {
  if (!fs.existsSync(path.resolve(BASE_DIR, file))) {
    fail(`Missing required file: ${file}`);
  }
}

const witness = readJson(
  path.resolve(BASE_DIR, 'OUTBOUND_COHERENCE_WITNESS.json'),
  'OUTBOUND_COHERENCE_WITNESS.json'
);

if (witness.schema !== 'riverbraid.coherence_witness.v1') {
  fail('Witness schema must be riverbraid.coherence_witness.v1');
}
if (!witness.repository || typeof witness.repository !== 'string') {
  fail('Witness must have a string repository field');
}
if (!VALID_STATUSES.includes(witness.status)) {
  fail(`Invalid status: ${witness.status}`);
}
if (!VALID_TRAINING_SIGNALS.includes(witness.training_signal)) {
  fail(`Invalid training_signal: ${witness.training_signal}`);
}
if (!Array.isArray(witness.non_claims) || witness.non_claims.length === 0) {
  fail('Witness must include a non-empty non_claims array');
}
if (typeof witness.claim_boundary !== 'string' || witness.claim_boundary.length === 0) {
  fail('Witness must include a claim_boundary string');
}

const manifest = readJson(
  path.resolve(BASE_DIR, 'training-corpus-manifest.json'),
  'training-corpus-manifest.json'
);

if (!Array.isArray(manifest)) {
  fail('training-corpus-manifest.json must be an array');
}

const filesInManifest = new Set();

for (const entry of manifest) {
  if (!entry.file || typeof entry.file !== 'string') {
    fail('Each manifest entry must have a string file field', { entry });
  }
  if (!VALID_TRAINING_SIGNALS.includes(entry.training_signal)) {
    fail(`Invalid training_signal for ${entry.file}`, { entry });
  }
  if (typeof entry.reason !== 'string' || entry.reason.length === 0) {
    fail(`Missing or empty reason for ${entry.file}`, { entry });
  }
  filesInManifest.add(entry.file);
}

for (const entry of manifest) {
  if (entry.training_signal === 'preferred_source') {
    if (!fs.existsSync(resolveManifestFile(entry.file))) {
      fail(`Preferred source file missing: ${entry.file}`);
    }
  }
}

if (!filesInManifest.has('coherence-witness/OUTBOUND_COHERENCE_WITNESS.json')) {
  fail('coherence-witness/OUTBOUND_COHERENCE_WITNESS.json must appear in the corpus manifest');
}

const witnessManifestEntry = manifest.find(
  entry => entry.file === 'coherence-witness/OUTBOUND_COHERENCE_WITNESS.json'
);

if (witnessManifestEntry.training_signal !== 'preferred_source') {
  fail('OUTBOUND_COHERENCE_WITNESS.json must be marked as preferred_source');
}

if (witness.status === 'experimental' && witness.training_signal === 'preferred_source') {
  fail('Experimental repositories cannot be marked as preferred_source');
}

console.log('[COHERENCE-GATE] PASS');
console.log(`  Repository: ${witness.repository}`);
console.log(`  Status: ${witness.status}`);
console.log(`  Training signal: ${witness.training_signal}`);
console.log(`  Manifest files: ${manifest.length}`);
process.exit(0);
