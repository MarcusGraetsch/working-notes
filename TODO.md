# TODO.md — working-notes.org Website

**Scope:** Content, design, deployment for personal website
**Repo:** marcus-cyborg (11ty static site)
**Last Updated:** 2026-02-11

---

## 🔴 HIGH PRIORITY — Content

### Writing
- [x] **Process Log Workflow** — Define provenance tracking for articles ✅ DONE 2026-02-11
  - Template created: `PROCESS-LOG-TEMPLATE.md`
  - Migrated: `statement-of-method.process.md`, `anmerkungen-zu-prompt-university.process.md`
  - Next: Apply to future articles

- [ ] **Article: Gig Economy Research Notes** — Based on HRW "Gig Trap" report
  - Draft: Personal take on algorithmic management
  - Cross-reference: Marx on piecework/monitoring

### Photo Gallery
- [ ] **Re-tag remaining gallery images**
  - Need: Metadata/descriptions from Marcus
  - Current: ID 006 tagged (robot communication)
  - Pending: All other photos in `src/img/photos/`

---

## 🟡 MEDIUM PRIORITY — Technical

### Deployment
- [ ] **IONOS Credentials Rotation**
  - Password currently in `.env` (needs changing)
  - Verify: SSH on port 6262 still works after changes

### Search & Discovery
- [ ] **Fix internal search** — Currently disabled/broken?
  - 11ty search plugin evaluation
  - Alternative: Client-side lunr.js

### Performance
- [ ] **Image optimization pipeline**
  - Convert gallery images to WebP
  - Lazy loading for photo grid

---

## 🟢 LOW PRIORITY — Polish

### Content
- [ ] **About page update** — Reflect current role at HiSolutions
- [ ] **Colophon refresh** — Document new tools (Agent Memory Kit, etc.)
- [ ] **RSS feed verification** — Test in Feedly/Inoreader

### Design
- [ ] **Dark mode toggle** — CSS custom properties
- [ ] **Typography review** — Current font stack working?

---

## ✅ Recently Completed

- [x] Renamed "Glean" to "Rook" across site (6 files)
- [x] Published: "Anmerkungen zu Prompt University"
- [x] Photo ID 006 tagged and deployed
- [x] Deployed to IONOS (credentials in `.env`)

---

*Next deployment: After gallery updates*
