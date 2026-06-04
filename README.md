# Webex Knowledge Base

This repository powers the Webex Knowledge Base hosted at:

https://michaelbullfrog.github.io/HelpCenter/

## Local preview

```bash
pip install -r requirements.txt
mkdocs serve
```

## Deploy

Push to `main`. The GitHub Actions workflow at `.github/workflows/deploy.yml` builds the MkDocs site and deploys it to GitHub Pages.

In GitHub, set **Settings → Pages → Source** to **GitHub Actions**.
