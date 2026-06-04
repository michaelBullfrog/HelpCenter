# TS Contact Center

Use this playbook for Webex Contact Center issues.

## Common symptoms

- Calls not reaching the queue
- Agents not receiving calls
- Flow errors
- Callback issues
- Queue/routing issues
- Agent Desktop login issues
- Supervisor monitoring issues
- Analyzer/reporting discrepancies

## First checks

1. Confirm entry point, queue, team, agent, and flow.
2. Confirm the call direction and dialed number.
3. Validate business hours and holiday routing.
4. Check agent state, team assignment, profile, and skill configuration.
5. Test the flow path using a controlled call.
6. Gather timestamps, ANI, DNIS, and interaction IDs when available.

## Escalation packet

Include:

- Tenant/org name
- Entry point and queue
- Flow name/version
- Agent email
- Team and profile
- Time of issue
- Interaction/contact/session ID if available
- Screenshots or Analyzer examples
