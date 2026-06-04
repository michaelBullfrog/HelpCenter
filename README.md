<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Webex Help Center</title>
  <meta name="description" content="A static Webex and Webex Contact Center knowledge base with tabs, search, official links, and troubleshooting articles." />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="brand">
      <div class="logo-wrap" aria-label="Bullfrog Group logo">
        <img src="assets/bullfrog-logo.png" alt="Bullfrog logo" />
      </div>
      <div>
        <span class="eyebrow">Bullfrog Group Knowledge Base</span>
        <h1>Webex Help Center</h1>
        <p>Expanded Webex and Webex Contact Center help articles, troubleshooting playbooks, and official documentation links.</p>
      </div>
    </div>
    <div class="header-actions">
      <button id="themeToggle" class="ghost-btn theme-btn" type="button" aria-label="Toggle dark or light mode">
        <span id="themeIcon" aria-hidden="true">🌙</span>
        <span id="themeText">Dark Mode</span>
      </button>
      <a class="primary-btn" href="#sources" data-jump="sources">Official sources</a>
    </div>
  </header>

  <main class="layout">
    <aside class="sidebar">
      <label class="search-label" for="searchInput">Search articles</label>
      <input id="searchInput" type="search" placeholder="Search queues, OAuth, call quality..." />

      <nav class="tabs" aria-label="Knowledge base sections">
        <button class="tab active" data-tab="overview">Overview</button>
<button class="tab" data-tab="control-hub">Control Hub</button>
<button class="tab" data-tab="calling">Calling</button>
<button class="tab" data-tab="contact-center">Contact Center</button>
<button class="tab" data-tab="devices">Devices</button>
<button class="tab" data-tab="meetings">Meetings</button>
<button class="tab" data-tab="apis">APIs</button>
<button class="tab" data-tab="troubleshooting">Troubleshooting</button>
<button class="tab" data-tab="sources">Sources</button>
      </nav>
    </aside>

    <section class="content">
      <section id="overview" class="panel active">
  <div class="section-header">
    <span class="eyebrow">Overview</span>
    <h2>Overview</h2>
    <p>A practical Webex and Webex Contact Center knowledge base for admins, engineers, support teams, and customers.</p>
  </div>
  <div class="link-grid">
    <a class="doc-link" href="https://help.webex.com/" target="_blank" rel="noopener">Webex Help Center</a>
<a class="doc-link" href="https://developer.webex.com/" target="_blank" rel="noopener">Webex Developer Portal</a>
<a class="doc-link" href="https://admin.webex.com/" target="_blank" rel="noopener">Control Hub</a>
<a class="doc-link" href="https://status.webex.com/" target="_blank" rel="noopener">Webex Status</a>
  </div>
  <article class="article-card" data-keywords="how to use this knowledge base">
  <h3>How to use this knowledge base</h3>
  <ul>
    <li>Start with the product area tab, then use the search box for terms like queues, OAuth, call quality, Agent Desktop, devices, or routing.</li>
<li>Each article is written as a practical support guide. Official documentation links are included throughout the site so you can verify current product behavior.</li>
<li>Use Troubleshooting for live incidents and Sources for documentation research.</li>
  </ul>
</article>
<article class="article-card" data-keywords="source-of-truth rule">
  <h3>Source-of-truth rule</h3>
  <ul>
    <li>Use official Webex Help Center and Webex Developer documentation first.</li>
<li>Use lab notes, customer notes, and field experience as supporting evidence, not as replacements for official product documentation.</li>
<li>Add a reviewed date when expanding customer-facing articles.</li>
  </ul>
</article>
<article class="article-card" data-keywords="recommended support flow">
  <h3>Recommended support flow</h3>
  <ul>
    <li>Identify the product area: Control Hub, Calling, Contact Center, Meetings, Devices, or APIs.</li>
<li>Collect exact examples: affected user, number, device, queue, meeting, org, timestamp, timezone, screenshot, and business impact.</li>
<li>Check recent changes in Control Hub, network, carrier, identity provider, device assignment, Contact Center flow, or integration code.</li>
<li>Use the escalation packet template before opening or escalating a vendor ticket.</li>
  </ul>
</article>
<article class="article-card" data-keywords="phase roadmap">
  <h3>Phase roadmap</h3>
  <ul>
    <li>Phase 1: Static site, tabs, search, logo, official documentation links, and starter articles.</li>
<li>Phase 2: Expand practical troubleshooting playbooks.</li>
<li>Phase 3: Add screenshots, diagrams, customer-facing how-to guides, and internal SOPs.</li>
<li>Phase 4: Add API examples, Postman collections, webhook examples, and automation patterns.</li>
<li>Phase 5: Add release review process, content owners, and scheduled documentation audits.</li>
  </ul>
</article>
</section><section id="control-hub" class="panel">
  <div class="section-header">
    <span class="eyebrow">Control Hub</span>
    <h2>Control Hub</h2>
    <p>Administration, identity, users, licensing, roles, locations, workspaces, analytics, and service management.</p>
  </div>
  <div class="link-grid">
    <a class="doc-link" href="https://help.webex.com/en-us/article/nkhozs6/get-started-with-control-hub" target="_blank" rel="noopener">Get started with Control Hub</a>
