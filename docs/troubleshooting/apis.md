# TS APIs

Use this playbook for Webex API and automation issues.

## Common symptoms

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 409 Conflict
- 429 Too Many Requests
- Webhook not firing
- OAuth refresh failure
- Missing scope errors

## First checks

1. Confirm the endpoint, method, and request body.
2. Confirm token type: personal access token, OAuth token, bot token, or service app token.
3. Validate required scopes.
4. Check whether the token user has the required admin role.
5. Confirm the org ID, user ID, person ID, room ID, or workspace ID.
6. Capture the full response body, status code, trace ID, and timestamp.

## Escalation packet

Include:

- Endpoint and HTTP method
- Redacted request body
- Redacted headers
- Status code and response body
- Token type
- Scopes requested/granted
- Timestamp and trace ID
