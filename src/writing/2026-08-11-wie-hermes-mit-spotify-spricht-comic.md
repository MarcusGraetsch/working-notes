---
layout: post.njk
title: "Wie Hermes mit Spotify spricht — Ein Comic über OAuth-PKCE"
date: 2026-08-11
author: "Marcus + Hermes"
tags:
  - post
  - SPOTIFY
  - HERMES
  - OAUTH
  - COMIC
  - AI-AGENTS
  - PROCESS
excerpt: "14 Bilder, ligne-claire, ein Rätsel-Lösungs-Weg: Wie ein Agent auf einer VPS mit Spotify kommuniziert, wenn der OAuth-Callback localhost braucht."
process:
  model: "MiniMax-M3 (Hermes) + FLUX-1-schnell (Bilder)"
  method: "Multi-turn + image generation + HTML compositing"
  summary: "Baoyu-comic skill (8 Steps) → 14 Bilder → HTML-Overlays für lesbare Schrift"
---

# Wie Hermes mit Spotify spricht — Ein Comic über OAuth-PKCE

Dieser Comic erzählt die Geschichte, wie ich auf einem Usedom-Campingplatz
mit schlechtem Radioempfang meinen Telegram-Bot dazu gebracht habe, mit
Spotify zu reden — über drei Umwege, eine fehlgeschlagene Tunnel-Brücke
und einen manuellen Code-Transport durch mich selbst.

Die Geschichte ist nicht ausgedacht. Sie ist genau so passiert, am
11.08.2026, am Dünengelände bei Zempin. Das Setting ist echt (Trenchcoat
und Detektiv-Haltung sind dramaturgische Zugaben).

## Der Comic (HTML-Version mit lesbarer Schrift)

Das Original-Comic wurde mit FLUX-1-schnell generiert. Wie bei allen
aktuellen Text-zu-Bild-Modellen war die Schrift nicht entzifferbar.

Lösung: **HTML-Compositing** — die Bilder bleiben, der Text kommt als
HTML-Overlay drüber. Pixelgenau lesbar, in jeder Sprache.

[**→ Comic lesen (14 Seiten HTML)**](/comic/spotify-pkce-flow/index.html)

Navigation pro Seite (links/rechts) oder direkt die Index-Seite mit
Thumbnails.

## Was eigentlich passiert ist (die Kurzfassung)

**Problem:** Spotify's OAuth-PKCE-Flow erwartet einen `redirect_uri`
auf `localhost:43827`. Aber Hermes läuft auf einer VPS in Frankfurt,
nicht auf meinem Laptop. Der Callback geht verloren.

**Versuch 1:** SSH-Tunnel von Laptop → VPS. Funktionierte nicht,
weil auf `127.0.0.1:43827` auf meinem Windows-Laptop bereits ein
anderer Prozess lauscht (PID 16292).

**Versuch 2:** Cloudflare-Quick-Tunnel. Hermes' PKCE-Handler hat
`redirect_uri must use http://localhost or http://127.0.0.1` hartcodiert —
HTTPS-URLs werden abgelehnt.

**Versuch 3:** Manueller Code-Transport. Ich bin die Brücke.

1. Hermes generiert PKCE-Pair (verifier + challenge)
2. Hermes schickt mir die Spotify-Authorize-URL mit der `challenge`
3. Ich klicke die URL im Browser, logge mich bei Spotify ein
4. Spotify redirected auf `127.0.0.1:43827` → "Seite nicht erreichbar"
5. **Aber:** der `code` steht in der URL-Bar
6. Ich kopiere die URL zurück zu Hermes (per Telegram)
7. Hermes macht den Token-Exchange mit `code` + `verifier`
8. Spotify gibt `access_token` (1h) + `refresh_token` (6mo)
9. Hermes speichert in `~/.hermes/auth.json`

Danach kann Hermes:
- Deine 822 gespeicherten Alben lesen
- Recently Played checken
- Playlists erstellen (mit dem **richtigen** Endpoint, nicht dem veralteten)
- Frische 2026-Releases deiner Lieblings-Artists finden
- Eine Playlist mit 59 Tracks + 4 News-Podcasts auf deinen Account legen

## Drei Endpoint-Quirks, die mich Zeit gekostet haben

```text
POST /v1/users/{user_id}/playlists     → 403 Forbidden (deprecated)
POST /v1/me/playlists                 → 201 Created ✅

POST /v1/playlists/{id}/tracks        → 403 Forbidden (deprecated)
POST /v1/playlists/{id}/items         → 201 Created ✅
```

Beide Endpoints wurden 2024 still umbenannt. Die alten Namen geben
keine Fehlermeldung im Detail, einfach 403 — das hat eine Weile
gedauert, bis ich das gemerkt habe.

## Was es zu lernen gibt

1. **Wenn der Tunnel nicht funktioniert, bist du selbst die Brücke.**
   Manchmal muss man die Daten persönlich transportieren.

2. **PKCE ist nicht nur Sicherheit, sondern auch Architektur.**
   Der `verifier` bleibt sicher auf der VPS, der `code` ist single-use
   und geht durch den User.

3. **Komische API-Fehler = Naming-Changes.**
   403 mit leerer Detail-Message ist verdächtig. Erst Endpoint prüfen,
   dann Scope, dann alles andere.

4. **LLM-generierte Schrift ist immer kaputt.**
   Compositing statt Rendering. Das ist die Lehre aus diesem Comic.

## Tech-Stack

- **Auth:** OAuth 2.0 PKCE (RFC 7636)
- **API:** Spotify Web API, market=DE
- **Library analysiert:** 822 saved albums, 50 most recent
- **Genres:** Classic Rock (Bowie, Stones, Petty), Hard Rock
  (Motörhead, Uriah Heep), Punk (Bad Religion, Hosen), Indie
  (Tocotronic, Element Of Crime)
- **Fresh 2026:** Rolling Stones "Foreign Tongues", Uriah Heep
  "SPLAT!", Die Toten Hosen "Trink aus, wir müssen gehen",
  Foo Fighters "Your Favorite Toy"
- **News-Podcasts:** Tagesschau 100 Sek, heute journal, DLF,
  Tagesschau 20 Uhr
- **Comic-Skill:** baoyu-comic (Workflow 8 Steps, ligne-claire)
- **Bild-Modell:** FLUX-1-schnell (DeepInfra)
- **Compositing:** HTML/CSS overlays