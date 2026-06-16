# Freemium Pricing & Positioning Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Correct the landing page to reflect Tragitto's freemium model — free trip planning, with AI Concierge + booking forwarding sold per trip (USD $9.99 / R$ 4.99 beta) — across the en, es, and pt pages.

**Architecture:** Three standalone static HTML files (`en/`, `es/`, `pt/index.html`) with identical structure and inline `<style>`. Each file is edited independently with the same set of changes, translated, with the correct regional price (USD on en/es, BRL on pt). No build step, no JS framework. New CSS reuses existing design tokens (`--terracotta`, `--sand`, `--sage`, etc.) and the existing `.reveal` scroll-animation classes.

**Tech Stack:** Plain HTML5 + CSS (inline `<style>` per page). Verification by opening files in a browser and grepping for removed/added strings.

---

## File Structure

- `en/index.html` — English page, USD $9.99. Primary; build CSS + structure here first.
- `es/index.html` — Spanish page, USD $9.99. Reuse en CSS verbatim; translate copy.
- `pt/index.html` — Portuguese page, R$ 4,99. Reuse en CSS verbatim; translate copy.

Shared CSS block (`.feat-badge`, `.pricing`, `.price-card`, etc.) is identical in all three files — paste the same CSS into each.

---

## Shared CSS block (used by Tasks 1–3)

Add this once to each page's `<style>`, right after the `/* ---- FEATURES ---- */` block:

```css
/* ---- PREMIUM BADGE (on feature cards) ---- */
.feat-badge{display:inline-flex;align-items:center;gap:4px;margin-left:8px;padding:2px 9px;border-radius:999px;
  background:linear-gradient(135deg,rgba(224,122,95,0.14),rgba(242,204,143,0.22));color:#B07D3A;
  font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;letter-spacing:.3px;vertical-align:middle;text-transform:uppercase}
.feature-card h3{display:flex;align-items:center;flex-wrap:wrap}

/* ---- PRICING ---- */
.pricing{padding:100px 0;position:relative}
.pricing::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(124,127,148,0.12),transparent)}
.pricing-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:48px;align-items:stretch}
.price-card{background:var(--surface);border-radius:24px;padding:36px 32px;display:flex;flex-direction:column;border:1px solid rgba(124,127,148,0.10)}
.price-card.featured{border:2px solid var(--terracotta);box-shadow:0 16px 48px rgba(224,122,95,0.12);position:relative}
.price-tier{font-family:'Fraunces',sans-serif;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:1.5px;color:var(--muted)}
.price-card.featured .price-tier{color:var(--terracotta)}
.price-amount{font-family:'Fraunces',sans-serif;font-weight:800;font-size:44px;letter-spacing:-1px;margin:10px 0 2px;display:flex;align-items:baseline;gap:8px}
.price-amount .per{font-size:16px;font-weight:600;color:var(--muted);letter-spacing:0}
.price-amount .zero{font-size:44px}
.price-badge{display:inline-block;margin-bottom:18px;padding:4px 12px;border-radius:999px;background:rgba(242,204,143,0.22);color:#B07D3A;font-size:12px;font-weight:700;letter-spacing:.3px}
.price-tagline{color:var(--muted);font-size:15px;margin-bottom:22px;font-weight:500;min-height:44px}
.price-feats{list-style:none;display:flex;flex-direction:column;gap:12px;margin-bottom:26px;flex:1}
.price-feats li{display:flex;align-items:flex-start;gap:10px;font-size:15px;font-weight:500;line-height:1.5}
.price-feats svg{width:18px;height:18px;min-width:18px;margin-top:2px;color:var(--sage)}
.price-card.featured .price-feats svg{color:var(--terracotta)}
.price-feats .pf-strong{font-weight:700}
.price-note{font-size:13px;color:var(--muted);line-height:1.5;margin-top:14px}
.price-cta{margin-top:auto}
@media(max-width:768px){.pricing-grid{grid-template-columns:1fr}.price-tagline{min-height:0}}
```

---

### Task 1: English page (`en/index.html`) — full change set

**Files:**
- Modify: `en/index.html`

- [ ] **Step 1: Add the shared CSS block**

