# Claim Levels
Riverbraid uses claim levels to prevent overstatement.
## Claim level table
| Claim Level | Meaning | What It Does Not Mean |
|---|---|---|
| LOCAL_FILE_EXISTS | A file exists locally. | The file is correct, tracked, committed, or pushed. |
| LOCAL_PARSED | A file or JSON object parses locally. | It is anchored, reviewed, or remotely verified. |
| LOCAL_COMMITTED | A change is committed locally. | It is pushed or CI verified. |
| REMOTE_ALIGNED | Local and remote heads match. | CI has passed. |
| CI_PASSED | Remote workflow passed for a commit. | The whole system is certified or defect free. |
| VERIFIED_REGISTRY_MEMBER | A repository belongs to a verified registry boundary. | Every repo in the organization shares that status. |
| LOCAL_OUTER_SURFACE_POST_ALIGNMENT_VERIFIED | Local outer repositories are clean and aligned under the Phase 25E rules. | External reproduction, certification, or domain maturity. |
| LOCAL_ONLY_ARCHIVAL_EVIDENCE | A local repository is preserved as evidence outside the remote surface. | It is public, synced, or part of the verified registry. |
## Current Riverbraid claim
Riverbraid is currently a functional, inspectable starting point for AI governance.
It has a verified core registry and a cleaned local outer surface.
It is not complete, certified, externally reproduced, or defect free.
