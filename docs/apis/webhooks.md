# Webex Webhooks

```yaml
product_area: Webex APIs
last_reviewed: 2026-06-04
audience: developers and automation engineers
source_type: Official Webex Developer documentation
```

## Purpose

Document webhook creation, validation, delivery troubleshooting, duplicate handling, and security.

## Checklist

- Confirm target URL is public HTTPS.
- Confirm the selected resource and event are correct.
- Confirm the integration token has the required scopes.
- Log webhook IDs and status.
- Handle duplicate webhook creation errors gracefully.
- Validate webhook payloads without logging sensitive content unnecessarily.