<a class="doc-link" href="https://help.webex.com/en-us/administration" target="_blank" rel="noopener">Administration help</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/fs78p5/Assign-organization-account-roles-in-Control-Hub" target="_blank" rel="noopener">Assign organization account roles</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/ajh6iy/Locations-in-Control-Hub" target="_blank" rel="noopener">Locations in Control Hub</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/u9dlxd/What&#x27;s-new-in-Control-Hub" target="_blank" rel="noopener">What&#x27;s new in Control Hub</a>
  </div>
  <article class="article-card" data-keywords="control hub overview">
  <h3>Control Hub overview</h3>
  <ul>
    <li>Control Hub is the central administrative portal for Webex services, users, roles, locations, workspaces, devices, analytics, and troubleshooting.</li>
<li>Use it to manage Webex Calling, Meetings, Messaging, Contact Center access, devices, hybrid services, and organization-level settings.</li>
<li>For support, always confirm whether the issue is caused by user configuration, licensing, role permissions, location settings, network conditions, or service health.</li>
  </ul>
</article>
<article class="article-card" data-keywords="admin role types">
  <h3>Admin role types</h3>
  <ul>
    <li>Full administrators can broadly manage organization settings.</li>
<li>Read-only administrators are useful for audits and support visibility.</li>
<li>Support administrators are useful for troubleshooting without full configuration rights.</li>
<li>Location administrators should be used when a user only manages specific locations.</li>
<li>Device administrators focus on device and workspace management.</li>
<li>Compliance roles should be limited and reviewed carefully.</li>
  </ul>
</article>
<article class="article-card" data-keywords="user lifecycle checklist">
  <h3>User lifecycle checklist</h3>
  <ul>
    <li>Create or synchronize the user.</li>
<li>Confirm email address and identity status.</li>
<li>Apply license templates or manually assign licenses.</li>
<li>Assign location and calling details if needed.</li>
<li>Assign Contact Center profiles, teams, and privileges if applicable.</li>
<li>Send or resend activation email if required.</li>
<li>Validate Webex App sign-in and service access.</li>
  </ul>
</article>
<article class="article-card" data-keywords="licensing checklist">
  <h3>Licensing checklist</h3>
  <ul>
    <li>Confirm the subscription contains the needed service.</li>
<li>Confirm the user has the right license type.</li>
<li>Check license templates for automatic assignment behavior.</li>
<li>Review whether Calling, Meetings, Messaging, Contact Center, and device entitlements are all needed.</li>
<li>Remove stale licenses from inactive users to preserve capacity.</li>
  </ul>
</article>
<article class="article-card" data-keywords="groups and templates">
  <h3>Groups and templates</h3>
  <ul>
    <li>Use groups to simplify license assignment and policy control.</li>
<li>Confirm group membership is accurate before troubleshooting missing services.</li>
<li>When using directory sync or identity provider groups, validate the sync source before changing users manually.</li>
<li>Document which groups drive licenses and which groups drive policies.</li>
  </ul>
</article>
<article class="article-card" data-keywords="locations best practices">
  <h3>Locations best practices</h3>
  <ul>
    <li>Use consistent location names, such as City - Office Name.</li>
<li>Confirm the physical address before enabling Calling and emergency services.</li>
<li>Document PSTN provider, emergency calling settings, devices, numbers, and schedules per location.</li>
<li>Use locations to organize devices, workspaces, numbers, and regional administration.</li>
  </ul>
</article>
<article class="article-card" data-keywords="workspaces">
  <h3>Workspaces</h3>
  <ul>
    <li>Use workspaces for shared rooms, lobbies, conference rooms, warehouses, breakrooms, and common-area devices.</li>
<li>Confirm whether the workspace needs Calling, Meetings, device calendar integration, or just room/device management.</li>
<li>For Calling workspaces, assign a valid location, number or extension, and supported device.</li>
  </ul>
</article>
<article class="article-card" data-keywords="analytics and troubleshooting">
  <h3>Analytics and troubleshooting</h3>
  <ul>
    <li>Use Control Hub analytics for adoption, quality, service usage, and operational trends.</li>
<li>Use troubleshooting views for meeting, call, and device investigations when available.</li>
<li>For live issues, collect examples before data ages out or becomes harder to correlate.</li>
<li>Compare affected users with unaffected users in the same location, network, or device type.</li>
  </ul>
</article>
<article class="article-card" data-keywords="change management">
  <h3>Change management</h3>
  <ul>
    <li>Before making changes, capture current settings or screenshots.</li>
<li>Document the reason for change, affected users, planned rollback, and validation steps.</li>
<li>After changes, place a controlled test call or service test.</li>
<li>For customer environments, avoid undocumented changes during production hours unless there is an urgent business impact.</li>
  </ul>
</article>
</section><section id="calling" class="panel">
  <div class="section-header">
    <span class="eyebrow">Calling</span>
    <h2>Calling</h2>
    <p>Webex Calling setup, numbers, PSTN, devices, queues, auto attendants, routing, schedules, voicemail, and call quality.</p>
  </div>
  <div class="link-grid">
    <a class="doc-link" href="https://help.webex.com/en-us/landing/ld-nzid8xi-WebexCalling" target="_blank" rel="noopener">Webex Calling documentation hub</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/32gfts/Webex-Calling-Configuration-Workflow" target="_blank" rel="noopener">Webex Calling configuration workflow</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/njvdjf2/Configure-Webex-Calling-for-your-organization" target="_blank" rel="noopener">Configure Webex Calling</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/nzkg083/Configure-Call-Queue" target="_blank" rel="noopener">Configure Call Queue</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/nsioxoi/Manage-auto-attendants-in-Control-Hub" target="_blank" rel="noopener">Manage auto attendants</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/n9r1aac/Configure-and-manage-Webex-Calling-devices" target="_blank" rel="noopener">Calling devices</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/fozeml/Call-routing-based-on-operating-modes-in-Webex-Calling" target="_blank" rel="noopener">Call routing based on operating modes</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/4xgekbb/Get-started-with-the-Attendant-Console" target="_blank" rel="noopener">Attendant Console</a>
  </div>
  <article class="article-card" data-keywords="calling setup workflow">
  <h3>Calling setup workflow</h3>
  <ul>
    <li>Confirm location and emergency address.</li>
