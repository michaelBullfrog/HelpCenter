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


## Global search update

The search bar now searches across all tabs at once.

When a search term is entered:

- All matching articles and documentation links are listed in a search results view.
- Results show the matching section/tab.
- Clicking a result opens the correct tab and scrolls to the matching article.
- The selected article is temporarily highlighted.


## Meraki tab added

This version adds a Cisco Meraki tab covering:

- Dashboard structure
- Organizations and networks
- Licensing
- Firmware management
- MX Security & SD-WAN
- VPN and AutoVPN
- Firewall and NAT
- MS Switching
- MR Wireless
- MG Cellular Gateways
- MV Smart Cameras
- MT Sensors
- Systems Manager
- Alerts and monitoring
- Meraki Dashboard API
- Troubleshooting tools
- Escalation packet
