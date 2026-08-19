import fs from "node:fs";

const requiredCurrent = [
  "README.md","CURRENT.md","AUTHORITY.md","RING.md","content-status.json",
  "docs/RIVERBRAID_IN_10_MINUTES.md","docs/ARCHITECTURE_MAP.md","docs/SYSTEM_MAP.md",
  "docs/WHAT_PASS_MEANS.md","docs/KNOWN_LIMITATIONS.md",
  "docs/GOVERNANCE_AUTHORITY_BOUNDARIES.md","docs/VERIFICATION_CONTRACT.md",
  ".github/ISSUE_TEMPLATE/profile_or_vocabulary_proposal.md",
  ".github/ISSUE_TEMPLATE/mechanical_profile_change.md"
];

const forbiddenActive = [
  ".github/ISSUE_TEMPLATE/new_petal_proposal.md",
  ".github/ISSUE_TEMPLATE/registry_change.md"
];

const forbiddenCurrentPhrases = [
  "before trust is granted",
  "canonical verification floor",
  "behavioral petals",
  "active constellation",
  "registry scope is 30 pinned entries"
];

const missing = requiredCurrent.filter((p) => !fs.existsSync(p));
const stillActive = forbiddenActive.filter((p) => fs.existsSync(p));

let status = null;
try {
  status = JSON.parse(fs.readFileSync("content-status.json","utf8"));
} catch {}

const statusOk =
  status?.default_classification === "HISTORICAL" &&
  Array.isArray(status?.current_exact) &&
  requiredCurrent.every((p) => status.current_exact.includes(p));

const currentNarrativePaths = [
  "README.md","CURRENT.md",
  "docs/RIVERBRAID_IN_10_MINUTES.md","docs/ARCHITECTURE_MAP.md","docs/SYSTEM_MAP.md",
  "docs/WHAT_PASS_MEANS.md","docs/KNOWN_LIMITATIONS.md",
  "docs/GOVERNANCE_AUTHORITY_BOUNDARIES.md","docs/VERIFICATION_CONTRACT.md"
];

const phraseFailures = [];
for (const p of currentNarrativePaths) {
  if (!fs.existsSync(p)) continue;
  const text = fs.readFileSync(p,"utf8").toLowerCase();
  for (const phrase of forbiddenCurrentPhrases) {
    if (text.includes(phrase.toLowerCase())) phraseFailures.push({path:p,phrase});
  }
}

const checks = [
  {check_ref:"urn:riverbraid:check:documentation-current-files:v0.1",result:missing.length===0?"PASS":"FAIL",evidence:{missing}},
  {check_ref:"urn:riverbraid:check:retired-active-ui-absent:v0.1",result:stillActive.length===0?"PASS":"FAIL",evidence:{still_active:stillActive}},
  {check_ref:"urn:riverbraid:check:documentation-default-historical:v0.1",result:statusOk?"PASS":"FAIL"},
  {check_ref:"urn:riverbraid:check:current-narrative-old-topology-phrases:v0.1",result:phraseFailures.length===0?"PASS":"FAIL",evidence:{phrase_failures:phraseFailures}}
];

const result = checks.every((x)=>x.result==="PASS") ? "PASS" : "FAIL";
console.log(JSON.stringify({
  result_id:"urn:riverbraid:result:documentation-currentness-boundary:v0.1",
  subject_ref:"Riverbraid/Riverbraid-Documentation",
  profile_ref:"urn:riverbraid:profile:documentation-currentness:v0.1",
  evaluator_ref:"Riverbraid-Documentation/verify-documentation.mjs",
  checks,
  result,
  nonclaims:[
    "NO_PROTOCOL_VERIFICATION",
    "NO_TRUTH_OR_MEANING_JUDGMENT",
    "NO_EVIDENTIARY_WEIGHT_JUDGMENT",
    "NO_CERTIFICATION",
    "NO_GENERAL_SUITABILITY"
  ]
}, null, 2));
process.exit(result==="PASS" ? 0 : 1);
