---
title: Diskursnetzwerk
layout: base.njk
date: 2026-03-15
---

# Diskursnetzwerk

Interaktive Visualisierung des Diskursnetzwerks rund um digitalen Kapitalismus — Autor\*innen, Werke, Zitationsbeziehungen und ideologische Nähe, live generiert aus der [Discourse-Mapping-Datenbank](https://github.com/MarcusGraetsch/digital-capitalism-research).

<iframe
    src="/graph/discourse-dashboard.html"
    width="100%"
    height="850px"
    frameborder="0"
    style="border: 1px solid #333; border-radius: 4px; background: #f5f5f5;"
>
</iframe>

**Legende:** <span style="color: #3498db;">● Scholar</span> | <span style="color: #e67e22;">● Journalist</span> | <span style="color: #27ae60;">● Activist</span> | <span style="color: #e74c3c;">● Executive</span> | <span style="color: #9b59b6;">◆ Konzept</span>

**Bedienung:**
- Mausrad zum Zoomen, Drag zum Verschieben
- Knoten ziehen zum Neuanordnen, Doppelklick zum Lösen
- Hover hebt Nachbarknoten hervor
- Klick auf Person zeigt Detailpanel (h-index, Werke, Diskurskanten)
- Filter nach Rolle, Kantentypen ein-/ausblenden, Konzept-Overlay aktivieren
- Tabs unten: Autorentabelle, Werke, Zitationsfluss (sortierbar)

**Kantentypen:**
- **Co-Authorship** (durchgezogen): Gemeinsame Werke
- **Co-Citation** (gepunktet): Zusammen zitiert in gleicher Quelle
- **Agreement** (grün, Pfeil): Zustimmung / Erweiterung
- **Critique** (rot, gestrichelt): Kritik

**Datenquelle:** Generiert aus `literature.db` mit Daten aus drei Pipelines (Literatur, News, Podcasts). Zitationsmetriken (h-index, cited-by) von OpenAlex.

---

[← Zurück zur Forschungsübersicht](/forschung/)
