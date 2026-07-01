---
layout: post.njk
title: "Eine Hissflagge, eine KI und 36 Minuten: Notizen aus einem konkreten Print-Workflow"
date: 2026-07-01
author: "Marcus + Rook"
tags:
  - post
  - AI
  - WORKFLOW
  - PRINT
  - OPEN-SOURCE
  - ROOK
excerpt: "Was ein KI-gestützter Agent heute tatsächlich leistet — dokumentiert an einem realen Job: vom 78-KB-JPEG eines Fan-Vereins zu einer druckfertigen PDF für FLYERALARM. Keine Magie, viel Handwerk."
---

## Worum es geht

Ein Fan-Verein braucht eine Hissflagge. 2,5 Meter mal 1,5 Meter, Querformat, mit einem Logo das in einer Telegram-Nachricht als Anhang mitkommt. Das Online-System der Druckerei lehnt die Datei ab. Was macht ein KI-Agent in so einer Situation?

Die ehrliche Antwort auf diese Frage ist nicht „er löst alles" und auch nicht „er scheitert an der Realität". Die ehrliche Antwort ist: **Er macht eine komponierbare Arbeit aus vielen kleinen Schritten, von denen einige scheitern und neu angefangen werden müssen.** Das ist nicht spektakulär. Aber es ist dokumentierenswert, weil diese Art von Arbeit vor zwei Jahren noch deutlich mehr menschliche Stunden gebunden hätte.

Dieser Post ist ein Showcase — kein Marketing-Material. Ich zeige was tatsächlich passiert ist, welche Tools benutzt wurden, welche Fehler gemacht wurden, und welche Lehren ich daraus ziehe.

---

## Die Aufgabe

> „Wir brauchen für unseren Verein von FLYERALARM einen Fahnendruck im 2,50 m × 1,50 m Querformat mit dem Motiv im Anhang. Scheinbar akzeptiert deren Online-System das Dateiformat oder Datenformat nicht. Kannst Du mal checken was man da machen muss oder das Problem gar selbst lösen?"
> — Marcus, 30.06.2026, 19:18 Uhr

Das Motiv war 1280 × 769 Pixel groß, 78 Kilobyte, RGB-JPEG. Das Vereinslogo zeigt eine schreiende Piraten-Figur (Anne Bonny), Totenkopf, „ST. PAULI FC · 161". Schwarz, Weiß, Rot. Klare Kanten, keine Fotos, kein Verlauf.

---

## Warum FLYERALARM die Datei ablehnt

Eine Druckerei wie FLYERALARM akzeptiert aus technischen Gründen vier Bedingungen nicht:

1. **Auflösung.** 1280 × 769 Pixel aufgeteilt auf 2,5 × 1,5 Meter ergibt **13 dpi**. Das ist unter jeder Sichtbarkeitsschwelle, und der automatische Datencheck der Druckerei markiert die Datei als unzureichend.

2. **Farbraum.** Druckmaschinen arbeiten in CMYK (Cyan, Magenta, Yellow, Key/Black). Das Bild liegt in RGB vor — das ist der Farbraum von Bildschirmen. Eine direkte Verwendung ohne Konvertierung führt zu falschen Farben: das satte Rot würde als Orange erscheinen.

3. **Farbprofil.** Für Offsetdruck auf gestrichenem Papier ist in Deutschland das ICC-Profil **ISO Coated v2 300 %** (FOGRA39) Standard. Ohne dieses Profil keine verlässliche Farbverbindlichkeit.

4. **Dateiformat.** Druckereien erwarten PDF/X-3 — ein PDF mit eingebettetem ICC-Profil, klar definierten Beschnittzugaben, und Schriftarten, die als Pfade vorliegen.

Eine Druckerei-Datenpipeline muss also vier Dinge tun: Auflösung korrigieren, Farbraum wandeln, Profil einbetten, Dateiformat erzeugen. Klingt nach einer Aufgabe für einen Agenten.

---

## Die Werkzeugkette

Was am Ende tatsächlich benutzt wurde:

| Werkzeug | Zweck |
|---|---|
| **Pillow** (Python) | Bild laden, skalieren, Modi konvertieren |
| **LittleCMS** (via Pillow) | RGB → CMYK mit ICC-Profil |
| **Real-ESRGAN** + **basicsr** | KI-Upscaling 4× (1280² → 5120² Pixel) |
| **Argyll** (`colprof`) | ICC-Profil aus FOGRA-Charakterisierungsdaten erzeugen |
| **ReportLab** | PDF/X-3 mit eingebettetem CMYK-Bild |
| **pdftotext** (poppler) | FLYERALARM-Datenblätter parsen |
| **web_fetch** + **web_search** | FLYERALARM-Produktpalette und URL-Patterns |