<li>Configure PSTN or confirm provider configuration.</li>
<li>Add or port phone numbers.</li>
<li>Assign licenses to users.</li>
<li>Assign numbers and extensions.</li>
<li>Add devices or Webex App calling.</li>
<li>Configure features such as auto attendants, call queues, hunt groups, schedules, voicemail, and call routing.</li>
  </ul>
</article>
<article class="article-card" data-keywords="pstn and number planning">
  <h3>PSTN and number planning</h3>
  <ul>
    <li>Document the PSTN provider and location model.</li>
<li>Track main numbers, DIDs, toll-free numbers, fax numbers, and test numbers.</li>
<li>Keep a number inventory with assignment, location, feature owner, and notes.</li>
<li>Before porting, validate losing carrier details, billing telephone number, service address, and authorized signer.</li>
  </ul>
</article>
<article class="article-card" data-keywords="extensions and dialing plan">
  <h3>Extensions and dialing plan</h3>
  <ul>
    <li>Use a consistent extension length where possible.</li>
<li>Avoid overlapping extensions across locations unless the design explicitly supports it.</li>
<li>Document extension ranges by site, department, or function.</li>
<li>Validate internal dialing, external dialing, emergency dialing, and transfer behavior.</li>
  </ul>
</article>
<article class="article-card" data-keywords="auto attendants">
  <h3>Auto attendants</h3>
  <ul>
    <li>Use auto attendants for menu-based routing.</li>
<li>Document business hours, holiday schedules, menu options, timeout behavior, and invalid-entry handling.</li>
<li>Test open, closed, holiday, and after-hours scenarios.</li>
<li>Keep prompt scripts stored with the configuration notes.</li>
  </ul>
</article>
<article class="article-card" data-keywords="call queues">
  <h3>Call queues</h3>
  <ul>
    <li>Use call queues when callers should wait for available staff.</li>
<li>Document agents, supervisors, queue policy, routing pattern, overflow, stranded calls, night service, holiday service, comfort messages, and music-on-hold behavior.</li>
<li>For support issues, confirm whether agents are signed in, available, and assigned correctly.</li>
<li>Test forced forwarding for emergency routing plans.</li>
  </ul>
</article>
<article class="article-card" data-keywords="hunt groups">
  <h3>Hunt groups</h3>
  <ul>
    <li>Use hunt groups for simple ring patterns where full queue treatment is not required.</li>
<li>Document ring pattern, members, forwarding behavior, and no-answer handling.</li>
<li>Use call queues instead when you need comfort messages, queue policies, supervisors, or deeper reporting.</li>
  </ul>
</article>
<article class="article-card" data-keywords="schedules and holidays">
  <h3>Schedules and holidays</h3>
  <ul>
    <li>Create reusable schedules for business hours and holidays.</li>
<li>Confirm timezone for each schedule.</li>
<li>Validate whether schedules apply to auto attendants, call queues, call forwarding, or operating modes.</li>
<li>Test holiday routing before the holiday date.</li>
  </ul>
</article>
<article class="article-card" data-keywords="voicemail">
  <h3>Voicemail</h3>
  <ul>
    <li>Confirm whether voicemail belongs to a user, group, queue, or shared function.</li>
<li>Document greeting type, notification settings, message delivery, and retention expectations.</li>
<li>For support, test direct-to-voicemail, no-answer voicemail, and after-hours voicemail routing separately.</li>
  </ul>
</article>
<article class="article-card" data-keywords="call forwarding and routing">
  <h3>Call forwarding and routing</h3>
  <ul>
    <li>Check user forwarding, feature forwarding, after-hours routing, selective forwarding, and emergency/forced forwarding.</li>
<li>Trace the call path from number to destination.</li>
<li>Document each hop: main number, auto attendant, queue, user, voicemail, external transfer, or Contact Center entry point.</li>
  </ul>
</article>
<article class="article-card" data-keywords="virtual lines and shared functions">
  <h3>Virtual lines and shared functions</h3>
  <ul>
    <li>Use virtual lines when a line identity needs to appear on multiple devices or users.</li>
<li>Document which users/devices have the line, who owns it operationally, and expected inbound/outbound caller ID behavior.</li>
<li>Validate emergency calling and callback expectations.</li>
  </ul>
</article>
<article class="article-card" data-keywords="attendant console">
  <h3>Attendant Console</h3>
  <ul>
    <li>Use Attendant Console for receptionist/operator style workflows.</li>
<li>Confirm the user is licensed and enabled in Control Hub.</li>
<li>Validate monitored users, calling behavior, transfer workflows, and browser compatibility.</li>
<li>Document which users or departments should appear in the console.</li>
  </ul>
