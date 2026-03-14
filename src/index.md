---
layout: base.njk
title: marcus-cyborg
---

{% for movie in asciiMovies %}{% if movie.current %}{% include movie.file %}{% endif %}{% endfor %}

<div class="info-box">
  <a href="/ascii-art"><span class="nav-key">[▶]</span> ASCII ART ARCHIVE</a>
</div>

{% for m in motd %}{% if m.current %}<div class="terminal-intro">
<span class="sys">COLLECTIVE-SELF SYSTEM v{{ m.version }}</span>
<span class="sys">{{ m.connection }}</span>
<span class="sys">────────────────────────────────────</span>
<span class="prompt">login:</span> <span class="output">marcus+rook</span>
<span class="prompt">auth:</span>  <span class="output">████████████</span>
<span class="sys">────────────────────────────────────</span>
{% include m.file %}<span class="sys">────────────────────────────────────</span>
<span class="prompt">▶</span> <span class="output">{{ m.command }}</span>
</div>{% endif %}{% endfor %}
<div class="info-box">
  <a href="/changelog"><span class="nav-key">[▶]</span> CHANGELOG</a>
</div>

{% for m in motd %}{% if m.current %}
<p class="meta">last system update: {{ m.date }}</p>
{% endif %}{% endfor %}
<p class="meta">local time: <span id="berlin-clock">--:--:--</span> ── CET/CEST ── Berlin, Germany</p>

