# Webex Contact Center Overview

**Product area:** Webex Contact Center  
**Audience:** Contact center administrators, implementation engineers, supervisors, support teams  
**Last reviewed:** 2026-06-04  
**Primary sources:**  

- Webex Help Center — Webex Contact Center Documentation: <https://help.webex.com/en-us/article/n2re5jy/Webex-Contact-Center-Documentation>
- Webex Help Center — Get started with Webex Contact Center: <https://help.webex.com/en-us/article/nee1mb6/Get-Started-with-Webex-Contact-Center>
- Webex Help Center — Webex Contact Center Setup and Administration Guide: <https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide>
- Webex Help Center — What’s new for administrators in Webex Contact Center: <https://help.webex.com/article/nv7abhz/What%27s-new-for-administrators-in-Webex-Contact-Center>

## What Webex Contact Center is

Webex Contact Center is Cisco's cloud contact center platform. It includes routing, agent/supervisor experiences, queues, entry points, flows, reporting, and integrations.

## Important documentation note

Cisco notes that the older Webex Contact Center Setup and Administration Guide is no longer updated because many Management Portal entities have migrated to Control Hub and the Management Portal has been decommissioned for those areas. For KB accuracy, prefer current Control Hub-based documentation when available.

## Core building blocks

| Building block | Purpose |
| --- | --- |
| Tenant | Customer Contact Center environment. |
| Users | People assigned to Contact Center roles/licenses. |
| Teams | Groups of agents. |
| Profiles | Permissions and desktop behavior. |
| Queues | Places contacts wait before routing to agents. |
| Entry points | Inbound starting points for contact routing. |
| Flows | Routing logic and customer experience design. |
| Business hours | Open/closed/holiday behavior. |
| Agent Desktop | Agent interface for handling contacts. |
| Supervisor tools | Monitoring, coaching, reporting, and management. |
| Analyzer | Reporting and analytics. |

## Support-first troubleshooting order

1. Identify the channel: voice, digital, callback, or integration.
2. Identify the entry point, queue, and flow involved.
3. Confirm business hours and holiday routing.
4. Confirm agent is licensed, assigned, available, and in the correct team/profile.
5. Confirm telephony behavior for inbound or outbound calls.
6. Check reporting/analyzer after a known test call.
7. Escalate with contact ID, call timestamps, affected number, screenshots, and flow name.