</article>
<article class="article-card" data-keywords="call quality fundamentals">
  <h3>Call quality fundamentals</h3>
  <ul>
    <li>Collect caller, callee, timestamp, timezone, device, network, and symptom.</li>
<li>Separate signaling/routing problems from media quality problems.</li>
<li>Common quality symptoms include jitter, delay, packet loss, dropped calls, robotic audio, no audio, and one-way audio.</li>
<li>Compare wired vs Wi-Fi, Webex App vs desk phone, and office network vs mobile hotspot when isolating issues.</li>
  </ul>
</article>
</section><section id="contact-center" class="panel">
  <div class="section-header">
    <span class="eyebrow">Contact Center</span>
    <h2>Contact Center</h2>
    <p>Tenant setup, roles, users, teams, profiles, queues, entry points, flows, Agent Desktop, supervisors, Analyzer, recordings, routing, and operations.</p>
  </div>
  <div class="link-grid">
    <a class="doc-link" href="https://help.webex.com/en-us/article/n2re5jy/Webex-Contact-Center-Documentation" target="_blank" rel="noopener">Webex Contact Center documentation</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/n5595zd/Webex-Contact-Center-Setup-and-Administration-Guide" target="_blank" rel="noopener">Setup and Administration Guide</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/nee1mb6/Get-Started-with-Webex-Contact-Center" target="_blank" rel="noopener">Get started with Webex Contact Center</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/n5jdj19/Webex-Contact-Center-Administrator-Roles-and-Privileges" target="_blank" rel="noopener">Administrator roles and privileges</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/tajemk/Cisco-Webex-Contact-Center-Analyzer-User-Guide" target="_blank" rel="noopener">Analyzer User Guide</a>
<a class="doc-link" href="https://help.webex.com/article/nv7abhz/What&#x27;s-new-for-administrators-in-Webex-Contact-Center" target="_blank" rel="noopener">What&#x27;s new for administrators</a>
<a class="doc-link" href="https://help.webex.com/landing/ld-93x1hg-ContactCenter/Administrator?subTab=Webex-Contact-Center&amp;type=complex" target="_blank" rel="noopener">Contact Center admin landing page</a>
  </div>
  <article class="article-card" data-keywords="contact center setup workflow">
  <h3>Contact Center setup workflow</h3>
  <ul>
    <li>Confirm subscription, region, tenant, and licensing.</li>
<li>Complete setup in Control Hub.</li>
<li>Assign Contact Center roles and licenses.</li>
<li>Create users, teams, sites, profiles, queues, entry points, and flows.</li>
<li>Validate Agent Desktop, supervisor access, reporting, recordings, and call routing.</li>
<li>Run end-to-end test calls for each entry point and business scenario.</li>
  </ul>
</article>
<article class="article-card" data-keywords="roles and privileges">
  <h3>Roles and privileges</h3>
  <ul>
    <li>Contact Center administration depends on Control Hub roles and Contact Center privileges.</li>
<li>Validate whether the user needs full administration, provisioning administration, supervisor capabilities, reporting, or read-only access.</li>
<li>For troubleshooting access issues, confirm license, role, team assignment, and profile assignment.</li>
  </ul>
</article>
<article class="article-card" data-keywords="users, teams, and sites">
  <h3>Users, teams, and sites</h3>
  <ul>
    <li>Users need correct licensing and Contact Center assignment.</li>
<li>Teams define operational groupings for routing, management, and reporting.</li>
<li>Sites or equivalent organization structures should match operational support needs.</li>
<li>Document which supervisors manage each team and which queues route to them.</li>
  </ul>
</article>
<article class="article-card" data-keywords="profiles overview">
  <h3>Profiles overview</h3>
  <ul>
    <li>Agent profiles control agent capabilities and experience.</li>
<li>Desktop profiles influence what the agent can see and do in Agent Desktop.</li>
<li>Multimedia profiles control channel capacity and interaction handling.</li>
<li>User profiles and skill/profile settings should be documented before troubleshooting routing problems.</li>
  </ul>
</article>
<article class="article-card" data-keywords="entry points">
  <h3>Entry points</h3>
  <ul>
    <li>Entry points are the front door for customer interactions.</li>
<li>Document the phone number/DNIS, channel, business purpose, flow, queue path, and fallback behavior.</li>
<li>For support, confirm that the number actually reaches the expected entry point before troubleshooting the flow.</li>
  </ul>
</article>
<article class="article-card" data-keywords="queues">
  <h3>Queues</h3>
  <ul>
    <li>Queues hold contacts waiting for agents or routing decisions.</li>
<li>Document queue name, team/agent mapping, routing strategy, skills, overflow, callback, and reporting owner.</li>
<li>For abandoned-call issues, check business hours, queue treatment, staffing, routing logic, and reporting definitions.</li>
  </ul>
</article>
<article class="article-card" data-keywords="flows">
  <h3>Flows</h3>
  <ul>
    <li>Flows define customer experience and routing logic.</li>
<li>Document prompts, menus, variables, queues, transfers, error handling, timeouts, retries, and closed-hours logic.</li>
<li>Keep a test plan for each flow: open, closed, holiday, invalid input, no input, transfer fail, queue fail, callback, and emergency routing.</li>
  </ul>
</article>
<article class="article-card" data-keywords="business hours and holidays">
  <h3>Business hours and holidays</h3>
  <ul>
    <li>Business-hour logic should be documented outside the flow as a support reference.</li>
