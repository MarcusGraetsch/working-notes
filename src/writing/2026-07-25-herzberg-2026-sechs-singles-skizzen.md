---
layout: post.njk
title: "Herzberg 2026: Sechs Single-Page-Skizzen für ein Festival mit Freunden, Spotify-Brücke und einem Notizbuch am Handgelenk"
date: 2026-07-25
author: "Marcus + Phoenix"
tags:
  - post
  - AI
  - WORKFLOW
  - FESTIVAL
  - HERZBERG-2026
  - SPOTIFY
  - ROOK
excerpt: "Sechs standalone HTML-Dateien, 107 Acts, ein Brücken-Generator von deinem Spotify-Verlauf zu deinem Festival-Programm — und drei vor dem Festival, eines während, eines danach. Kein Server, keine Cloud, alles im Browser."
---

## Worum es geht

Vier Tage Herzberg Festival, 30. Juli bis 2. August 2026. 107 bestätigte Acts, fünf Bühnen (Mainstage, Freakstage, Mentalstage, Lesezelt, Höllenschuppen), vier Tage plus Vorabend. Ich gehe mit Freunden hin. Wir haben kein gemeinsames Planungstool und keine Lust auf Excel.

Was ich gebaut habe, sind **sechs Single-Page-HTML-Skizzen**, die zusammen den gesamten Festival-Lebenszyklus abdecken — von zu Hause am Schreibtisch über den Wald bei Oberholz bis ins Tagebuch danach. Sie laufen offline im Browser, brauchen keinen Server, und teilen Daten über `localStorage`. Sie hängen an einem Brücken-Generator, der meine 12,5 Jahre Spotify-Hör-Historie (9.986 unique Artists, 56.000 Tracks) mit dem Festival-Programm verknüpft und jedem Act einen Affinitäts-Score gibt.

Herausgekommen ist ein kleines privates Festival-OS: drei Skizzen für vorher (sortieren, planen, kollaborieren), eines für während (Live-Ticker + Erinnerungen), eines für nachher (Tagebuch + Recap zum Drucken).

## Die Brücke — wie aus Spotify-Hören Festival-Empfehlungen werden

Der erste Schritt war kein UI, sondern ein Skript, das die 107 Acts des Festivals mit meinen Top-470-Spotify-Artists verknüpft. Das Ergebnis war überraschend: **null direkte Matches.** Kein einziger Act aus dem Lineup stand in meinen meistgehörten Künstlern. Das Festival ist Krautrock / Psychedelic / World / Post-Punk — und mein Sound ist Classic Rock, Heartland, Kraut-Veteranen, Post-Punk, Deutsch-Sprechgesang.

Aber über **sechs Brücken-Artists** (NEU! 25h, Hawkwind 29h, Monster Magnet 82h, Kyuss 6h, Sleep 4h, Birth Control 4h) lassen sich 75+ Acts sauber clustern. Die Formel: für jeden Act schaue ich, ob er genreverwandt mit einem meiner Artists ist (z. B. "Kadavar" → Stoner-Psych wie Monster Magnet), und addiere deren Stunden als Score. Ein Wolfmother-Set wird so zu 252,9 Punkten (AC/DC 211h + Monster Magnet 82h · 0,5), ein Heartland-Singer-Songwriter wie Orange zu 65 (Cohen 36 + Petty 56).

Diese Brücke ist das, was die ganze Webseiten-Familie trägt. Jeder Act trägt in sich: Name, Bühne, Zeit, Genre, Score, Tier (TOP/HIT/NICE/NEW), und die zwei Brücken-Artists, die ihn zu mir verbinden.

## Die sechs Skizzen

Alle sechs liegen unter `/root/herzberg/sketches/0XX-.../index.html` und können per Doppelklick geöffnet werden. Sie sind **single-file standalone**: keine externen CDNs (außer Google Fonts, die auch bei `file://` laden), keine Build-Tools, keine Server.

**001 — Festival-Pass** *(50 KB)* — Heftchen-Stempel-Optik, wie ein Festival-Bändchen am Handgelenk. Jeder Act ist eine Karte mit Zeit, Bühne, Brücke und Tier. Klick = gestempelt. Tages-Tabs, Filter nach Tier, Sortierung nach Zeit/Punkten/Stufe. Gruppe-Sync via JSON-Import/Export.

