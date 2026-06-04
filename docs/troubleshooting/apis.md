# TS: Webex APIs

Use this page for Webex API issues involving integrations, bots, OAuth, personal access tokens, service apps, webhooks, scopes, and API responses.

## First checks

- Confirm the API endpoint being used.
- Confirm whether the request is using a personal access token, bot token, OAuth integration, or service app.
- Confirm the token has the required scopes.
- Confirm the authenticated identity has permission to access the requested org, user, device, meeting, room, or contact center resource.
- Confirm the full HTTP status code and response body.

## Common API errors

| Error | Likely cause |
|---|---|
| 400 Bad Request | Missing or invalid field, wrong payload format |
| 401 Unauthorized | Expired token, invalid token, wrong auth type |
| 403 Forbidden | Missing scope or insufficient admin permission |
| 404 Not Found | Wrong ID, resource not visible to token, wrong org context |
| 409 Conflict | Duplicate resource or webhook already exists |
| 429 Too Many Requests | Rate limiting |

## OAuth checklist

1. Confirm redirect URI exactly matches the integration configuration.
2. Confirm the authorization URL includes required scopes.
3. Confirm the authorization code is exchanged only once.
4. Confirm refresh token storage is secure and persistent.
5. Confirm token refresh logic updates stored credentials.

## Webhook checklist

- Confirm resource and event type.
- Confirm target URL is publicly reachable over HTTPS.
- Confirm webhook secret validation if configured.
- Confirm duplicate webhooks are not being created.
- Log request headers and payloads safely without storing sensitive data unnecessarily.

## Evidence to collect

- Endpoint path
- HTTP method
- Status code
- Response body
- Auth type, not the actual token
- Required scopes
- Timestamp and timezone
- Correlation or tracking ID when available