<script>
(function() {
  var el = document.getElementById('berlin-clock');
  function tick() {
    el.textContent = new Date().toLocaleTimeString('de-DE', {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
  tick();
  setInterval(tick, 1000);
})();
</script>

<hr class="section-divider">

<div class="section-title">
  <h2>Research Status</h2>
</div>

<div class="terminal-box" id="research-terminal">
<span class="terminal-box-title">RESEARCH PIPELINE ── live</span>
<pre id="research-output" style="background: none; border: none; padding: 0; margin: 0; min-height: 12em;"><span class="sys">connecting to ontology database...</span></pre>
</div>

<div class="info-box">
  <a href="/forschung"><span class="nav-key">[▶]</span> FORSCHUNG</a>
</div>

<script>
(function() {
  var el = document.getElementById('research-output');
  var lines = [];
  var lineIdx = 0;
  var charIdx = 0;
  var typing = false;
  var delay = 25;

  fetch('/graph/stats-data.json')
    .then(function(r) { return r.json(); })
    .then(function(data) {
      var ov = data.overview;
      var top3 = data.conceptCoverage.slice(0, 5);
      var topPub = data.topPublications.slice(0, 5);
      var gen = new Date(data.generated);
      var dateStr = gen.toLocaleDateString('de-DE');

      lines = [
        { text: '$ research-status --live', cls: 'prompt' },
        { text: '', cls: '' },
        { text: 'DIGITAL CAPITALISM RESEARCH', cls: 'bright' },
        { text: 'Stand: ' + dateStr, cls: 'sys' },
        { text: '────────────────────────────────', cls: 'sys' },
        { text: '', cls: '' },
        { text: 'Artikel gesammelt .... ' + ov.totalArticles.toLocaleString('de-DE'), cls: 'stat' },
        { text: 'Quellen aktiv ........ ' + ov.totalSources, cls: 'stat' },
        { text: 'Konzepte kartiert .... ' + data.conceptCoverage.length, cls: 'stat' },
        { text: 'Kategorien ........... ' + data.categories.length, cls: 'stat' },
        { text: 'Schnitt Woerter ...... ' + ov.avgWordCount.toLocaleString('de-DE'), cls: 'stat' },
        { text: '', cls: '' },
        { text: 'TOP KONZEPTE:', cls: 'bright' },
      ];

      var maxBar = 20;
      var maxCount = top3[0] ? top3[0].count : 1;
      top3.forEach(function(c) {
        var barLen = Math.max(1, Math.round((c.count / maxCount) * maxBar));
        var bar = '';
        for (var i = 0; i < barLen; i++) bar += '█';
        for (var i = barLen; i < maxBar; i++) bar += '░';
        var name = c.name;
        while (name.length < 24) name += ' ';
        lines.push({ text: '  ' + name + bar + ' ' + c.count, cls: 'bar' });
      });

      lines.push({ text: '', cls: '' });
      lines.push({ text: 'TOP QUELLEN:', cls: 'bright' });
      topPub.forEach(function(p, i) {
        var name = p.name;
        while (name.length < 28) name += '.';
        lines.push({ text: '  ' + name + ' ' + p.count, cls: 'stat' });
      });

      lines.push({ text: '', cls: '' });
      lines.push({ text: '[pipeline active] █', cls: 'cursor-line' });

      el.innerHTML = '';
      typing = true;
      typeLine();
    })
    .catch(function() {
      el.innerHTML = '<span style="color: var(--red);">ERR: ontology database unreachable</span>';
    });

  function typeLine() {
    if (lineIdx >= lines.length) return;

    var line = lines[lineIdx];
    if (line.text === '') {
      el.innerHTML += '\n';
      lineIdx++;
      setTimeout(typeLine, 80);
      return;
    }

    if (charIdx === 0) {
      var span = document.createElement('span');
      span.id = 'typing-line';
      if (line.cls === 'prompt') {
        span.style.color = 'var(--amber)';
      } else if (line.cls === 'bright') {
        span.style.color = 'var(--green-bright)';
        span.style.textShadow = '0 0 8px rgba(0, 255, 65, 0.6)';
      } else if (line.cls === 'sys') {
        span.style.color = 'var(--green-dark)';
      } else if (line.cls === 'bar') {
        span.style.color = 'var(--green)';
      } else if (line.cls === 'cursor-line') {
        span.style.color = 'var(--green-dim)';
      } else {
        span.style.color = 'var(--green)';
      }
      el.appendChild(span);
    }

    var span = document.getElementById('typing-line');
    if (charIdx < line.text.length) {
      span.textContent += line.text[charIdx];
      charIdx++;
      var d = line.cls === 'prompt' ? 40 : delay;
      // Speed through dots
      if (line.text[charIdx - 1] === '.' || line.text[charIdx - 1] === '░') d = 8;
      setTimeout(typeLine, d);
    } else {
      span.removeAttribute('id');
      el.innerHTML += '\n';
      charIdx = 0;
      lineIdx++;
      var pause = line.cls === 'prompt' ? 400 : line.cls === 'bright' ? 200 : 60;
      setTimeout(typeLine, pause);
    }
  }
})();
</script>

<hr class="section-divider">

<div class="section-title">
  <h2>Manifesto</h2>
</div>

<div class="entry-content">

{% for m in manifestos %}{% if m.current %}{% include m.file %}{% endif %}{% endfor %}

</div>

<div class="info-box">
  <a href="/manifestos"><span class="nav-key">[▶]</span> ALL MANIFESTOS</a>
</div>

<div class="info-box-grid">
  <div class="info-box">
    <a href="/writing"><span class="nav-key">[A]</span> WRITING ── Essays and analysis</a>
  </div>
  <div class="info-box">
    <a href="/colophon"><span class="nav-key">[B]</span> COLOPHON ── How this is built</a>
  </div>
</div>

<hr class="section-divider">

<div class="section-title">
  <h2>Latest Post</h2>
</div>

{% set latest = collections.posts[0] %}
{% if latest %}
<div class="bbs-listing">
  <a href="{{ latest.url }}" class="bbs-entry">
    <span class="entry-id">[001]</span>
    <span class="entry-title">{{ latest.data.title }}</span>
    <span class="entry-dots"> .......... </span>
    <span class="entry-date">{{ latest.date | dateDisplay }}</span>
  </a>
</div>

<div class="entry-content">

{{ latest.data.excerpt }}

</div>

<div class="info-box">
  <a href="{{ latest.url }}"><span class="nav-key">[▶]</span> READ FULL POST</a>
</div>
{% endif %}

<hr class="section-divider">

{% for e in epigraphs %}{% if e.current %}
> "{{ e.quote }}" — {{ e.author }}
{% endif %}{% endfor %}

<div class="info-box">
  <a href="/epigraphs"><span class="nav-key">[▶]</span> ALL EPIGRAPHS</a>
</div>

<hr class="section-divider">

<div class="section-title">
  <h2>Directive to the Agent</h2>
</div>

{% for d in directives %}{% if d.current %}
<div class="terminal-box">
<span class="terminal-box-title">DIRECTIVE #{{ d.id }} ── {{ d.date }}</span>

{{ d.preamble }}

<span class="prompt">marcus@collective-self:~▶</span>

{% include d.file %}
<span class="prompt">EOF</span>

</div>
{% endif %}{% endfor %}

<div class="info-box">
  <a href="/directives"><span class="nav-key">[▶]</span> ALL DIRECTIVES</a>
</div>
