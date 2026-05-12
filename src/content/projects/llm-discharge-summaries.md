---
title: LLM discharge summaries
description: Voice-to-LLM clinical summary tool with multi-stage doctor approval
techStack: [Python, LLM, Healthcare]
github: https://github.com/kirankatarki/llm-discharge-summaries
featured: true
order: 3
---

## Overview

A clinical tool that converts doctor voice notes into structured discharge summaries using an LLM pipeline. Summaries go through a multi-stage review and approval flow before being added to the patient record.

## How it works

Voice input is transcribed, then passed through a prompt chain that extracts structured fields -- diagnosis, medications, follow-up instructions. The output is presented to the doctor for review, edit, and sign-off.

## Key decisions

- Multi-stage approval ensures no summary enters a patient record without explicit doctor sign-off
- Prompt design separates extraction from formatting -- easier to tune each independently
- Python backend keeps the LLM integration and medical record system decoupled
