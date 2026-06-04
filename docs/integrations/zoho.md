# Zoho Integration

```yaml
product_area: Webex integrations
last_reviewed: 2026-06-04
audience: implementation engineers and CRM admins
source_type: Internal implementation notes plus official API documentation
```

## Purpose

Document Webex-to-Zoho workflows such as logging calls, creating notes, mapping inbound/outbound calls, handling OAuth refresh, and validating CRM fields.

## Implementation notes

- Store call notes in the Notes section when the workflow requires it, not only in the call description field.
- Confirm required Zoho fields such as Who_Id or What_Id for scheduled/outbound calls.
- Normalize timestamps and document timezone behavior clearly.
