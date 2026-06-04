# Calling Users and Features

**Product area:** Webex Calling  
**Audience:** Calling administrators, support teams  
**Last reviewed:** 2026-06-04  
**Primary source:** Webex Help Center — Webex Calling Configuration Workflow: <https://help.webex.com/en-us/article/32gfts/Webex-Calling-Configuration-Workflow>

## Overview

User calling behavior can be affected by many user-level features. Cisco documentation lists common user features such as call forwarding, call waiting, do not disturb, remote office, priority alert, selective call acceptance, and related call handling options.

## User feature review checklist

When a single user has a calling issue, check:

- Calling license
- Location
- Extension
- Direct number
- Device assignment
- Webex App status
- Call forwarding
- Do Not Disturb
- Voicemail settings
- Single Number Reach / Office Anywhere / remote-office type features if enabled
- Call waiting
- Selective call rules

## Common scenarios

| Scenario | Checks |
| --- | --- |
| Calls go straight to voicemail | DND, forwarding, busy settings, device registration. |
| User cannot receive external calls | Direct number, routing, forwarding, schedule, location. |
| User cannot make outbound calls | Calling license, dial plan, permissions, PSTN, device/app registration. |
| Calls ring the wrong destination | Forwarding, shared line, call queue, hunt group, alternate numbers. |

## Documentation note

When documenting a user feature, explain the customer impact. Example: “Do Not Disturb sends calls directly to voicemail” is more useful than only saying where the toggle is located.