<li>Confirm timezone, holidays, special closures, and emergency closure handling.</li>
<li>Test closed routing before go-live and before major holidays.</li>
  </ul>
</article>
<article class="article-card" data-keywords="agent desktop">
  <h3>Agent Desktop</h3>
  <ul>
    <li>Validate supported browser, login URL, user license, team, profile, dial number, and audio permissions.</li>
<li>Common issues include login failure, stuck state, no calls, wrong wrap-up codes, browser pop-up blocking, and audio device problems.</li>
<li>Collect screenshots and timestamps for desktop issues.</li>
  </ul>
</article>
<article class="article-card" data-keywords="supervisor workflows">
  <h3>Supervisor workflows</h3>
  <ul>
    <li>Supervisors need correct privileges and team visibility.</li>
<li>Validate monitoring, coaching, reporting, queue visibility, team assignments, and real-time dashboards.</li>
<li>When a supervisor cannot see agents or queues, compare their assigned privileges and team scope with a working supervisor.</li>
  </ul>
</article>
<article class="article-card" data-keywords="analyzer and reporting">
  <h3>Analyzer and reporting</h3>
  <ul>
    <li>Analyzer provides stock and custom reporting for Contact Center operations.</li>
<li>Define metric owners and agreed business definitions for handled, abandoned, presented, service level, ASA, AHT, occupancy, and wrap-up reporting.</li>
<li>For report disputes, confirm timezone, filter, queue, team, channel, interval, and whether the metric definition matches the customer expectation.</li>
  </ul>
</article>
<article class="article-card" data-keywords="recordings and transcripts">
  <h3>Recordings and transcripts</h3>
  <ul>
    <li>Document recording policy, retention expectation, access roles, and compliance requirements.</li>
<li>For missing recordings, collect contact ID/call example, agent, queue, timestamp, and whether recording was expected for that interaction.</li>
<li>Validate whether the issue is policy, permission, availability, retention, or search criteria.</li>
  </ul>
</article>
<article class="article-card" data-keywords="callbacks">
  <h3>Callbacks</h3>
  <ul>
    <li>Document when callback is offered, queue threshold, customer experience, retries, caller ID, and reporting expectations.</li>
<li>Test callback during normal hours, near closing time, and high-volume conditions.</li>
<li>For callback complaints, confirm whether the customer selected callback, whether the callback was created, and whether an agent accepted it.</li>
  </ul>
</article>
<article class="article-card" data-keywords="digital channels">
  <h3>Digital channels</h3>
  <ul>
    <li>Document each enabled digital channel, routing path, team ownership, hours, and templates.</li>
<li>Confirm whether issues are channel provider, Contact Center routing, agent desktop visibility, or customer expectation.</li>
<li>Validate channel-specific capacity and multimedia profile settings.</li>
  </ul>
</article>
<article class="article-card" data-keywords="operational governance">
  <h3>Operational governance</h3>
  <ul>
    <li>Maintain a configuration workbook for entry points, queues, flows, teams, profiles, numbers, schedules, and reporting owners.</li>
<li>Use change windows for flow or routing changes.</li>
<li>After changes, run a standard test call matrix and document results.</li>
<li>Keep a rollback plan for every major change.</li>
  </ul>
</article>
</section><section id="devices" class="panel">
  <div class="section-header">
    <span class="eyebrow">Devices</span>
    <h2>Devices</h2>
    <p>Phones, workspaces, activation codes, shared devices, registration, network checks, and device support playbooks.</p>
  </div>
  <div class="link-grid">
    <a class="doc-link" href="https://help.webex.com/en-us/article/n9r1aac/Configure-and-manage-Webex-Calling-devices" target="_blank" rel="noopener">Configure and manage Calling devices</a>
<a class="doc-link" href="https://help.webex.com/en-us/administration/devices" target="_blank" rel="noopener">Devices and Workspaces help</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/ajh6iy/Locations-in-Control-Hub" target="_blank" rel="noopener">Locations in Control Hub</a>
  </div>
  <article class="article-card" data-keywords="device assignment basics">
  <h3>Device assignment basics</h3>
  <ul>
    <li>Assign personal devices to users and shared devices to workspaces.</li>
<li>Confirm location, license, number/extension, and device compatibility.</li>
<li>Use activation codes when staging devices without manually entering all configuration.</li>
  </ul>
</article>
<article class="article-card" data-keywords="workspace devices">
  <h3>Workspace devices</h3>
  <ul>
    <li>Use workspace devices for conference rooms, lobby phones, common areas, warehouses, and shared spaces.</li>
<li>Document room name, location, device model, extension, emergency location, and support owner.</li>
<li>Confirm whether the device is used for calling, meetings, calendar, or shared-line scenarios.</li>
  </ul>
</article>
<article class="article-card" data-keywords="phone registration checklist">
  <h3>Phone registration checklist</h3>
  <ul>
    <li>Confirm model and MAC address.</li>
<li>Confirm user/workspace assignment.</li>
<li>Confirm activation code if used.</li>
<li>Confirm IP address, gateway, DNS, and internet access.</li>
<li>Reboot after configuration changes.</li>
<li>Factory reset only after assignment and network basics are validated.</li>
  </ul>
