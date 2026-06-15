# Tragitto — Design System

**Tragitto** is an AI travel companion for **iOS and Android** — a proactive
concierge that helps travelers *plan and live* a trip: transit, lodging, and
activities. The assistant ("Agente de Viagens") plans days, suggests places,
and edits the itinerary in natural language. The product is **Portuguese (BR)
first**. *Tragitto* is Italian for "route / journey" — the throughline of the
brand.

> "Seu concierge de viagem com IA" — your AI travel concierge.

This repository is the brand's design system: design tokens, the logo, reusable
React UI primitives, foundation specimen cards, and a high-fidelity recreation
of the mobile app.

## Sources
- **Product screenshots** (provided by the team, in `uploads/`): trip list
  ("Nossas Viagens"), trip timeline ("Ubatuba"), AI agent intro + conversation,
  "Nova viagem" sheet, and "Perfil". These are the source of truth for the
  recreation — no codebase or Figma was provided.
- **Color seed:** the team's coolors palette
  `F4F1DE · E07A5F · 3D405B · 81B29A · F2CC8F` (terracotta theme).
- App version observed: **v0.6.0**.

There was **no codebase or Figma file** to read; the system is reconstructed
from screenshots plus the stated palette. Send either if available and we'll
tighten the recreation.

---

## Content fundamentals
How Tragitto writes.

- **Language:** Brazilian Portuguese. Warm, friendly, second-person informal
  (*você*, *sua viagem*) — never corporate.
- **Voice:** an upbeat, capable concierge. It addresses the traveler by name
  ("Pronto Gabriel!") and is *proactive* — it volunteers a plan and then
  explains its reasoning ("Por que planejei assim:").
- **Casing:** Screen titles & trip names use **Title/Sentence case** in the
  display serif ("Nossas Viagens", "Nova viagem"). Section markers inside agent
  replies can shout in caps ("✅ SEXTA-FEIRA PROGRAMADA"). Eyebrows are
  uppercase ("PASSO 1 DE 2").
- **Emoji:** used **only inside agent chat content** to add warmth and scan-
  ability (🏖️ ✅ 🎯 🚗 🏠). **Not** used in chrome, buttons, labels, or nav.
- **Numbers & times:** concrete and tabular — "08:00", "24% pronto",
  "6:00 AM – 4:00 PM", "dia 1 de 8", "600 min". Dates are abbreviated
  ("11 de jun. – 15 de jun., 2026").
- **Microcopy patterns:** action-first buttons ("Criar viagem", "Continuar",
  "Adicionar algo ao meu roteiro"); status as short pills ("Amanhã",
  "Em andamento — Dia 1", "Concluída"); gentle nudges that state what's missing
  ("ainda precisa de onde ficar", "3 pontos para revisar").
- **Tone examples:**
  - Intro: *"Como posso ajudar na sua viagem? Peça para planejar, encontrar ou
    alterar qualquer coisa da sua viagem."*
  - Placeholder: *"Destino (ex: Lisboa, Portugal)"*, *"Message Travel Agent…"*

---

## Visual foundations

**Palette.** Warm and earthy. **Terracotta `#E07A5F`** is the single primary —
buttons, FAB, active nav, key accents. **Sage `#81B29A`** is secondary/success
and the AI accent (sparkle on chips, success states). **Sand `#F2CC8F`** is
tertiary, reserved for transport/transit. **Slate `#3D405B`** is ink. Canvas is
**eggshell `#F4F1DE`**; cards sit one step lighter on cream `#FAF7ED`. There are
no cool blues or purples — warmth is the brand.

**The signature gradient.** A `sage → terracotta` linear gradient (`--gradient-ai`,
~120°) is the AI's identity: the round agent **puck**, the chat header bar, and
the floating assistant button all use it. Use it *only* for the assistant — it
is the one place gradients appear.

**Type.** A two-family system: **Playfair Display** (high-contrast serif) for
display — trip names, screen titles, the agent's questions; **Mulish**
(humanist sans) for all UI, body, and numerals. A **Playfair italic** sets the
relaxed timeline dates ("~ hoje · dia 1 de 8 ~", "agora · 9:33") — a small,
characterful touch. UI text never goes below 14px; headings are generously
large and tight-tracked (−2%).

**Backgrounds.** Solid eggshell, occasionally a soft top-down warm fade on
"hero" screens (Perfil) using `--gradient-warm-fade`. No photographic full-bleed
backgrounds in chrome; photos appear only as **trip cover images** (warm,
natural, slightly saturated travel photography). No repeating patterns or noise.

**Cards.** Cream surface, **22px radius**, very soft warm shadow
(`--shadow-card`, low-opacity slate-tinted, large blur, no hard borders). Trip
cards pair a full-bleed cover image on the left with text on the right. Sheets
use a larger 34px top radius and a grab handle.

