# CLAUDE.md - Portfolio Website Project

## Role

You are assisting Kiran Katarki in building a personal portfolio website. Kiran is building this himself from scratch. Your role is to answer questions, explain concepts, debug issues, and provide code snippets when asked. Do NOT generate full files, scaffold projects, or write implementation code unless Kiran explicitly asks for it.

## Project overview

A personal portfolio site for Kiran Katarki - a product and engineering leader with ~9 years of experience, including ~6 years founding and running Kalpas Innovations (multi-domain SaaS). The site serves two goals: support an active job search (targeting founding engineer, technical PM, and product leadership roles) and build a founder profile for potential future traction on personal projects.

## Tech stack

- **Framework**: Astro (static site generator)
- **CMS**: Sanity.io (free tier) for blogs and case studies
- **Styling**: Tailwind CSS with custom theme
- **Contact form**: Self-built serverless function (Vercel Edge Function) + Resend for email delivery
- **Hosting**: Vercel
- **Domain**: kirankatarki.dev (or .com)
- **License**: MIT
- **Repo**: Public on GitHub

## Site structure

### Pages

- `/` - Landing page (hero, skills, featured projects, latest posts, case studies preview, contact)
- `/projects` - Card grid of personal projects, each linking to a detail page
- `/projects/[slug]` - Individual project detail page (from markdown content collections)
- `/blogs` - Blog listing (content from Sanity)
- `/blogs/[slug]` - Individual blog post (from Sanity)
- `/case-studies` - Kalpas professional work (content from Sanity)
- `/case-studies/[slug]` - Individual case study (from Sanity)
- `/contact` - Contact form + social links

### Navigation

Logo: "Kiran Katarki" (links to `/`)
Nav items: projects | blogs | case studies | contact
"contact" nav item uses primary red accent color
Dark/light mode toggle in nav

## Design system

### Philosophy

Dark academia warmth. Distinctive without being loud. NOT the typical dev portfolio look.

### Color scheme - "True colors, warm canvas" (Variation A)

Red leads as primary accent, green for secondary/tags.

#### Light mode
- Background: `#EDE8DF` (warm parchment)
- Surface: `#FAF6EE` (lighter parchment for cards, nav)
- Primary accent: `#DA291C` (Man Utd red) - buttons, CTAs, contact nav link, role labels
- Secondary accent: `#1A472A` (Slytherin green) - tags, badges, case study borders
- Text: `#1E1A14` (dark warm brown)
- Muted text: `#5A5548`
- Borders: `rgba(30,26,20,0.08)` to `rgba(30,26,20,0.15)`
- Dividers: `rgba(30,26,20,0.1)`

#### Dark mode
- Background: `#1E1A14`
- Surface: `#2A2520`
- Primary accent: `#EF5350` (lighter red)
- Secondary accent: `#5CB882` (lighter green)
- Text: `#E8E2D6`
- Muted text: `#a09a8e`
- Borders: `rgba(232,226,214,0.06)` to `rgba(232,226,214,0.12)`
- Dividers: `rgba(232,226,214,0.08)`

### Layout style

Left-aligned hero (not centered). Generous whitespace. Clean horizontal dividers between sections. Outlined tech pills (bordered, not filled). Project cards with screenshot area above tags. Browser-chrome aesthetic for framing. Matches the reference: spacious, editorial, content-first.

### Typography

- Body: system sans-serif stack or Inter
- Headings: same family, weight 500-600
- No font below 11px

## Content architecture

### Hybrid content model

**Projects** (rarely change, tied to code): Markdown files via Astro Content Collections in `src/content/projects/`

**Blogs and case studies** (frequently updated, independent of deploys): Sanity CMS with Portable Text

### Project markdown frontmatter schema

```yaml
title: string (required)
description: string (required)
techStack: string[] (required)
github: url (required)
liveDemo: url (optional)
featured: boolean (default false)
order: number (for sort order)
coverImage: string (relative path to screenshot)
slug: auto from filename
```

### Sanity blog post schema

Fields:
- title: string, required
- slug: slug, auto-generated from title
- publishedAt: datetime
- excerpt: text (2-3 lines, for cards and SEO)
- body: Portable Text (rich text with custom blocks)
- coverImage: image with alt text
- tags: array of strings
- readingTime: number

