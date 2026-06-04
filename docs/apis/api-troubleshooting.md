# API Troubleshooting

**Product area:** Webex APIs  
**Audience:** Developers, automation engineers, support teams  
**Last reviewed:** 2026-06-04  
**Primary source:** Webex for Developers: <https://developer.webex.com/>

## Quick triage

When an API call fails, collect:

- Endpoint
- HTTP method
- Timestamp with time zone
- Response code
- Response body
- Request body with secrets removed
- Token type used
- Scopes requested
- User or bot identity used
- Organization/customer context

## Common HTTP responses

| Code | Meaning | What to check |
| --- | --- | --- |
| 400 | Bad request | JSON body, required fields, invalid values. |
| 401 | Unauthorized | Missing token, expired token, invalid token, wrong header. |
| 403 | Forbidden | Missing scope, missing user/admin permission, wrong org. |
| 404 | Not found | Wrong ID, wrong org, deleted object, endpoint mismatch. |
| 409 | Conflict | Duplicate object, existing webhook, state conflict. |
| 429 | Rate limited | Too many requests; add backoff/retry logic. |
| 500/502/503 | Server/service issue | Retry carefully, check status, collect correlation details. |

## Safe logging

Log enough to troubleshoot without exposing secrets:

- Log URL path, not tokens.
- Redact Authorization headers.
- Redact refresh tokens, client secrets, and API keys.
- Log request IDs or tracking IDs when returned.
- Log the user/customer context separately from secrets.

## Escalation packet

Include:

- Business impact
- Endpoint and method
- Exact timestamp with time zone
- Response code and body
- Sanitized request payload
- Token scopes
- Reproduction steps
- Whether the issue is consistent or intermittent
