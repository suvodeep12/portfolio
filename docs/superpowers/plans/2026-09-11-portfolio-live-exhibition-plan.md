# Portfolio Live Exhibition Implementation Plan

Status: approved design, ready for implementation after plan review
Date: 2026-09-11
Spec: `docs/superpowers/specs/2026-09-11-portfolio-live-exhibition-design.md`

## Outcome

Ship a static portfolio with an exhibition-style homepage, real Solar and GLIMMER live previews, editorial project pages for Rift Herald and GW2 Optimal Lister, and an archive for ThreeJS-project and future build-log entries.

The implementation must preserve the approved design read, content hierarchy, project states, visual system, motion budget, and future seam for a later playable-world homepage.

## Working constraints

- Greenfield repository with no existing application code or package manifest.
- Keep version one static and dependency-light.
- Use hand-written Markdown as the source for project content.
- Use `gh` CLI for GitHub inspection and metadata checks whenever needed.
- Do not add GitHub sync, CMS, backend, search, filters, analytics, or user accounts.
- Do not create visible project claims, images, links, or outcomes that are not sourced from the project or confirmed by the user.
- Do not start the playable-world navigation in version one.

## Planned technical boundary

- Astro static generation.
- Native CSS with CSS variables for the theme and design tokens.
- Native browser APIs for theme persistence, preview states, and simple UI behavior.
- Native CSS transitions and scroll-driven animation first.
- Add a motion dependency only after checking `package.json` and confirming that native CSS cannot express an approved interaction.
- No component library unless a later requirement introduces a real product UI surface.

## Implementation order

### 1. Scaffold the static site

Files to create or modify:

- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`

Work:

- Create the smallest Astro project that builds static output.
- Keep the default scripts limited to development, build, preview, and any checks the chosen Astro version provides.
- Do not add Tailwind, a component library, a CMS, or a server adapter.
- Verify the selected font loading path before adding font files. Use Cabinet Grotesk only if a usable local license is confirmed. Otherwise select a similarly distinctive licensed sans and record the choice.

Verification:

- Install dependencies from the generated manifest.
- Run the initial production build.
- Open the empty site locally and confirm that the static preview works before adding content.

Completion criterion: the clean scaffold builds and previews from the repository root without a server runtime requirement.

### 2. Add the Markdown content collection

Files to create or modify:

- `src/content.config.ts`
- `src/content/projects/solar.md`
- `src/content/projects/glimmer.md`
- `src/content/projects/rift-herald.md`
- `src/content/projects/gw2-optimal-lister.md`
- `src/content/projects/threejs-project.md`
- `src/content/projects/README.md` only if a content-authoring note is needed

Work:

- Define a schema for title, slug, status, summary, order, placement, presentation type, preview type, media, live URL, source URL, and related project slugs.
- Use only these status values: `Shipped`, `In progress`, `Archived`, and `Shelved`.
- Use `immersive` presentation for Solar, `playable` for GLIMMER, and `evidence` for Rift Herald, GW2 Optimal Lister, and ThreeJS-project.
- Keep Sachchai Scanner out of the initial collection unless real implementation artifacts are confirmed before content authoring.
- Write project copy from confirmed repository material and the user's descriptions. Leave any missing evidence out instead of filling it with plausible text.
- Keep project order manually curated.

Verification:

- Run the Astro content schema check or production build.
- Confirm that a missing required field fails clearly at build time.
- Confirm that all related project slugs resolve to an existing entry.

Completion criterion: every initial project entry validates and contains only factual, reviewable content.

### 3. Establish design tokens and theme behavior

Files to create or modify:

- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/components/ThemeToggle.astro`
- `src/scripts/theme.ts` only if the toggle logic needs its own small module

Work:

- Define semantic variables for canvas, elevated surface, primary text, secondary text, structural line, focus ring, and one signal amber accent.
- Use off-black and off-white values rather than pure black or pure white.
- Define light and dark values under a single `data-theme` state.
- Respect system preference on first load and persist an explicit user selection.
- Keep the same structure and hierarchy in both modes.
- Use one 12px corner-radius scale for controls and media panels.
- Keep technical monospace text limited to actual project metadata.

