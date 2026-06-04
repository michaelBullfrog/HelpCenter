# Control Hub Overview

**Product area:** Control Hub  
**Audience:** Webex administrators, support teams, implementation engineers  
**Last reviewed:** 2026-06-04  
**Primary sources:**  

- Webex Help Center — Get started with Control Hub: <https://help.webex.com/en-us/article/nkhozs6/get-started-with-control-hub>
- Webex Help Center — Assign organization account roles in Control Hub: <https://help.webex.com/en-us/article/fs78p5/Assign-organization-account-roles-in-Control-Hub>

## What Control Hub is

Control Hub is the central administration portal for a Webex organization. Cisco describes it as the dashboard used to manage users, permissions, calling, meetings, messaging, and devices.

Use Control Hub when you need to manage:

- Organization settings
- Users and licenses
- Administrator roles
- Locations
- Webex Calling configuration
- Devices and workspaces
- Contact Center administration areas that have moved into Control Hub
- Analytics, troubleshooting, and service status views

## Common admin path

1. Confirm the customer organization.
2. Confirm your administrator role.
3. Check users and licensing.
4. Review locations.
5. Configure services such as Calling, Meetings, Messaging, Devices, or Contact Center.
6. Validate service behavior with a test user or test device.
7. Document changes and link the official source used.

## What to check first during troubleshooting

| Check | Why it matters |
| --- | --- |
| Correct organization | Partners may manage multiple customer orgs. |
| Admin role | Missing role permissions can look like missing product features. |
| User license | Many service issues start with an unassigned or incorrect license. |
| Location | Calling and PSTN behavior is often location-based. |
| Device/workspace assignment | Device issues may be caused by assignment or activation problems. |
| Recent changes | Control Hub changes can affect routing, features, users, and devices. |

## Good documentation practice

Do not write an article that says only “go to Control Hub and click around.” Each Control Hub article should explain:

- The business purpose of the setting
- Who normally manages it
- Where it lives in Control Hub
- What to validate after changing it
- What can break if configured incorrectly
