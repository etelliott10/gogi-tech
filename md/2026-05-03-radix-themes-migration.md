# Radix Themes Migration

**Date:** 2026-05-03  
**Type:** Refactor — styling system replacement

## Summary

Replaced Tailwind CSS with `@radix-ui/themes` as the primary styling system across all components and pages.

---

## Packages

### Added
- `@radix-ui/themes` — full design system with pre-styled components, layout primitives, and CSS token system

### Removed
- `tailwindcss`
- `autoprefixer`
- `@radix-ui/react-dialog` — now provided by `@radix-ui/themes`
- `@radix-ui/react-select` — now provided by `@radix-ui/themes`
- `tailwind.config.ts` — deleted

---

## Files Changed

### Config / Setup
| File | Change |
|---|---|
| `app/layout.tsx` | Added `<Theme appearance="dark" accentColor="crimson" grayColor="mauve" radius="large">` wrapper; imported `@radix-ui/themes/styles.css` |
| `styles/globals.css` | Removed `@tailwind` directives; added Radix font/background overrides; added custom utility classes for animations, colors, typography |
| `postcss.config.js` | Cleared Tailwind/autoprefixer plugins |
| `tsconfig.json` | Added `global.d.ts` to include list |
| `global.d.ts` | Created — declares `*.css` module type to satisfy TypeScript |

### UI Components (`components/ui/`)
| File | Change |
|---|---|
| `Button.tsx` | → Radix `<Button>` with `asChild` + Next `<Link>` for href support; variant map: primary→solid, secondary→soft, ghost→ghost, outline→outline |
| `Card.tsx` | → Radix `<Card>` with variant map: default→surface, elevated→classic, glow→surface+glow-border class |
| `Input.tsx` | → Radix `<TextField.Root>` with `<Text>` label and error |
| `Textarea.tsx` | → Radix `<TextArea>` with `<Text>` label and error |
| `Select.tsx` | → Radix `<Select.Root>` compound component; now takes `value`/`onValueChange` instead of native `onChange` |
| `Modal.tsx` | → Radix Themes `<Dialog>` (was Radix primitive `@radix-ui/react-dialog`) |
| `Accordion.tsx` | Kept on `@radix-ui/react-accordion` primitive (no Themes equivalent); restyled with `.accordion-*` CSS classes using Radix CSS variables |
| `Badge.tsx` | → Radix `<Badge variant="soft" color="crimson" radius="full">` |
| `Tooltip.tsx` | → Radix `<Tooltip content={label}>` |
| `Loader.tsx` | → Radix `<Spinner size="3">` inside `<Flex justify="center">` |

### Layout Components (`components/layout/`)
| File | Change |
|---|---|
| `Navbar.tsx` | Layout converted to Radix `<Flex>`; typography uses `<Text>`; inline styles for fixed positioning and scroll effects |
| `Footer.tsx` | Layout converted to Radix `<Grid>`, `<Flex>`, `<Text>`, `<Separator>` |

### Section Components (`components/sections/`)
| File | Change |
|---|---|
| `Hero.tsx` | Layout → Radix `<Grid>`, `<Flex>`, `<Heading>`, `<Text>`; framer-motion animations preserved |
| `ServicesGrid.tsx` | → Radix `<Grid>`, `<Heading>`, `<Text>` |
| `Testimonials.tsx` | → Radix `<Grid>`, `<Text>` |
| `HowItWorks.tsx` | → Radix `<Grid>`, `<Heading>`, `<Text>`; `grid-bg` class preserved |
| `BookingBanner.tsx` | → Radix `<Heading>`, `<Text>`, `<Flex>`; gradient background via inline style |
| `FeaturedCaseStudy.tsx` | → Radix `<Grid>`, `<Heading>`, `<Text>` |
| `LogoBar.tsx` | → Radix `<Text>`; `animate-marquee` class preserved |

### Booking Components (`components/booking/`)
| File | Change |
|---|---|
| `BookingFlow.tsx` | → Radix `<Grid>`, `<Heading>`, `<Text>` |
| `BookingSteps.tsx` | → Radix `<Flex>`, `<Text>`; progress bar via inline styles |
| `ServiceSelector.tsx` | → Radix `<Flex>`, `<Text>`; selection state via inline styles |
| `CalendarPicker.tsx` | → Radix `<Grid>`, `<Text>`; DayPicker preserved |
| `ContactForm.tsx` | Updated to use `Controller` from react-hook-form for the Radix `<Select>` field (Radix Select is not a native element and can't use `register()` directly) |
| `BookingSidebar.tsx` | → Radix `<Flex>`, `<Text>` |
| `BookingHero.tsx` | → Radix `<Heading>`, `<Text>`, `<Flex>` |
| `BookingTeamAvatars.tsx` | → Radix `<Avatar variant="solid" color="crimson">` |
| `BookingConfirmation.tsx` | → Radix `<Grid>`, `<Heading>`, `<Text>`, `<Flex>` |

### Conversion Components (`components/conversion/`)
| File | Change |
|---|---|
| `ExitIntentPopup.tsx` | Updated to use new Radix Themes `<Modal>` wrapper |
| `MobileStickyCTA.tsx` | Fixed positioning via inline styles |

### Pages (`app/`)
All pages updated to replace Tailwind layout classes with Radix `<Heading>`, `<Text>`, `<Grid>`, `<Flex>` and inline styles.

| File | Change |
|---|---|
| `about/page.tsx` | Radix typography + layout |
| `contact/page.tsx` | Radix typography + layout |
| `services/page.tsx` | Radix typography + `<Grid>` |
| `services/[slug]/page.tsx` | Radix typography + `<Grid>`, `<Flex>` |
| `case-studies/page.tsx` | Radix typography + `<Grid>` |
| `case-studies/[slug]/page.tsx` | Radix typography + `<Grid>`, `<Flex>` |
| `blog/page.tsx` | Radix typography |
| `blog/[slug]/page.tsx` | Radix typography |
| `thank-you/page.tsx` | Radix typography |

---

## Build Fixes

| Issue | Fix |
|---|---|
| `postcss.config.js` exported `{}` without a `plugins` key — Next.js rejected it | Deleted the file entirely (no PostCSS plugins needed without Tailwind) |
| `react/no-unescaped-entities` ESLint errors on `"`, `'` in JSX text in 4 files | Replaced with `&ldquo;`/`&rdquo;` and `&apos;` HTML entities |

---

## Approach Notes

- **Brand colors** preserved via CSS variables (`--color-primary`, `--color-bg-dark`, etc.) in `globals.css`; Radix dark background overridden to `#0a0a0c`
- **Custom visual effects** preserved as CSS classes: `.glow-border`, `.mesh-bg`, `.grid-bg`, `.text-gradient`, `.mono-label`, `.animate-marquee`, `.animate-pulseGlow`
- **Fonts** preserved via CSS variables (`--font-syne`, `--font-dm-sans`, `--font-jetbrains-mono`); `.font-display` class added to globals for headings needing Syne
- **Spacing values outside Radix's scale** (e.g. `paddingTop: '7rem'` for page tops, `minHeight: '100vh'`) use inline `style={{}}` 
- **Radix breakpoints** differ from Tailwind's: Radix `sm` = 768px (≈ Tailwind `md`), Radix `md` = 1024px (≈ Tailwind `lg`)
