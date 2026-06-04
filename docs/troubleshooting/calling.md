# TS: Webex Calling

Use this page for Webex Calling issues involving users, numbers, PSTN, devices, call routing, voicemail, call queues, hunt groups, and call quality.

## First checks

- Confirm the user has the correct Webex Calling license.
- Confirm the user is assigned to the correct location.
- Confirm the number or extension is assigned correctly.
- Confirm the issue affects one user, multiple users, one location, or all locations.
- Confirm whether the issue is inbound, outbound, internal extension dialing, or feature-specific.

## Call quality checklist

- Collect at least two call examples.
- Include caller, called party, date, time, timezone, and symptom.
- Ask whether the issue is audio loss, delay, jitter, robotic audio, one-way audio, or dropped calls.
- Check whether the user was on Wi-Fi, wired Ethernet, VPN, cellular, or remote network.
- Compare Webex App behavior versus desk phone behavior if available.

## Routing checklist

| Issue | Check |
|---|---|
| Inbound calls fail | Main number, routing target, auto attendant, call queue, business hours |
| Outbound calls fail | Calling plan, PSTN provider, dial plan, permissions, location |
| Extension dialing fails | User extension, location, internal dialing behavior |
| Voicemail issue | Voicemail enabled, greeting, notification, forwarding settings |
| Queue issue | Agents assigned, agents available, business hours, overflow rules |

## Evidence to collect

- User email or workspace name
- Calling number and extension
- Affected location
- Device model and firmware if using a desk phone
- Example calls with timestamps
- Screenshots of relevant Control Hub configuration

## Common escalation note

When escalating Calling issues, include exact call examples. A report that says “calls are bad” is usually not enough. A useful example includes caller, called number, time, timezone, direction, symptom, and whether the call was answered, failed, or dropped.
