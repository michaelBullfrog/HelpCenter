# Webex Help Center - Expanded Static HTML Version

This version avoids the `assets` folder to make GitHub Pages uploads simpler.

## Files

Upload these files directly into the root of your `HelpCenter` repository:

```text
index.html
styles.css
script.js
README.md
bullfrog-logo.png
```

## GitHub Pages settings

Go to GitHub → Settings → Pages and use:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

## Important

The logo file must be in the same folder as `index.html`.

The HTML references it like this:

```html
<img src="bullfrog-logo.png" alt="Bullfrog logo" />
```

So do not put the logo inside an `assets` folder unless you also update the image path.


## Device section expansion

This version adds deeper device coverage, including:

- Cisco ATA 191/192
- Analog phones, fax, and paging use cases
- Room Kit Pro / Codec Pro
- Room Kit EQ / Codec EQ
- RoomOS upgrade notes
- Room Navigator and touch controller notes
- Content sharing
- Room setup best practices
- Network and proxy checks
- Device inventory template
