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

- Original typography and open horizontal reading bands, with a solid hero surface that keeps the city behind the content.
- A short About introduction and a rotating gallery of 13 existing event photos replace the repeated process cards, six-stop pitch, and moving photo strip. The hero keeps the event type, date, location, and registration action; sponsor and footer copy is concise.
- Section order: Home, About HTR with event photos, 2025 Hall of Fame, History, Registration, Sponsors, Team, FAQ Terminal.
- The original 2025 website is linked from the footer. Its original design is retained, with the custom cursor removed.
- Promo-palette blue and mint daytime city and a night mode, selected with the Day/Night button in the header and remembered locally. The city includes autumn trees, streetlights, rooftop details, and a rounded four carriage train with illuminated windows. Camera movement is bounded above the road throughout scrolling.
- Responsive FAQ spacing and playful terminal usernames.
- Browser and mobile icons use the supplied 2026 logo; homepage metadata and canonical URL identify Hack The Ridge 2026.
- Registration links share `REGISTRATION_URL` in `src/lib/links.ts`. Update this constant when the registration destination changes.

Publish this version to update the live site. Search results will refresh after the search engine recrawls it.

All source and public assets are included. Generated build files and installed dependencies are excluded; `npm ci` installs the versions in the lockfile.

The header now uses an Explore menu with larger, spaced links and a separate Register shortcut. Team ID/status labels and the diagonal arrow have been removed. Train movement respects reduced-motion preferences.

The team heading reads “Meet the Team.” The three decorative build track icons are removed. FAQ lettering and boot block spacing are tightened. Reduced motion disables the train and camera movement.

Light mode uses dark text across the hero, counters, links, and reading sections. Repeated labels above headings are removed. Previous executive photo props are disabled with SHOW_PREVIOUS_EXECUTIVES in TeamSection.tsx. Train details include destination displays, wheel hubs, a rounded cab, and track railings. The city uses stable building heights, rooftop equipment, shop awnings, benches, and fuller trees.

## Interface palette

The semantic `--city-*` variables in `src/app/review.css` follow the supplied **HTR 2026 WEBDEV INFO.pdf**. The hero uses navy, pale cyan, and mint in both themes. The day sky uses a blue gradient and the day reading bands/header use pale cyan. The hero is narrower to reveal more city scenery. Existing font families and text sizing remain unchanged.

| Role | Day | Night |
| --- | --- | --- |
| City backdrop | `#94A6C5` to `#8394B2` | `#2A4365` |
| Reading surface / header | `#DDF5F6` | `#2A4365` |
| Body text | `#2A4365` | `#DDF5F6` |
| Supporting text | `#32586F` | `#DDF5F6` |
| Hero surface | `#2A4365` | `#2A4365` |
| Hero text | `#DDF5F6` | `#DDF5F6` |
| Hero Sign Up / small wordmark accent | `#B1D9BE` | `#B1D9BE` |
| Hero Sign Up text | `#1E3920` | `#1E3920` |
| Registration on reading surfaces/header | `#4A5899` with white text | `#B1D9BE` with `#1E3920` text |
| Keyboard focus | `#4A5899` on pale surfaces; `#B1D9BE` on navy | `#B1D9BE` |

Filled actions are reserved for registration; other actions are outlined. Focus outlines are 3px wide with a 3px offset. Inverse surfaces use navy, pale cyan text, and mint focus indicators. The city buildings use the palette's blue, teal, and mint tones.

Calculated text contrast: navy/pale cyan 8.84:1; supporting teal/pale cyan 6.69:1; mint/dark-green registration 8.15:1; indigo/white registration 6.67:1. These pair checks do not establish whole-site WCAG conformance.

## Event gallery

`src/app/components/EventGallery.tsx` cycles through all 13 existing history/event photographs every five seconds while in view. It pauses on hover, keyboard focus, or a hidden browser tab. Previous/next controls and arrow keys stop automatic playback; the Play button resumes it after focus and hover leave the gallery. Reduced-motion preferences disable autoplay and crossfades by default. Controls remain at least 44px, and the image changes do not trigger live announcements during autoplay.
