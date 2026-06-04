# Locations and PSTN

**Product area:** Webex Calling  
**Audience:** Calling administrators, implementation engineers  
**Last reviewed:** 2026-06-04  
**Primary source:** Webex Help Center — Configure Webex Calling for your organization: <https://help.webex.com/en-us/article/njvdjf2/Configure-Webex-Calling-for-your-organization>

## Overview

Webex Calling locations are a key part of calling design. Location configuration affects number assignment, user/workspace placement, and location-based service behavior.

## Design checklist

Before building or changing a location, confirm:

- Site name
- Physical address
- Time zone
- PSTN approach
- Main number
- Emergency-service requirements
- Users and workspaces assigned to the site
- Site-specific routing requirements

## PSTN planning questions

Ask these questions before implementation:

- Is PSTN provided by Cisco, a local gateway, or another provider model?
- Are numbers new, ported, or existing?
- Which number is the main location number?
- Are there toll-free numbers?
- Are there fax, alarm, elevator, or analog requirements?
- Are emergency calling rules documented?

## Validation steps

After location and PSTN work:

1. Confirm numbers appear in Control Hub.
2. Assign a test number to a test user or service.
3. Test inbound calling.
4. Test outbound local, long-distance, and emergency-policy-safe validation according to customer policy.
5. Confirm caller ID behavior.
6. Document any limitations or carrier dependencies.
