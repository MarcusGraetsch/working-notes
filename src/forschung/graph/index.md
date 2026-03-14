---
title: Knowledge Graph
layout: base.njk
date: 2026-03-14
---

# Knowledge Graph

Interaktive Visualisierung unserer Forschungsontologie — live generiert aus den Daten des [Digital Capitalism Research](https://github.com/MarcusGraetsch/digital-capitalism-research) Projekts.

<iframe
    src="/graph/ontology-graph.html"
    width="100%"
    height="600px"
    frameborder="0"
    style="border: 1px solid #333; border-radius: 4px; background: #fafafa;"
>
</iframe>

**Legende:** <span style="color: #e74c3c;">● Konzepte</span> | <span style="color: #2ecc71;">● Research Tasks</span> | <span style="color: #3498db;">● Artikel (Auswahl)</span>

**Bedienung:**
- Mausrad zum Zoomen
- Drag & Drop zum Neuanordnen der Knoten
- Hover über Knoten für Details (Konzepte zeigen Artikelanzahl)
- Klick auf Artikel-Knoten öffnet den Originalartikel
- Filter-Buttons oben links

**Datenquelle:** Der Graph wird bei jedem Build aus der [Ontologie-Datenbank](https://github.com/MarcusGraetsch/digital-capitalism-research/blob/master/memory/ontology/graph.jsonl) generiert. Konzepte und Tasks sind manuell kuratiert, Artikel werden automatisch über Tag- und Keyword-Matching zugeordnet.

---

[← Zurück zur Forschungsübersicht](/forschung/)
