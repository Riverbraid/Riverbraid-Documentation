# Health Dashboard Plan

**Status**: DRAFT / DESIGN ONLY  
**Scope**: visualization and monitoring plan for the Riverbraid constellation  
**Implementation status**: NOT_IMPLEMENTED  
**Security claim**: NONE

## Executive summary

The Riverbraid Health Dashboard is a proposed visualization and monitoring interface for the Riverbraid constellation.

Its purpose is to make coherence, verification state, registry alignment, drift, and evidence status easier to inspect.

This document is a plan. It does not create a dashboard or a real-time monitoring claim.

## Core principles

- **Transparency**: relevant health metrics should be visible and understandable.
- **Actionability**: dashboard findings should route to corrective action or evidence review.
- **Customizability**: users should be able to focus on repositories, evidence paths, or time windows.
- **Scalability**: dashboard design should support the growing constellation.
- **Security**: sensitive data and configuration should be gated.
- **Claim-boundedness**: visualizations must not imply stronger claims than the underlying evidence supports.

## View 1 - Constellation overview

High-level summary of the Riverbraid constellation.

| Metric | Description | Visualization | Possible source |
|---|---|---|---|
| Overall coherence status | Summary of evidence state across tracked repositories. | Scorecard | readiness matrix / evidence ledger |
| Verification status | Percentage or count of repositories with current evidence. | Donut or table | evidence packet outputs |
| Drift incidents | Active or unresolved drift events. | Line or table | drift monitoring outputs |
| Registry alignment | Relationship between active repos and Evaluation Kit registry. | Status badges | registry scope gap |

Boundary: an aggregate score is only a visualization. It is not a certification or proof of safety.

## View 2 - Repository detail

Repository-specific status.

| Metric | Description | Visualization | Possible source |
|---|---|---|---|
| Repository evidence state | Current evidence status for a selected repo. | Scorecard | evidence ledger |
| Latest verification result | Most recent verification output. | Table | evidence packet outputs |
| Drift history | Prior drift events for the repo. | Timeline | drift monitoring plan outputs |
| Dependency vulnerabilities | Known dependency issue counts if scans exist. | Bar chart | future audit results |
| CI/CD health | Recent workflow status. | Status icons | GitHub Actions |

Boundary: repository status must distinguish registry-listed, support, experimental, scaffold-only, and unknown-pending-evidence states.

## View 3 - Drift monitoring

Dedicated drift surface.

| Metric | Description | Visualization | Possible source |
|---|---|---|---|
| Active drift alerts | Current unresolved drift signals. | Table | drift monitoring output |
| Drift trends | Historical patterns by category. | Area chart | drift monitoring output |
| Time to resolution | Average or median time to resolve drift. | Bar chart | issue/evidence history |

## Suggested architecture

Potential design:

- frontend: React, Vue, or static dashboard
- backend: Node.js or FastAPI if dynamic aggregation is needed
- storage: static JSON first; database only if needed later
- ingestion: evidence packets, GitHub Actions metadata, registry files, readiness matrix
- access: public read-only dashboard first; restricted admin surfaces later if needed

## Static-first rule

The first dashboard should be static or static-generated if possible.

A static dashboard is easier to audit, easier to reproduce, and less likely to introduce unnecessary security exposure.

## Data boundaries

Dashboard data should come from explicit artifacts:

- evidence packets
- readiness matrix
- claim ledger
- evidence ledger
- registry scope gap
- GitHub Actions status
- drift monitoring output

Do not scrape private or sensitive data into the dashboard.

## Future enhancements

- predictive drift analysis
- role-specific dashboard views
- public read-only dashboard for reviewers
- integration with external compliance frameworks only after appropriate boundary docs exist

## Non-claim

This document does not create a dashboard, real-time monitoring system, security guarantee, external audit surface, or production readiness claim.