In the `<style>`, locate the end of the `/* ---- FEATURES ---- */` rules (the
`.feature-card p{...}` line, around line 141) and the start of `/* ---- HERO FREE PILL ---- */`.
Insert the entire **Shared CSS block** (above) between them.

- [ ] **Step 2: Update `<head>` meta descriptions**

Replace the `description` and `og:description` content (lines ~7 and ~9):

From: `Tragitto reads your flight, hotel, and activity confirmations and turns them into a shared, smart trip timeline. Free, with AI planning and offline support.`
To: `Plan trips together for free with a shared, smart timeline. Add the AI Concierge per trip to forward your bookings and auto-plan your days.`

Apply the same new string to both `<meta name="description">` and `<meta property="og:description">`.

- [ ] **Step 3: Update the hero**

Replace H1 (line ~301):
```html
<h1>Plan trips together. <span class="accent">Effortlessly.</span></h1>
```
Replace hero-sub (line ~302):
```html
<p class="hero-sub">Build a shared, smart timeline — free. Add the AI Concierge to forward your bookings and let it plan your days, trip by trip.</p>
```
Replace the hero pill text (line ~306) `Free · No ads` with:
```html
        Free to start · Premium per trip
```
Replace the reassurance microcopy "Free forever" span (line ~319) with:
```html
      <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Free to plan together</span>
```

- [ ] **Step 4: Add Premium badges to feature cards**

On the **AI Concierge** card, change its `<h3>` (line ~392) to:
```html
          <h3>AI Concierge <span class="feat-badge">Premium</span></h3>
```
On the **Booking Ingestion** card, change its `<h3>` (line ~401) to:
```html
          <h3>Booking Ingestion <span class="feat-badge">Premium</span></h3>
```

- [ ] **Step 5: Insert the Pricing section**

Immediately after the closing `</section>` of the Concierge demo (line ~481, the
`<!-- CONCIERGE DEMO -->` section) and before `<!-- SAFETY -->`, insert:

```html
<!-- PRICING -->
<section class="pricing" id="pricing">
  <div class="container">
    <div class="reveal">
      <p class="section-label">Pricing</p>
      <h2 class="section-title">Free to plan.<br>Premium to autopilot.</h2>
      <p class="section-sub">Plan every trip together for free. Unlock the AI Concierge and booking forwarding per trip — only when you want them.</p>
    </div>
    <div class="pricing-grid">
      <div class="price-card reveal reveal-d1">
        <div class="price-tier">Free</div>
        <div class="price-amount"><span class="zero">$0</span><span class="per">forever</span></div>
        <div class="price-badge" style="background:var(--sage-soft);color:#5E8C77">No account needed</div>
        <p class="price-tagline">Everything you need to plan a trip together.</p>
        <ul class="price-feats">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Create trips &amp; build your timeline by hand</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Invite companions &amp; share in real time</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Push notifications &amp; offline access</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Export as PDF</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Share-for-Safety with loved ones</li>
        </ul>
        <div class="price-cta">
          <a href="https://play.google.com/store/apps/details?id=com.flatmap.tripline" class="btn btn-outline" style="width:100%;justify-content:center">Start free</a>
        </div>
      </div>
      <div class="price-card featured reveal reveal-d2">
        <div class="price-tier">Premium · per trip</div>
        <div class="price-amount">$9.99<span class="per">/ trip</span></div>
        <div class="price-badge">Beta price</div>
        <p class="price-tagline">Let Tragitto build and plan the trip for you.</p>
        <ul class="price-feats">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> <span class="pf-strong">Everything in Free, plus:</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> <span class="pf-strong">AI Concierge</span> — plans your days, restaurants &amp; routes</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> <span class="pf-strong">Email &amp; booking forwarding</span> — auto-builds your timeline</li>
        </ul>
        <p class="price-note">Unlocks when you create the trip and stays active until just after it ends. Includes a generous AI allowance per trip — top up anytime if you need more.</p>
        <div class="price-cta">
          <a href="https://play.google.com/store/apps/details?id=com.flatmap.tripline" class="btn btn-primary" style="width:100%;justify-content:center">Get the app</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 6: Update the CTA banner**

Replace the banner subhead `<p>` (line ~565) `Free to use. No ads.` with:
```html
      <p>Free to plan together · Premium from $9.99 per trip.</p>