</article>
<article class="article-card" data-keywords="device move checklist">
  <h3>Device move checklist</h3>
  <ul>
    <li>Before moving a phone, document current user/workspace, location, number, extension, and emergency address.</li>
<li>After moving, validate network, location, emergency calling settings, and caller ID behavior.</li>
<li>For cross-site moves, confirm whether number and emergency settings need to change.</li>
  </ul>
</article>
<article class="article-card" data-keywords="headset and audio checks">
  <h3>Headset and audio checks</h3>
  <ul>
    <li>Confirm headset model, connection type, firmware, and default audio device.</li>
<li>Test with Webex App and another application.</li>
<li>For desk phones, validate handset, speakerphone, headset port, and cable.</li>
<li>For intermittent issues, compare wired headset, Bluetooth headset, and built-in audio.</li>
  </ul>
</article>
</section><section id="meetings" class="panel">
  <div class="section-header">
    <span class="eyebrow">Meetings</span>
    <h2>Meetings</h2>
    <p>Meeting join issues, audio/video, calendar, hosts, participants, room devices, and support intake.</p>
  </div>
  <div class="link-grid">
    <a class="doc-link" href="https://help.webex.com/en-us/landing/ld-7srxjs-WebexMeetings" target="_blank" rel="noopener">Webex Meetings help</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/8bzter/Join-a-Webex-meeting" target="_blank" rel="noopener">Join a Webex meeting</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/n62wi3c/Get-started-with-Webex-Meetings-for-hosts" target="_blank" rel="noopener">Get started with Webex Meetings for hosts</a>
<a class="doc-link" href="https://help.webex.com/en-us/video-resources" target="_blank" rel="noopener">Video resources</a>
  </div>
  <article class="article-card" data-keywords="meeting issue intake">
  <h3>Meeting issue intake</h3>
  <ul>
    <li>Collect meeting link or meeting number.</li>
<li>Identify host, affected participant, date, time, timezone, and error message.</li>
<li>Confirm Webex App version or browser.</li>
<li>Capture screenshot and whether the issue is join, audio, video, sharing, recording, or calendar.</li>
  </ul>
</article>
<article class="article-card" data-keywords="join issue checklist">
  <h3>Join issue checklist</h3>
  <ul>
    <li>Try the Webex App and browser join.</li>
<li>Confirm the meeting link is current.</li>
<li>Confirm the user is not joining too early or using an expired invite.</li>
<li>Check network, proxy, VPN, and endpoint security restrictions.</li>
<li>Try another device or network for isolation.</li>
  </ul>
</article>
<article class="article-card" data-keywords="audio and video checklist">
  <h3>Audio and video checklist</h3>
  <ul>
    <li>Confirm microphone, speaker, camera, and browser permissions.</li>
<li>Check default audio device and headset selection.</li>
<li>Test computer audio and alternate audio options.</li>
<li>Close applications that may be holding the camera or microphone.</li>
<li>Confirm device drivers and OS permissions.</li>
  </ul>
</article>
<article class="article-card" data-keywords="calendar and join button">
  <h3>Calendar and join button</h3>
  <ul>
    <li>Confirm calendar integration is enabled.</li>
<li>Confirm the invite contains a valid Webex meeting link.</li>
<li>Confirm room or device calendar accepted the invite.</li>
<li>Check timezone, organizer, and meeting start time.</li>
<li>For room devices, validate calendar service and room mailbox behavior.</li>
  </ul>
</article>
</section><section id="apis" class="panel">
  <div class="section-header">
    <span class="eyebrow">APIs</span>
    <h2>APIs</h2>
    <p>Webex Developer, OAuth, personal access tokens, bots, integrations, service apps, webhooks, Calling APIs, Contact Center APIs, and common errors.</p>
  </div>
  <div class="link-grid">
    <a class="doc-link" href="https://developer.webex.com/" target="_blank" rel="noopener">Webex Developer Portal</a>
<a class="doc-link" href="https://developer.webex.com/docs" target="_blank" rel="noopener">Getting started with Webex APIs</a>
<a class="doc-link" href="https://developer.webex.com/docs/getting-your-personal-access-token" target="_blank" rel="noopener">Personal access token</a>
<a class="doc-link" href="https://developer.webex.com/create/docs/integrations" target="_blank" rel="noopener">Integrations and OAuth</a>
<a class="doc-link" href="https://developer.webex.com/create/docs/authentication" target="_blank" rel="noopener">Authentication</a>
<a class="doc-link" href="https://developer.webex.com/docs/api/changelog" target="_blank" rel="noopener">API changelog</a>
<a class="doc-link" href="https://developer.webex.com/docs/contact-center" target="_blank" rel="noopener">Contact Center APIs</a>
<a class="doc-link" href="https://developer.webex.com/blog/webex-calling-getting-started-with-call-control-apis" target="_blank" rel="noopener">Calling Call Control APIs intro</a>
<a class="doc-link" href="https://developer.webex.com/blog/introducing-service-apps-for-webex-contact-center" target="_blank" rel="noopener">Service Apps for Contact Center</a>
  </div>
  <article class="article-card" data-keywords="authentication options">
  <h3>Authentication options</h3>
  <ul>
    <li>Personal access tokens are useful for testing and exploration.</li>
<li>OAuth integrations are used when an app acts on behalf of a Webex user.</li>
<li>Bots are useful for messaging-space automation.</li>
<li>Service apps can be used for organization-level Contact Center integrations where supported.</li>
<li>Never hardcode production secrets in browser-side code.</li>
  </ul>