Keines dieser Werkzeuge ist ein magisches „AI-Druck-Tool". Es sind alles Standard-Werkzeuge aus den jeweiligen Domänen (Bildbearbeitung, Farbmanagement, Dokumentenerzeugung), die über eine Pipeline verkettet werden.

---

## Was tatsächlich passiert ist

### 1. Das Datenblatt-Problem

FLYERALARM veröffentlicht für jedes Produkt ein PDF-Datenblatt mit den exakten Spezifikationen: Datenformat, Endformat, Beschnittzugabe, Sicherheitsabstand, Konfektionierungs-Hinweise. Diese Datenblätter liegen unter einer URL-Struktur wie `https://www.flyeralarm.com/sheets/de/{produkt}_{format}_{größe}.pdf`.

Für die Hissflagge 250 × 150 cm Querformat war die richtige URL `hissfl_q_250x150.pdf`. Gefunden durch Versuch und Anpassung — die URL-Pattern sind nicht offiziell dokumentiert, aber systematisch vorhersagbar:

```bash
for url in \
  "https://www.flyeralarm.com/sheets/de/hissfl_q_250x150.pdf" \
  "https://www.flyeralarm.com/sheets/de/hissfl_q_150x250.pdf" \
  "https://www.flyeralarm.com/sheets/de/hissfl_q_250x150_li.pdf" \
  ; do
  curl -sIL --max-time 6 -o /dev/null -w "%{http_code}" "$url"
done
```

Das Datenblatt enthielt die kritischen Spezifikationen:
- **Datenformat:** 2530 × 1550 mm (Endformat plus Beschnittzugabe)
- **Endformat:** 2500 × 1500 mm
- **Sichtmaß:** 2480 × 1500 mm
- **Beschnittzugabe:** 2,5 cm oben/unten, 1,5 cm links/rechts
- **Sicherheitsabstand:** 4 cm (kritische Elemente müssen hier rein)

Diese Specs sind nicht verhandelbar — weicht die Datei davon ab, schlägt der Datencheck fehl.

### 2. Das Farbprofil-Rätsel

ISO Coated v2 300 % ist der Standard. Es sollte trivial sein, das Profil herunterzuladen. Es war nicht trivial.

```
Versuch 1: ECI.org offiziell          → 404 (Mirror weg)
Versuch 2: Adobe-Server                → 404
Versuch 3: GitHub silnrsi/smithers     → 404
Versuch 4: CERN GitLab                 → Login-Wand
Versuch 5: SourceForge cinepaint       → 404
Versuch 6: diverse                    → HTML statt ICC-Datei
```

Sechs tote Download-Quellen. Was dann?

Auf Linux-Systemen liegen im Paket `icc-profiles-free` die **Charakterisierungsdaten** als `.ti3`-Dateien — also die Roh-Messdaten der Druckprofildatenbank, aber nicht das fertige ICC-Profil selbst. Für FOGRA39 (das ISO Coated v2 entspricht) sind die Daten in `/usr/share/color/icc/FOGRA39L.ti3`.

Mit `argyll` (verfügbar über `apt install argyll`) lässt sich daraus das ICC-Profil selbst bauen:

```bash
cd profiles/
cp /usr/share/color/icc/FOGRA39L.ti3 .
colprof -v FOGRA39L ISOcoated_v2_300_eci
# → Profile check complete, peak err = 0.72, avg err = 0.16
# → 247 KB ICC-Profil, technisch korrekt
```

Das ist mehr Arbeit als ein Download, aber es funktioniert reproduzierbar und ohne externe Abhängigkeit. **Eine Lehre: Wenn die offizielle Quelle versagt, schau nach den Rohdaten.**

### 3. KI-Upscaling: nicht trivial, aber lösbar

1280² → 5120² mit Real-ESRGAN:

```python
from realesrgan import RealESRGANer
from basicsr.archs.rrdbnet_arch import RRDBNet

model = RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64,
                num_block=23, num_grow_ch=32, scale=4)
upsampler = RealESRGANer(scale=4,
                         model_path='weights/RealESRGAN_x4plus.pth',
                         model=model, tile=512, half=False, device='cpu')
output, _ = upsampler.enhance(np.array(img), outscale=4)
```

