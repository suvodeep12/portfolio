# Portfolio Live Exhibition Design

Status: approved in chat, pending written-spec review
Date: 2026-09-11

## Summary

Build a static, project-first portfolio for Suvodeep Ghosh. Version one presents real software through a cinematic exhibition homepage and concise editorial project pages. Solar leads the experience. GLIMMER appears as current work in progress. Rift Herald and GW2 Optimal Lister provide practical full-stack and integration depth. ThreeJS-project explains the path toward Solar. Sachchai Scanner stays in a future build log because the idea was paused.

The portfolio should help a hiring manager understand that Suvodeep can build full-stack products and interactive tools, while still feeling visually distinct from a standard developer portfolio.

## Goals

- Make Solar the strongest first impression.
- Show GLIMMER as active work without implying that it is finished.
- Prove breadth through real technical projects, not a skills inventory.
- Make every featured project reachable through a real demo, source link, screenshot, or technical explanation.
- Keep adding a project simple through hand-written Markdown.
- Support cinematic motion and art direction without hiding project names or technical evidence.
- Preserve a clean path toward a future portfolio-as-playable-world version.

## Non-goals for version one

- Backend, database, authentication, or user accounts.
- CMS or admin dashboard.
- Automatic import of every GitHub repository.
- Search, filtering, or repository analytics.
- Testimonials, fabricated metrics, or social-proof sections.
- Live embeds for projects that are not browser applications.
- Full playable-world navigation.
- Custom cursor, scroll hijacking, or motion without a clear purpose.

## Audience and success criteria

Primary audience: hiring managers and technical leads evaluating a full-stack engineer.

Secondary audience: potential clients and people interested in personal software experiments.

The page succeeds when a visitor can:

1. Understand who built the work and what kind of engineer he is.
2. See Solar or GLIMMER working without searching for a link.
3. Open a project page and understand the problem, implementation, and important decisions.
4. Distinguish shipped, active, archived, and shelved work.
5. Reach the source code, live demo, or contact path without encountering a dead control.

## Design read and dials

Reading this as: a developer portfolio for hiring managers and technical leads, with a cinematic interactive-exhibition language, leaning toward native web layout, real project media, and restrained scroll choreography.

- `DESIGN_VARIANCE: 8`
- `MOTION_INTENSITY: 7`
- `VISUAL_DENSITY: 4`

Variance 8 creates an authored asymmetric composition without visual chaos. Motion 7 allows cinematic transitions while keeping the hiring path usable. Density 4 leaves room for large project media and concise technical evidence.

## Project hierarchy

### Featured work

1. Solar: lead project and visual focal point.
2. GLIMMER: active browser game, visibly marked in progress.
3. Rift Herald: technical systems case study built for a real Discord community.
4. GW2 Optimal Lister: practical desktop tool using market data, caching, and pricing logic.

### Archive and progression

- ThreeJS-project: learning experiment that led to Solar.
- Sachchai Scanner: future build-log entry only, labeled as shelved if real implementation artifacts are later documented.
- Older repositories: archive material only when they explain a meaningful learning or building step.

## Information architecture

### Routes

- `/`: Live Exhibition homepage.
- `/projects/solar`: Solar project page.
- `/projects/glimmer`: GLIMMER project page.
- `/projects/rift-herald`: Rift Herald project page.
- `/projects/gw2-optimal-lister`: GW2 Optimal Lister project page.
- `/archive`: ThreeJS-project, future build-log entries, and older experiments.

### Navigation

Desktop navigation contains Work, Archive, About, and Contact. Work points to `/#work`, Archive points to `/archive`, About points to `/#about`, and Contact points to `/#contact`. Each item must point to an existing route or section. The desktop navigation stays on one line and within an 80px height budget. Mobile navigation becomes a keyboard-accessible menu.

### Homepage sequence

1. Asymmetric hero with a short positioning statement and the real Solar surface.
2. GLIMMER live surface with a visible in-progress status.
3. Selected work using distinct editorial layouts for Rift Herald and GW2 Optimal Lister, inside the `#work` section.
4. A compact relationship between ThreeJS-project and Solar.
5. Short personal section with the full-stack positioning and selected supporting links, inside the `#about` section.
6. One contact close with GitHub and LinkedIn links, inside the `#contact` section.

The homepage uses different layout families for the hero, live surfaces, selected work, progression relationship, and contact close. It does not repeat a generic equal-card grid.

## Visual system

### Theme

Use a dark-first theme with a complete light counterpart. Both modes use the same structure, typography, accent, and hierarchy. A manual theme control respects the system preference on first load and persists the visitor's choice.

The page does not alternate between light and dark sections.

### Palette

- Canvas: near-black charcoal in dark mode, cool off-white in light mode.
- Elevated surface: one step above the canvas in dark mode, one step below the canvas in light mode.
- Primary text: soft off-white in dark mode, deep charcoal in light mode.
- Secondary text: cool grey with WCAG AA contrast.
- Structural line: restrained cool grey.
- Accent: one muted signal amber used for active project state, selected navigation, focus treatment, and the primary contact action.

Solar and GLIMMER keep their own project colors inside real previews and screenshots. Those colors do not become additional portfolio UI accents.

Reason: a single controlled interface accent makes the portfolio recognizable while letting each project retain its own identity.

### Typography

- Display: Cabinet Grotesk if a usable license and local loading path are available. Otherwise use a similarly broad, distinctive licensed sans and record the substitution before implementation.
- Body: IBM Plex Sans or another readable open-source sans.
- Technical metadata: IBM Plex Mono or a similar monospace used only for real technical information.

