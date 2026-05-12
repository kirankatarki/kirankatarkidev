---
title: Workflow approval engine
description: Incentive and research grant approval workflows for colleges
techStack: [Node.js, Postgres]
github: https://github.com/kirankatarki/workflow-approval-engine
featured: true
order: 4
---

## Overview

A configurable approval workflow engine built for college administration -- handling incentive disbursements and research grant applications through multi-level sign-off chains.

## How it works

Each workflow is defined as a sequence of approval stages with assigned roles. Submissions move through stages automatically on approval, or return to the submitter on rejection with comments.

## Key decisions

- Workflow definitions are data-driven -- admins configure stages without code changes
- Postgres stores the full audit trail of every approval action with timestamps and actor IDs
- Email notifications trigger at each stage transition via a background job queue
