# Fix: Hero blur / z-index layering on `/`

**Date:** 2026-05-03  
**Type:** Bug fix — stacking context / CSS compositing

## Problem

The home page (`/`) showed the Hero's `mesh-bg` blur bleeding visually over the Navbar area.

### Root causes

1. **`filter: blur()` ignores `overflow: hidden`.**  
   CSS `filter` on `.mesh-bg` causes the browser to composite it into its own GPU layer. `overflow: hidden` clips *layout* but not *filter output*, so the blur bled above the hero section's boundary into the fixed Navbar area.

2. **Hero section had no stacking context.**  
   `position: relative` without a `z-index` value does *not* create a stacking context. Without one, the mesh-bg's filter compositing layer had no defined relationship to the Navbar.

3. **Radix `<Theme>` applies `isolation: isolate`.**  
   All `z-index` values are scoped inside that stacking context. The Navbar's `z-index: 40` needed to clearly outrank the hero layer.

## Fix

| File | Change |
|---|---|
| `styles/globals.css` | Added `z-index: -1` to `.mesh-bg` — pushes the blur layer behind all hero content within its stacking context |
| `components/sections/Hero.tsx` | Added `zIndex: 0` to the `<section>` — creates a proper stacking context that contains `.mesh-bg` and forces GPU compositing to respect the `overflow: hidden` clip |
| `components/layout/Navbar.tsx` | Raised `zIndex` from `40` → `50` — ensures Navbar always paints above the hero's stacking context (z-index: 0) |

## Why this works

When the hero section has `position: relative` + `z-index: 0`, the browser creates a new stacking context and compiles it as a GPU compositing layer. At that point `overflow: hidden` **does** clip the filter output of children. The mesh-bg (`z-index: -1`) renders behind all hero content. The Navbar (`z-index: 50`) is above the hero layer (z-index: 0) in the Radix `isolation: isolate` root context.
