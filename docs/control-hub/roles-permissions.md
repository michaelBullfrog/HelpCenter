# Roles and Permissions

**Product area:** Control Hub  
**Audience:** Webex administrators, security reviewers, support teams  
**Last reviewed:** 2026-06-04  
**Primary source:** Webex Help Center — Assign organization account roles in Control Hub: <https://help.webex.com/en-us/article/fs78p5/Assign-organization-account-roles-in-Control-Hub>

## Overview

Administrator access in Control Hub should follow least privilege. Cisco documents several administrator role options, including full administrators, read-only administrators, support administrators, user and device administrators, device administrators, and compliance officers.

## Recommended role approach

| Need | Recommended access pattern |
| --- | --- |
| Full Webex tenant administration | Full administrator, limited to trusted senior admins |
| Help desk user support | Support administrator or user/device-focused role |
| Device-only support | Device administrator where possible |
| Auditing or review | Read-only administrator |
| Compliance investigations | Compliance officer, only when required |

## Before assigning admin access

Confirm:

- The user is in the correct customer organization.
- The requested role matches the work they actually perform.
- The request is approved by the customer or internal owner.
- Any partner-admin access follows your company policy.
- The change is documented.

## Validation steps

After assigning or changing a role:

1. Have the user sign out and back in.
2. Confirm they can access the intended Control Hub area.
3. Confirm they cannot access areas outside the intended scope, when applicable.
4. Record the change in the ticket or change log.

## Common mistakes

| Mistake | Impact |
| --- | --- |
| Giving full admin for a narrow task | Increases security risk. |
| Forgetting read-only options | Reviewers may get more access than needed. |
| Confusing partner admin and customer admin | User may not see the expected organization or settings. |
| Not validating after role change | User may still be blocked by browser/session caching or missing license. |
