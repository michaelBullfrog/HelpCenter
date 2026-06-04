# APIs and Automation Overview

**Product area:** Webex APIs  
**Audience:** Developers, automation engineers, technical administrators  
**Last reviewed:** 2026-06-04  
**Primary sources:**  

- Webex for Developers: <https://developer.webex.com/>
- Webex Developer Changelog: <https://developer.webex.com/docs/api/changelog>
- Webex Developer — Integrations and Authorization: <https://developer.webex.com/docs/api/guides/integrations-and-authorization>

## Overview

The Webex Developer portal is the source of truth for Webex APIs, authentication, scopes, webhooks, bots, integrations, and changelog updates.

## Common API use cases

| Use case | Typical approach |
| --- | --- |
| Test a quick API call as yourself | Personal access token. |
| Build an app that acts for signed-in users | OAuth integration. |
| Build a bot identity | Webex bot token. |
| Receive event notifications | Webhook. |
| Automate admin tasks | Integration or admin-authorized app, depending on requirements. |

## API accuracy rules

- Always check the current endpoint documentation.
- Always check required scopes.
- Do not hardcode personal access tokens in production.
- Use OAuth or appropriate app credentials for production apps.
- Check the changelog before assuming API behavior is unchanged.
- Document error examples and known fixes.