Reason: the display face gives the site a strong silhouette, the body face supports fast scanning, and monospace remains evidence rather than decoration.

### Shape and surfaces

Use one soft-corner scale of approximately 12px across controls and media panels. Buttons are rounded rectangles, not pills. Use borders and negative space for most grouping. Use a shadow only when it communicates elevation. Do not use full-page glassmorphism or decorative background grids.

Reason: consistent geometry lets the asymmetric compositions feel deliberate instead of improvised.

### Asset rules

Use real project evidence first:

- live Solar surface
- live GLIMMER surface
- real screenshots or diagrams for Rift Herald and GW2 Optimal Lister
- real material from ThreeJS-project in the archive

Do not create fake product screenshots, invented logos, generic developer illustrations, fabricated metrics, or testimonials. If evidence is missing, use an explicitly labeled placeholder or omit the visual block.

## Motion system

Motion communicates hierarchy, storytelling, feedback, or state. It is never included only because it looks impressive.

### Version-one motion

- Solar is visible immediately in the hero. The site does not wait for a long intro.
- Hero copy enters in two short beats: identity first, primary action second.
- Solar to GLIMMER transitions use a short opacity and transform change while the title and status update together.
- Selected work uses one-time reveal motion with limited stagger where order conveys progression.
- Buttons and project links provide tactile active feedback.
- Focus states remain more visible than hover states.

### Excluded motion

- custom cursor
- continuous page-wide parallax
- scroll hijacking
- automatic horizontal scrolling
- universal tilt cards
- text scrambling
- decorative particles
- multiple marquees
- perpetual motion on informational sections
- playable-world navigation

### Accessibility and performance

- Respect `prefers-reduced-motion` by removing automatic movement and making state changes immediate.
- Animate only transform and opacity.
- Keep Solar and GLIMMER rendering isolated from the static page shell.
- Load GLIMMER when it approaches the viewport or is selected.
- Reserve preview dimensions to avoid layout shift.
- Provide a real screenshot and direct link when a live surface cannot load.

## Content model

Each project is a hand-written Markdown entry with front matter for:

- title
- slug
- status
- summary
- order
- featured or archive placement
- preview type
- live URL, when available
- source URL, when available
- primary media
- related project slugs, when the relationship is real

The body contains:

- context or motivation
- what was built
- important technical decisions
- visual or code evidence
- what was learned
- what remains, when applicable

Project statuses are plain visible text:

- Shipped
- In progress
- Archived
- Shelved

The status is an honest content field, not a decorative badge.

## Project page treatments

### Solar

Open with the visual experience. Follow with orbital mechanics, JPL-derived data, time controls, rendering choices, architecture, and testing.

### GLIMMER

Open with the playable surface. State that the project is in progress. Explain the current working systems, design intent, and known unfinished areas.

### Rift Herald

Open with the real Discord use case. Explain Riot API integration, LP tracking, scheduled updates, account tracking, and operational trade-offs.

### GW2 Optimal Lister

Open with the market-pricing workflow. Explain API data, local caching, pricing logic, and the desktop interface.

### ThreeJS-project

Use as a short origin entry showing how a learning experiment led to Solar.

### Sachchai Scanner

Keep out of featured work. If it is later documented, present it as a shelved build-log entry and describe only the work that actually exists.

## Architecture and data flow

Use static generation with Markdown content. The page template owns structure, links, statuses, accessibility, and responsive behavior. Markdown owns project-specific writing and media references.

```text
Markdown entries
    -> content collection
    -> static routes
    -> real live previews or real evidence media
```

GitHub metadata sync is a later build-time enhancement. It may populate repository facts, but it must not decide project order or replace editorial writing.

The future playable-world version may replace the homepage shell while preserving project routes, Markdown entries, statuses, live-preview contracts, and source links.

## States and failure handling

Each live preview has:

- reserved dimensions
- preview-shaped loading state
- direct project link
- unavailable fallback using real media
- contextual error state
- reduced-motion behavior

The site has no form-dependent workflow in version one beyond direct contact links, so it does not need a form submission state until a real form is requested.

## Responsive and accessibility requirements

- No horizontal overflow at mobile widths.
- Split layouts collapse to one column below 768px.
- Live previews preserve aspect ratio.
- Navigation remains comfortable and keyboard accessible.
- Every link and button has a real destination or state change.
- Focus indicators remain visible in both themes.
- Text and controls meet WCAG AA contrast requirements.
- The same project hierarchy works in light mode, dark mode, and reduced-motion mode.

## Verification requirements

Before delivery:

- run the production build and local preview
- inspect the console for errors
- verify every navigation, project, demo, source, social, and contact link
- test Solar and GLIMMER loading, fallback, and external-link paths
- test light mode and dark mode
- test keyboard navigation and focus states
- test reduced motion
- check desktop and mobile breakpoints
- verify reserved media dimensions prevent layout shift
- confirm no visible copy or asset is fabricated

## Acceptance criteria

The design is ready for implementation when:

- the written spec and `AGENTS.md` agree
- Solar is the unambiguous first visual focal point
- GLIMMER is clearly in progress
- Rift Herald and GW2 Optimal Lister have evidence-first page treatments
- ThreeJS-project has a defined archive relationship to Solar
- Sachchai Scanner is not presented as shipped work
- the homepage uses live previews only for Solar and GLIMMER
- project content can be added through Markdown without editing layout code
- the motion budget and reduced-motion fallback are explicit
- light and dark theme behavior are defined
- no route, link, status, statistic, testimonial, or asset is left implied
