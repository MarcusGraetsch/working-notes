// Ostsee-Tour 2026 — Daten für die Karte
// Quelle: projekte/ostsee-tour-2026/daten/
// Datenstand: 2026-07-24
// Reise: 28.07.-23.08.2026 (Bremen → Herzberg → Ostsee → Berlin)

window.OSTSEE_DATA = {

  regionen: [
    { id: "festival",           name: "Herzberg Festival (Hinweg)",          farbe: "#d946ef", zentrum: [50.7456, 9.5108],  zoom: 9,  hinweis: "Europas ältestes Hippie-Festival. 30.07.-02.08.2026." },
    { id: "thueringen",          name: "Thüringen (Saale, Wartburg, Erfurt)",  farbe: "#b91c1c", zentrum: [50.93, 11.0],       zoom: 8,  hinweis: "Wartburg Eisenach, Erfurter Dom, Saale-Stauseen." },
    { id: "sachsen-anhalt",      name: "Sachsen & Sachsen-Anhalt (Torgau, Dessau, Wörlitz)", farbe: "#8b5cf6", zentrum: [51.7, 12.4], zoom: 8, hinweis: "Torgau Lutherstadt, Dessau Bauhaus, Wörlitz Gartenreich." },
    { id: "seenplatte",          name: "Mecklenburgische Seenplatte",          farbe: "#2e8b57", zentrum: [53.48, 12.55],       zoom: 9,  hinweis: "Plauer See, Müritz, Naturcamping direkt am Wasser." },
    { id: "ostsee-mv",           name: "Ostsee MV (Rügen, Usedom, Fischland-Darß)", farbe: "#1e6f9c", zentrum: [54.25, 13.4], zoom: 9, hinweis: "Drei Halbinseln – Kreidefelsen, Bäderarchitektur, Nationalpark." },
    { id: "polnische-ostsee",    name: "Polnische Ostsee (Świnoujście, Misdroy)", farbe: "#dc143c", zentrum: [53.92, 14.35], zoom: 10, hinweis: "Günstig tanken, Polenmarkt, Wollin-Nationalpark. Hymer < 3,5 t → keine Maut auf Staatsstraßen." },
    { id: "brandenburg",         name: "Brandenburg (Brandenburg/Havel)",      farbe: "#8b4513", zentrum: [52.32, 13.2],       zoom: 9,  hinweis: "Brandenburg-Vorstadt auf dem Rückweg." }
  ],

  campingplaetze: [
    // === Marcus' Empfehlungen ===
    { id: "camping-duenengelande-zempin", name: "Camping am Dünengelände (Zempin)", region: "ostsee-mv", lat: 54.0733, lng: 13.9650, beschreibung: "Marcus' Tipp. Zempin zwischen Koserow und Trassenheide, Usedom. Dünengelände-Lage, ab 26€/Nacht Nebensaison. Camping-Pod ab 45€.", url: "https://camping-zempin.com/", eigenschaften: ["Dünengelände", "Strandnähe", "Wohnmobil"] },
    { id: "luigis-nonnevitz",            name: "Luigis Campingplatz Nonnevitz",    region: "ostsee-mv", lat: 54.6625, lng: 13.2825, beschreibung: "Marcus' Favorit. Rügen, Dranske, Halbinsel Wittow. 40 Plätze inkl. Strom und Wasser, ruhige Lage, sehr netter Betreiber, strandnah.", url: "https://www.campercontact.com/de/deutschland/mecklenburg-vorpommern/dranske/3671/luigis-campingplatz-nonnevitz", eigenschaften: ["Strandnähe", "Ruhig", "Persönlich"] },
    { id: "duenencamping-prerow",        name: "Dünencampingplatz Prerow",         region: "ostsee-mv", lat: 54.4947, lng: 12.5867, beschreibung: "Auf dem Darß bei Prerow. Marcus' dritter Tipp. Woche gut ausgehalten, bestimmten Platz im Kopf. Preise auf Anfrage.", eigenschaften: ["Dünen", "Weststrand", "Nationalpark"] },

    // === Ostsee MV (bestehend) ===
    { id: "naturcamping-malchow",    name: "Naturcamping Malchow",          region: "seenplatte", lat: 53.4758, lng: 12.4253, beschreibung: "Direkt am Ostufer des Plauer Sees, mitten in der Mecklenburgischen Seenplatte.", url: "https://www.naturcamping-malchow.de/",             eigenschaften: ["direkt am See", "Hund erlaubt", "Ruhig"] },
    { id: "camping-alt-schwerin",    name: "Camping am See Alt Schwerin",    region: "seenplatte", lat: 53.5153, lng: 12.3525, beschreibung: "Familienfreundlich, Badebereich, direkt am Plauer See.",                   url: "https://www.camping-alt-schwerin.de/",               eigenschaften: ["direkt am See", "Familien"] },
    { id: "campingpark-zuruf",       name: "Campingpark Zuruf",              region: "seenplatte", lat: 53.4903, lng: 12.4125, beschreibung: "Großer Campingpark mit Finnhütten, Mietwohnwagen am Plauer See.",         url: "https://www.campingpark-zuruf.de/",                  eigenschaften: ["direkt am See", "Hütten"] },
    { id: "campingplatz-leisten",    name: "Campingplatz Leisten",           region: "seenplatte", lat: 53.54,   lng: 12.35,   beschreibung: "Am Nordufer des Plauer Sees, naturbelassen, Naturschutzgebiet.",           url: "https://www.campingplatz-leisten.de/",               eigenschaften: ["direkt am See", "Naturschutz"] },
    { id: "camping-prora",           name: "Camping Prora (Virgils)",        region: "ostsee-mv",  lat: 54.4386, lng: 13.5689, beschreibung: "Ostseebad Binz/Prora, naturbelassenes Wiesengelände.",                    url: "https://www.camping-prora-ruegen.de/",               eigenschaften: ["direkt am Meer", "Strand"] },
    { id: "campingpark-ruegen",      name: "Campingpark Rügen (Bundeswehr)", region: "ostsee-mv",  lat: 54.4053, lng: 13.6042, beschreibung: "Prorer Wiek mit direktem Strandzugang, 2 km von Binz.", eigenschaften: ["direkt am Meer", "Binz"] },
    { id: "wohnmobil-oase-ruegen",   name: "Wohnmobil-Oase Insel Rügen",    region: "ostsee-mv",  lat: 54.5039, lng: 13.6389, beschreibung: "Reiner Wohnmobil-Stellplatz, 165 Plätze ganzjährig.",                     url: "https://www.wohnmobiloase-ruegen.de/",             eigenschaften: ["direkt am Wasser", "Ganzjährig"] },
    { id: "ostsee-camping-bansin",   name: "Ostsee-Camping Bansin",          region: "ostsee-mv",  lat: 53.9742, lng: 14.1417, beschreibung: "Über 130 Touristik-Stellplätze im Waldstück nahe Ostseestrand.",           url: "https://ostsee-camping-bansin.de/",                  eigenschaften: ["direkt am Meer", "Wald"] },
    { id: "mobilcamp-heringsdorf",   name: "Mobilcamp Heringsdorf",          region: "ostsee-mv",  lat: 53.9586, lng: 14.1692, beschreibung: "Kleiner, feiner Campingplatz. 72 parzellierte Plätze. 01.04.-31.10.",     url: "https://www.mobilcamp-heringsdorf.de/",             eigenschaften: ["Strand", "Klein & fein"] },
    { id: "caravan-ahlbeck",         name: "Caravanplatz Am Wiesenrand",      region: "ostsee-mv",  lat: 53.9358, lng: 14.1883, beschreibung: "Zwischen Wald und Wiesen, 10 Min. Fußweg zum Ahlbecker Strand.",          url: "https://www.caravan-camping-usedom.de/",            eigenschaften: ["Strand", "Wald"] },
    { id: "forest-camp-miedzyzdroje", name: "Forest Camp Międzyzdroje",      region: "polnische-ostsee", lat: 53.9283, lng: 14.4486, beschreibung: "Kiefernwald am Rand von Misdroy. WLAN, Restaurant.", eigenschaften: ["Wald", "Restaurant"] },
    { id: "camping-24-miedzyzdroje",  name: "Camping 24 Międzyzdroje",       region: "polnische-ostsee", lat: 53.9325, lng: 14.4483, beschreibung: "TripAdvisor-Tipp für Durchreise.", eigenschaften: ["Durchreise", "Günstig"] },
    { id: "camping-swinoujscie",       name: "Campingplätze Świnoujście",    region: "polnische-ostsee", lat: 53.91,   lng: 14.2472, beschreibung: "17 inspizierte Campingplätze in Świnoujście.",                          url: "https://www.eurocampings.de/polen/westpommern/swinoujscie/", eigenschaften: ["Meer", "Hafen"] },
    { id: "camping-schwielowsee",     name: "Camping & Caravan am Schwielowsee", region: "brandenburg", lat: 52.3553, lng: 12.9517, beschreibung: "Am Schwielowsee, 10 Min. bis Potsdam.", eigenschaften: ["direkt am See"] },
    { id: "berlin-potsdam-camping",   name: "Berlin-Potsdam-Camping (Schwielowsee)", region: "brandenburg", lat: 52.35, lng: 12.96, beschreibung: "Traumhafter Platz am Schwielowsee. Mobilheime zu mieten.",                url: "https://www.berlin-potsdam-camping.de/",            eigenschaften: ["direkt am See"] },
    { id: "camping-schwarzhorn",       name: "Campingplatz Schwarzhorn",     region: "brandenburg", lat: 52.2867, lng: 14.0433, beschreibung: "Am Scharmützelsee/Storkower See, ganzjährig.",                           url: "https://www.camping.info/de/campingplatz/campingplatz-schwarzhorn", eigenschaften: ["direkt am See", "Ganzjährig"] },
    { id: "womo-bad-saarow",           name: "Wohnmobilstellplatz Bad Saarow",region: "brandenburg", lat: 52.2883, lng: 14.0472, beschreibung: "~30 Stellplätze, teils Seeblick.",                                       url: "https://www.bad-saarow.de/wohnmobilstellplaetze",  eigenschaften: ["direkt am See"] }
  ],

  badespots: [

    { id: "bleilochtalsperre",         name: "Bleilochtalsperre",                region: "thueringen",    lat: 50.5433, lng: 11.6583, beschreibung: "Größter Stausee Deutschlands. Viele Buchten, Sand, Liegewiesen. Wassertemperatur August 22-25°C.", highlight: "Größter Stausee DE" },
    { id: "stoermthaler-see",          name: "Störmthaler See (Leipzig)",        region: "sachsen-anhalt",lat: 51.2475, lng: 12.4225, beschreibung: "Bergbau-Folgesee, türkis, sehr schön. Liegeplätze, Beachbar.", highlight: "Türkis-Farbe" },
    { id: "plauer-see",                name: "Plauer See (Mecklenburg)",         region: "seenplatte",   lat: 53.4583, lng: 12.2625, beschreibung: "Südufer bei Plau am See, Sandstrand, See-Badebucht.", highlight: "Sandstrand" },
    { id: "werbellinsee",              name: "Werbellinsee (Schorfheide)",       region: "brandenburg",  lat: 52.9653, lng: 13.7042, beschreibung: "Waldsee in der Schorfheide. Baden auf der Rückreise. Sehr ruhig, naturnah.", highlight: "Waldsee-Idylle" }
  ],

  stellplaetze: [
    // === Pausen-Stops auf der ANREISE (Etappe 1, 360 km Bremen→Herzberg) ===
    { id: "stellplatz-bad-hersfeld",    name: "WoMo-Stellplatz Bad Hersfeld (Geistalbad)", region: "thueringen",  lat: 50.8706, lng: 9.7064, beschreibung: "6 Plätze am Freibad Geistalbad, ganzjährig nutzbar. Idealer Pausenstop Mitte der 360-km-Anreise. Stiftsruine + Altstadt 10 Min.", highlight: "Ganzjährig", url: "https://www.mobilisten.de/stellplaetze/deutschland/36251-bad-hersfeld.php" },
    { id: "stellplatz-wildes-waesserchen", name: "Stellplatz Restaurant Wildes Wässerchen (Bad Hersfeld)", region: "thueringen", lat: 50.8958, lng: 9.7286, beschreibung: "5 Plätze, max 48h, 5€/Nacht. Restaurant dabei. Sehr günstige Alternative.", highlight: "5€/Nacht" },

    // === Übernachtungs-Stellplätze Etappen 7-9 ===
    { id: "stellplatz-jena",           name: "Stellplatz Jena Saale-Ufer",            region: "thueringen",     lat: 50.9272, lng: 11.5894, beschreibung: "Jena Saale-Ufer. Schiller, Optik-Museum, Paradies-Biergarten.", highlight: "Saale-Blick" },
    { id: "stellplatz-torgau",         name: "WoMo-Stellplatz Torgau",                region: "sachsen-anhalt", lat: 51.5614, lng: 13.0057, beschreibung: "Torgau, Elbe. Historische Altstadt. Geeignet für Luther-/Reformations-Tour.", highlight: "An der Elbe" },
    { id: "stellplatz-brandenburg",    name: "WoMo-Stellplatz Brandenburg Vorstadt",  region: "brandenburg",    lat: 52.4094, lng: 12.5647, beschreibung: "Brandenburg/Havel, Vorstadt Richtung Plau am See. Günstig, gut für eine Nacht.", highlight: "Preiswert" },
    { id: "stellplatz-plau",           name: "WoMo-Stellplatz Plau am See",           region: "seenplatte",     lat: 53.4583, lng: 12.2625, beschreibung: "Seelage direkt am Plauer See. Badebucht in Fußnähe.", highlight: "Am See" },

    // === Ostsee-Region (Rügen, Usedom) ===
    { id: "stellplatz-binz",           name: "WoMo-Stellplatz Binz",                  region: "ostsee-mv",      lat: 54.4053, lng: 13.6139, beschreibung: "Binz, Rügen. Strandnähe, Bäderarchitektur-Hauptort.", highlight: "Binz-Strand" },
    { id: "stellplatz-heringsdorf",    name: "WoMo-Stellplatz Heringsdorf",           region: "ostsee-mv",      lat: 53.9586, lng: 14.1692, beschreibung: "Heringsdorf, Usedom. Mittendrin in den Kaiserbädern.", highlight: "Kaiserbäder" },

    // === Rückreise: Etappe 26 Usedom → Werbellinsee (Schorfheide) ===
    { id: "camping-suesser-winkel",    name: "Campingplatz Süßer Winkel (Werbellinsee)", region: "brandenburg",  lat: 52.9594, lng: 13.7172, beschreibung: "Direkt am Werbellinsee, Schorfheide. 30-35€/Nacht inkl. 2 Pers., Strom/Wasser/Entsorgung. Idyllisch, Waldsee-Charakter. Marcus Bade-Stop Etappe 26.", highlight: "Waldsee", url: "https://www.promobil.de/stellplatz/campingplatz-suesser-winkel-5a54b74ee5e4351422e5dce0.html" }
  ],

  sehenswuerdigkeiten: [
    // === Thüringen ===
    { id: "wartburg",           name: "Wartburg (Eisenach)",                 region: "thueringen",       typ: "historie", lat: 50.9667, lng: 10.3064, beschreibung: "UNESCO. Luthers Bibel-Übersetzung, 'Schöner Tugendhof'. Hochburg der Reformation.", highlight: "UNESCO", url: "https://www.wartburg.de/" },
    { id: "erfurt-dom",         name: "Erfurter Dom",                         region: "thueringen",       typ: "kultur",   lat: 50.9761, lng: 11.0236, beschreibung: "Mittelalterlicher Dom, Krämerbrücke. Luther war hier Novize.", highlight: "Luther-Novize", url: "https://www.erfurt-tourismus.de/" },
    { id: "kraemerbruecke",     name: "Krämerbrücke Erfurt",                   region: "thueringen",       typ: "stadt",    lat: 50.9789, lng: 11.0294, beschreibung: "Einzige bebaute Brücke nördlich der Alpen. 132 m lang, 32 Häuser.", highlight: "Einzigartig" },

    // === Torgau (Lutherstadt, Reformationsgeschichte) ===
    { id: "hartenfels",         name: "Schloss Hartenfels (Torgau)",          region: "sachsen-anhalt",   typ: "historie", lat: 51.5647, lng: 13.0047, beschreibung: "Schönstes Renaissanceschloss Sachsens. Im Innenhof die 'Schöne Pforte' (1525, erster evangelischer Kirchenbau der Welt).", highlight: "Schöne Pforte", url: "https://www.spsg.de/" },
    { id: "stadtkirche-torgau", name: "Stadtkirche St. Marien (Torgau)",      region: "sachsen-anhalt",   typ: "kultur",   lat: 51.5614, lng: 13.0057, beschreibung: "Hier starb 1552 Katharina von Bora (Luthers Frau). Gedenkgrab gleich vorn. Reformationsgeschichte auf kleinstem Raum.", highlight: "Katharina von Bora", url: "https://www.torgau.eu/" },
    { id: "begegnung-torgau",   name: "Denkmal der Begegnung (Torgau)",        region: "sachsen-anhalt",   typ: "historie", lat: 51.5675, lng: 13.0108, beschreibung: "Elbufer. Am 25. April 1945 trafen sich hier US-amerikanische und sowjetische Truppen (Elbe Day).", highlight: "1945" },

    // === Sachsen-Anhalt Bauhaus ===
    { id: "bauhaus-dessau",     name: "Bauhaus Dessau (UNESCO)",              region: "sachsen-anhalt",   typ: "kultur",   lat: 51.8391, lng: 12.2457, beschreibung: "UNESCO. Meisterhäuser, Bauhausgebäude. Schulreform und Architektur-Ikone.", highlight: "UNESCO", url: "https://www.bauhaus-dessau.de/" },
    { id: "woerlitz",           name: "Wörlitzer Gartenreich",                 region: "sachsen-anhalt",   typ: "natur",    lat: 51.8447, lng: 12.4267, beschreibung: "UNESCO. Englischer Landschaftsgarten mit Gondelfahrten durch die Parkgewässer. Schloss Wörlitz.", highlight: "UNESCO-Garten", url: "https://www.gartenreich-woerlitz.de/" },

    // === Rügen ===
    { id: "koenigsstuhl",          name: "Königsstuhl & Kreidefelsen",   region: "ostsee-mv", typ: "natur",    lat: 54.5733, lng: 13.6622, beschreibung: "Wahrzeichen Rügens – 117 m hohe Kreidefelsen direkt an der Ostsee. Nationalpark Jasmund.", highlight: "Steilküste", url: "https://www.nationalpark-jasmund.de/" },
    { id: "kap-arkona",            name: "Kap Arkona",                   region: "ostsee-mv", typ: "natur",    lat: 54.6764, lng: 13.4364, beschreibung: "Nördlichster Punkt Rügens. Zwei Leuchttürme (35 m), Schinkel-Turm, slawische Jaromarsburg.", highlight: "Leuchtturm" },
    { id: "prora-kdf",             name: "Prora – KDF-Koloss",           region: "ostsee-mv", typ: "historie", lat: 54.4367, lng: 13.5689, beschreibung: "4,5 km lange NS-Urlaubsanlage (1936-39). Dokumentationszentrum.", highlight: "NS-Denkmal" },
    { id: "binz-seebruecke",       name: "Binz Seebrücke & Strand",      region: "ostsee-mv", typ: "stadt",    lat: 54.4053, lng: 13.6139, beschreibung: "Bäderarchitektur-Hauptort. 370 m Seebrücke, feiner Sandstrand.", highlight: "Bäderarchitektur" },
    { id: "sassnitz-hafen",        name: "Sassnitz Hafen & Kreidemuseum", region: "ostsee-mv", typ: "stadt",   lat: 54.5156, lng: 13.6417, beschreibung: "Schiffsausflüge zu Kreidefelsen, Kreidemuseum Gummanz.", highlight: "Adler-Schiffe" },
    { id: "kaiserbaeder-usedom",   name: "Kaiserbäder (Ahlbeck-Heringsdorf-Bansin)", region: "ostsee-mv", typ: "stadt", lat: 53.955, lng: 14.166, beschreibung: "Bäderarchitektur-Freilichtmuseum. 8 km zusammenhängende Strandpromenade.", highlight: "8 km Promenade" },
    { id: "peenemuende-htm",       name: "Historisch-Technisches Museum Peenemünde", region: "ostsee-mv", typ: "museum", lat: 54.135, lng: 13.78, beschreibung: "Wo Wernher von Braun die V2-Rakete entwickelte.", highlight: "Geburtsort der Raumfahrt" },
    { id: "ahrenshoop",            name: "Ahrenshoop (Künstlerort)",      region: "ostsee-mv", typ: "stadt",   lat: 54.3833, lng: 12.4167, beschreibung: "Künstlerdorf mit Steilküste, Seemannskirche, Ahrenshooper Holz.", highlight: "Skagen" },
    { id: "prerow-natureum",       name: "Prerow – Darßer Ort & NATUREUM",region: "ostsee-mv", typ: "natur",  lat: 54.49,   lng: 12.5283, beschreibung: "Leuchtturm Darßer Ort + Meeresmuseum-Nebenstelle. Weststrand, Urwald 4.700 ha.", highlight: "Urwald" },
    { id: "nationalpark-bodden",   name: "Nationalpark Vorpommersche Boddenlandschaft", region: "ostsee-mv", typ: "natur", lat: 54.4, lng: 12.5, beschreibung: "Wanderdünen, Kranichrast, Bodden-Lagunen.", highlight: "Wanderdünen" },
    { id: "hiddensee-faehre",      name: "Hiddensee Fähranleger (Schaprode)", region: "ostsee-mv", typ: "stadt", lat: 54.5083, lng: 13.1667, beschreibung: "Tagesausflug zur autofreien Insel Hiddensee. Gerhart-Hauptmann-Haus, Leuchtturm Dornbusch.", highlight: "Autofreie Insel" },

    // === Stralsund ===
    { id: "ozeaneum-stralsund",    name: "OZEANEUM Stralsund",                region: "ostsee-mv", typ: "museum",  lat: 54.3091, lng: 13.0815, beschreibung: "Eines der besten Museen Deutschlands. Wale, Pottwale, Nord- und Ostsee-Becken.", highlight: "Top-Museum", url: "https://www.ozeaneum.de/" },
    { id: "stoertebeker-stralsund",name: "Störtebeker Braumanufaktur Stralsund", region: "ostsee-mv", typ: "kultur", lat: 54.3144, lng: 13.0894, beschreibung: "Brauhaus-Besichtigung, Brauerei-Führungen, Biergarten.", highlight: "Brauerei", url: "https://www.stoertebeker.de/" },
    { id: "bernstein-ribnitz",     name: "Bernstein-Manufaktur Ribnitz-Damgarten", region: "ostsee-mv", typ: "museum", lat: 54.2444, lng: 12.4642, beschreibung: "Eine der letzten aktiven Bernstein-Werkstätten. Führung, Verkauf.", highlight: "Bernstein-Spezialist", url: "https://www.bernsteinmanufaktur.de/" },

    // === Polnische Ostsee ===
    { id: "miedzyzdroje-pier",     name: "Międzyzdroje (Misdroy) Pier",  region: "polnische-ostsee", typ: "stadt", lat: 53.9289, lng: 14.45,   beschreibung: "Ältester Seebrücken-Pier Polens (1880). 395 m lang. Walk of Fame.", highlight: "Walk of Stars" },
    { id: "wolin-nationalpark",    name: "Nationalpark Wolin",           region: "polnische-ostsee", typ: "natur",  lat: 53.89, lng: 14.475,   beschreibung: "109 km² auf der Insel Wolin. Steilküste, Wisentgehege.", highlight: "Wisente" },
    { id: "swinoujscie",           name: "Świnoujście Altstadt",          region: "polnische-ostsee", typ: "stadt", lat: 53.91, lng: 14.2472, beschreibung: "Leuchtturm 65 m (höchster Polens), Festung Engelsburg, Kurpark.", highlight: "Leuchtturm 65m" },
    { id: "festung-engelsburg",    name: "Festung Engelsburg (Świnoujście)", region: "polnische-ostsee", typ: "historie", lat: 53.9089, lng: 14.2489, beschreibung: "Preußische Festung, 19. Jh. Direkt am Hafen.", highlight: "Preußen-Festung" },
    { id: "vineta-museum",         name: "Vineta-Museum (Zempin)",        region: "ostsee-mv", typ: "museum", lat: 54.0703, lng: 13.9550, beschreibung: "Sagenumwobene versunkene Stadt Vineta. Kunst & Sage an Usedoms Küste.", highlight: "Versunkene Stadt" },

    // === Seenplatte ===
    { id: "mueritzeum",           name: "Müritzeum (Waren)",           region: "seenplatte", typ: "museum",   lat: 53.5156, lng: 12.6867, beschreibung: "Haus der 1000 Seen – interaktives Naturerlebnis.", highlight: "Bestes Aquarium Norddeutschlands" },
    { id: "waren-altstadt",        name: "Waren (Müritz) Altstadt",     region: "seenplatte", typ: "stadt",   lat: 53.5167, lng: 12.6833, beschreibung: "Hafenstädtchen mit Backsteingotik, Müritz-Therme.", highlight: "Backstein-Architektur" },
    { id: "plau-am-see",           name: "Plau am See Altstadt",        region: "seenplatte", typ: "stadt",   lat: 53.4583, lng: 12.2625, beschreibung: "Malerische Altstadt mit Fachwerk- und Backsteinhäusern.", highlight: "Mecklenburg-Venedig" }
  ],

  festivals: [
    { id: "meeresrausch-2026", name: "Meeresrausch Festival (Trassenheide)", region: "ostsee-mv", typ: "festival", lat: 54.0825, lng: 13.8650, beschreibung: "Elektronische Musik, 3000°-Kooperation. 08.-10.08.2026, Trassenheide Usedom. Wald + Strand + Bass.", highlight: "08.-10.08.2026", url: "https://meeresrausch-festival.de/" },
    { id: "nemo-bollewick",   name: "N.E.M.O. Festival (Bollewick)",         region: "seenplatte", typ: "festival", lat: 53.3247, lng: 12.5783, beschreibung: "Eintägiges Indie-Festival. 08.08.2026, Bollewick (Müritz-Region). Auf dem Weg zur Ostsee oder zurück.", highlight: "08.08.2026", url: "https://www.festivalhopper.de/" },
    { id: "musik-stille",     name: "Musik & Stille Festival (Bellini Beach)", region: "ostsee-mv", typ: "festival", lat: 54.0500, lng: 14.0833, beschreibung: "Indie/Elektro am Strand. 14.-16.08.2026, Bellini Beach Usedom.", highlight: "14.-16.08.2026" }
  ],

  // === ROUTE: alle 27 Etappen als GeoJSON-Polyline ===
  route: {
    name: "Ostsee-Tour 2026 (28.07.-23.08.)",
    farbe: "#27ae60",
    punkte: [
      // Tag 1: Di 28.07. Bremen → Herzberg
      [53.0793, 8.8017],    // Bremen
      [52.3759, 9.7320],   // Hannover (Durchfahrt)
      [50.8333, 9.7667],   // Bad Hersfeld
      [50.7456, 9.5108],   // Herzberg (Breitenbach)
      // Tag 2-6: Festival
      [50.7456, 9.5108],   // Herzberg Festival
      // Tag 7: Mo 03.08. Herzberg → Jena
      [50.9747, 10.3086],  // Eisenach (Wartburg)
      [50.9761, 11.0236],  // Erfurt
      [50.8790, 11.2000],  // Stausee Hohenfelden (Baden)
      [50.9272, 11.5894],  // Jena (Saale)
      // Tag 8: Di 04.08. Jena → Torgau
      [50.5433, 11.6583],  // Bleilochtalsperre (Baden)
      [51.3408, 12.3747],  // Leipzig
      [51.2475, 12.4225],  // Störmthaler See (Baden)
      [51.5614, 13.0057],  // Torgau
      // Tag 9: Mi 05.08. Torgau → Brandenburg
      [51.5647, 13.0047],  // Schloss Hartenfels
      [51.8391, 12.2457],  // Dessau Bauhaus
      [51.8447, 12.4267],  // Wörlitz
      [52.4094, 12.5647],  // Brandenburg (Havel)
      // Tag 10: Do 06.08. Brandenburg → Ahrenshoop/Prerow
      [53.4583, 12.2625],  // Plau am See (Baden)
      [54.3833, 12.4167],  // Ahrenshoop
      [54.4947, 12.5867],  // Dünencampingplatz Prerow
      // Tag 11: Fr 07.08. Prerow → Nonnevitz (Rügen)
      [54.3091, 13.0815],  // Stralsund (Ozeaneum)
      [54.6625, 13.2825],  // Luigis Nonnevitz
      // Tag 12-14: Sa-Mo 08.-10.08. Nonnevitz (3 Tage)
      [54.5733, 13.6622],  // Kreidefelsen
      [54.6764, 13.4364],  // Kap Arkona
      [54.6625, 13.2825],  // zurück Nonnevitz
      // Tag 15: Di 11.08. Rügen → Świnoujście
      [54.4367, 13.5689],  // Prora
      [54.135, 13.78],     // Peenemünde
      [53.91, 14.2472],    // Świnoujście
      // Tag 16: Mi 12.08. Misdroy
      [53.9289, 14.45],    // Misdroy
      // Tag 17: Do 13.08. Świnoujście → Zempin
      [53.9586, 14.1692],  // Heringsdorf
      [54.0733, 13.9650],  // Zempin (Camping am Dünengelände)
      // Tag 18-25: Fr 14.08.-Fr 21.08. Usedom (8 Tage)
      [53.9742, 14.1417],  // Bansin
      [53.9358, 14.1883],  // Ahlbeck
      [54.0825, 13.8650],  // Trassenheide (Meeresrausch)
      [54.0733, 13.9650],  // zurück Zempin
      // Tag 26: Sa 22.08. Usedom → Werbellinsee
      [53.91, 14.2472],    // Świnoujście (Grenze raus)
      [53.6294, 14.0053],  // Anklam
      [53.3881, 13.1083],  // Prenzlau
      [52.9653, 13.7042],  // Werbellinsee (Baden)
      // Tag 27: So 23.08. Werbellinsee → Berlin
      [52.8117, 13.2444],  // Oranienburg
      [52.52, 13.405]      // Berlin
    ]
  }
};
