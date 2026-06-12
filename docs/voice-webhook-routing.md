# Voice Webhook Routing

Date: 2026-06-12

## Purpose

This site keeps the public `www.working-notes.org` hostname, but the path
`/voice/webhook` is reserved for the OpenClaw voice-call relay.

## Routing Model

- `www.working-notes.org/voice/webhook` is handled by a small PHP relay in the
  website deployment.
- The relay forwards requests to the live OpenClaw webhook service on the VPS.
- The rest of the website continues to come from the static site deployment.

## Operator Note

Do not add a normal content page at `src/voice/webhook`.
The endpoint must remain server-side so Telnyx can POST call events.

## Backend

- public backend host: `voice.working-notes.org`
- backend target: OpenClaw voice-call webhook on the VPS
- website relay path: `www.working-notes.org/voice/webhook`

## Validation Target

- HTTP `POST` to `/voice/webhook` should reach the OpenClaw voice-call webhook.
- Normal website navigation must remain unchanged.
