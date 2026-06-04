# Locations

**Product area:** Control Hub / Webex Calling  
**Audience:** Webex administrators, calling engineers  
**Last reviewed:** 2026-06-04  
**Primary source:** Webex Help Center — Configure Webex Calling for your organization: <https://help.webex.com/en-us/article/njvdjf2/Configure-Webex-Calling-for-your-organization>

## Overview

Locations are important because Webex Calling configuration is heavily location-aware. Numbers, users, workspaces, emergency settings, and certain calling services may depend on the selected location.

## Location design principles

Use locations to represent real administrative or calling boundaries, such as:

- Physical offices
- Branches
- Geographic regions
- Distinct PSTN or emergency-service requirements

Avoid creating locations only as cosmetic labels. Poor location design can make number management, emergency settings, and support troubleshooting harder.

## Before deleting a location

Cisco documentation notes that users and workspaces associated with a location must be deleted or moved before deleting that location. Deleting a location also removes assigned services and numbers tied to it.

## Validation checklist

Before changing a location:

- Confirm affected users and workspaces.
- Confirm assigned numbers.
- Confirm emergency calling impact.
- Confirm routing or auto attendant dependencies.
- Confirm business-hours or queue dependencies, if applicable.

## Common mistakes

| Mistake | Impact |
| --- | --- |
| Assigning users to the wrong location | Wrong number/routing/emergency behavior. |
| Deleting a location without dependency review | Service interruption. |
| Reusing locations inconsistently | Harder support and reporting. |