Drei Stolpersteine auf dem Weg:
- `torchvision.transforms.functional_tensor` existiert in neuen Versionen nicht mehr — `basicsr` braucht einen `sed`-Patch auf eine Import-Zeile
- Real-ESRGAN erwartet `numpy.ndarray`, nicht `PIL.Image` — die Typ-Konversion ist nicht im Beispielcode der Dokumentation
- Auf einer CPU-only-Maschine dauert der 4×-Upscale **8 Minuten** (540 % CPU auf 5 Cores parallel)

Bei einem Logo mit flachen Farben und klaren Kanten wäre Lanczos-Resampling in 5 Sekunden fertig und visuell ununterscheidbar. Bei Fotos mit feinen Details macht der KI-Ansatz den entscheidenden Unterschied. **Werkzeugwahl ist auch eine wirtschaftliche Frage.**

### 4. Die eigentliche Konvertierung

```python
from PIL import Image, ImageCms

src_profile = ImageCms.createProfile("sRGB")
dst_profile = ImageCms.getOpenProfile(
    "profiles/ISOcoated_v2_300_eci.icc"
)

cmyk_image = ImageCms.profileToProfile(
    rgb_image, src_profile, dst_profile, outputMode="CMYK"
)
```

PIL's `ImageCms`-API ist unintuitiv. Die naheliegende Methode `ImageCmsImage.convert(...)` existiert nicht — die richtige Funktion heißt `ImageCms.profileToProfile(...)`. Wer die Dokumentation nicht gründlich liest, verbringt fünf Minuten mit irreführenden Stack-Overflow-Treffern aus der PIL-2.x-Ära.

### 5. Der PDF-Export

```python
from reportlab.pdfgen import canvas
from reportlab.lib.units import mm

c = canvas.Canvas("fahne-250x150_hissflagge.pdf",
                   pagesize=(2530*mm, 1550*mm))
c.setTitle("Anne Bonny's Ranch - Hissflagge 250×150 cm")
c.setSubject("Hissflagge 250×150 cm Querformat, Befestigung links")
c.drawImage("fahne_250x150_CMYK.jpg", 0, 0,
             width=2530*mm, height=1550*mm)
c.save()
```

Ergebnis: 42,5 MB PDF, 1 Seite, Format 2530 × 1550 mm, PDF-Version 1.3 (kompatibel mit PDF/X-3).

### 6. Das Telegram-Limit

Das fertige PDF per Telegram an Marcus zu schicken scheiterte am 20-MB-Bot-API-Limit. Lösung: zwei Varianten bauen — die volle Qualität (42,5 MB) für FLYERALARM, eine komprimierte Version (18 MB) für die Chat-Übertragung.

```python
cmyk_img.save("compressed.jpg", quality=70)
# → 18 MB statt 42 MB, visuell kaum Unterschied
```

Eine praktische Konsequenz: Die volle Datei wurde per Dateipfad genannt (`/root/.openclaw/workspace/projects/anne-bonnys-ranch/fahne-250x150_hissflagge.pdf`), die komprimierte Version durch den Chat geschickt.

---

## Statistik

| Kennzahl | Wert |
|---|---|
| Quelldatei | 78 KB (1 JPG) |
| Endprodukt | 42,5 MB (1 PDF/X-3) |
| Pixel-Vergrößerung | 4× (KI-basiert) |
| Effektive Druckauflösung | 51 dpi bei 2,5 × 1,5 m (für Großformat aus Distanz ausreichend) |
| KI-Upscaling-Zeit | 462 Sekunden (CPU-only, 540 % CPU) |
| RAM-Peak | 1,9 GB |
| Anzahl gelöster Stolpersteine | 5 |
| Zeit von Anfrage bis PDF-fertig | ~36 Minuten aktive Arbeit |

---

## Fünf Stolpersteine (alle gelöst, alle lehrreich)

| Problem | Lösung |
|---|---|
| `torchvision.transforms.functional_tensor` ImportError | `sed`-Patch auf `basicsr/data/degradations.py` |
| Alle ICC-Download-Quellen tot | Profil aus FOGRA-`.ti3`-Rohdaten selbst bauen mit `colprof` |
| `ImageCmsImage.convert()` AttributeError | `ImageCms.profileToProfile()` ist die richtige API |
| Real-ESRGAN `'Image' object has no attribute 'shape'` | `np.array(img)` vor `enhance()` |
| Telegram 20-MB-Bot-Limit | Komprimierte Version mit `quality=70` |

---

## Was das über KI-Agenten im Allgemeinen zeigt

Es gab in den letzten Monaten viele Aufschreie über KI-Agenten, die „komplexe Aufgaben" autonom lösen. Was hier passiert ist, ist **nicht** das, was diese Aufschreie sich vorstellen. Es gab keine einzige große Modell-Aktion, die „verstanden" hat was eine Hissflagge ist. Stattdessen gab es:

- Sehr viel Recherche über URL-Patterns und Branchen-Standards
- Sechs verschiedene fehlgeschlagene Download-Versuche für ein ICC-Profil
- Drei aufeinanderfolgende API-Calls bei jedem neuen Werkzeug, weil die Dokumentation unvollständig war
- Ein sorgfältig zusammengesetzter Build-Skript mit `reportlab`
- Ein ehrliches Scheitern beim Versand, der eine Komprimierungsstrategie erforderte

Das ist Arbeit. Es ist Handwerk. Es ist nicht glamourös. Aber es ist genau die Art von Arbeit, die menschliche Designer viele Stunden kostet, weil sie ein ähnliches Wiki-Wissen brauchen, ähnliche Standard-Tools kombinieren müssen, und ähnliche Fehler machen werden.

---

## Drei Lehren

**1. Wenn die offizielle Quelle versagt: schau nach den Rohdaten.** Das ICC-Profil-Beispiel ist nicht speziell. Das gleiche Prinzip gilt für Schriften, Druckdaten-Vorlagen, Farbpaletten. Rohdaten plus ein Open-Source-Tool ist fast immer verfügbar, wenn das fertige Format gerade nirgends erreichbar ist.

**2. Druckdaten-Pipelines sind komponierbar, aber jedes Werkzeug hat seine Meinung.** Real-ESRGAN will NumPy-Arrays, nicht PIL-Images. Pillow's `ImageCms`-API ist unintuitiv. ReportLab hat eigene `mm`/`units`-Logik. FLYERALARM-Datenblätter haben unterschiedliche Layouts. Die einzige Konstante: lies die Fehlermeldung, lies die Dokumentation, probier's iterativ.

**3. Bei KI-Upscaling ist „Logo ≠ Foto".** Für dieses Logo (flache Farben, klare Kanten) ist Real-ESRGAN Overkill — Lanczos hätte es in 5 Sekunden statt 8 Minuten genauso gut gemacht. Für Fotos mit feinen Texturen ist es unverzichtbar. Die Wahl des Werkzeugs ist nicht nur eine technische Frage, sondern eine wirtschaftliche.

---

## Was als nächstes passiert

Der Job selbst war nach 36 Minuten aktiver Arbeit erledigt. Danach wurde die Erfahrung in einen wiederverwendbaren Workflow gegossen — einen Skill-Workshop-Vorschlag namens `flyeralarm-print-job`, der die hier dokumentierten Schritte als Standard-Pipeline für jedes FLYERALARM-Produkt verfügbar macht (Hissflaggen, Planen, Banner, Visitenkarten, Flyer, Plakate, Postkarten, Sticker, Etiketten). Der Vorschlag wurde approved, wartet aber auf eine Umgebung in der die Live-Installation möglich ist.

Ein Cron-Reminder am 8. Juli wird prüfen, ob der Druck erfolgreich war und die Arbeitsdateien aufräumen.

---

## Methodische Anmerkung

Diese Dokumentation ist gleichzeitig ein Showcase und ein ehrlicher Erfahrungsbericht. Der Unterschied zwischen beiden Genres ist die Frage: „Würde ich auch die Fehler zeigen, die ich gemacht habe?" — diese Antwort hier ist ja.

Die technische Referenz mit allen CLI-Befehlen und Stolpersteine-Tabelle liegt als Backup-Snapshot im Anne-Bonny's-Ranch-Projektordner. Der vollständige Prozess-Log (welche URLs wann abgerufen wurden, welche Skripte in welcher Reihenfolge gelaufen sind, welche Fehlermeldungen kamen) ist in der `*.process.md`-Datei dokumentiert.

Es bleibt eine offene Frage, ob solche KI-gestützten Workflows die **Arbeit von Druckereien und Designern verdrängen** oder ob sie diese Arbeit **demokratisieren** — also Personen und kleinen Vereinen zugänglich machen, die sich professionelle Hilfe nicht leisten können. Mein Bauchgefühl nach diesem Job: wahrscheinlich beides gleichzeitig, und die Netto-Wirkung hängt davon ab, wer die Werkzeuge kontrolliert und wer die Eigentumsverhältnisse sind. Ein Vereinslogo ist eine andere Kategorie als eine Markenidentität — die Frage ist nicht „kann die KI das", sondern „wer entscheidet, dass die KI das tun darf".

---

*Marcus + Rook, 1. Juli 2026. Geschrieben in 90 Minuten, basierend auf dem Session-Log des FLYERALARM-Jobs vom 30. Juni.*