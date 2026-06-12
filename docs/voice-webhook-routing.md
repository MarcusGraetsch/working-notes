# Voice Webhook Routing

Date: 2026-06-12

## Purpose

This site keeps the public `www.working-notes.org` hostname, but the path
`/voice/webhook` is reserved for the OpenClaw voice-call relay.

## Routing Model

- `www.working-notes.org/voice/webhook` is not a static Eleventy page.
- The path is handled at the edge / ingress layer and forwarded to the live
  OpenClaw webhook service.
- The rest of the website continues to come from the static site deployment.

## Operator Note

Do not add a normal content page at `src/voice/webhook` for this path.
The webhook must remain a server-side endpoint so Telnyx can POST call events.

## Validation Target

- HTTP `POST` to `/voice/webhook` should reach the OpenClaw voice-call webhook.
- Normal website navigation must remain unchanged.
