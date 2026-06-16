# Legal Documents — Review Notes

**Status:** Draft, NOT yet reviewed by a lawyer. Generated 2026-06-16.

These Privacy Policy and Terms of Use pages were drafted to be store-compliant
(Apple App Store Guideline 5.1.1, Google Play Data Safety) and region-aware
(LGPD for Brazil, GDPR for EU/EEA). They are grounded in Tragitto's actual data
practices as described in the original `privacy.html`. **A qualified Brazilian
lawyer should review before publishing**, especially the items below.

## Files

| Language | Privacy | Terms |
|----------|---------|-------|
| English (master) | `/privacy.html` | `/terms.html` |
| Portuguese (BR)  | `/pt/privacy.html` | `/pt/terms.html` |
| Spanish          | `/es/privacy.html` | `/es/terms.html` |
| German           | `/de/privacy.html` | `/de/terms.html` |
| French           | `/fr/privacy.html` | `/fr/terms.html` |

URLs to paste into App Store Connect / Play Console (one per locale):
`https://tragitto.app/privacy.html`, `https://tragitto.app/pt/privacy.html`, etc.

## Decisions baked in (confirm these are correct)

- **Operator / data controller:** "Flatmap, a company based in Brazil." Trade name
  only — **no razão social or CNPJ yet.** Add the full registered name + CNPJ for
  full LGPD compliance and store review.
- **Governing law:** Brazil, with mandatory local consumer rights preserved.
- **Minimum age:** 16+ in all regions (safest single threshold for GDPR + LGPD).
- **Payments:** per-trip Premium, billed by Apple/Google; refunds deferred to the
  stores; statutory withdrawal/refund rights preserved.
- **Pricing in Terms §4:** "USD $9.99 (US) / R$ 4,99 (Brazil), beta, may vary by
  region." Update if prices change after beta.
- **Contact:** gabriel@flatmap.com.br.

## Flags for the lawyer

1. **Liability cap** (Terms §11) — limited to the amount paid for the trip giving
   rise to the claim. Confirm enforceability under Brazilian Consumer Code (CDC),
   which restricts limitation-of-liability clauses for consumers.
2. **Governing law / forum** (Terms §13) — Brazilian CDC may give consumers the
   right to sue in their own domicile; EU consumers have similar protections.
   Confirm the wording is sufficient.
3. **International transfers** (Privacy §5) — BR → US processing (GCP, Anthropic).
   Confirm the LGPD international-transfer basis and any GDPR SCC references.
4. **DSGVO/RGPD terminology** — German uses "DSGVO", French uses "RGPD" for GDPR;
   confirm a native legal reviewer is happy with the register in DE/FR.
5. **ANPD / DPO** — LGPD may require naming a Data Protection Officer (encarregado)
   and contact. Currently the controller contact email serves this role; confirm
   whether a dedicated DPO must be named.
6. **AI processing disclosure** — Privacy §2 states trip data (not identity/email)
   is sent to Anthropic. Verify this matches the live implementation before launch.

## Translation note

DE/FR/ES/PT-BR were machine-translated from the English master with structure and
brand terms preserved. Have a native speaker (ideally with legal familiarity)
proofread the translated legal text before publishing.