Verification:

- Toggle light and dark modes without a page reload.
- Reload after selecting each mode and confirm the choice persists.
- Check primary text, secondary text, links, controls, focus rings, and preview fallbacks for contrast in both modes.

Completion criterion: both themes are complete, readable, and structurally identical.

### 4. Build the shared page shell and navigation

Files to create or modify:

- `src/layouts/BaseLayout.astro`
- `src/components/SiteNav.astro`
- `src/components/ExternalLink.astro` only if repeated link behavior is proven necessary
- `src/pages/index.astro`

Work:

- Add the site title, metadata, viewport behavior, theme bootstrapping, and global styles.
- Implement navigation destinations exactly as approved:
  - Work: `/#work`
  - Archive: `/archive`
  - About: `/#about`
  - Contact: `/#contact`
- Keep desktop navigation on one line and below the 80px height limit.
- Add a mobile menu only if the desktop navigation cannot remain comfortable at narrow widths.
- Ensure the mobile menu is keyboard accessible, closable with Escape, and has a visible focus state.
- Use no decorative section numbering, status dots, or scroll cues.

Verification:

- Activate every navigation item with a mouse and keyboard.
- Confirm every destination exists before adding the item.
- Test the navigation at desktop and mobile widths.

Completion criterion: navigation works without dead links, wrapping, or keyboard traps.

### 5. Implement the live-preview contract

Files to create or modify:

- `src/components/LivePreview.astro`
- `src/components/ProjectMedia.astro`
- `public/media/solar-fallback.*`
- `public/media/glimmer-fallback.*`

Work:

- Give the preview component explicit inputs for source URL, title, loading mode, fallback media, external URL, and status.
- Use the verified Solar and GLIMMER URLs only.
- Load Solar eagerly in the hero and GLIMMER when it approaches the viewport or is selected.
- Reserve the final preview dimensions before the iframe or media loads.
- Show a preview-shaped loading state, not a generic spinner.
- Keep a direct external-project link visible regardless of preview state.
- Show a real screenshot when the live preview is unavailable.
- Provide a contextual error or unavailable message with a retry or external-link action.
- Do not embed Rift Herald, GW2 Optimal Lister, or other non-browser projects.

Verification:

- Test Solar and GLIMMER with a successful load.
- Test a deliberately invalid preview URL in a local fixture or temporary configuration and confirm the fallback state appears.
- Confirm the iframe has an accessible title and does not create horizontal overflow.
- Confirm the fallback media is real project evidence, not a div-based imitation.

Completion criterion: live previews have working, loading, unavailable, error, external-link, and reduced-motion paths.

### 6. Build the exhibition homepage

Files to create or modify:

- `src/pages/index.astro`
- `src/components/SolarHero.astro`
- `src/components/GlimmerFeature.astro`
- `src/components/SelectedWork.astro`
- `src/components/ProjectProgression.astro`
- `src/components/AboutSection.astro`
- `src/components/ContactClose.astro`
- `src/styles/home.css`

Work:

- Create an asymmetric hero with Solar as the only dominant visual.
- Keep the homepage statement short enough to fit the first viewport with the primary action visible.
- Present GLIMMER as the second live project surface with visible in-progress status.
- Present Rift Herald and GW2 Optimal Lister with different evidence-first layouts rather than identical cards.
- Show the ThreeJS-project to Solar relationship as a meaningful progression, not a generic numbered timeline.
- Add the About section with the approved positioning line and only supporting links that are real.
- Add one contact close with one contact intent and direct GitHub and LinkedIn links.
- Use real media references throughout. If a required image is missing, use a labeled placeholder until the user provides or approves the asset.
- Define explicit mobile collapse rules for every multi-column section.

Verification:

- Check the first viewport at desktop and mobile widths.
- Confirm Solar is the first visual focal point.
- Confirm GLIMMER appears as the only other live homepage preview.
- Confirm each section uses a different layout family where its content requires it.
- Confirm no section exists only to fill a template.

