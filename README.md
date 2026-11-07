# Hack The Ridge 2026

Complete Next.js source project with the changes from `review fix.md`.

## Run locally

Use Node.js 20.9 or later. Open a terminal in this folder and run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To check a production build, run `npm run build`.

## Review changes

- Open hero layout with quick event information and unboxed statistics.
- Revised About, build experience and sponsor wording.
- Section order: Home, About HTR, Build experience, 2025 Hall of Fame, History, Registration, Sponsors, Team, FAQ Terminal.
- The original 2025 website is linked from the footer. Its original design is retained, with the custom cursor removed.
- Warm daytime city and a night mode, selected with the Day/Night button in the header and remembered locally. The city includes autumn trees, streetlights, rooftop details, and a rounded four carriage train with illuminated windows. Camera movement is bounded above the road throughout scrolling.
- Responsive FAQ spacing and playful terminal usernames.
- Browser and mobile icons use the supplied 2026 logo; homepage metadata and canonical URL identify Hack The Ridge 2026.
- Registration links share `REGISTRATION_URL` in `src/lib/links.ts`. Update this constant when the registration destination changes.

Publish this version to update the live site. Search results will refresh after the search engine recrawls it.

All source and public assets are included. Generated build files and installed dependencies are excluded; `npm ci` installs the versions in the lockfile.

The header now uses an Explore menu with larger, spaced links and a separate Register shortcut. Team ID/status labels and the diagonal arrow have been removed. Train movement respects reduced-motion preferences.

The team heading reads “Meet the Team.” The three decorative build track icons are removed. FAQ lettering and boot block spacing are tightened. Reduced motion disables the train and camera movement.

Light mode uses dark text across the hero, counters, links, and reading sections. Repeated labels above headings are removed. Previous executive photo props are disabled with SHOW_PREVIOUS_EXECUTIVES in TeamSection.tsx. Train details include destination displays, wheel hubs, a rounded cab, and track railings. The city uses stable building heights, rooftop equipment, shop awnings, benches, and fuller trees.

## Interface palette

The semantic `--city-*` variables in `src/app/review.css` define interface colours from the 2026 promo palette. Reuse these roles instead of choosing new colours for each component.

| Role | Day | Night |
| --- | --- | --- |
| Background / reading surface | `#DDF5F6` | `#2A4365` |
| Body text / secondary button text and border | `#2A4365` | `#DDF5F6` |
| Muted text | `#32586F` | `#B1D9BE` |
| Primary registration button | `#4A5899` | `#B1D9BE` |
| Primary button text | `#FFFFFF` | `#1E3920` |
| Primary hover background | `#2A4365` | `#DDF5F6` |
| Secondary hover background | `#B1D9BE` | `#32586F` |
| Keyboard focus outline | `#4A5899` | `#B1D9BE` |

Reserve filled primary buttons for registration. Secondary actions use transparent backgrounds with outlined borders. Focus indicators are 3px wide with a 3px offset. The footer and FAQ terminal are inverse surfaces in both themes, using navy, pale blue text, and mint focus indicators. The decorative city scene retains its own artwork colours.

Calculated text contrast ratios: body text 8.84:1 in both themes; registration buttons 6.67:1 by day and 8.15:1 by night. The hover combinations also exceed 4.5:1. These pair checks do not establish whole-site WCAG conformance.
