# Data-Center / AI Infrastructure Governance Profile

**Status**: APPLIED PROFILE DRAFT  
**Scope**: evidence surfaces for AI infrastructure and data-center public-benefit claims  
**Implementation status**: NOT_IMPLEMENTED  
**Core mutation**: NONE

## Purpose

AI infrastructure is not only compute. It can affect energy systems, water systems, land use, heat flows, grid flexibility, public benefit, and local accountability.

This profile uses Riverbraid's claim-versus-evidence pattern to make those claims inspectable.

## Core question

```text
What public-benefit claims are being made, and what evidence supports each claim?
```

Riverbraid does not decide the politics of infrastructure. It can help prevent public-value claims from hiding inside fragmented paperwork.

## Evidence surfaces

| Surface | Question | Example evidence |
|---|---|---|
| Energy use | How much power is consumed and when? | metered load data, utility reports, interconnection records |
| Water use | What water source is used and how much? | potable/reclaimed/closed-loop data, permits, water reports |
| Heat reuse | Is waste heat reused? | thermal delivery records, heat reuse contracts, metered MWh thermal |
| Grid flexibility | Can the site reduce load or support the grid? | demand response records, battery dispatch logs, response time evidence |
| Compute commons | Is public or research compute offered? | allocated hours, user groups, access policy, usage logs |
| Public benefit | What benefit is claimed and who receives it? | public ledger, community agreements, benefit reports |
| Agency responsibility | Who is responsible for each claim? | agency map, owner map, escalation route |
| Transparency | What is visible to public reviewers? | dashboard, audit packet, public reports |

## Suggested metrics

- PUE / WUE / CUE where relevant
- MWh consumed
- MWh thermal reused
- percentage of water from non-potable or closed-loop sources
- MW of flexible load
- response time for grid events
- battery capacity available for public/grid support
- public compute hours allocated
- local ratepayer cost impact
- unresolved community burden reports

## Claim record format

```yaml
claim_id:
claim_text:
claim_owner:
evidence_required:
evidence_available:
verification_status:
known_limitations:
non_claims:
responsible_agency:
review_cadence:
```

## Failure behavior

If a public-benefit claim lacks evidence, the claim should move to:

```text
CLAIM_UNSUPPORTED_PENDING_EVIDENCE
```

If a metric is promised but not measurable, the profile should mark:

```text
MEASUREMENT_SURFACE_ABSENT
```

## Non-scope

This profile does not:

- approve or reject a data center
- claim environmental compliance
- replace local permitting
- replace utility review
- certify public benefit
- guarantee community consent
- prove climate benefit

## Boundary

This is an applied profile draft. It does not create a live dashboard, legal status, infrastructure approval, or external audit claim.
