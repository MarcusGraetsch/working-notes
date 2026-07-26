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
    stellplatz:     '#d35400',
    badespot:       '#16a085',
    festival:       '#d946ef',
    natur:          '#27ae60',
    museum:         '#8e44ad',
    stadt:          '#f39c12',
    historie:       '#c0392b',
    kultur:         '#8e44ad',
    sehenswuerdigkeit: '#3498db'
  };

  function getMarkerColor(typ) {
    if (typ === 'camping' || typ === 'woMo_stellplatz' || typ === 'camping_kette') return TYP_COLORS.camping;
    return TYP_COLORS[typ] || TYP_COLORS.stadt;
  }

  const TYPE_CONFIG = [
    { key: 'campingplaetze',       type: 'camping',            icon: '🏕️', label: 'Camping' },
    { key: 'stellplaetze',         type: 'stellplatz',          icon: '🚐', label: 'Stellplatz' },
    { key: 'badespots',            type: 'badespot',            icon: '🏊', label: 'Badespot' },
    { key: 'sehenswuerdigkeiten',  type: 'sehenswuerdigkeit',  icon: '🏛️', label: 'Sight' },
    { key: 'festivals',            type: 'festival',            icon: '🎵', label: 'Festival' }
  ];

  function addMarker(item, config) {
    const subtype = config.type === 'sehenswuerdigkeit' ? item.typ : config.type;
    const color = getMarkerColor(subtype);
    const region = DATA.regionen.find(r => r.id === item.region);
    const properties = (item.eigenschaften || []).join(' · ');
    const popup = `
      <h3>${config.icon} ${item.name}</h3>
      <span class="popup-badge ${subtype}">${config.type === 'sehenswuerdigkeit' ? typLabel(item.typ) : config.label}</span>
      <span class="popup-badge region">${region?.name || item.region}</span>
      ${item.highlight ? `<div class="popup-highlight">★ ${item.highlight}</div>` : ''}
      ${item.beschreibung ? `<p>${item.beschreibung}</p>` : ''}
      ${properties ? `<p class="popup-properties">${properties}</p>` : ''}
      ${item.url ? `<a class="popup-url" href="${item.url}" target="_blank" rel="noopener">↗ Webseite</a>` : ''}
    `;

    const marker = L.marker([item.lat, item.lng], { icon: createIcon(color) })
      .bindPopup(popup, { maxWidth: 280 })
      .bindTooltip(item.name, { direction: 'top', offset: [0, -20] });

    marker.featureId = item.id;
    marker.featureType = config.type;
    marker.featureRegion = item.region;
    markers.addLayer(marker);
  }

  TYPE_CONFIG.forEach(config => {
    (DATA[config.key] || []).forEach(item => addMarker(item, config));
  });

  map.addLayer(markers);

  // ===== ROUTE LINE =====
  const routeLine = L.polyline(DATA.route.punkte, {
    color:       DATA.route.farbe,
    weight:      4,
    opacity:     0.85,
    dashArray:   '8,8',
    lineCap:     'round',
    lineJoin:    'round'
  }).addTo(map);

  // ===== ROUTE POPUP (Klick auf Linie = Etappen-Info) =====
  routeLine.bindTooltip('🚐 Route 28.07.-23.08.2026 (Bremen → Berlin)', {
    sticky: true,
    direction: 'auto',
    className: 'route-tooltip'
  });

  map.fitBounds(routeLine.getBounds(), { padding: [24, 24] });

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
      kultur: 'Kultur',
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

    const all = TYPE_CONFIG.flatMap(config =>
      (DATA[config.key] || []).map(item => ({ ...item, _type: config.type, _config: config }))
    );

    const filtered = all.filter(item => {
      const rOk = (activeRegion === 'all' || item.region === activeRegion);
      const tOk = (activeType === 'all' || item._type === activeType);
      return rOk && tOk;
    });

    filtered.forEach(item => {
      const reg = DATA.regionen.find(r => r.id === item.region);
      const li  = document.createElement('li');

      const subtype = item._type === 'sehenswuerdigkeit' ? item.typ : item._type;
      const color = getMarkerColor(subtype);
      const typeLabel = item._type === 'sehenswuerdigkeit' ? typLabel(item.typ) : item._config.label;

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
        map.fitBounds(routeLine.getBounds(), { padding: [24, 24] });
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