</article>
<article class="article-card" data-keywords="authorization header">
  <h3>Authorization header</h3>
  <ul>
    <li>Most Webex API calls require a bearer token.</li>
<li>Use the exact format: Authorization: Bearer ACCESS_TOKEN.</li>
<li>For troubleshooting, log response code, request ID if available, endpoint, and scope context without exposing tokens.</li>
  </ul>
</article>
<article class="article-card" data-keywords="scopes and permissions">
  <h3>Scopes and permissions</h3>
  <ul>
    <li>Scopes define what the token can request.</li>
<li>Admin APIs may also require the authenticating user to have the correct admin role.</li>
<li>A token can be valid but still fail if the user lacks the role, license, or org access.</li>
<li>For integrations, document required scopes and why each one is needed.</li>
  </ul>
</article>
<article class="article-card" data-keywords="oauth checklist">
  <h3>OAuth checklist</h3>
  <ul>
    <li>Redirect URI must exactly match the developer portal configuration.</li>
<li>Authorization code can only be used once.</li>
<li>Client secret must be current.</li>
<li>Refresh token handling must be secure.</li>
<li>State parameter should be used to protect the OAuth flow.</li>
<li>Token errors should be logged safely.</li>
  </ul>
</article>
<article class="article-card" data-keywords="webhooks">
  <h3>Webhooks</h3>
  <ul>
    <li>Use webhooks to receive event notifications instead of polling.</li>
<li>Validate webhook target URL, secret, event type, and app authorization.</li>
<li>Build retry-safe handlers that can handle duplicate events.</li>
<li>Store only necessary payload fields and avoid logging sensitive data.</li>
  </ul>
</article>
<article class="article-card" data-keywords="common api errors">
  <h3>Common API errors</h3>
  <ul>
    <li>401 means token missing, expired, malformed, or invalid.</li>
<li>403 means token is accepted but lacks scope, role, license, or permission.</li>
<li>404 often means the resource ID, org ID, or endpoint is wrong or inaccessible.</li>
<li>409 usually indicates conflict or duplicate resource behavior.</li>
<li>429 means rate limit; use backoff and retry logic.</li>
  </ul>
</article>
<article class="article-card" data-keywords="contact center integrations">
  <h3>Contact Center integrations</h3>
  <ul>
    <li>Document tenant, org, scopes, service app/integration model, endpoint purpose, data flow, and failure handling.</li>
<li>For reporting or CDR pulls, agree on timezone, fields, retention, and polling frequency.</li>
<li>For CRM screen pops or logging, define exactly what data is written and when.</li>
  </ul>
</article>
<article class="article-card" data-keywords="calling integrations">
  <h3>Calling integrations</h3>
  <ul>
    <li>Calling APIs and webhooks can support call-control and workflow automation use cases.</li>
<li>Confirm whether the target use case requires user authorization, admin authorization, or another app model.</li>
<li>For production, add audit logging, token rotation, error handling, and rate-limit handling.</li>
  </ul>
</article>
</section><section id="troubleshooting" class="panel">
  <div class="section-header">
    <span class="eyebrow">Troubleshooting</span>
    <h2>Troubleshooting</h2>
    <p>Practical issue playbooks for Calling, Contact Center, devices, meetings, APIs, and escalation packets.</p>
  </div>
  <div class="link-grid">
    <a class="doc-link" href="https://status.webex.com/" target="_blank" rel="noopener">Webex Status</a>
<a class="doc-link" href="https://admin.webex.com/" target="_blank" rel="noopener">Control Hub troubleshooting</a>
<a class="doc-link" href="https://help.webex.com/" target="_blank" rel="noopener">Webex Help Center</a>
<a class="doc-link" href="https://developer.webex.com/docs/api/changelog" target="_blank" rel="noopener">Webex Developer changelog</a>
  </div>
  <article class="article-card" data-keywords="universal triage checklist">
  <h3>Universal triage checklist</h3>
  <ul>
    <li>Who is affected?</li>
<li>What exactly is failing?</li>
<li>When did it start?</li>
<li>Was anything changed?</li>
<li>Is it one user, many users, one site, one queue, one device type, or all users?</li>
<li>Can the issue be reproduced on demand?</li>
<li>What is the business impact?</li>
  </ul>
</article>
<article class="article-card" data-keywords="calling: one-way/no audio">
  <h3>Calling: one-way/no audio</h3>
  <ul>
    <li>Confirm inbound, outbound, or both.</li>
<li>Collect caller, called party, time, timezone, device, and network.</li>
<li>Test wired vs Wi-Fi and desk phone vs Webex App.</li>
<li>Check headset and audio permissions.</li>
<li>Review network/firewall/QoS path and Control Hub call details if available.</li>
  </ul>
</article>
<article class="article-card" data-keywords="calling: wrong routing">
  <h3>Calling: wrong routing</h3>
  <ul>
    <li>Identify the dialed number.</li>
<li>Map each hop: number, auto attendant, schedule, queue, hunt group, user, voicemail, external transfer, or Contact Center.</li>
<li>Check holiday, night service, operating mode, forced forwarding, and user-level forwarding.</li>
<li>Place a controlled test call and document the actual path.</li>
  </ul>
</article>
<article class="article-card" data-keywords="contact center: agent not receiving calls">
  <h3>Contact Center: agent not receiving calls</h3>
  <ul>
    <li>Confirm agent login state and availability.</li>