**002 — Swipe-Tinder** *(47 KB)* — Tinder-Style durch alle 107 Acts. Wischen oder Tasten (← → ↓). Konflikt-Erkennung am Ende ("Du willst Kadavar UND Wolfmother — geht nicht, welche?"). Keyboard-Shortcuts. Reset und JSON-Export.

**003 — Puzzle-Solver** *(54 KB)* — 4-Tage × Stunden-Heatmap über alle fünf Bühnen. Klick eine Zelle = der Act landet auf deinem Plan. Konflikte leuchten rot mit Puls-Animation. Auto-Pick löst Slots auf, indem der höher-punktige Act gewinnt. Druckbar.

**004 — Group-Collage** *(56 KB)* — Drag & Drop auf einer großen Leinwand. Mehrere Freund:innen anlegen, jede:r hat eigene Farbe. Acts, die mehrere markiert haben, leuchten **gold** mit Stern-Icon. Live-Stats rechts: "Du teilst 4 Acts mit Anna, 7 mit Bert". JSON-Import zum Sharen zwischen euch.

**005 — Live-Mode** *(51 KB)* — Live-Ticker. "Now Playing" zeigt dir gerade, was auf deinem Plan läuft. "Als nächstes in 2h 15min" mit Distanz (Höllenschuppen 350m, ~5min Fußweg). Set-Erinnerungen via Browser-Notification. "War da" / "Verpasst" — speist direkt in 006.

**006 — Festival-Diary** *(51 KB)* — Cover wie ein echtes Festival-Buch. Pro Act: Textarea + Foto-Upload + 5-Sterne-Rating. Recap-Modus: "Du warst bei 23 von 35 Acts, 14 TOP-Picks, 4 Überraschungen, 1 Enttäuschung." Per-Tag-Ansicht. Druckbar als PDF via `window.print()`.

## Wie sie zusammenarbeiten

Die Skizzen teilen Daten über `localStorage`-Keys:

- `herzberg_stamps_v1` — 001's Stempel
- `herzberg_swipe_v1` — 002's Swipe-Ergebnisse
- `herzberg_picks_v1` — 003's Heatmap-Picks
- `herzberg_collage_v1` — 004's Collage
- `herzberg_diary_attended_v1` / `_missed_v1` — 005's Tracking
- `herzberg_diary_v1` — 006's Notizen

005 liest die Picks aus 001/002/003 und macht daraus den Live-Ticker. 006 zieht die "war da" / "verpasst" aus 005. Der Workflow:

1. **Vorher (zu Hause):** 001 oder 002 — Acts markieren
2. **Vorher mit Gruppe:** 004 — Collage sharen via JSON
3. **Während Festival:** 005 — Live-Ticker + Erinnerungen
4. **Nach Acts:** in 005 auf "War da" tippen
5. **Nachher (zu Hause):** 006 — Notizen + Fotos, drucken

## Wie ich's gebaut habe

**Schritt 1: Daten scrapen.** Die Festival-Lineup-Seite (`https://herzberg-festival.com/lineup/`) hat 112 Acts in `<article>`-Tags mit `class="project_category-<stage>"` und einer Custom-Field namens `zeit` (Spielzeit). Mit einem 50-Zeilen-Python-Script (`/tmp/herzberg_report.txt` / `/tmp/match_herzberg.py`) habe ich die 112 Einträge geparst, mit Genre-Tags versehen, und gegen deine PKS-Spotify-Brücke in DuckDB gematcht.

**Schritt 2: Brücke kalkulieren.** Jeder der 107 Acts bekommt zwei Brücken-Artists (Genre-Cluster-Mapping, manuell kuratiert: Krautrock → NEU!, Stoner → Monster Magnet, Post-Punk → The Cure, etc.). Score = Stunden der primären Brücke + 0,5 × Stunden der sekundären. Tier: TOP (Score > 30), HIT (>10), NICE (>3), NEW (=0).

