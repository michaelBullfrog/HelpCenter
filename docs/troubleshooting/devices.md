# TS: Webex Devices

Use this page for troubleshooting Cisco desk phones, Room devices, Board devices, ATA devices, and Webex App device registration behavior.

## First checks

- Confirm the device type and model.
- Confirm whether the device is assigned to a user or workspace.
- Confirm the device appears in Control Hub.
- Confirm the network path allows required Webex traffic.
- Confirm the issue is registration, calling, audio/video, firmware, activation, or pairing related.

## Desk phone checklist

| Symptom | Check |
|---|---|
| Phone will not register | Assignment, activation, network, DNS, firmware, factory reset status |
| One-way audio | Firewall/NAT, local network, VLAN, ALG, media path |
| No dial tone | User/workspace assignment, line config, phone status |
| Wrong extension | Device owner, line assignment, Control Hub user config |
| Firmware issue | Supported firmware, upgrade status, reboot/factory reset |

## Room device checklist

- Confirm activation code or cloud registration status.
- Confirm workspace assignment.
- Confirm calendar integration if join button is missing.
- Confirm microphone, speaker, camera, and display configuration.
- Confirm whether the issue affects meetings, calling, sharing, or device control.

## Evidence to collect

- Device model and serial number
- MAC address if applicable
- Workspace or user assignment
- Location and network details
- Firmware version
- Photos/screenshots of the device status page
- Date, time, timezone, and symptom
