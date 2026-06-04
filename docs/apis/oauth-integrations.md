# OAuth Integrations

**Product area:** Webex APIs  
**Audience:** Developers, automation engineers  
**Last reviewed:** 2026-06-04  
**Primary sources:**  

- Webex Developer — Integrations and Authorization: <https://developer.webex.com/docs/api/guides/integrations-and-authorization>
- Webex Developer — Run an OAuth Integration: <https://developer.webex.com/docs/run-an-oauth-integration>
- Webex Developer — Login with Webex: <https://developer.webex.com/docs/login-with-webex>

## Overview

Use an OAuth integration when an application needs to call Webex APIs on behalf of a user. The Webex OAuth flow redirects the user to authenticate, prompts for consent to requested scopes, and returns an authorization code to the configured redirect URI.

## Basic OAuth flow

1. Create a Webex integration in the Developer Portal.
2. Define redirect URI.
3. Select required scopes.
4. Send the user to the authorization URL.
5. User signs in and approves scopes.
6. Webex redirects back with an authorization code.
7. Your app exchanges the code for access and refresh tokens.
8. Your app refreshes tokens as needed.

## Common OAuth errors

| Error | Likely cause |
| --- | --- |
| `invalid_client` | Client secret wrong, expired, or from the wrong app. |
| `invalid_grant` | Authorization code expired, reused, or redirect URI mismatch. |
| `invalid_scope` | Scope typo or unsupported scope. |
| Redirect URI mismatch | App callback URL does not exactly match the registered redirect URI. |
| 401 Unauthorized | Missing/expired token or wrong Authorization header. |
| 403 Forbidden | Token is valid but lacks permission/scope or the user lacks access. |

## Production guidance

- Store client secrets securely.
- Never expose the client secret in browser-only code.
- Store refresh tokens securely.
- Log correlation IDs and timestamps for troubleshooting.
- Request only the scopes required.