<li>Confirm team, profile, multimedia profile, capacity, skills, and queue assignment.</li>
<li>Confirm entry point routes to the expected flow and queue.</li>
<li>Check whether other agents in the same team receive calls.</li>
<li>Collect a call example and flow path.</li>
  </ul>
</article>
<article class="article-card" data-keywords="contact center: flow issue">
  <h3>Contact Center: flow issue</h3>
  <ul>
    <li>Confirm the DNIS and entry point.</li>
<li>Confirm the published flow version.</li>
<li>Test each branch: open, closed, holiday, timeout, invalid input, queue fail, transfer fail, callback, and emergency routing.</li>
<li>Review variables, prompts, queue references, and fallback paths.</li>
  </ul>
</article>
<article class="article-card" data-keywords="agent desktop: login issue">
  <h3>Agent Desktop: login issue</h3>
  <ul>
    <li>Confirm license, role, team, and desktop profile.</li>
<li>Confirm browser compatibility and clear stale sessions if needed.</li>
<li>Check pop-up, microphone, and notification permissions.</li>
<li>Capture exact error, screenshot, timestamp, and user ID.</li>
  </ul>
</article>
<article class="article-card" data-keywords="devices: phone not registering">
  <h3>Devices: phone not registering</h3>
  <ul>
    <li>Confirm MAC, model, assignment, location, and activation state.</li>
<li>Confirm IP, gateway, DNS, and internet access.</li>
<li>Try another port/cable/network.</li>
<li>Reboot after assignment changes.</li>
<li>Avoid factory reset until assignment and network basics are validated.</li>
  </ul>
</article>
<article class="article-card" data-keywords="meetings: cannot join">
  <h3>Meetings: cannot join</h3>
  <ul>
    <li>Confirm meeting link/number, date, time, timezone, and host.</li>
<li>Try browser and Webex App.</li>
<li>Check audio/video/browser permissions.</li>
<li>Test another network/device.</li>
<li>Capture screenshot and error text.</li>
  </ul>
</article>
<article class="article-card" data-keywords="api: 401/403">
  <h3>API: 401/403</h3>
  <ul>
    <li>Confirm Authorization header.</li>
<li>Confirm token validity and expiration.</li>
<li>Confirm scopes.</li>
<li>Confirm user role/license/org access.</li>
<li>Confirm resource ID belongs to the accessible org.</li>
<li>Check whether the app model is correct for the endpoint.</li>
  </ul>
</article>
<article class="article-card" data-keywords="escalation packet">
  <h3>Escalation packet</h3>
  <ul>
    <li>Customer/org name and org ID if available.</li>
<li>Affected users, numbers, queues, devices, meetings, or integrations.</li>
<li>Exact examples with timestamps and timezone.</li>
<li>Expected vs actual behavior.</li>
<li>Recent changes.</li>
<li>Business impact and urgency.</li>
<li>Screenshots, logs, HAR files, device logs, call examples, contact IDs, or API responses where applicable.</li>
  </ul>
</article>
</section><section id="sources" class="panel">
  <div class="section-header">
    <span class="eyebrow">Sources</span>
    <h2>Sources</h2>
    <p>Official documentation links grouped by product area for ongoing research and article validation.</p>
  </div>
  <div class="link-grid">
    <a class="doc-link" href="https://help.webex.com/" target="_blank" rel="noopener">Webex Help Center</a>
<a class="doc-link" href="https://help.webex.com/en-us/administration" target="_blank" rel="noopener">Webex Administration</a>
<a class="doc-link" href="https://help.webex.com/en-us/landing/ld-nzid8xi-WebexCalling" target="_blank" rel="noopener">Webex Calling</a>
<a class="doc-link" href="https://help.webex.com/en-us/article/n2re5jy/Webex-Contact-Center-Documentation" target="_blank" rel="noopener">Webex Contact Center</a>
<a class="doc-link" href="https://developer.webex.com/" target="_blank" rel="noopener">Webex Developer</a>
<a class="doc-link" href="https://developer.webex.com/docs/api/changelog" target="_blank" rel="noopener">Developer Changelog</a>
<a class="doc-link" href="https://status.webex.com/" target="_blank" rel="noopener">Webex Status</a>
  </div>
  <article class="article-card" data-keywords="documentation maintenance process">
  <h3>Documentation maintenance process</h3>
  <ul>
    <li>Review official links monthly or before publishing major customer-facing updates.</li>
<li>When Cisco changes UI location or feature behavior, update the article and add a reviewed date.</li>
<li>Prefer linking to official documentation instead of copying large sections.</li>
<li>Use concise summaries and practical support steps in your own words.</li>
  </ul>
</article>
<article class="article-card" data-keywords="article quality checklist">
  <h3>Article quality checklist</h3>
  <ul>
    <li>Clear title.</li>
<li>Audience identified.</li>
<li>Use case explained.</li>
<li>Step-by-step checklist.</li>
<li>Common mistakes.</li>
<li>Escalation details.</li>
<li>Official links included.</li>
<li>Reviewed date added.</li>
  </ul>
</article>
</section>
      <p id="emptyState" class="empty-state" hidden>No matching articles found in this tab.</p>
    </section>
  </main>

  <footer class="site-footer">
    <p>Webex Help Center • Static HTML version • Expanded starter review: 2026-06-04</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
