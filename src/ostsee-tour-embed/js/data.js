// Ostsee-Tour 2026 — Daten für die Karte
// Quelle: projekte/ostsee-tour-2026/daten/

window.OSTSEE_DATA = {

  regionen: [
    { id: "seenplatte",        name: "Mecklenburgische Seenplatte",               farbe: "#2e8b57", zentrum: [53.48, 12.55],  zoom: 9,  hinweis: "Über 1.000 Seen, Kanuregion Nr. 1 in Deutschland. Naturcamping direkt am Wasser." },
    { id: "ostsee-mv",         name: "Ostsee MV (Rügen, Usedom, Fischland-Darß)", farbe: "#1e6f9c", zentrum: [54.25, 13.4],  zoom: 9,  hinweis: "Drei Halbinseln – Kreidefelsen, Bäderarchitektur, Nationalpark." },
    { id: "polnische-ostsee",  name: "Polnische Ostsee (Świnoujście, Misdroy)",   farbe: "#dc143c", zentrum: [53.92, 14.35], zoom: 10, hinweis: "Günstig tanken, Polenmarkt, Wollin-Nationalpark. Hymer < 3,5 t → keine Maut auf Staatsstraßen!" },
    { id: "brandenburg",        name: "Brandenburg (Schwielowsee, Havel)",          farbe: "#8b4513", zentrum: [52.32, 13.2],  zoom: 10, hinweis: "Havelseen, DDR-Literatur (Brigitte Reimann!), Potsdam 10 Min., Berlin 40 Min." },
    { id: "holstein",           name: "Holsteinische Schweiz + Ostsee (Plön, Grömitz)", farbe: "#d2691e", zentrum: [54.16, 10.7], zoom: 10, hinweis: "200 Seen, 5-Seen-Fahrt, Grömitz-Ostseestrand. Nähe Hamburg/Lübeck." }
  ],

  campingplaetze: [
    // === Mecklenburgische Seenplatte ===
    { id: "naturcamping-malchow",    name: "Naturcamping Malchow",          region: "seenplatte", lat: 53.4758, lng: 12.4253, beschreibung: "Direkt am Ostufer des Plauer Sees, mitten in der Mecklenburgischen Seenplatte. Ideal zum Kanu fahren, Baden und Radfahren.", url: "https://www.naturcamping-malchow.de/",             eigenschaften: ["direkt am See", "Hund erlaubt", "Ruhige Lage"] },
    { id: "camping-alt-schwerin",    name: "Camping am See Alt Schwerin",    region: "seenplatte", lat: 53.5153, lng: 12.3525, beschreibung: "Familienfreundlich, Badebereich, Stellplätze für Wohnmobile direkt am Plauer See.",    url: "https://www.camping-alt-schwerin.de/",               eigenschaften: ["direkt am See", "Familien", "Badestrand"] },
    { id: "campingpark-zuruf",       name: "Campingpark Zuruf",              region: "seenplatte", lat: 53.4903, lng: 12.4125, beschreibung: "Großer Campingpark mit Finnhütten, Mietwohnwagen und Touristik-Stellplätzen am Plauer See.", url: "https://www.campingpark-zuruf.de/",                  eigenschaften: ["direkt am See", "Hütten", "Familien"] },
    { id: "campingplatz-leisten",    name: "Campingplatz Leisten",           region: "seenplatte", lat: 53.54,   lng: 12.35,   beschreibung: "Am Nordufer des Plauer Sees, naturbelassen, angrenzendes Naturschutzgebiet. Ideal für SUP.", url: "https://www.campingplatz-leisten.de/",               eigenschaften: ["direkt am See", "Naturschutz", "Paddeln"] },

    // === Rügen / Ostsee MV ===
    { id: "camping-prora",           name: "Camping Prora (Virgils)",        region: "ostsee-mv",  lat: 54.4386, lng: 13.5689, beschreibung: "Im Ostseebad Binz/Prora, 4,5 km vom NS-Koloss entfernt, naturbelassenes Wiesengelände.", url: "https://www.camping-prora-ruegen.de/",               eigenschaften: ["direkt am Meer", "Strand", "Historie"] },
    { id: "campingpark-ruegen",      name: "Campingpark Rügen (Bundeswehr)", region: "ostsee-mv",  lat: 54.4053, lng: 13.6042, beschreibung: "An der Prorer Wiek mit direktem Strandzugang, 2 km von Binz entfernt.",                       url: "https://www.bundeswehr-sozialwerk.de/...",          eigenschaften: ["direkt am Meer", "Strand", "Binz"] },
    { id: "wohnmobil-oase-ruegen",   name: "Wohnmobil-Oase Insel Rügen",    region: "ostsee-mv",  lat: 54.5039, lng: 13.6389, beschreibung: "Reiner Wohnmobil-Stellplatz im Naturschutzgebiet Kleiner Jasmunder Bodden. 165 Stellplätze, ganzjährig.", url: "https://www.wohnmobiloase-ruegen.de/",             eigenschaften: ["direkt am Wasser", "Naturschutz", "Ganzjährig"] },
    { id: "ostsee-camping-bansin",   name: "Ostsee-Camping Bansin",          region: "ostsee-mv",  lat: 53.9742, lng: 14.1417, beschreibung: "Über 130 Touristik-Stellplätze im Waldstück nahe dem Ostseestrand.",                        url: "https://ostsee-camping-bansin.de/",                  eigenschaften: ["direkt am Meer", "Wald", "Strand"] },
    { id: "mobilcamp-heringsdorf",   name: "Mobilcamp Heringsdorf",          region: "ostsee-mv",  lat: 53.9586, lng: 14.1692, beschreibung: "Kleiner, feiner Campingplatz. 72 parzellierte Stellplätze. 01.04.–31.10.",                 url: "https://www.mobilcamp-heringsdorf.de/",             eigenschaften: ["Strand", "Klein & fein", "Hund"] },
    { id: "caravan-ahlbeck",         name: "Caravanplatz Am Wiesenrand",      region: "ostsee-mv",  lat: 53.9358, lng: 14.1883, beschreibung: "Idyllisch zwischen Wald und Wiesen, 10 Min. Fußweg zum Ahlbecker Strand.",                   url: "https://www.caravan-camping-usedom.de/",            eigenschaften: ["Strand", "Wald", "Ruhig"] },

    // === Polnische Ostsee ===
    { id: "forest-camp-miedzyzdroje", name: "Forest Camp Międzyzdroje",      region: "polnische-ostsee", lat: 53.9283, lng: 14.4486, beschreibung: "Im Kiefernwald am Rand von Misdroy. WLAN, Restaurant, Kreditkarte.",                      url: "https://www.camping.de/polen/...",                  eigenschaften: ["Wald", "Restaurant", "Kreditkarte"] },
    { id: "camping-24-miedzyzdroje",  name: "Camping 24 Międzyzdroje",       region: "polnische-ostsee", lat: 53.9325, lng: 14.4483, beschreibung: "TripAdvisor-Tipp für Durchreise-Übernachtung auf dem Weg nach Kolberg.",               url: "https://www.tripadvisor.de/...",                     eigenschaften: ["Durchreise", "Günstig"] },
    { id: "camping-swinoujscie",       name: "Campingplätze Świnoujście",    region: "polnische-ostsee", lat: 53.91,   lng: 14.2472, beschreibung: "17 inspizierte Campingplätze in Świnoujście über ACSI-Vergleich.",                           url: "https://www.eurocampings.de/polen/westpommern/swinoujscie/", eigenschaften: ["Meer", "Hafen"] },

    // === Brandenburg ===
    { id: "camping-schwielowsee",     name: "Camping & Caravan am Schwielowsee", region: "brandenburg", lat: 52.3553, lng: 12.9517, beschreibung: "Am Schwielowsee, 10 Min. bis Potsdam, 40 Min. bis Berlin.",                              url: "https://campingportal.eu/...",                        eigenschaften: ["direkt am See", "Potsdam", "Berlin"] },
    { id: "berlin-potsdam-camping",   name: "Berlin-Potsdam-Camping (Schwielowsee)", region: "brandenburg", lat: 52.35, lng: 12.96, beschreibung: "Traumhafter Platz am Schwielowsee. Mobilheime zu mieten.",                                   url: "https://www.berlin-potsdam-camping.de/",            eigenschaften: ["direkt am See", "Potsdam"] },
    { id: "camping-schwarzhorn",       name: "Campingplatz Schwarzhorn",     region: "brandenburg", lat: 52.2867, lng: 14.0433, beschreibung: "Am Scharmützelsee/Storkower See, ganzjährig. Hunde erlaubt.",                          url: "https://www.camping.info/de/campingplatz/campingplatz-schwarzhorn", eigenschaften: ["direkt am See", "Ganzjährig", "Hund"] },
    { id: "womo-bad-saarow",           name: "Wohnmobilstellplatz Bad Saarow",region: "brandenburg", lat: 52.2883, lng: 14.0472, beschreibung: "~30 Stellplätze, teils Seeblick, idyllische Lage am Storkower See.",                     url: "https://www.bad-saarow.de/wohnmobilstellplaetze",  eigenschaften: ["direkt am See", "Seeblick"] },

    // === Holsteinische Schweiz ===
    { id: "campingpark-augstfelde",   name: "Campingpark Augstfelde (Plön)",  region: "holstein", lat: 54.1583, lng: 10.4183, beschreibung: "Direkt an der Plöner Seenplatte, traumhaft für Familien und Hundebesitzer.",              url: "https://www.augstfelde.de/",                         eigenschaften: ["direkt am See", "Familien", "Hund"] },
    { id: "naturcamping-prinzenholz",  name: "Naturcamping Prinzenholz (Plön)",region: "holstein", lat: 54.1517, lng: 10.4778, beschreibung: "Naturcamping am Plöner See, viel Ruhe.",                                                          url: "https://camping-schleswig-holstein.de/...",         eigenschaften: ["direkt am See", "Natur", "Ruhig"] },
    { id: "naturcamping-spitzenort",   name: "Naturcamping Spitzenort (Plön)",region: "holstein", lat: 54.155,  lng: 10.45,   beschreibung: "Von drei Seiten Wasser umgeben. Stellplätze für Zelte, Wohnmobile, Caravans.",                     url: "https://www.holsteinischeschweiz.de/...",           eigenschaften: ["direkt am See", "Natur"] },
    { id: "achtern-diek-groemitz",     name: "Wohnmobilpark Achtern Diek",    region: "holstein", lat: 54.1483, lng: 10.9764, beschreibung: "Gemeinnützig (Verein für Ferienkolonien seit 1904). Direkt am Grömitzer Ostseestrand.",      url: "https://www.womo-groemitz.de/",                     eigenschaften: ["direkt am Meer", "Strand", "Gemeinnützig"] }
  ],

  sehenswuerdigkeiten: [
    // === Mecklenburgische Seenplatte ===
    { id: "mueritz-nationalpark", name: "Müritz-Nationalpark",          region: "seenplatte", typ: "natur",    lat: 53.3317, lng: 12.7125, beschreibung: "Größter zusammenhängender Land-Nationalpark Deutschlands (322 km²). Seeadler, Fischadler, tausend Seen. UNESCO-Weltnaturerbe.", highlight: "UNESCO-Weltnaturerbe", url: "https://www.mueritz-nationalpark.de/" },
    { id: "mueritzeum",           name: "Müritzeum (Waren)",           region: "seenplatte", typ: "museum",   lat: 53.5156, lng: 12.6867, beschreibung: "Haus der 1000 Seen – interaktives Naturerlebnis mit riesigem Süßwasseraquarium.",             highlight: "Bestes Aquarium Norddeutschlands", url: "https://www.mueritzeum.de/" },
    { id: "waren-altstadt",        name: "Waren (Müritz) Altstadt",     region: "seenplatte", typ: "stadt",   lat: 53.5167, lng: 12.6833, beschreibung: "Historisches Hafenstädtchen mit Backsteingotik, Müritz-Therme, Hafenpromenade.",            highlight: "Backstein-Architektur, Hafen-Flair", url: "https://www.waren-tourismus.de/" },
    { id: "plau-am-see-altstadt",  name: "Plau am See Altstadt",        region: "seenplatte", typ: "stadt",   lat: 53.4583, lng: 12.2625, beschreibung: "Malerische Altstadt mit Fachwerk- und Backsteinhäusern. Sehr gutes Eis, kleine Läden.",    highlight: "Mecklenburg-Venedig", url: "https://www.plau-am-see.de/" },
    { id: "luftfahrtmuseum",       name: "Luftfahrttechnisches Museum", region: "seenplatte", typ: "museum",   lat: 53.3536, lng: 12.7297, beschreibung: "DDR-Verkehrsfliegerschule, Original-Flugzeuge. Geheimtipp für Technik-Fans.",                highlight: "DDR-Fluggeschichte", url: "https://www.luftfahrttechnisches-museum.de/" },

    // === Rügen ===
    { id: "koenigsstuhl",          name: "Königsstuhl & Kreidefelsen",   region: "ostsee-mv", typ: "natur",    lat: 54.5733, lng: 13.6622, beschreibung: "Wahrzeichen Rügens – 117 m hohe Kreidefelsen direkt an der Ostsee. Nationalpark Jasmund.", highlight: "Deutschlands bekannteste Steilküste", url: "https://www.nationalpark-jasmund.de/" },
    { id: "kap-arkona",            name: "Kap Arkona",                   region: "ostsee-mv", typ: "natur",    lat: 54.6764, lng: 13.4364, beschreibung: "Nördlichster Punkt Rügens. Zwei Leuchttürme (35 m), Schinkel-Turm, slawische Jaromarsburg.", highlight: "Leuchtturm-Blick 40 km weit", url: "https://www.kap-arkona.de/" },
    { id: "prora-kdf",             name: "Prora – KDF-Koloss",           region: "ostsee-mv", typ: "historie", lat: 54.4367, lng: 13.5689, beschreibung: "4,5 km lange NS-Urlaubsanlage (1936–39). Heute Dokumentationszentrum + Jugendherberge.",  highlight: "Größtes NS-Baudenkmal", url: "https://www.prora-zentrum.de/" },
    { id: "binz-seebruecke",       name: "Binz Seebrücke & Strand",      region: "ostsee-mv", typ: "stadt",   lat: 54.4053, lng: 13.6139, beschreibung: "Bäderarchitektur-Hauptort. 370 m Seebrücke, feiner Sandstrand, Villenviertel.",            highlight: "Klassische Bäderarchitektur", url: "https://www.ostseebad-binz.de/" },
    { id: "sassnitz-hafen",        name: "Sassnitz Hafen & Kreidemuseum", region: "ostsee-mv", typ: "stadt",   lat: 54.5156, lng: 13.6417, beschreibung: "Schiffsausflüge zu Kreidefelsen, Kreidemuseum Gummanz, Stadtführung.",                        highlight: "Adler-Schiffe ab Sassnitz", url: "https://www.sassnitz.de/" },
    { id: "kaiserbaeder-usedom",   name: "Kaiserbäder (Ahlbeck–Heringsdorf–Bansin)", region: "ostsee-mv", typ: "stadt", lat: 53.955, lng: 14.166, beschreibung: "Bäderarchitektur-Freilichtmuseum. 8 km zusammenhängende Strandpromenade.",                       highlight: "8 km Promenade, drei Kaiserbäder", url: "https://www.kaiserbaeder.de/" },
    { id: "peenemuende-htm",       name: "Historisch-Technisches Museum Peenemünde", region: "ostsee-mv", typ: "museum", lat: 54.135, lng: 13.78, beschreibung: "Wo Wernher von Braun die V2-Rakete entwickelte. Gedenkstätte + NS-Rüstungsmuseum.",       highlight: "Geburtsort der Raumfahrt", url: "https://www.peenemuende.de/" },
    { id: "ahrenshoop",            name: "Ahrenshoop (Künstlerort)",      region: "ostsee-mv", typ: "stadt",   lat: 54.3833, lng: 12.4167, beschreibung: "Künstlerdorf mit Steilküste, Seemannskirche, Ahrenshooper Holz. Malkurse, Galerien.",          highlight: "Deutschsprachiges Skagen", url: "https://www.fischland-darss-zingst.de/..." },
    { id: "prerow-natureum",       name: "Prerow – Darßer Ort & NATUREUM",region: "ostsee-mv", typ: "natur",  lat: 54.49,   lng: 12.5283, beschreibung: "Leuchtturm Darßer Ort + Meeresmuseum-Nebenstelle. Weststrand, Urwald 4.700 ha.",               highlight: "Urwald 4.700 ha", url: "https://www.deutsches-meeresmuseum.de/museumsstandorte/natureum/" },
    { id: "nationalpark-bodden",   name: "Nationalpark Vorpommersche Boddenlandschaft", region: "ostsee-mv", typ: "natur", lat: 54.4, lng: 12.5, beschreibung: "Größter Nationalpark an Deutschlands Ostseeküste. Bodden-Lagunen, wilde Strände, Wanderdünen.", highlight: "Wanderdünen, Kranichrast", url: "https://www.nationalpark-vorpommersche-boddenlandschaft.de/" },

    // === Polnische Ostsee ===
    { id: "miedzyzdroje-pier",     name: "Międzyzdroje (Misdroy) Pier",  region: "polnische-ostsee", typ: "stadt", lat: 53.9289, lng: 14.45,   beschreibung: "Ältester Seebrücken-Pier Polens (1880). 395 m lang. Walk of Fame mit Promi-Handabdrücken.",     highlight: "Walk of Stars polnischer Stars", url: "https://www.miedzyzdroje.pl/" },
    { id: "oceanarium-misdroy",    name: "Oceanarium Międzyzdroje",      region: "polnische-ostsee", typ: "museum", lat: 53.9286, lng: 14.4517, beschreibung: "Großes Meeresaquarium mit Hai-Tunnel, live Haifütterungen.",                                   highlight: "Haifütterung live", url: "https://www.oceanarium.pl/" },
    { id: "miniaturpark-misdroy",  name: "Baltischer Miniaturpark",      region: "polnische-ostsee", typ: "museum", lat: 53.929, lng: 14.453,   beschreibung: "Miniatur-Nachbauten bekannter Ostsee-Bauwerke und -Schiffe.",                                   highlight: "Modellbau-Ostsee", url: "https://www.miniaturpark.eu/" },
    { id: "wolin-nationalpark",    name: "Nationalpark Wolin",           region: "polnische-ostsee", typ: "natur",  lat: 53.89, lng: 14.475,   beschreibung: "109 km² auf der Insel Wolin. Steilküste, Wisentgehege, Weißstörche.",                            highlight: "Wisente im Freigehege", url: "https://www.wolinpn.pl/" },
    { id: "swinoujscie-altstadt",  name: "Świnoujście (Swinemünde) Altstadt", region: "polnische-ostsee", typ: "stadt", lat: 53.91, lng: 14.2472, beschreibung: "Echte Altstadt links der Swine. Leuchtturm 65 m (höchster Polens), Festung Engelsburg, Kurpark.", highlight: "Leuchtturm 65 m – höchster Polens", url: "https://www.swinoujscie.pl/" },
    { id: "park-zdrojowy",         name: "Park Zdrojowy (Świnoujście)",  region: "polnische-ostsee", typ: "natur",  lat: 53.9092, lng: 14.2467, beschreibung: "Historisches Kurviertel aus preußischer Zeit, gepflegter Park mit Konzertmuschel.",            highlight: "Gründerzeit-Kurviertel", url: "https://www.swinoujscie.pl/" },

    // === Brandenburg ===
    { id: "schwielowsee",          name: "Schwielowsee",                 region: "brandenburg", typ: "natur",   lat: 52.3414, lng: 12.9592, beschreibung: "Großer See bei Potsdam, Caputh, Ferch. Wanderungen, Badestellen, kleine Häfen.",                highlight: "Havelseen-Kette", url: "https://www.schwielowsee.de/" },
    { id: "werder-havel",          name: "Werder (Havel) Altstadt",      region: "brandenburg", typ: "stadt",   lat: 52.3786, lng: 12.9356, beschreibung: "Historisches Städtchen auf der Insel im Havelsee. Bekannt für Baumblütenfest (Mai).",            highlight: "Baumblütenfest", url: "https://www.werder-havel.de/" },
    { id: "bad-saarow",            name: "Bad Saarow",                   region: "brandenburg", typ: "stadt",   lat: 52.2872, lng: 14.0331, beschreibung: "Kurort am Scharmützelsee. Schlosspark, Therme, traditionsreiche Hotels.",                       highlight: "Scharmützelsee-Ostufer", url: "https://www.bad-saarow.de/" },
    { id: "brigitte-reimann",      name: "Brigitte-Reimann-Haus (Burg)", region: "brandenburg", typ: "museum",   lat: 52.4083, lng: 12.9528, beschreibung: "Gedenkstätte für die DDR-Schriftstellerin Brigitte Reimann (1933-73). Verfasserin von 'Franziska Linkerhand'.", highlight: "Franziska Linkerhand", url: "https://www.brigitte-reimann.de/" },
    { id: "potsdam-schloesser",    name: "Potsdam Schlösser (UNESCO)",   region: "brandenburg", typ: "historie", lat: 52.4036, lng: 13.0385, beschreibung: "UNESCO-Weltkulturerbe. Sanssouci, Neues Palais, Cecilienhof, Park Babelsberg – von Werder in 20 Min.", highlight: "UNESCO-Weltkulturerbe", url: "https://www.spsg.de/" },

    // === Holsteinische Schweiz ===
    { id: "ploener-schloss",       name: "Plöner Schloss",               region: "holstein", typ: "historie", lat: 54.1606, lng: 10.4211, beschreibung: "Größtes Schloss Schleswig-Holsteins. Barock, Förderverein, Museum.",                           highlight: "Größtes Schloss SH", url: "https://www.schloss-ploen.de/" },
    { id: "prinzeninsel-ploen",    name: "Prinzeninsel im Plöner See",  region: "holstein", typ: "natur",    lat: 54.1683, lng: 10.435,  beschreibung: "Romantische Insel im Großen Plöner See. 250 m Holzbrücke, Spazierweg.",                       highlight: "Holzbrücke 250 m", url: "https://www.malente-tourismus.de/..." },
    { id: "fuenf-seen-fahrt",      name: "5-Seen-Fahrt (Malente–Plön)", region: "holstein", typ: "natur",    lat: 54.16,   lng: 10.46,   beschreibung: "Schiffsrundfahrt über Dieksee, Kellersee, Ukleisee, Schöhsee und Großer Plöner See. ~2 Std.", highlight: "Schifffahrt über 5 Seen", url: "https://5-seen-fahrt.de/" },
    { id: "eutin",                 name: "Eutin",                         region: "holstein", typ: "stadt",   lat: 54.1383, lng: 10.6194, beschreibung: "Rosenstadt der Holsteinischen Schweiz. Eutiner Schloss, Rosengarten, Geburtsort Carl Maria von Webers.", highlight: "Rosenstadt", url: "https://www.eutin.de/" },
    { id: "groemitz-strand",       name: "Grömitz Ostseestrand",         region: "holstein", typ: "natur",    lat: 54.1483, lng: 10.975,  beschreibung: "20 km feiner Sandstrand, Seebrücke 420 m, Kletterpark, Zoo Arche Noah.",                        highlight: "420 m Seebrücke", url: "https://www.groemitz.de/" },
    { id: "luebeck-altstadt",      name: "Lübeck Altstadt (Tagesausflug)",region: "holstein", typ: "stadt",   lat: 53.8667, lng: 10.687,  beschreibung: "UNESCO-Weltkulturerbe. Backsteingotik, Holstentor, Marzipan, Buddenbrookhaus. ~40 Min. von Plön.", highlight: "UNESCO, Marzipan-Hauptstadt", url: "https://www.luebeck-tourismus.de/" }
  ],

  // Routenvorschlag als GeoJSON-LineString
  route: {
    name: "Routenvorschlag 14-17 Tage",
    farbe: "#27ae60",
    punkte: [
      [50.7456, 9.5108],   // Tag 1: Herzberg am Herzberg (Anreise ~280 km)
      [50.7456, 9.5108],   // Tag 2-3: Herzberg Festival (30.07.-02.08.)
      [53.4583, 12.2625],  // Tag 4-5: Plau am See (Transfer ~430 km)
      [53.5167, 12.6833],  // Tag 6: Waren/Müritz
      [54.3833, 12.4167],  // Tag 7-8: Ahrenshoop/Prerow
      [54.5733, 13.6622],  // Tag 9: Kreidefelsen
      [54.4053, 13.6139],  // Tag 10: Binz
      [53.9742, 14.1417],  // Tag 11: Bansin/Usedom
      [53.9586, 14.1692],  // Tag 12: Heringsdorf
      [53.91,   14.2472],  // Tag 12-13: Świnoujście
      [53.9289, 14.45],    // Tag 13: Misdroy
      [52.3553, 12.9517],  // Tag 14-15: Schwielowsee
      [52.2872, 14.0331],  // Tag 15: Bad Saarow
      [54.16,   10.45  ],  // Tag 16: Plön
      [54.1483, 10.975]    // Tag 17: Grömitz
    ]
  }
};
