# Process Log

**Article:** Herzberg 2026: Sechs Single-Page-Skizzen für ein Festival mit Freunden, Spotify-Brücke und einem Notizbuch am Handgelenk
**Slug:** 2026-07-25-herzberg-2026-sechs-singles-skizzen
**Started:** 2026-07-25 23:00
**Published:** 2026-07-25
**Status:** Published

---

## Initial Prompt

<div class="human">

Marcus: Check mal das Programm von diesem Festival und meine artists https://herzberg-festival.com/lineup/

Empfehlungen auf Grund anderer Kriterien kannst Du mir zum Festival Programm auch geben

</div>

## Phase 1: Spotify-Brücke bauen

<div class="human">

Marcus: Moin Phoenix ich weiß nicht ob Du jemals meine Spotify History oder do durchgegangen bist. Bist Du?

</div>

<div class="ai">

Phoenix erinnerte sich an die vergangene Session vom 8. Juni 2026 (signal-noise-System), in der die Spotify-Export-Pipeline in PKS-DuckDB gegossen wurde. 158.116 Plays, 607 Top-Artists, 9.986 unique Artists über 12,5 Jahre.

</div>

## Phase 2: Festival-Programm scrapen

<div class="ai">

Curl auf https://herzberg-festival.com/lineup/, 360 KB HTML, 112 Artikel-Tags mit class="project_category-{mainstage,freakstage,mentalstage,lesenzeit,hoellenschuppen}". Python-Regex extrahierte 107 Acts mit Zeit, Bühne, URL. Filter auf `time` nicht leer.

Erste Erkenntnis: **null direkte Matches** zwischen Festival-Lineup und Top-470-Artists. Das Festival ist Krautrock / Psychedelic / World / Post-Punk — Marcus' Sound ist Classic Rock, Heartland, Kraut-Veteranen.

</div>

## Phase 3: Brücken-Algorithmus

<div class="ai">

Manuell kuratiertes Mapping: jeder Act → 2 Brücken-Artists (Genre-Cluster). NEU! 25h, Hawkwind 29h, Monster Magnet 82h, Kyuss 6h, Sleep 4h, Birth Control 4h.

Score-Formel: `score = hours_primary + 0.5 × hours_secondary`

Tier: TOP (Score > 30), HIT (>10), NICE (>3), NEW (=0).

78 TOP, 7 HIT, 3 NICE, 19 NEW. Wolfmother 252.9pts, Laura Cox 252.6pts, Rockpommel's Band 234.6pts, Melodaddies 234.6pts (alle AC/DC-bridge). Über 75+ Acts matchen über die 6 Brücken.

</div>

## Phase 4: User entscheidet Single-Page-HTML

<div class="human">

Marcus: Können wir was für die Webseite bauen? Einerseits kuratiert für mich (mit artist Beschreibung) andererseits bin ich ja in einer Gruppe mit anderen Menschen dort die ich gerne habe. Und es könnte ja Sinn machen das auch Leute da zusammen ihr gemeinsames Programm erstellen wollen.

Mir fällt keine gute Idee wie man eine App oder Webseiten Lösung bauen kann um da sich spielerisch gemeinsam etwas zusammen zu stellen

</div>

<div class="ai">

Lade `sketch`-Skill: "Throwaway HTML mockups: 2-3 design variants to compare." Baue drei erste Sketches parallel:
- 001 Festival-Pass (Heftchen-Stempel)
- 002 Swipe-Tinder (Tinder-Swipe)
- 003 Puzzle-Solver (Heatmap-Konfliktlöser)

Jede Variante: ~1000 Zeilen standalone HTML mit inlinierten Daten. Marcus sollte alle drei öffnen und die Atmosphäre vergleichen.

</div>

## Phase 5: Inline-Daten-Modus

<div class="human">

Marcus: 2

</div>

<div class="ai">

User entschied sich für Standalone (kein Server). Phoenix schrieb `inline_data.py`, das die `fetch('/data/acts.json')`-Aufrufe in jeder Skizze durch `const DATA = JSON.parse('{...}')` ersetzt. Bug-Fixes während des Patchens: 002 hatte `shuffleAndPrepare()` im Boot verloren, 003 hatte `render()` im Boot vergessen.

Drei Patches:
1. 002: `ALL_ACTS = DATA.acts; shuffleAndPrepare(); render();`
2. 003: `ALL_ACTS = DATA.acts; render();`

</div>

## Phase 6: User fragt nach mehr

<div class="human">

Marcus: Neben swipe tinder was können wir noch machen?

</div>

<div class="ai">

Phoenix brainstormte 5 Konzepte jenseits Swipe, empfahl 1+2+3 als Kombination für gesamten Festival-Lebenszyklus:
1. **Group-Collage** (vorher) — geteilte Leinwand mit Overlap-Visualisierung
2. **Live-Mode** (während) — Now-Playing, Erinnerungen, GPS-Distanzen
3. **Festival-Diary** (nachher) — Notizen, Fotos, druckbarer Recap

Bau aller drei in einer Session.

</div>

