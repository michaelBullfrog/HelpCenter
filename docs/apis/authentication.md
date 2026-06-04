# Webex API Authentication

```yaml
product_area: Webex APIs
last_reviewed: 2026-06-04
audience: developers and automation engineers
source_type: Official Webex Developer documentation
```

## Purpose

Document authentication patterns for Webex APIs.

## Main patterns

| Pattern | Use when |
|---|---|
| Personal access token | Testing in developer portal only. Do not use for production. |
| OAuth integration | App acts on behalf of an authorized user. |
| Bot token | Bot interacts with messaging spaces and supported bot operations. |
| Service app / machine-style authorization | Admin-approved backend automation where supported by the Webex product area. |

## Security rules

- Never commit tokens, client secrets, refresh tokens, or private keys.
- Store secrets in GitHub Actions secrets, a secrets manager, or environment variables.
- Document required scopes per integration.
- Add token expiration and refresh handling notes.

## Official sources

- https://developer.webex.com/docs
- https://developer.webex.com/create/docs/integrations
