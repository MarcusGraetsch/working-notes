# Process Log

**Article:** Eine Hissflagge, eine KI und 36 Minuten
**Slug:** 2026-07-01-flyeralarm-hissflagge-ai-showcase
**Started:** 2026-07-01 02:07
**Published:** 2026-07-01
**Status:** Published

---

## Initial Prompt

<div class="human">

Marcus asked for a comprehensive report based on the session logs of the FLYERALARM Hissflagge job — including CLI commands and technical commentary — to use as showcase material for presentations about what AI agents can do.

The request came after the original job was technically complete (PDF delivered, skill proposal approved), and was followed by Marcus' suggestion to use the showcase as content for working-notes.

</div>

---

## Research Phase

### Primary Sources

- [x] `/root/.openclaw/workspace/projects/anne-bonnys-ranch/SHOWCASE-REPORT.md` (original internal report, 17 KB, 405 lines)
- [x] `/tmp/openclaw/openclaw-2026-06-30.log` (OpenClaw system log for the FLYERALARM session)
- [x] `/root/.openclaw/workspace/projects/anne-bonnys-ranch/build_final.py`, `build_compressed.py`, `build_pdf.py` (Python build scripts)
- [x] `/root/.openclaw/workspace/.agents/skills/flyeralarm-print-job/SKILL.md` (skill workshop backup snapshot)
- [x] `datenblatt_hissfl_q_250x150.pdf` (FLYERALARM data sheet, parsed with pdftotext)

### Secondary Sources

- [x] `World-of-FLYERALARM_Katalog.pdf` (downloaded during skill-revision phase for product category overview)
- [x] working-notes existing posts (`2026-05-27-ki-authentizitaet-diskurs-genealogie.md`, `2026-05-01-man-and-machine-ki-arbeiterinnen.md`, `statement-of-method.md`) — for tonal consistency

### Tools Used

- `web_fetch` (working-notes index, AGENTS.md, .eleventy.js, post frontmatter)
- `find`/`ls` (working-notes structure)
- `cat`/`head` (existing posts for tone matching)
- `pandoc` was checked but not installed — not needed since output is markdown

---

## Drafting Phase

### Structure

Followed working-notes convention: frontmatter (layout, title, date, author, tags, excerpt) → markdown body → 10 sections including "Methodische Anmerkung" at the end.

### Tonalität

working-notes tone: analytical, left-critical, honest about limitations, politically contextualized. Avoided "sales pitch" framings. Connected to the site's broader argument about human-machine collectives and labor displacement.

Key tonal choices:
- Started with concrete failure ("FLYERALARM rejects the file") not with hype
- Included the failure modes (ICC downloads all dead, six tries)
- Used the political question (KI displaces or democratizes design work?) as closing
- Authoring: "Marcus + Rook" — established site convention

### Adjustments from Internal Report

The internal SHOWCASE-REPORT.md had CLI commands throughout. For working-notes, those were extracted into a footnote-style "Werkzeugkette" table — present but not dominant. The full technical reference remains in the internal report.

Sections present:
1. Worum es geht (setup)
2. Die Aufgabe (verbatim Marcus quote)
3. Warum FLYERALARM die Datei ablehnt (technical problem statement)
4. Die Werkzeugkette (tool inventory table)
5. Was tatsächlich passiert ist (6 numbered sub-sections)
6. Statistik (table)
7. Fünf Stolpersteine (failure modes)
8. Was das über KI-Agenten im Allgemeinen zeigt (analysis)
9. Drei Lehren (lessons learned)
10. Was als nächstes passiert (forward-looking)
11. Methodische Anmerkung (site-style closing with political question)

### Length

14.3 KB markdown. Compares to:
- 2026-05-27 KI-Diskurs-Genealogie essay: 33 KB
- 2026-05-01 KI und Arbeiter*innen: ~14 KB
- Open-source-community essay: 33 KB

In the mid-range for a working-notes post. Appropriate for the content density (concrete job documentation + 3 lessons + political framing).

---

## Build & Deploy Phase

### Build Verification

```bash
cd /root/.openclaw/workspace/projects/working-notes
npx @11ty/eleventy
```

Expected output: `_site/writing/2026-07-01-flyeralarm-hissflagge-ai-showcase/index.html`

### Deploy

Same rsync mechanism as the photo bot:
```bash
sshpass -p '${IONOS_PASSWORD}' rsync -avz --delete \
  -e 'ssh -o StrictHostKeyChecking=accept-new' \
  _site/ ${IONOS_USER}@${IONOS_HOST}:~/public/
```

### Expected URL

https://marcus-cyborg.de/writing/2026-07-01-flyeralarm-hissflagge-ai-showcase/

---

## Cross-References

- Internal technical report: `/root/.openclaw/workspace/projects/anne-bonnys-ranch/SHOWCASE-REPORT.md`
- Skill workshop backup: `/root/.openclaw/workspace/.agents/skills/flyeralarm-print-job/SKILL.md`
- Original print-ready PDF: `/root/.openclaw/workspace/projects/anne-bonnys-ranch/fahne-250x150_hissflagge.pdf`
- Reminder cron (Mi 8. Juli 12:00): cleanup
- Related posts in working-notes: `2026-05-01-man-and-machine-ki-arbeiterinnen.md`, `2026-05-27-ki-authentizitaet-diskurs-genealogie.md`

---

## Notes

The post intentionally ends with an open political question rather than a sales pitch. This matches working-notes' established tradition of treating AI work as a political-economic phenomenon, not just a technical one.

A second process-log file (`*.process.md`) is created alongside the post, per site convention. Eleventy is configured to ignore `*.process.md` files in the writing directory but they serve as a record of the editorial process.