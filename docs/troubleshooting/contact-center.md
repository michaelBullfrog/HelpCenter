# TS: Webex Contact Center

Use this page for Webex Contact Center issues involving Agent Desktop, queues, entry points, flows, routing, Analyzer, recordings, transcripts, and CRM connectors.

## First checks

- Confirm whether the issue is affecting one agent, one team, one queue, one entry point, or the whole tenant.
- Confirm agent profile, team assignment, multimedia profile, and site assignment.
- Confirm the queue, entry point, flow, business hours, and routing strategy.
- Confirm whether the problem started after a recent flow, user, queue, or integration change.

## Agent Desktop checklist

| Symptom | Check |
|---|---|
| Agent cannot log in | License, profile, team, site, browser, pop-up blockers |
| Agent not receiving calls | Agent state, team assignment, queue assignment, routing strategy |
| Calls stuck in queue | Flow logic, queue treatment, agent availability, business hours |
| Screen pop fails | Connector config, CRM permissions, ANI/DNIS mapping, browser console |
| Wrap-up issue | Desktop profile, wrap-up codes, queue/team configuration |

## Flow troubleshooting checklist

1. Identify the entry point receiving the call.
2. Identify the flow attached to that entry point.
3. Confirm business hours and holiday logic.
4. Confirm menu options and variable values.
5. Confirm queue activity and routing strategy.
6. Confirm error handling paths.
7. Test with a known call path and document each result.

## Analyzer/reporting checklist

- Confirm the report time range and timezone.
- Confirm whether the report is real-time or historical.
- Confirm whether abandoned, transferred, callback, and overflow calls are being interpreted correctly.
- Compare report output against known call examples.

## Evidence to collect

- Agent email
- Queue, team, site, and profile
- Entry point and flow name
- ANI, DNIS, call start time, timezone
- Screenshots of agent state and queue status
- Browser console logs for desktop or CRM issues
