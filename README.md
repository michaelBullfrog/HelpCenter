# Webex Knowledge Base

A clean, GitHub-hosted Webex knowledge base for administrators, engineers, support teams, and developers.

## Goals

- Keep Webex documentation accurate and source-backed.
- Separate admin, support, engineering, and API/developer content.
- Make common tasks easy to find.
- Track source links, last-reviewed dates, and product-area ownership.

## Local preview

```bash
pip install -r requirements.txt
mkdocs serve
```

Open the local URL shown in your terminal.

## Publish with GitHub Pages

This repository includes a GitHub Actions workflow that builds and publishes the MkDocs site to GitHub Pages.

In GitHub, go to **Settings > Pages > Build and deployment > Source** and select **GitHub Actions**.

## Documentation standards

Every article should include:

- Product area
- Audience
- Last reviewed date
- Official source links
- Applies to / does not apply to
- Step-by-step procedure or explanation
- Validation steps
- Common errors
