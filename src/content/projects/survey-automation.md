---
title: Survey automation tool
description: Physical survey digitization and workflow platform
techStack: [React, Node.js]
github: https://github.com/kirankatarki/survey-automation
featured: true
order: 2
---

## Overview

A platform for digitizing physical survey workflows -- converting paper-based data collection into structured digital forms with automated routing and reporting.

## How it works

Field agents fill out digital forms on mobile devices. Submissions are routed through a configurable approval workflow before being aggregated into reports. Supports offline mode with sync on reconnect.

## Key decisions

- React frontend with optimistic UI updates for a snappy feel on slow mobile connections
- Node.js backend handles workflow state machine -- each submission moves through defined stages
- Postgres stores submission data with JSONB columns for flexible form schemas