```

- [ ] **Step 7: Update the sticky CTA bar**

Replace the sticky small text (line ~607) `Free · No ads · No account needed` with:
```html
  <div class="sticky-cta-text">Plan trips together.<small>Free to start · Premium per trip</small></div>
```

- [ ] **Step 8: Rewrite + extend the FAQ**

Replace the "Is Tragitto free?" item (lines ~532-535) with these THREE items:
```html
      <details class="faq-item reveal reveal-d1">
        <summary>Is Tragitto free?</summary>
        <p>Yes — planning is free. Download the app, create trips, build your timeline by hand, invite companions, and share in real time at no cost. The <strong>AI Concierge</strong> and <strong>email &amp; booking forwarding</strong> are Premium, unlocked per trip.</p>
      </details>
      <details class="faq-item reveal reveal-d1">
        <summary>What does Premium cost?</summary>
        <p>Premium is <strong>$9.99 per trip</strong> during our beta. It unlocks the AI Concierge and booking forwarding for that trip, and includes a generous AI allowance. If you need more, you can top up tokens anytime.</p>
      </details>
      <details class="faq-item reveal reveal-d1">
        <summary>When does Premium activate and expire?</summary>
        <p>Premium activates the moment you create the trip and stays active until shortly after the trip ends — so it's there throughout your planning and travel. Each new trip is its own purchase.</p>
      </details>
```
Then edit the existing "Do my travel companions need to install the app?" answer is unaffected; leave it. No other FAQ items change.

- [ ] **Step 9: Verify in browser**

Run: `open en/index.html`
Expected: hero reads "Plan trips together. Effortlessly."; AI Concierge and Booking
Ingestion cards show a "Premium" badge; a Pricing section appears between the Concierge
demo and Safety with two cards ($0 and $9.99/trip "Beta price"); CTA banner and sticky
bar show the new copy; FAQ has the three pricing questions.

- [ ] **Step 10: Verify no false claims remain**

Run: `grep -n -i "free forever\|free · no ads\|free to use\|the AI Concierge.*is free\|never lock" en/index.html`
Expected: no matches.

Run: `grep -c "9.99" en/index.html`
Expected: 3 (pricing card, CTA banner, FAQ).

- [ ] **Step 11: Commit**

```bash
git add en/index.html
git commit -m "feat(en): freemium pricing — per-trip Premium, fix free claims"
```

---

### Task 2: Spanish page (`es/index.html`) — USD $9.99, translated

**Files:**
- Modify: `es/index.html`

Apply the **exact same structural changes as Task 1** (same CSS block in Step 1, same
positions), with these Spanish strings and **USD $9.99** price.

- [ ] **Step 1: Add the shared CSS block** — identical to Task 1 Step 1 (CSS is language-neutral).

- [ ] **Step 2: Meta descriptions** — both `description` and `og:description`:
```
Planifica viajes en grupo gratis con un itinerario compartido e inteligente. Activa el Conserje IA por viaje para reenviar tus reservas y planear tus días.
```

- [ ] **Step 3: Hero**
```html
<h1>Planifica viajes en grupo. <span class="accent">Sin esfuerzo.</span></h1>
```
```html
<p class="hero-sub">Crea un itinerario compartido e inteligente — gratis. Activa el Conserje IA para reenviar tus reservas y planear tus días, viaje a viaje.</p>
```
Hero pill text → `Gratis para empezar · Premium por viaje`
Reassurance "Gratis para siempre" span → `Gratis para planear juntos`

- [ ] **Step 4: Premium badges** — translate badge label to `Premium` (same word). Card titles in es are "Conserje IA" and "Importación de reservas":
```html
<h3>Conserje IA <span class="feat-badge">Premium</span></h3>
```
```html
<h3>Importación de reservas <span class="feat-badge">Premium</span></h3>
```

- [ ] **Step 5: Pricing section** — insert after the Concierge demo section, before Safety:
```html
<!-- PRICING -->
<section class="pricing" id="pricing">
  <div class="container">
    <div class="reveal">
      <p class="section-label">Precios</p>
      <h2 class="section-title">Gratis para planear.<br>Premium para el piloto automático.</h2>
      <p class="section-sub">Planifica cada viaje en grupo gratis. Activa el Conserje IA y el reenvío de reservas por viaje, solo cuando lo quieras.</p>
    </div>
    <div class="pricing-grid">
      <div class="price-card reveal reveal-d1">
        <div class="price-tier">Gratis</div>
        <div class="price-amount"><span class="zero">$0</span><span class="per">para siempre</span></div>
        <div class="price-badge" style="background:var(--sage-soft);color:#5E8C77">Sin cuenta</div>
        <p class="price-tagline">Todo lo que necesitas para planear un viaje en grupo.</p>
        <ul class="price-feats">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Crea viajes y arma tu itinerario a mano</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Invita compañeros y compartan en tiempo real</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Notificaciones push y acceso sin conexión</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Exporta como PDF</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Comparte por seguridad con tus seres queridos</li>
        </ul>
        <div class="price-cta">
          <a href="https://play.google.com/store/apps/details?id=com.flatmap.tripline" class="btn btn-outline" style="width:100%;justify-content:center">Empezar gratis</a>
        </div>
      </div>
      <div class="price-card featured reveal reveal-d2">
        <div class="price-tier">Premium · por viaje</div>
        <div class="price-amount">$9.99<span class="per">/ viaje</span></div>
        <div class="price-badge">Precio beta</div>
        <p class="price-tagline">Deja que Tragitto arme y planee el viaje por ti.</p>
        <ul class="price-feats">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> <span class="pf-strong">Todo lo de Gratis, y además:</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> <span class="pf-strong">Conserje IA</span> — planea tus días, restaurantes y rutas</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> <span class="pf-strong">Reenvío de correos y reservas</span> — arma tu itinerario solo</li>
        </ul>
        <p class="price-note">Se activa al crear el viaje y sigue activo hasta poco después de que termina. Incluye una asignación generosa de IA por viaje — recarga cuando quieras si necesitas más.</p>
        <div class="price-cta">
          <a href="https://play.google.com/store/apps/details?id=com.flatmap.tripline" class="btn btn-primary" style="width:100%;justify-content:center">Descargar la app</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 6: CTA banner** — replace `Gratis. Sin anuncios.` with:
```html
      <p>Gratis para planear juntos · Premium desde $9.99 por viaje.</p>
```

- [ ] **Step 7: Sticky bar** — replace small text:
```html
  <div class="sticky-cta-text">Planifica viajes en grupo.<small>Gratis para empezar · Premium por viaje</small></div>
```

- [ ] **Step 8: FAQ** — replace the "¿Tragitto es gratis?" item with three items:
```html
      <details class="faq-item reveal reveal-d1">
        <summary>¿Tragitto es gratis?</summary>
        <p>Sí — planear es gratis. Descarga la app, crea viajes, arma tu itinerario a mano, invita compañeros y comparte en tiempo real sin costo. El <strong>Conserje IA</strong> y el <strong>reenvío de correos y reservas</strong> son Premium, y se activan por viaje.</p>
      </details>
      <details class="faq-item reveal reveal-d1">
        <summary>¿Cuánto cuesta Premium?</summary>
        <p>Premium cuesta <strong>$9.99 por viaje</strong> durante la beta. Activa el Conserje IA y el reenvío de reservas para ese viaje, e incluye una asignación generosa de IA. Si necesitas más, puedes recargar tokens cuando quieras.</p>
      </details>
      <details class="faq-item reveal reveal-d1">
        <summary>¿Cuándo se activa y vence Premium?</summary>
        <p>Premium se activa al crear el viaje y sigue activo hasta poco después de que termina — está contigo durante toda la planificación y el viaje. Cada viaje nuevo es una compra aparte.</p>
      </details>
```

- [ ] **Step 9: Verify** — `open es/index.html`; same visual expectations as Task 1, in Spanish.

- [ ] **Step 10: Verify no false claims**

Run: `grep -n -i "gratis para siempre\|gratis · sin anuncios\|es gratuita\|nunca bloquearemos" es/index.html`
Expected: no matches.

