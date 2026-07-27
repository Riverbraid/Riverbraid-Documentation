import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const contractPath = "docs/evidence-plans/AUDIT_FINAL_SCAFFOLD_CONTRACT.json";
const resultsPath = "audit-final-scaffold-results.json";
const contract = JSON.parse(fs.readFileSync(contractPath, "utf8"));
const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "riverbraid-audit-final-scaffolds-"));

function run(executable, args, options = {}) {
  const result = spawnSync(executable, args, {
    encoding: "utf8",
    shell: false,
    ...options
  });

  if (result.error) {
    throw new Error(`${executable} failed to start: ${result.error.message}`);
  }

  return result;
}

function requireSuccess(result, label) {
  if (result.status !== 0) {
    throw new Error(
      `${label} failed with exit ${result.status}\nstdout:\n${result.stdout}\nstderr:\n${result.stderr}`
    );
  }
}

function parseOutput(file, label) {
  assert.equal(fs.existsSync(file), true, `${label} must write ${file}`);
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

const summary = {
  record_id: "RB-AUDIT-FINAL-SCAFFOLD-RESULTS-001",
  contract_id: contract.record_id,
  contract_version: contract.version,
  status: "CONDITIONS_NOT_YET_EVALUATED",
  runner_contract: contract.runtime,
  repository_results: [],
  claim_effect: contract.claim_effect,
  nonclaims: contract.nonclaims
};

try {
  for (const entry of contract.repositories) {
    const shortName = entry.repository.split("/")[1];
    const repoDir = path.join(tempRoot, shortName);
    const negativeDir = path.join(tempRoot, `${shortName}-negative`);
    const sourceUrl = `https://github.com/${entry.repository}.git`;

    requireSuccess(run("git", ["init", repoDir]), `${shortName}: git init`);
    requireSuccess(
      run("git", ["-C", repoDir, "remote", "add", "origin", sourceUrl]),
      `${shortName}: git remote add`
    );
    requireSuccess(
      run("git", ["-C", repoDir, "fetch", "--depth=1", "origin", entry.commit]),
      `${shortName}: exact commit fetch`
    );
    requireSuccess(
      run("git", ["-C", repoDir, "checkout", "--detach", "FETCH_HEAD"]),
      `${shortName}: exact commit checkout`
    );

    const observedHead = run("git", ["-C", repoDir, "rev-parse", "HEAD"]);
    requireSuccess(observedHead, `${shortName}: rev-parse`);
    assert.equal(observedHead.stdout.trim(), entry.commit, `${shortName}: commit identity mismatch`);

    const auditPath = path.join(repoDir, "audit_final.js");
    assert.equal(fs.existsSync(auditPath), true, `${shortName}: audit_final.js missing`);

    for (const requiredFile of entry.required_files) {
      assert.equal(
        fs.existsSync(path.join(repoDir, requiredFile)),
        true,
        `${shortName}: required source file missing: ${requiredFile}`
      );
    }

    const positive = run(
      process.execPath,
      ["--experimental-default-type=module", "audit_final.js"],
      { cwd: repoDir }
    );
    requireSuccess(positive, `${shortName}: positive scaffold execution`);

    const positiveOutputPath = path.join(repoDir, "audit-final-output.json");
    const positiveOutput = parseOutput(positiveOutputPath, `${shortName}: positive`);
    assert.equal(positiveOutput.status, contract.required_positive_result.status);
    assert.equal(positiveOutput.audit_scope, entry.expected_scope);
    assert.equal(positiveOutput.claim_boundary, contract.required_positive_result.claim_boundary);
    assert.deepEqual(positiveOutput.missing_files, []);

    fs.mkdirSync(negativeDir, { recursive: true });
    fs.copyFileSync(auditPath, path.join(negativeDir, "audit_final.js"));
    for (const requiredFile of entry.required_files) {
      if (requiredFile !== contract.required_negative_result.removed_file) {
        fs.copyFileSync(path.join(repoDir, requiredFile), path.join(negativeDir, requiredFile));
      }
    }

    const negative = run(
      process.execPath,
      ["--experimental-default-type=module", "audit_final.js"],
      { cwd: negativeDir }
    );
    assert.equal(
      negative.status,
      contract.required_negative_result.exit_code,
      `${shortName}: negative exit mismatch\nstdout:\n${negative.stdout}\nstderr:\n${negative.stderr}`
    );

    const negativeOutputPath = path.join(negativeDir, "audit-final-output.json");
    const negativeOutput = parseOutput(negativeOutputPath, `${shortName}: negative`);
    assert.equal(negativeOutput.status, contract.required_negative_result.status);
    assert.equal(negativeOutput.audit_scope, entry.expected_scope);
    assert.equal(negativeOutput.claim_boundary, contract.required_negative_result.claim_boundary);
    assert.equal(
      negativeOutput.missing_files.includes(contract.required_negative_result.missing_files_must_include),
      true,
      `${shortName}: removed file not reported missing`
    );

    summary.repository_results.push({
      repository: entry.repository,
      commit: entry.commit,
      observed_head: observedHead.stdout.trim(),
      audit_final_sha256: sha256(auditPath),
      audit_scope: positiveOutput.audit_scope,
      claim_boundary: positiveOutput.claim_boundary,
      positive: {
        exit_code: positive.status,
        status: positiveOutput.status,
        missing_files: positiveOutput.missing_files
      },
      disposable_negative: {
        removed_file: contract.required_negative_result.removed_file,
        exit_code: negative.status,
        status: negativeOutput.status,
        missing_files: negativeOutput.missing_files
      }
    });

    console.log(`${shortName}_AUDIT_FINAL_POSITIVE_AND_NEGATIVE_PASS`);
  }

  summary.status = "AUDIT_FINAL_SCAFFOLD_CONDITIONS_MET";
  fs.writeFileSync(resultsPath, JSON.stringify(summary, null, 2) + "\n", "utf8");
  console.log(JSON.stringify(summary, null, 2));
  console.log("AUDIT_FINAL_SCAFFOLD_SUITE_PASS");
} catch (error) {
  summary.status = "AUDIT_FINAL_SCAFFOLD_CONDITIONS_NOT_MET";
  summary.error = error instanceof Error ? error.message : String(error);
  fs.writeFileSync(resultsPath, JSON.stringify(summary, null, 2) + "\n", "utf8");
  console.error(JSON.stringify(summary, null, 2));
  process.exit(1);
} finally {
  fs.rmSync(tempRoot, { recursive: true, force: true });
}
