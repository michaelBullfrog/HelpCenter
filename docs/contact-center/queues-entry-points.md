# Queues and Entry Points

**Product area:** Webex Contact Center  
**Audience:** Contact center administrators, implementation engineers, support teams  
**Last reviewed:** 2026-06-04  
**Primary source:** Webex Help Center — Webex Contact Center Documentation: <https://help.webex.com/en-us/article/n2re5jy/Webex-Contact-Center-Documentation>

## Overview

Entry points and queues are core routing objects. Entry points are where interactions enter the contact center routing design. Queues are where contacts wait to be distributed to agents or teams.

## Design questions

Before building entry points and queues, document:

- What number or channel starts the interaction?
- What department or skill should receive it?
- What business hours apply?
- What should happen after hours?
- What should happen on holidays?
- Should callers hear estimated wait time, position, callback options, or custom prompts?
- What overflow behavior is required?
- Which agents or teams should receive contacts?

## Queue validation checklist

- Test open-hours routing.
- Test after-hours routing.
- Test holiday routing.
- Test no-agent-available behavior.
- Test overflow behavior.
- Test supervisor visibility.
- Confirm reporting appears in Analyzer.

## Common mistakes

| Mistake | Impact |
| --- | --- |
| Queue created without business-hour logic | Calls may route incorrectly after hours. |
| Entry point not connected to intended flow | Calls may fail or use default behavior. |
| Agents not assigned correctly | Queue appears built but cannot deliver contacts. |
| Reporting not validated | Customer cannot confirm operational metrics. |