- [ ] **Step 11: Commit**
```bash
git add es/index.html
git commit -m "feat(es): freemium pricing — Premium por viaje, fix free claims"
```

---

### Task 3: Portuguese page (`pt/index.html`) — R$ 4,99, translated

**Files:**
- Modify: `pt/index.html`

Same structural changes as Task 1, Portuguese strings, **R$ 4,99** price (BR decimal comma).

- [ ] **Step 1: Add the shared CSS block** — identical to Task 1 Step 1.

- [ ] **Step 2: Meta descriptions** — both `description` and `og:description`:
```
Planeje viagens em grupo de graça com um roteiro compartilhado e inteligente. Ative o Concierge IA por viagem para encaminhar suas reservas e planejar seus dias.
```

- [ ] **Step 3: Hero**
```html
<h1>Planeje viagens em grupo. <span class="accent">Sem complicação.</span></h1>
```
```html
<p class="hero-sub">Monte um roteiro compartilhado e inteligente — de graça. Ative o Concierge IA para encaminhar suas reservas e planejar seus dias, viagem a viagem.</p>
```
Hero pill text → `Grátis para começar · Premium por viagem`
Reassurance "Grátis para sempre" span → `Grátis para planejar juntos`

- [ ] **Step 4: Premium badges** — pt card titles are "Concierge IA" and "Importação de reservas":
```html
<h3>Concierge IA <span class="feat-badge">Premium</span></h3>
```
```html
<h3>Importação de reservas <span class="feat-badge">Premium</span></h3>
```

- [ ] **Step 5: Pricing section** — insert after the Concierge demo section, before Safety:
```html
<!-- PRICING -->
<section class="pricing" id="pricing">
  <div class="container">
    <div class="reveal">
      <p class="section-label">Preços</p>
      <h2 class="section-title">Grátis para planejar.<br>Premium no piloto automático.</h2>
      <p class="section-sub">Planeje cada viagem em grupo de graça. Ative o Concierge IA e o encaminhamento de reservas por viagem, só quando quiser.</p>
    </div>
    <div class="pricing-grid">
      <div class="price-card reveal reveal-d1">
        <div class="price-tier">Grátis</div>
        <div class="price-amount"><span class="zero">R$ 0</span><span class="per">para sempre</span></div>
        <div class="price-badge" style="background:var(--sage-soft);color:#5E8C77">Sem conta</div>
        <p class="price-tagline">Tudo o que você precisa para planejar uma viagem em grupo.</p>
        <ul class="price-feats">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Crie viagens e monte seu roteiro na mão</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Convide companheiros e compartilhem em tempo real</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Notificações push e acesso offline</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Exporte como PDF</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> Compartilhe por segurança com quem você ama</li>
        </ul>
        <div class="price-cta">
          <a href="https://play.google.com/store/apps/details?id=com.flatmap.tripline" class="btn btn-outline" style="width:100%;justify-content:center">Começar grátis</a>
        </div>
      </div>
      <div class="price-card featured reveal reveal-d2">
        <div class="price-tier">Premium · por viagem</div>
        <div class="price-amount">R$ 4,99<span class="per">/ viagem</span></div>
        <div class="price-badge">Preço beta</div>
        <p class="price-tagline">Deixe o Tragitto montar e planejar a viagem por você.</p>
        <ul class="price-feats">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> <span class="pf-strong">Tudo do Grátis, e mais:</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> <span class="pf-strong">Concierge IA</span> — planeja seus dias, restaurantes e rotas</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12l5 5L19 7"/></svg> <span class="pf-strong">Encaminhamento de e-mails e reservas</span> — monta seu roteiro sozinho</li>
        </ul>
        <p class="price-note">Ativa quando você cria a viagem e fica ativo até pouco depois do fim dela. Inclui uma cota generosa de IA por viagem — recarregue quando quiser se precisar de mais.</p>
        <div class="price-cta">
          <a href="https://play.google.com/store/apps/details?id=com.flatmap.tripline" class="btn btn-primary" style="width:100%;justify-content:center">Baixar o app</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 6: CTA banner** — replace `Grátis. Sem anúncios.` with:
```html
      <p>Grátis para planejar juntos · Premium a partir de R$ 4,99 por viagem.</p>