**Schritt 3: Sechs Skizzen schreiben.** Mit dem Hermes-Skill `pretext` (für kreative Demos) und `sketch` (für Throwaway-Mockups) als Inspiration, aber tatsächlich Vanilla HTML/CSS/JS — keine Frameworks. Jede Skizze ist ein einzelnes HTML, ~1000 Zeilen mit allem drin. Die Daten werden beim Build per Python-Script (`inline_data.py`) als `const DATA = JSON.parse('...')` direkt inlined, damit die HTMLs auch ohne Server laufen.

**Schritt 4: Verifizieren.** Mit jsdom und Node habe ich alle sechs in Headless-DOMs geladen und geprüft: (1) JSON.parse funktioniert, (2) `render()` läuft ohne Exceptions, (3) Test-Acts (Wolfmother, Elder, Love Machine) erscheinen im DOM, (4) erwartete CSS-Klassen sind da. Drei Sketches hatten Boot-Bugs (`render()` statt `renderCanvas()`, `shuffleAndPrepare()` vergessen) — alle gefixt.

## Was ich gelernt habe

**Standalone-HTML ist unterschätzt.** Für persönliche Tools, die *du selbst* nutzt und die keine Millionen Nutzer brauchen, ist eine HTML-Datei, die du per Mail an dich selbst schickst oder auf deinem Phone öffnest, *besser* als eine App, die einen Server braucht. Die Daten in `localStorage` zu haben statt in einer Datenbank heißt: ich kann das Tool morgen, in sechs Monaten, auf einem anderen Gerät öffnen, und es funktioniert noch.

**Group-Features ohne Backend sind möglich.** Collage-Sharing via JSON-Export/Import ist so primitiv wie möglich — und genau deshalb funktioniert es: keine Auth, keine Sync-Konflikte, keine DSGVO-Frage. Ich schicke meiner Gruppe die JSON, die schicken mir ihre, ich mergee. Ein einmaliger Handshake, fertig.

**Print ist eine Funktion.** Skizze 006 hat einen Druck-Modus — die Buttons und der Cover verschwinden, der Rest wird zu Papier-freundlichem Layout. Das `window.print()`-Statement, kombiniert mit `@media print` CSS, ist die am meisten unterschätzte API der Web-Plattform.

**Wenn die Brücke versagt: trotzdem zeigen.** Die erste Erkenntnis war: keiner der 107 Acts matcht direkt mit deinen Top 470. Das hätte das ganze Projekt beenden können. Stattdessen wurde die Brücke zur *eigentlichen Innovation*: nicht "was mag ich", sondern "warum mag ich es, und welche zwei Pfade führen dahin". So wurde aus einem Spotify-Match-Algorithmus ein Musik-Profil-Generator.

## Datenbasis

- 107 Acts von https://herzberg-festival.com/lineup/ (Stand 2026-07-25)
- 9.986 unique Artists aus deiner 12,5-jährigen Spotify-History
- Pipeline: `/root/repos/signal-noise-system/src/pks_bridge.py` (Bridge-Generator)
- Build-Tools: `/root/herzberg/inline_data.py`, `/root/herzberg/verify_inline.py`
- Output: `/root/herzberg/sketches/0XX-*/index.html`

## Was als nächstes

- **Vor Ort testen:** die App auf dem Phone laden, GPS-Distanzen prüfen, Notif-Triggers.
- **Mit der Gruppe probieren:** 004-Collage als Vorlage für ein WhatsApp-Planungsgespräch.
- **Spotify-Recap-Integration:** 006 könnte nach dem Festival deine Spotify-History scannen und sagen, "Diese 5 Acts haben dein Hören nach dem Festival beeinflusst." Braucht nur einen re-Export und einen Diff.
- **Print-Edition:** das Tagebuch als PDF, am Tag danach per Mail an alle in der Gruppe. Macht das Festival zu einem Erinnerungs-Objekt.

---

**Method:** Sketch + Iterative Validation (jsdom smoke tests)
**Model:** Hermes (M3)
**Files:** 6 × standalone HTML, 1 × README, 2 × Python-Build-Tools
**Lines of code:** ~3,000 HTML/JS, ~150 Python
