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


## Clerk Chat and FirstDigital tabs added

This version adds:

### Clerk Chat
- Customer setup process
- Pre-onboarding checklist
- Webex setup workflow
- Number enablement
- 10DLC / toll-free verification / compliance notes
- Features
- Operational configuration
- Go-live testing
- Troubleshooting
- Escalation packet

### FirstDigital
- Enterprise voice overview
- Porting requirements
- Local/toll-free/wireless porting notes
- CSR and rejection prevention
- Port project plan
- Inbound/outbound troubleshooting
- Call quality troubleshooting
- Fax/ATA/paging troubleshooting
- Port delay/rejection troubleshooting
- Emergency calling checklist
- Escalation packet


## FirstDigital updates

This version:

- Removes these FirstDigital links:
  - Webex Calling documentation
  - Webex Contact Center documentation
  - Configure Webex Calling
- Adds downloadable PDF files:
  - `FirstDigital_LOA.pdf`
  - `FirstDigital_Toll_Free_LOA.pdf`
- Adds an interactive FirstDigital port submission checklist form.
- Adds `revio-ticket-proxy-example.py` as a secure backend example for submitting the form to Rev.io PSA.

## Rev PSA form note

The static HTML page cannot safely store Rev.io PSA API keys. To enable live submissions:

1. Deploy `revio-ticket-proxy-example.py` to a private backend such as Render.
2. Set the required Rev.io PSA environment variables.
3. Update `script.js`:

```js
window.REVIO_TICKET_ENDPOINT = "https://YOUR-APP.onrender.com/api/revio-ticket";
```

Until the endpoint is configured, the form copies the ticket details so they can be pasted into Rev.io PSA manually.


## FirstDigital form updated to Webex Space

This version changes the FirstDigital submission form to match the requested fields:

- Business Name
- Business Service Address
- Business Phone Number
- Business Contact Name
- Business Contact Phone
- Business Contact Email
- Port or Order
- WebEx User Quantity
- WebEx Work Space Quantity
- WebEx CC Agent Quantity
- DID/Number Quantity
- Are all numbers with the same carrier?
- Toll-Free Number Quantity
- Does the customer want to migrate in phases or all at once?
- What PBX/Phone system are they using today?
- What term should the contract be set to?
- Requested CNAM, 15 character max
- Requested Port Date
- FD Connect Usage

The checklist/form now sits directly under the clickable FirstDigital tab links.

## Webex Space submission

The static GitHub Pages site cannot safely store a Webex bot token. To enable live Webex Space submissions:

1. Deploy `webex-space-proxy-example.py` to a private backend such as Render.
2. Set:
   - `WEBEX_BOT_TOKEN`
   - `WEBEX_ROOM_ID`
3. Update `script.js`:

```js
window.WEBEX_SPACE_ENDPOINT = "https://YOUR-APP.onrender.com/api/webex-space-message";
```

Until the endpoint is configured, the form copies the Webex Space message so it can be pasted manually.