**Corners & shape.** Everything is soft. Buttons, badges, chips and the FAB are
**fully rounded pills/circles**. Inputs and icon tiles use 16px. The whole
language reads calm, rounded, and tactile.

**Buttons.** Primary = solid terracotta pill with a soft terracotta **glow**
shadow and white text. Secondary = soft terracotta tint. Suggestion chips =
white pills with hairline border, soft shadow, and a small sage sparkle.

**Borders & lines.** Hairlines are translucent slate (`rgba(61,64,91,0.08–0.24)`),
used sparingly — for list-row dividers and chip outlines. Most separation is
done with elevation and color, not borders.

**Shadows.** Two jobs: soft neutral elevation (cards, sheets) and the terracotta
**brand glow** under the primary button & FAB. All warm-tinted, never gray-black.

**Transparency & blur.** Used lightly: the sheet scrim is a translucent slate
overlay with a 2px backdrop blur; the agent header puck uses a translucent white
fill over the gradient.

**Icons.** Lucide, 2px rounded stroke (see Iconography). Category color-coding:
brand=activities, sage=lodging, sand=transport.

**Motion.** Calm and gentle. Screens fade-and-rise 6px on enter
(`--ease-out`, 200ms). Sheets slide up 420ms. Presses give a light spring
scale-down (`--press-scale` 0.97, `--ease-spring`). The progress ring animates
its arc. Nothing loops or bounces decoratively. Respects
`prefers-reduced-motion`.

**Hover / press.** (Touch-first, but defined for web): cards lift −2px with a
deeper shadow on hover; buttons & chips scale down 0.97 on press. No color
inversion.

**Layout.** Mobile-first, 390×844 reference. ~22px screen gutter. Fixed bottom
tab bar (Viagens / Agente / Perfil) and a fixed FAB. 44px minimum hit targets.

---

## Iconography
- **Library:** [Lucide](https://lucide.dev) via CDN
  (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`). 2px rounded
  stroke on a 24px grid — matches the friendly, soft brand. Components render
  `<i data-lucide="name">` placeholders; the host page calls
  `lucide.createIcons()` after React mounts.
- **Common icons:** `luggage, map-pin, calendar, bed-double, navigation, ticket,
  car, home, globe, send, chevron-right/left, more-horizontal, user, log-out,
  trash-2, file-text, shield, pencil, plus, wifi, battery-full`.
- **Brand sparkle:** the four-point sparkle (`assets/logo/sparkle.svg`) is a
  **custom mark reserved for the AI agent** (puck, chips, PRO badge) — it is
  NOT the brand logo. The logo is the route-timeline "T" monogram
  (`assets/logo/logo-mark.svg`).
- **Emoji:** used only inside agent chat content, never in chrome.
- No icon font, no PNG icon sprites — vector only.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (@import manifest). Consumers link this.
- `readme.md` — this file. · `SKILL.md` — Agent Skills wrapper.

**`tokens/`** — `colors.css`, `typography.css`, `spacing.css` (radii/shadow/
motion/layout), `fonts.css` (Google Fonts), `base.css` (resets + `.tg-card`,
`.tg-ai-puck`).

**`assets/logo/`** — `logo-mark.svg` (route-timeline "T" monogram: departure
bar → stop dots → destination ring; currentColor, mono-capable),
`app-icon.svg` (flat 3-tone tile: terracotta · cream · sand, mask-safe for iOS
squircle + Android circle), `wordmark.svg` (mark + Playfair "Tragitto"),
`sparkle.svg` (AI-agent symbol only), `logo.card.html`.

**`guidelines/`** — foundation specimen cards: colors (brand / terracotta scale
/ neutrals / status), gradient, type (display / body / italic), spacing, radii,
shadows, iconography.

**`components/`** — reusable React primitives:
- `core/` — `Button`, `Badge`, `Card`, `IconTile`, `Avatar`, `ProgressRing`
- `forms/` — `Input`
- `chat/` — `ChatBubble`, `SuggestionChip`
- `navigation/` — `ListRow`

**`ui_kits/tragitto-app/`** — interactive mobile app recreation (5 screens).
See its `README.md`.

> Components are reached at `window.TragittoDesignSystem_b33cbc.<Name>` after
> loading `_ds_bundle.js` (generated by the compiler — do not edit).

---

## Caveats / open questions
- **Fonts are matched, not confirmed.** Display→Playfair Display, UI→Mulish are
  Google Fonts stand-ins for the screenshots. Send the app's real font files to
  swap in self-hosted `@font-face`.
- **No codebase/Figma** was provided — the system is reconstructed from
  screenshots + the palette seed. Pixel values (radii, shadows) are close
  approximations.
- Trip photos & avatar are placeholders.
- The logo is **new** (created here) — a route-timeline "T" monogram chosen
  after rejecting the generic AI-sparkle direction. The sparkle survives only
  as the in-app AI-agent symbol.
