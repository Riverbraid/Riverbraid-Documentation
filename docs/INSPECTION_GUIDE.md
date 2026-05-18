# Inspection Guide
This guide explains how to inspect Riverbraid without relying on trust in the author.
## 1. Inspect Core
~~~powershell
Set-Location "C:\Riverbraid\Riverbraid-Core"
git status --short
git log -1 --pretty=format:"%H | %aI | %s"
~~~
Expected condition:
- No status output.
- HEAD matches the latest recorded verification artifact commit.
## 2. Inspect remote alignment
~~~powershell
git fetch origin main --quiet
git rev-parse HEAD
git rev-parse origin/main
git log "origin/main..HEAD" --oneline
git log "HEAD..origin/main" --oneline
~~~
Expected condition:
- Local HEAD equals origin/main.
- No ahead commits.
- No behind commits.
## 3. Inspect CI
~~~powershell
gh run list --repo Riverbraid/Riverbraid-Core --commit <COMMIT_SHA> --limit 10
~~~
Expected condition:
- The workflow for the commit returns a successful status.
## 4. Inspect claim boundaries
Read:
- `docs/CLAIM_LEVELS.md`
- `docs/REPO_BOUNDARY_MAP.md`
- `docs/TECHNICAL_VERIFICATION.md`
## 5. Treat expected output carefully
Expected output is not proof.
Actual terminal output is proof only for the machine, repository, branch, and commit where it was produced.
