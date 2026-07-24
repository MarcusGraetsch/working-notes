// Ostsee-Tour 2026 — Leaflet Karte App
(function () {
  'use strict';

  const DATA = window.OSTSEE_DATA;
  if (!DATA) { console.error('Daten nicht geladen!'); return; }

  // ===== MAP SETUP =====
  const map = L.map('map', {
    center: [53.9, 13.0],
    zoom: 7,
    zoomControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(map);

  // ===== MARKER CLUSTER =====
  const markers = L.markerClusterGroup({
    showCoverageOnHover: false,
    maxClusterRadius: 40,
    spiderfyOnMaxZoom: true
  });

  // ===== COLORS =====
  const FARBEN = {};
  DATA.regionen.forEach(r => { FARBEN[r.id] = r.farbe; });

  const TYP_COLORS = {
    camping:        '#e67e22',
    wohnmobil:      '#d35400',
    natur:          '#27ae60',
    museum:         '#8e44ad',
    stadt:          '#f39c12',
    historie:       '#c0392b',
   sehenswuerdigkeit: '#3498db'
  };

  function getMarkerColor(typ) {
    if (typ === 'camping' || typ === 'woMo_stellplatz' || typ === 'camping_kette') return TYP_COLORS.camping;
    return TYP_COLORS[typ] || TYP_COLORS.stadt;
  }

  // ===== CAMPING MARKERS (orange) =====
  DATA.campingplaetze.forEach(p => {
    const color = '#e67e22';
    const icon = createIcon(color);

    const eigStr = (p.eigenschaften || []).join(' · ');
    const popup = `
      <h3>🏕️ ${p.name}</h3>
      <span class="popup-badge camping">Camping</span>
      <span class="popup-badge" style="background:#fdebd0;color:#c0392b">${DATA.regionen.find(r=>r.id===p.region)?.name || p.region}</span>
      ${p.beschreibung ? `<p>${p.beschreibung}</p>` : ''}
      ${eigStr ? `<p style="font-size:.72rem;color:#666;margin-top:4px">${eigStr}</p>` : ''}
      ${p.url ? `<a class="popup-url" href="${p.url}" target="_blank" rel="noopener">↗ Webseite</a>` : ''}
    `;

    const m = L.marker([p.lat, p.lng], { icon })
      .bindPopup(popup, { maxWidth: 280 })
      .bindTooltip(p.name, { direction: 'top', offset: [0, -20] });

    m.featureId = p.id;
    m.featureType = 'camping';
    m.featureRegion = p.region;
    markers.addLayer(m);
  });

  // ===== SIGHT MARKERS (blue) =====
  DATA.sehenswuerdigkeiten.forEach(s => {
    const color = getMarkerColor(s.typ);
    const icon = createIcon(color);

    const popup = `
      <h3>🏛️ ${s.name}</h3>
      <span class="popup-badge ${s.typ}">${typLabel(s.typ)}</span>
      <span class="popup-badge" style="background:#fdebd0;color:#c0392b">${DATA.regionen.find(r=>r.id===s.region)?.name || s.region}</span>
      ${s.highlight ? `<div class="popup-highlight">★ ${s.highlight}</div>` : ''}
      ${s.beschreibung ? `<p>${s.beschreibung}</p>` : ''}
      ${s.url ? `<a class="popup-url" href="${s.url}" target="_blank" rel="noopener">↗ Webseite</a>` : ''}
    `;

    const m = L.marker([s.lat, s.lng], { icon })
      .bindPopup(popup, { maxWidth: 280 })
      .bindTooltip(s.name, { direction: 'top', offset: [0, -20] });

    m.featureId = s.id;
    m.featureType = 'sehenswuerdigkeit';
    m.featureRegion = s.region;
    markers.addLayer(m);
  });

  map.addLayer(markers);

  // ===== ROUTE LINE =====
  const routeLine = L.polyline(DATA.route.punkte, {
    color:       DATA.route.farbe,
    weight:      3,
    opacity:     0.75,
    dashArray:   '8,8',
    lineCap:     'round',
    lineJoin:    'round'
  });

  // ===== ICON FACTORY =====
  function createIcon(color) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
      <path d="M14 0C6.27 0 0 6.27 0 14c0 9.42 14 22 14 22S28 23.42 28 14C28 6.27 21.73 0 14 0z"
        fill="${color}" stroke="white" stroke-width="1.5"/>
      <circle cx="14" cy="14" r="5" fill="white"/>
    </svg>`;
    return L.divIcon({
      html: svg,
      className: 'custom-marker',
      iconSize: [28, 36],
      iconAnchor: [14, 36],
      popupAnchor: [0, -38]
    });
  }

  function typLabel(typ) {
    const map = {
      natur: 'Natur',
      museum: 'Museum',
      stadt: 'Stadt',
      historie: 'Geschichte',
      camping: 'Camping'
    };
    return map[typ] || typ;
  }

  // ===== FILTER ENGINE =====
  let activeRegion = 'all';
  let activeType   = 'all';

  function applyFilter() {
    let count = 0;
    markers.eachLayer(layer => {
      const rOk = (activeRegion === 'all' || layer.featureRegion === activeRegion);
      const tOk = (activeType   === 'all' || layer.featureType  === activeType);
      if (rOk && tOk) { markers.showLayer(layer); count++; }
      else             { markers.hideLayer(layer); }
    });

    // Route line
    if (activeRegion === 'all' || activeRegion === 'brandenburg' || activeRegion === 'seenplatte' || activeRegion === 'holstein' || activeRegion === 'polnische-ostsee') {
      if (!map.hasLayer(routeLine)) routeLine.addTo(map);
    } else {
      if (map.hasLayer(routeLine)) map.removeLayer(routeLine);
    }

    updateList(count);
    updateTitle();
  }

  function updateTitle() {
    const r = DATA.regionen.find(r => r.id === activeRegion);
    document.getElementById('list-title').textContent = r ? r.name : 'Alle Orte';
  }

  function updateList(count) {
    document.getElementById('list-count').textContent = count;
  }

  // ===== BUILD LIST =====
  function buildList() {
    const ul = document.getElementById('place-list');
    ul.innerHTML = '';

    const camping   = DATA.campingplaetze.map(c => ({ ...c, _type: 'camping' }));
    const sights    = DATA.sehenswuerdigkeiten.map(s => ({ ...s, _type: 'sehenswuerdigkeit' }));
    const all       = [...camping, ...sights];

    const filtered = all.filter(item => {
      const rOk = (activeRegion === 'all' || item.region === activeRegion);
      const tOk = (activeType === 'all' || item._type === activeType);
      return rOk && tOk;
    });

    filtered.forEach(item => {
      const reg = DATA.regionen.find(r => r.id === item.region);
      const li  = document.createElement('li');

      const color = item._type === 'camping' ? '#e67e22' : '#3498db';
      const typeLabel = item._type === 'camping' ? 'Camping' : (typLabel(item.typ) || 'Sight');

      li.innerHTML = `
        <span class="dot ${item._type}" style="background:${color}"></span>
        <div class="place-info">
          <span class="place-name">${item.name}</span>
          <span class="place-region">${reg?.name || item.region}</span>
        </div>
        <span class="place-type">${typeLabel}</span>
      `;

      li.addEventListener('click', () => {
        map.setView([item.lat, item.lng], 13);
        markers.eachLayer(layer => {
          if (layer.featureId === item.id) {
            layer.openPopup();
          }
        });
      });

      ul.appendChild(li);
    });

    updateList(filtered.length);
  }

  // ===== EVENT LISTENERS =====
  document.querySelectorAll('.region-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeRegion = btn.dataset.region;

      // Zoom to region center
      if (activeRegion !== 'all') {
        const reg = DATA.regionen.find(r => r.id === activeRegion);
        if (reg) map.setView(reg.zentrum, reg.zoom || 10);
      } else {
        map.setView([53.9, 13.0], 7);
      }

      applyFilter();
      buildList();
    });
  });

  document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeType = btn.dataset.type;
      applyFilter();
      buildList();
    });
  });

  // ===== INIT =====
  buildList();
  updateList(markers.getLayers().length);

})();
