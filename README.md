# Webex Help Center - Static HTML Version

This version is intentionally simple and GitHub Pages friendly.

It does **not** require:

- MkDocs
- Python
- GitHub Actions
- npm
- build tools

## Files

```text
index.html
styles.css
script.js
assets/bullfrog-logo.png
README.md
```

## How to publish on GitHub Pages

1. Copy these files into the root of your `HelpCenter` repository.
2. Commit and push to `main`.
3. Go to GitHub → Settings → Pages.
4. Set:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
5. Save.

Your site should publish at:

```text
https://michaelbullfrog.github.io/HelpCenter/
```

## What's new in this version

- Bullfrog logo added to the banner.
- Dark mode button now shows a moon.
- Light mode button now shows a sun.
- Added official Webex Help Center links throughout the pages.
- Added expanded source links by category.
- Added extra troubleshooting and escalation packet content.

## How to edit articles

Edit `index.html`.

Each help article is an `<article class="article-card">` block. Copy one and paste it into the section you want.

## How to add a new tab

1. Add a button in the sidebar:

```html
<button class="tab" data-tab="new-section">New Section</button>
```

2. Add a matching panel:

```html
<section id="new-section" class="panel">
  <h2>New Section</h2>
</section>
```

No other JavaScript changes are needed.