Completion criterion: the homepage communicates the full-stack positioning within one scan and leads visitors to real project evidence.

### 7. Build project detail pages and archive

Files to create or modify:

- `src/pages/projects/[slug].astro`
- `src/pages/archive.astro`
- `src/components/ProjectHeader.astro`
- `src/components/ProjectEvidence.astro`
- `src/components/ProjectLinks.astro`
- `src/components/RelatedProjects.astro`
- `src/styles/project-pages.css`
- `src/styles/archive.css`

Work:

- Generate one static detail route for each featured project.
- Use the presentation type to choose only the necessary visual arrangement:
  - immersive for Solar
  - playable for GLIMMER
  - evidence for Rift Herald and GW2 Optimal Lister
- Keep the underlying content contract shared while allowing the visual treatment to vary by project need.
- Show the project status as plain text.
- Render only links that exist in the Markdown entry.
- Include related projects only when the relation is confirmed.
- Keep ThreeJS-project in the archive with its real relationship to Solar.
- Keep future build-log content out until it has real artifacts.

Verification:

- Open every generated route directly.
- Test missing or invalid slugs and confirm a useful not-found response.
- Check that pages with no live demo still have a useful evidence path.
- Confirm project pages are readable without motion and at mobile widths.

Completion criterion: every featured project has a truthful, navigable page with evidence appropriate to its type.

### 8. Add the approved motion layer

Files to create or modify:

- `src/styles/motion.css`
- component-local styles where a state transition is inseparable from the component

Work:

- Use native CSS transitions and supported scroll-driven animation first.
- Stage the hero copy in two short beats while Solar remains available immediately.
- Transition Solar to GLIMMER with restrained opacity and transform changes.
- Reveal selected work once as it enters the viewport, with stagger only where order communicates progression.
- Add tactile active feedback to controls.
- Animate only transform and opacity.
- Avoid page-wide parallax, scroll hijacking, custom cursors, text scrambling, decorative particles, automatic horizontal scrolling, and perpetual motion on informational sections.
- Wrap automatic motion in `prefers-reduced-motion: no-preference` and provide static behavior for reduced motion.

Verification:

- Test normal motion and reduced motion in a real browser.
- Confirm the page actually moves at the approved motion dial.
- Confirm no animation blocks navigation, text selection, keyboard use, or live-preview interaction.
- Confirm no scroll handler or React-style per-frame state loop is introduced.

Completion criterion: every animation has a written hierarchy, storytelling, feedback, or state purpose and degrades cleanly.

### 9. Run the delivery gate

Files to create or modify only if a real need appears:

- `package.json` scripts
- `README.md` for setup and content authoring instructions

Work:

- Run the production build and local preview.
- Check the browser console.
- Click every link, button, menu item, theme control, live-preview fallback action, project route, source link, social link, and contact link.
- Test desktop, mobile, light mode, dark mode, keyboard-only use, and reduced motion.
- Verify no horizontal overflow or layout shift.
- Verify all visible copy, status labels, screenshots, and links against real sources.
- Run a final `gh` CLI check for the two live project URLs if deployment metadata needs confirmation.
- Do not publish or create a GitHub repository as part of this plan unless the user asks for deployment.

Completion criterion: all planned routes and interactive elements pass the recorded click-through and responsive checks, with no fabricated content or unresolved error state.

## Checkpoints

Create small commits at these boundaries:

1. scaffold and content collection
2. tokens, theme, and shared shell
3. live-preview contract and homepage
4. project pages and archive
5. motion and final verification

Use Conventional Commit messages. Do not commit generated build output.

## Future version seam

The later playable-world version may replace `src/pages/index.astro` and the homepage-specific components. It must continue consuming the same Markdown collection and preserve project routes, statuses, live-preview behavior, external links, and archive content.

## Final implementation handoff

Implementation can start only after this plan is accepted. The implementer should begin with the scaffold and content collection, then proceed checkpoint by checkpoint. If a new requirement changes the route structure, content contract, visual theme, or live-preview strategy, stop and update the design spec before coding.
