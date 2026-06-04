# Webex Calling Devices

**Product area:** Webex Calling / Devices  
**Audience:** Calling administrators, support teams, field technicians  
**Last reviewed:** 2026-06-04  
**Primary source:** Webex Help Center — Configure and manage Webex Calling devices: <https://help.webex.com/en-us/article/n9r1aac/Configure-and-manage-Webex-Calling-devices>

## Overview

Cisco documents that administrators can assign and manage devices for users and workspaces in Control Hub. Devices may be added by MAC address or by generating an activation code entered on the device.

## Device assignment types

| Type | Typical use |
| --- | --- |
| User device | Assigned to a person. |
| Workspace device | Assigned to a room, lobby, conference area, or shared space. |
| Webex App | Software endpoint for a user. |

## Device troubleshooting checklist

When a device is not working:

1. Confirm the device is assigned to the correct user or workspace.
2. Confirm the device model is supported for the intended service.
3. Confirm MAC address or activation code was entered correctly.
4. Confirm network connectivity.
5. Confirm DNS, DHCP, VLAN, firewall, and internet access requirements.
6. Reboot or re-register only after capturing current state if needed.
7. Test inbound and outbound calling.

## Information to collect before escalation

- Organization name
- User or workspace name
- Device model
- MAC address, if applicable
- Serial number, if available
- Public IP and local network details, if relevant
- Error shown on device
- Timestamp of registration attempt
- Recent changes