```

- [ ] **Step 7: Sticky bar** — replace small text:
```html
  <div class="sticky-cta-text">Planeje viagens em grupo.<small>Grátis para começar · Premium por viagem</small></div>
```

- [ ] **Step 8: FAQ** — replace the "O Tragitto é grátis?" item with three items:
```html
      <details class="faq-item reveal reveal-d1">
        <summary>O Tragitto é grátis?</summary>
        <p>Sim — planejar é grátis. Baixe o app, crie viagens, monte seu roteiro na mão, convide companheiros e compartilhe em tempo real sem custo. O <strong>Concierge IA</strong> e o <strong>encaminhamento de e-mails e reservas</strong> são Premium, ativados por viagem.</p>
      </details>
      <details class="faq-item reveal reveal-d1">
        <summary>Quanto custa o Premium?</summary>
        <p>O Premium custa <strong>R$ 4,99 por viagem</strong> durante o beta. Ele libera o Concierge IA e o encaminhamento de reservas para aquela viagem, e inclui uma cota generosa de IA. Se precisar de mais, dá para recarregar tokens quando quiser.</p>
      </details>
      <details class="faq-item reveal reveal-d1">
        <summary>Quando o Premium ativa e expira?</summary>
        <p>O Premium ativa no momento em que você cria a viagem e fica ativo até pouco depois do fim dela — acompanha você durante todo o planejamento e a viagem. Cada nova viagem é uma compra à parte.</p>
      </details>
```

- [ ] **Step 9: Verify** — `open pt/index.html`; same visual expectations, in Portuguese, price R$ 4,99.

- [ ] **Step 10: Verify no false claims**

Run: `grep -n -i "grátis para sempre\|grátis · sem anúncios\|é gratuita\|nunca será bloqueado" pt/index.html`
Expected: no matches.

- [ ] **Step 11: Commit**
```bash
git add pt/index.html
git commit -m "feat(pt): freemium pricing — Premium por viagem, fix free claims"
```

---

### Task 4: Final cross-page verification

**Files:** none (verification only)

- [ ] **Step 1: Confirm no "free forever" style claims anywhere**

Run:
```bash
grep -rn -i "free forever\|gratis para siempre\|grátis para sempre\|free · no ads\|gratis · sin anuncios\|grátis · sem anúncios" en/index.html es/index.html pt/index.html
```
Expected: no matches.

- [ ] **Step 2: Confirm each page has its Pricing section and correct price**

Run:
```bash
grep -c 'id="pricing"' en/index.html es/index.html pt/index.html   # each: 1
grep -c "9.99" en/index.html es/index.html                          # en,es: 3 each
grep -c "4,99" pt/index.html                                        # pt: 3
```
Expected: pricing section present in all three; en/es show $9.99 three times; pt shows R$ 4,99 three times.

- [ ] **Step 3: Open all three and visually confirm parity**

Run: `open en/index.html es/index.html pt/index.html`
Expected: identical layout in all three (Premium badges on two feature cards, two-card
Pricing section between Concierge and Safety, updated CTA/sticky/FAQ), each with the
correct language and regional price.

---

## Self-Review

**Spec coverage:**
- Hero (strategy) → Task 1/2/3 Step 3 ✓
- Premium badges on Concierge + Booking Ingestion → Step 4 ✓
- New Pricing section after Concierge, before Safety → Step 5 ✓
- FAQ rewrite + 2 new items → Step 8 ✓
- CTA banner + sticky bar → Steps 6, 7 ✓
- Meta descriptions → Step 2 ✓
- Regional price (USD en/es, BRL pt) → Task 1/2 use $9.99, Task 3 uses R$ 4,99 ✓
- Out-of-scope (root redirect, join, privacy, billing wiring, JS geo) → untouched ✓

**Placeholder scan:** No TBD/TODO; all copy and code blocks are concrete. ✓

**Consistency:** CSS class names (`.feat-badge`, `.price-card`, `.price-amount`, `.price-badge`,
`.price-feats`, `.pf-strong`, `.price-note`, `.price-cta`) are defined once in the shared
block and used identically across all three tasks. Price strings consistent within each
locale. ✓
