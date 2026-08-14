---
name: SVG icon rendering
description: How to render circular/badge text in generated icons in this environment
---
Rule: When rasterizing SVGs with the environment's ImageMagick (`magick`), `<textPath>` is silently ignored — circular text just disappears.

**Why:** Discovered while generating the Courtside "CC" PWA icon set; the wrapped ring text rendered blank via textPath.

**How to apply:** Generate circular text by computing per-character positions on the circle and emitting individual `<text>` elements with `rotate()` transforms (small node script works well). `sharp` is not installed; `magick` is available and handles plain SVG text fine. Icon source lives in `artifacts/members-portal/icon-src/`.