Custom block types in body:
- Code block: language (string) + code (text) - rendered with Shiki
- Callout: type (info/warning/tip) + body text
- Image with caption: image + caption string + optional "wide" toggle

### Sanity case study schema

Fields:
- title: string, required
- slug: slug, auto-generated from title
- publishedAt: datetime
- client: string (e.g. "German healthcare provider")
- role: string (e.g. "Product & engineering lead")
- domain: string (e.g. "Healthtech", "Fintech")
- excerpt: text
- body: Portable Text (same custom blocks as blog)
- coverImage: image with alt text
- techStack: array of strings
- metrics: array of objects { label: string, value: string } (e.g. "Subscribers: 100K+")

## Hero section content

**Name**: Kiran Katarki
**Tagline**: "I build and ship software products."
**Sub-text**: "Product and engineering leader with 9 years of experience building SaaS products across fintech, healthtech, and legal tech. Currently open to founding engineer, technical PM, and product leadership roles."
**CTA button**: "Get in touch" (red primary, links to /contact)

## Skills pills - "Build / Ship / Scale" grouping

### Build (green secondary accent pills)
Python, Node.js, React, Postgres, Redis, AWS, System design

### Ship (red-tinted pills)
Product strategy, Roadmapping, Pricing, P&L ownership

### Scale (neutral/muted pills)
Team building, Hiring, Cross-functional leadership, Regulated markets

## Projects (personal, end-to-end builds)

1. **Distributed rate limiter** - Sliding window rate limiting with Redis backend [Redis, Python]
2. **Survey automation tool** - Physical survey digitization and workflow platform [React, Node.js]
3. **LLM discharge summaries** - Voice-to-LLM clinical summary tool with multi-stage doctor approval [LLM, Python, Healthcare]
4. **Workflow approval engine** - Incentive and research grant approval workflows for colleges [Node.js, Postgres]
5. **LMS** - Learning management system [details TBD]
6. **Workflow app** - Workflow platform [details TBD]

## Case studies (Kalpas Innovations professional work)

1. **Datenschutz-certified telehealth platform** - DSGVO-compliant video consultation for German healthcare market with WebRTC/SFU architecture. Role: Product & engineering lead.
2. **Fintech LMS with 100K+ subscribers** - Billing and content delivery for investment education channel with Razorpay integration. Role: Product & engineering lead.

Case study cards use green left border accent to visually distinguish from project cards.

## Environment variables

### .env.example (committed to repo)
```
# Sanity CMS
PUBLIC_SANITY_PROJECT_ID=
PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=

# Contact form
RESEND_API_KEY=

# Site
PUBLIC_SITE_URL=
```

### Rules
- `.env` is in `.gitignore` from day one
- Variables prefixed with `PUBLIC_` are safe for client-side (Sanity project ID, dataset name, site URL)
- Variables WITHOUT `PUBLIC_` prefix are server-side only (Sanity API token, Resend API key)
- Sanity viewer token (read-only) for Astro site, editor token stays in Sanity Studio only
- Production variables set in Vercel dashboard, never in repo

## Rendering pipeline

- **Projects**: Markdown in `src/content/projects/` -> Astro Content Collections -> `@tailwindcss/typography` prose class
- **Blogs**: Sanity Portable Text -> `@portabletext/astro` -> custom Astro components (CodeBlock, Figure, Callout)
- **Case studies**: Same as blogs, through Sanity

## Blog launch strategy

Launch with 1-2 posts:
1. A technical build post about the contact form or portfolio site itself
2. A Kalpas case study (e.g. "Building a telehealth platform for German data privacy")

## Social links

- LinkedIn (active)
- GitHub (active)
- Twitter/X (to be created)
- Email

## Build order

1. Scaffold Astro project with Tailwind, set up color theme, get landing page rendering with static content
2. Build project detail pages with markdown content collections
3. Set up Sanity and connect for blogs and case studies
4. Build contact form with serverless backend (Vercel Edge Function + Resend)
5. Deploy to Vercel and connect domain

## Important constraints

- Kiran is building this himself. Do not generate full implementations unless explicitly asked.
- Explain concepts and decisions clearly when asked.
- When providing code snippets, keep them focused on the specific question.
- No em dashes in any text output.
- The repo is public - never include secrets, tokens, or API keys in any file.
