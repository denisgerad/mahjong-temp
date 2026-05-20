# Footer Assets

Four asset slots. Two SVGs are complete and live. Two webp files are expected.

---

## SVG files — complete and in use

### `footer-scroll-frame.svg`
Architectural overlay for the full footer.
Traditional Chinese hanging scroll (立軸) structure:
- Top/bottom rods (軸桿) with circular end knobs
- Left/right mounting strips (裱邊) — vertical rules
- Upper/lower partition strips (隔水) — double horizontal rules
- Corner diamond ornaments at strip intersections
- Centre label panel (題簽) on the top rod
- Inner content margin rules

Used as full-bleed CSS background-image with `backgroundSize: 100% 100%` (stretches to any footer height).

---

### `footer-floral-lineart.svg`
Chinese botanical line art — plum blossom branch (梅花 / Prunus mume).
Rendered in 白描 (báimiáo) single-stroke style.
Includes: main trunk, 4 sub-branches, 3 blossoms (one partial bud), 5 leaves, 2 fallen petals.
All strokes in #c6a87a (IMA soft-gold).
Used at 8% opacity in the bottom-right quadrant of the footer.

---

## Webp files — expected, not yet present

### `footer-landscape.png` ✓ placed
**Zone:** Full footer background — `absolute inset-0`, atmospheric layer  
**Content:** Wide atmospheric scene. Options:
- Chinese ink-wash landscape (mountains, mist, pines)
- Warm editorial interior — Mahjong room, candlelit table from distance
- Blurred exterior — garden, courtyard, warm evening light  

**Technical requirements:**
- Minimum 1920 × 640px
- Naturally dark/shadowed at left edge, right edge, and bottom (for feathered dissolve)
- Warm colour temperature (amber/jade range)
- No text or legible faces in frame
- File should dissolve naturally when feathered with CSS gradients

**Mask:** Four-sided CSS gradient dissolve + radial vignette — all edges fade to `#1b2f25`. Image opacity: 0.22.

---

### `footer-mahjong-overlay.webp`
**Zone:** Fluid width × 240px, within left content column  
**Content:** Close editorial shot of Mahjong tiles on a table surface.  
- Authentic tile details visible (character, circle, bamboo suits)
- Warm directional side-light (candle or warm lamp)
- Shallow depth of field — some tiles sharp, surroundings soft
- Dark or blurred edges (required for radial mask)

**Technical requirements:**
- Minimum 800 × 480px
- Must read well when cropped to landscape ratio
- Edges must be dark enough to fade cleanly

**Mask:** CSS `mask-image: radial-gradient(ellipse 86% 80% at 50% 52%, black 36%, transparent 78%)`
The image floats out of darkness — no hard frame edge.

---

## Drop-in instructions

Place files at these exact paths:
```
public/assets/footer/footer-landscape.png     ← PLACED
public/assets/footer/footer-mahjong-overlay.webp
```

Both use `next/image` with `fill` and will render immediately on next dev server restart.
No code changes needed.
