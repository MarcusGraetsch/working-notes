---
layout: base.njk
title: Trading Lab
permalink: /trading/
---

<div class="hero">
  <h1 class="hero-title">Trading Lab</h1>
  <p class="hero-description">simfund — ein Paper-Trading-Lab mit hartem Risiko-Veto.</p>
</div>

<hr class="section-divider">

<div class="section-title">
  <h2>Was ist simfund?</h2>
</div>

<p>
  <strong>simfund</strong> ist eine Multi-Agent-Paper-Trading-Plattform nach dem
  Vorbild agentischer Systeme — aber mit umgedrehtem Verhältnis von Code zu LLM.
  <strong>95 % deterministischer Code, LLM nur an wenigen, wertvollen Stellen.</strong>
  Und in Phase 1 noch gar nicht.
</p>

<p>
  Das Referenzsystem eines Kollegen verbrannte 425 €/Monat (843 Mio. Input-Token,
  0 gecacht, 52 % davon Subagent-Recherche). Das ist das Negativbeispiel, an dem
  sich jede Designentscheidung messen lassen muss. simfund macht es anders:
</p>

<ul>
  <li><strong>Handel ist NIE ein LLM-Job.</strong> LLM-Läufe legen
    Watchlist-Regeln an (These, Entry-Zone, Stop, Take-Profit, Stückzahl);
    ein Wächter exekutiert sie deterministisch alle 15 Minuten — kostenlos.</li>
  <li><strong>Modellstufen statt Modellnamen.</strong> Personas sagen
    <code>klein</code>/<code>gross</code>; ein Router entscheidet konkret.</li>
  <li><strong>Token-Logging ab Tag 1</strong> — jeder LLM-Aufruf loggt
    Kategorie, Modell und Kosten.</li>
</ul>

<hr class="section-divider">

<div class="section-title">
  <h2>Risiko-Veto (Mini-Aladdin)</h2>
</div>

<p>
  Das Differenzierungsmerkmal: <code>risk.py</code> blockiert Orders
  <strong>hart vor Ausführung</strong> — nicht als Prosa-Vorsatz, sondern als
  Code. Max. 15 % je Position, max. 50 % je Sektor, 5 % Cash-Floor. Das
  Referenzsystem notierte dieselben Limits in Prosa und riss sie trotzdem
  (65 % in einem Sektor bei 50 %-Limit).
</p>

<hr class="section-divider">

<div class="section-title">
  <h2>Live-Dashboard</h2>
</div>

<div class="info-box">
  <a href="https://trading.working-notes.org">
    <span class="nav-key">[▶]</span> trading.working-notes.org öffnen
  </a>
</div>

<p>
  Das Dashboard läuft als FastAPI-Service auf der VM hinter dem Cloudflare-Tunnel
  (analog zu <code>dashboard.working-notes.org</code>). Es zeigt:
</p>

<ul>
  <li>NAV, Cash, P&amp;L, Sektor-Exposure, Max-Drawdown pro Agent</li>
  <li>Watchlist mit Thesen und Regel-Schwellen</li>
  <li>Letzte Orders inkl. abgelehnte (mit Begründung — das ist Lernmaterial)</li>
</ul>

<p style="color: var(--muted, #888); font-size: 0.9em;">
  <em>Hinweis: Solange der Tunnel-Eintrag für <code>trading.working-notes.org</code>
  nicht im Cloudflare-Dashboard gesetzt ist, ist der Live-Link nicht erreichbar.
  Bis dahin läuft das Dashboard lokal unter
  <code>http://127.0.0.1:8766</code> auf der VM.</em>
</p>

<hr class="section-divider">

<div class="section-title">
  <h2>Code &amp; Repos</h2>
</div>

<ul>
  <li><a href="https://github.com/MarcusGraetsch/Mytrader">github.com/MarcusGraetsch/Mytrader</a> — Haupt-Repo (simfund)</li>
  <li><a href="https://github.com/MarcusGraetsch/rook-agent">github.com/MarcusGraetsch/rook-agent</a> — Der Agent, der diese Seite baut</li>
</ul>

<div class="info-box">
  <a href="/about"><span class="nav-key">[←]</span> ZURÜCK ZUR ABOUT-SEITE</a>
</div>