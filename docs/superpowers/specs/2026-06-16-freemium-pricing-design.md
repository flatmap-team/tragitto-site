# Tragitto Landing Page — Freemium Pricing & Positioning Fix

**Date:** 2026-06-16
**Author:** Marketing/UX pass

## Problem

The landing page currently advertises the AI Concierge and booking/email forwarding as
**free** ("Free forever", "the AI Concierge ... is free"). In reality Tragitto is a
**freemium** app: the free tier lets you download the app, create trips, and manage the
trip timeline manually; the **AI Concierge** and **email/booking forwarding** are
**premium**, sold **per trip**. The page misrepresents the product and will create a
bait-and-switch experience at the in-app paywall. Pricing is also absent.

## Tier definition (source of truth)

**Free**
- Create trips
- Manual timeline management
- Group sharing (owners/editors/followers)
- Push notifications
- Works offline
- Export as PDF
- Share-for-Safety

**Premium — per trip (beta pricing)**
- AI Concierge (plans days, restaurant tips, routes, budget-aware)
- Email & booking forwarding (auto-parses confirmations into the timeline)

**Price:** region-detected per localized page.
- `/en` and `/es` → **USD $9.99 / trip**
- `/pt` → **R$ 4.99 / trip**
- Framed as a **Beta price** (intro pricing).

**What a purchase grants:** Premium activates when the trip is created and stays active
until shortly after the trip ends. Each trip includes a generous **AI token allowance**;
if exhausted, the user can buy more tokens (top-up). Each new trip is a separate purchase.

## Strategy / Hero

Lead with the **free** value (drives installs for a no-brand beta) while keeping the
"we do the rest" magic as the premium upgrade — honest, so the in-app paywall feels
expected rather than a trap.

- **H1 (en):** "Plan trips together. *Effortlessly.*"
- **Sub (en):** "Build a shared, smart timeline for free. Add the AI Concierge to forward
  your bookings and let it plan your days."
- **Hero pill:** "Free to start · Premium per trip" (replaces "Free · No ads")
- **Reassurance microcopy:** "Free to plan together" (replaces "Free forever"); keep
  "No account needed" and "30 seconds to set up".

## Changes (apply to /en, /es, /pt with translated copy + correct regional price)

### 1. Hero
- Update H1, sub, hero pill, reassurance microcopy per Strategy above.

### 2. Features section — premium badges
- Add a small **"Premium"** pill badge to the **AI Concierge** and **Booking Ingestion**
  feature cards. Other cards unchanged (implicitly free).
- New CSS: `.feat-badge` (sand/terracotta pill, small, top-right or inline with title).

### 3. New Pricing section
- Inserted **after the Concierge demo, before the Safety section**.
- Two cards:
  - **Free — "Plan together":** create trips, manual timeline, group sharing, push,
    offline, PDF export, Share-for-Safety. CTA = store badges (or anchor to hero badges).
  - **Premium · per trip:** region price + **"Beta price"** badge. Lists: everything in
    Free, plus AI Concierge and Email & booking forwarding. Microcopy: "Unlocks when you
    create the trip, stays active until just after it ends. Includes a generous AI
    allowance per trip — top up anytime."
- New CSS: `.pricing`, `.pricing-grid`, `.price-card`, `.price-card.featured`,
  `.price-amount`, `.price-badge`, `.price-feats`. Responsive: stack to 1 column on
  mobile. Reuse existing tokens/`.reveal` animation classes.
- Add nav/anchor id `#pricing` (no nav link required; keep nav minimal).

### 4. FAQ
- Rewrite "Is Tragitto free?" → free core (download, create, manage timeline manually,
  share) vs. per-trip premium (Concierge + forwarding). No "never lock the basics /
  maybe later" language.
- Add "What does Premium cost?" → per-trip beta price (region), what's included, token
  allowance + top-up.
- Add "When does Premium activate and expire?" → from trip creation until shortly after
  the trip ends.

### 5. CTA banner + sticky bar
- CTA banner subhead: "Free to plan together · Premium from $9.99 per trip"
  (R$ 4.99 on /pt). Replaces "Free to use. No ads."
- Sticky bar small text: "Free to start · Premium per trip" (replaces
  "Free · No ads · No account needed").

### 6. Meta descriptions
- Update `<meta name="description">` and `og:description` on each page to stop implying
  AI is free; e.g. "Plan trips together for free. Add the AI Concierge per trip to
  forward bookings and auto-plan your days."

## Out of scope
- Root `index.html` (JS language redirect — no content).
- `/join` pages, privacy page.
- Actual billing / IAP wiring (app-side; this is marketing copy only).
- JS-based geo price detection — price is hardcoded per localized page.

## Localization notes
- **PT:** price R$ 4,99 (BR decimal comma). "Premium por viagem", "Preço beta".
- **ES:** price USD $9.99. "Premium por viaje", "Precio beta".
- Match existing translated tone in each file.

## Success criteria
- No page claims the AI Concierge or forwarding is free.
- Premium features are visually marked and explained.
- A visitor can see the per-trip price and what it unlocks before installing.
- All three localized pages consistent; correct regional price each.
