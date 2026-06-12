# Session Review: Voice Webhook Routing

Date: 2026-06-12

## Lagebild

The static `working-notes.org` site needs a live webhook path for Telnyx/OpenClaw.
The website repo itself cannot serve a POST webhook, so the route must be handled
at ingress/edge level.

## Befunde

- The site remains a static Eleventy build deployed to IONOS.
- `www.working-notes.org/voice/webhook` is now reserved as a webhook path.
- The live OpenClaw webhook endpoint is on the VPS at `127.0.0.1:3334`.
- A Cloudflared tunnel already exists on the VPS, which can route the path.

## Arbeitsplan

1. Record the reserved webhook path in the website repo.
2. Add a Cloudflared ingress rule for `www.working-notes.org/voice/webhook`.
3. Keep normal website traffic routed to the static site origin.

## Umgesetzte Änderungen

- Added `docs/voice-webhook-routing.md` to the website repo.
- Added a matching ingress rule in `/etc/cloudflared/config.yml`:
  - `www.working-notes.org/voice/webhook*` -> `http://127.0.0.1:3334`
  - fallback `www.working-notes.org` -> `https://working-notes.org`

## Validierung

- Verified the updated Cloudflared config file contents.
- Restarted `cloudflared` successfully.
- Confirmed the tunnel reconnected cleanly in the journal.

## Nächste Schritte

- Ensure DNS for `www.working-notes.org` points to the tunnel.
- The hostname already exists in DNS, so the record must be updated in the DNS
  provider rather than added as a new record from this host.
- If Telnyx still cannot reach the endpoint, inspect the public hostname path and
  the OpenClaw webhook logs.
