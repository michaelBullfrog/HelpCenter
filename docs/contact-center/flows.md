# Flows

**Product area:** Webex Contact Center  
**Audience:** Contact center administrators, flow designers, support teams  
**Last reviewed:** 2026-06-04  
**Primary source:** Webex Help Center — Webex Contact Center Documentation: <https://help.webex.com/en-us/article/n2re5jy/Webex-Contact-Center-Documentation>

## Overview

Flows define the customer journey and routing logic for contacts. A flow may include prompts, menus, business-hour checks, queue treatment, routing, variables, integrations, and error handling.

## Flow design standard

Every production flow should have:

- Clear name and purpose
- Owner
- Last reviewed date
- Entry point association
- Business-hours behavior
- Holiday behavior
- Error handling path
- Overflow path
- Test plan
- Rollback plan

## Testing checklist

Test these scenarios before go-live:

1. Main menu path.
2. Every menu option.
3. Invalid input.
4. Timeout/no input.
5. Open-hours routing.
6. Closed-hours routing.
7. Holiday routing.
8. Queue available.
9. Queue unavailable/no agents.
10. Integration/API failure if the flow calls an external system.

## Troubleshooting flow issues

Collect:

- Flow name and version if available
- Entry point
- Queue
- Test caller number
- Timestamp with time zone
- Expected behavior
- Actual behavior
- Prompt heard by caller
- Screenshots of relevant flow sections
