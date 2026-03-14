---
title: Forschungsstatistik
layout: base.njk
date: 2026-03-14
---

# Forschungsstatistik

Live-Statistiken aus dem [Digital Capitalism Research](https://github.com/MarcusGraetsch/digital-capitalism-research) Projekt.

<div id="stats-loading" style="color: #999; font-style: italic;">Lade Daten...</div>

<div id="stats-content" style="display: none;">

<div id="overview-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin: 24px 0;"></div>

---

## Thematische Zuordnung

Artikel pro Forschungskonzept (automatisch via Tag/Keyword-Matching):

<canvas id="chart-concepts" height="300"></canvas>

---

## Quellen-Tags

Verteilung der Tags aus den Newsletter-Quellen:

<canvas id="chart-tags" height="250"></canvas>

---

## Kategorien

Thematische Kategorisierung der Artikel:

<canvas id="chart-categories" height="300"></canvas>

---

## Top-Publikationen

Die 15 häufigsten Quellen:

<canvas id="chart-publications" height="350"></canvas>

---

## Textlänge

Verteilung der Artikellänge (Wörter):

<canvas id="chart-wordcount" height="250"></canvas>

---

<p id="stats-footer" style="color: #666; font-size: 0.85em;"></p>

</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"></script>
<script>
(function() {
  const COLORS = {
    red: '#e74c3c',
    green: '#2ecc71',
    blue: '#3498db',
    purple: '#9b59b6',
    orange: '#e67e22',
    teal: '#1abc9c',
    yellow: '#f1c40f',
    pink: '#e84393',
    grey: '#95a5a6',
    dark: '#2c3e50',
  };
  const PALETTE = [COLORS.red, COLORS.blue, COLORS.green, COLORS.orange, COLORS.purple, COLORS.teal, COLORS.pink, COLORS.yellow, COLORS.grey, COLORS.dark];

  Chart.defaults.color = '#ccc';
  Chart.defaults.borderColor = 'rgba(255,255,255,0.1)';
  Chart.defaults.font.family = 'monospace';

  fetch('/graph/stats-data.json')
    .then(r => r.json())
    .then(render)
    .catch(err => {
      document.getElementById('stats-loading').textContent = 'Fehler: ' + err.message;
    });

  function render(data) {
    document.getElementById('stats-loading').style.display = 'none';
    document.getElementById('stats-content').style.display = 'block';

    // Overview cards
    var ov = data.overview;
    var cards = [
      { label: 'Artikel', value: ov.totalArticles.toLocaleString('de-DE') },
      { label: 'Quellen', value: ov.totalSources },
      { label: 'Kategorien', value: data.categories.length },
      { label: 'Konzepte', value: data.conceptCoverage.length },
      { label: 'Schnitt Wörter', value: ov.avgWordCount.toLocaleString('de-DE') },
      { label: 'Max Wörter', value: ov.maxWordCount.toLocaleString('de-DE') },
    ];
    var cardsHtml = '';
    cards.forEach(function(c) {
      cardsHtml += '<div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 16px; text-align: center;">'
        + '<div style="font-size: 1.8em; font-weight: bold; color: ' + COLORS.green + ';">' + c.value + '</div>'
        + '<div style="font-size: 0.85em; color: #999; margin-top: 4px;">' + c.label + '</div>'
        + '</div>';
    });
    document.getElementById('overview-cards').innerHTML = cardsHtml;

    // Concept coverage chart
    var concepts = data.conceptCoverage.filter(function(c) { return c.count > 0; });
    new Chart(document.getElementById('chart-concepts'), {
      type: 'bar',
      data: {
        labels: concepts.map(function(c) { return c.name; }),
        datasets: [{
          label: 'Artikel',
          data: concepts.map(function(c) { return c.count; }),
          backgroundColor: COLORS.red,
          borderRadius: 3,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { beginAtZero: true } }
      }
    });

    // Tags chart
    new Chart(document.getElementById('chart-tags'), {
      type: 'doughnut',
      data: {
        labels: data.tagFrequency.map(function(t) { return t.tag + ' (' + t.count + ')'; }),
        datasets: [{
          data: data.tagFrequency.map(function(t) { return t.count; }),
          backgroundColor: PALETTE.slice(0, data.tagFrequency.length),
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'right' } }
      }
    });

    // Categories chart
    var cats = data.categories.sort(function(a, b) { return b.count - a.count; });
    new Chart(document.getElementById('chart-categories'), {
      type: 'bar',
      data: {
        labels: cats.map(function(c) { return c.name; }),
        datasets: [{
          label: 'Artikel',
          data: cats.map(function(c) { return c.count; }),
          backgroundColor: COLORS.blue,
          borderRadius: 3,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { beginAtZero: true } }
      }
    });

    // Top publications chart
    var pubs = data.topPublications.slice(0, 15);
    new Chart(document.getElementById('chart-publications'), {
      type: 'bar',
      data: {
        labels: pubs.map(function(p) { return p.name; }),
        datasets: [{
          label: 'Artikel',
          data: pubs.map(function(p) { return p.count; }),
          backgroundColor: COLORS.teal,
          borderRadius: 3,
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { beginAtZero: true } }
      }
    });

    // Word count distribution
    new Chart(document.getElementById('chart-wordcount'), {
      type: 'bar',
      data: {
        labels: data.wordCountDistribution.map(function(b) { return b.label; }),
        datasets: [{
          label: 'Artikel',
          data: data.wordCountDistribution.map(function(b) { return b.count; }),
          backgroundColor: COLORS.purple,
          borderRadius: 3,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });

    // Footer
    var gen = new Date(data.generated);
    document.getElementById('stats-footer').textContent =
      'Daten generiert am ' + gen.toLocaleDateString('de-DE') + ' aus '
      + ov.totalArticles + ' Artikeln. Quelle: github.com/MarcusGraetsch/digital-capitalism-research';
  }
})();
</script>

---

[← Zurück zur Forschungsübersicht](/forschung/)