## Phase 7: Drei neue Sketches

<div class="ai">

**004-group-collage** (56 KB, ~1000 Zeilen): Drag & Drop auf Canvas, mehrere Freund:innen-Farben, Overlap-Acts werden golden markiert mit Stern. Live-Stats rechts. JSON-Import/Export.

**005-live-mode** (51 KB): Live-Ticker, "Now Playing" basiert auf System-Uhr (gemappt auf Festival-Tag), Set-Erinnerungen via Browser-Notification, Distanz-Schätzungen zu Bühnen.

**006-festival-diary** (51 KB): Cover wie ein Festival-Buch, pro Act Textarea + Foto-Upload + 5-Sterne-Rating, Recap-Stats, druckbar via window.print().

</div>

## Phase 8: jsdom-Verifikation

<div class="ai">

`func_test.js` und `deep_test.js` mit jsdom. Ergebnis: alle 6 Sketches rendern ohne Errors, alle Test-Acts (Wolfmother, Elder, Love Machine) sichtbar im DOM.

Bug entdeckt: Sketches 004 (`render()` vs. `renderCanvas()`+`renderPool()`) und 006 (`render()` vs. `renderDiary()`) hatten falsche Boot-Calls. Gefixt.

</div>

## Phase 9: Working Notes

<div class="human">

Marcus: Ok kann ich das Ergebnis irgendwo sehen ist es auf working notes?

</div>

<div class="ai">

Phoenix fand die Eleventy-Site in `/root/.openclaw/workspace/projects/working-notes/`. AGENTS.md-Discovery: Posts werden als `YYYY-MM-DD-slug.md` in `src/writing/` angelegt, mit Frontmatter, Tags, Excerpt. Optional Process-Logs als `*.process.md`.

Phoenix schrieb den Hauptpost + diesen Process-Log, im Format der bestehenden Posts (Ostsee-Tour, FLYERALARM, etc.).

</div>

## Setup Notes

- **Model:** Hermes (M3 / MiniMax-M3)
- **Method:** Iterative sketch + validation
- **Tools used:**
  - `terminal` für Curl, Python-Pipeline, jsdom-Tests
  - `patch` für HTML-Bugfixes
  - `write_file` für die 6 Sketches (initial), 2 Python-Tools, README
  - `skill_view` für `sketch` (Mockup-Methode)
  - `session_search` für Recalls aus früheren Sessions
  - `clarify` für User-Entscheidungen
- **Files modified:**
  - `/root/herzberg/sketches/001-festival-pass/index.html`
  - `/root/herzberg/sketches/002-swipe-tinder/index.html`
  - `/root/herzberg/sketches/003-puzzle-solver/index.html`
  - `/root/herzberg/sketches/004-group-collage/index.html`
  - `/root/herzberg/sketches/005-live-mode/index.html`
  - `/root/herzberg/sketches/006-festival-diary/index.html`
  - `/root/herzberg/data/acts.json`
  - `/root/herzberg/inline_data.py`
  - `/root/herzberg/verify_inline.py`
  - `/root/herzberg/README.md`
  - `/tmp/match_herzberg.py` (reproducible pipeline)
  - `/tmp/herzberg_acts.json` (extracted)
  - `/tmp/herzberg_report.txt` (analysis)
- **Tests:** 6 HTMLs validiert via jsdom, 3 Bugs gefunden + gefixt
- **No RAG used**

## Was gut lief

- **Inline-Pattern für Standalone-HTMLs** war ein Aha-Moment: `JSON.parse('...')` mit gequoteten Apostrophen funktioniert sauber, ~30KB pro Sketch.
- **Brücken-Algorithmus** statt direktem Match — der „warum mag ich es"-Pfad wurde zur Kernidee.
- **6 Sketches als Varianten einer Idee** statt 1 hochpolierte — die *Atmosphäre* jedes Paars (Heftchen, Tinder, Heatmap) testet sich gegenseitig.

## Was nicht gut lief

- **Initial 3-Sketch-Boost** war zu schnell — die Bugs `render()` vs. spezifischer Render-Call wären bei 2 Minuten mehr Testing vermeidbar gewesen.
- **jsdom-Tests** kamen erst nach dem 6. Sketch, nicht davor. Hätte früher eine Validierungs-Routine etabliert.
- **GPS-Distanzen in 005** sind geraten, nicht gemessen. Auf dem Festival muss manuell korrigiert werden.

## Lessons Learned

1. **Variants vor Production:** Drei Stances gleichzeitig zu bauen, statt eine auszupolieren, ist günstiger — die User-Preferences werden klarer.
2. **Standalone-HTML > Web-App** für persönliche Tools: keine Build, keine Dependencies, läuft in 5 Jahren noch.
3. **JSON-Bridge > Auth-System:** Group-Sharing via JSON-Export ist primitiv, aber pragmatisch.
4. **jsdom-Smoke-Tests** sind billig und finden Boot-Bugs vor dem User-Report.
5. **When data doesn't match: build a bridge.** Die null Matches wurden zur zentralen Innovation.
