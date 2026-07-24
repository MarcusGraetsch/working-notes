---
layout: base.njk
title: Ostsee-Tour 2026
permalink: /ostsee-tour/
description: Interaktive Karte für eine 14-tägige Camping-Tour an die deutsche und polnische Ostseeküste. 22 Campingplätze, 32 Sehenswürdigkeiten, Routenvorschlag.
---

<style>
  .ostsee-page-intro {
    background: rgba(255,255,255,.04);
    border: 1px solid var(--border, currentColor);
    border-radius: 6px;
    padding: 18px 22px;
    margin: 24px auto;
    max-width: 920px;
    line-height: 1.5;
  }
  .ostsee-page-intro h1 { margin: 0 0 8px; font-size: 1.4rem; }
  .ostsee-page-intro p { margin: 0 0 10px; }
  .ostsee-page-intro p:last-child { margin-bottom: 0; }
  .ostsee-page-link {
    font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
    font-size: 0.85rem;
    opacity: .85;
  }
  .ostsee-meta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 12px 0 4px;
    font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
    font-size: 0.78rem;
    opacity: .8;
  }
  .ostsee-meta-row span {
    padding: 2px 8px;
    border: 1px solid currentColor;
    border-radius: 12px;
  }
  .ostsee-map-frame {
    width: 100%;
    height: 82vh;
    min-height: 560px;
    max-height: 1100px;
    border: 1px solid var(--border, currentColor);
    border-radius: 6px;
    display: block;
    margin: 12px auto;
    background: #0a0a0a;
  }
  @media (max-width: 720px) {
    .ostsee-map-frame { height: 78vh; min-height: 480px; }
    .ostsee-page-intro { padding: 14px 16px; }
  }
</style>

<div class="ostsee-page-intro">
  <h1>🗺️ Ostsee-Tour 2026</h1>
  <p>
    Interaktive Karte für eine 14-tägige Camping-Tour an die deutsche und
    polnische Ostseeküste. 22 Campingplätze, 32 Sehenswürdigkeiten, ein
    Routenvorschlag als gestrichelte Linie. Klick auf einen Marker für Details,
    filtere nach Region oder Typ.
  </p>
  <div class="ostsee-meta-row">
    <span>🚐 Hymer H-Kennzeichen</span>
    <span>📅 14 Tage</span>
    <span>💰 ~1.715 €</span>
    <span>🛣️ ~1.800 km</span>
    <span>5 Regionen</span>
  </div>
  <p>
    <a href="/writing/2026-07-24-ostsee-tour-2026/" class="ostsee-page-link">
      → Begleitender Blog-Post mit Kontext, Methode und Lesetipps
    </a>
  </p>
</div>

<iframe
  src="/ostsee-tour-embed/"
  class="ostsee-map-frame"
  title="Ostsee-Tour 2026 — Interaktive Karte"
  loading="lazy"
  allowfullscreen></iframe>

<noscript>
  <p style="text-align:center;padding:40px">
    Diese Karte braucht JavaScript. Direktlink:
    <a href="/ostsee-tour-embed/">/ostsee-tour-embed/</a>
  </p>
</noscript>
