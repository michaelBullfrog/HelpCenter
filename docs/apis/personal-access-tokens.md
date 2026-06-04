# Personal Access Tokens

**Product area:** Webex APIs  
**Audience:** Developers, testers, support engineers  
**Last reviewed:** 2026-06-04  
**Primary source:** Webex Developer — Getting and Using your Personal Access Token: <https://developer.webex.com/docs/getting-your-personal-access-token>

## Overview

A personal access token is useful for testing Webex API calls as your own user. Cisco notes that Webex REST API requests must include an API access token in the Authorization header with the proper scopes for the requested resource.

## Use personal access tokens for

- Quick endpoint testing
- Lab scripts
- Learning the API
- Confirming permissions and response shape

## Do not use personal access tokens for

- Production applications
- Customer-facing automation
- Long-running scheduled jobs
- Shared scripts committed to GitHub

## Example header

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
```

## Security rules

- Never commit a token to GitHub.
- Never paste a token into public tickets or chats.
- Rotate exposed credentials immediately.
- Use environment variables for local testing.
- Use OAuth integrations or bot tokens for production, depending on the use case.
