const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const globalSearchResults = document.querySelector("#globalSearchResults");
const globalSearchSummary = document.querySelector("#globalSearchSummary");
const globalSearchList = document.querySelector("#globalSearchList");
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");
const themeText = document.querySelector("#themeText");

// Configure this after your Render backend is live.
// Example:
// window.WEBEX_SPACE_ENDPOINT = "https://your-render-app.onrender.com/api/webex-space-message";
window.WEBEX_SPACE_ENDPOINT = "https://helpcenter-webex-space-api.onrender.com";

function updateThemeButton(theme) {
  const isDark = theme === "dark";
  if (themeIcon) themeIcon.textContent = isDark ? "☀️" : "🌙";
  if (themeText) themeText.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function activateTab(tabId, options = {}) {
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.tab === tabId));
  panels.forEach(panel => panel.classList.toggle("active", panel.id === tabId));
  window.history.replaceState(null, "", `#${tabId}`);

  if (!options.keepSearch && searchInput) {
    searchInput.value = "";
    runGlobalSearch("");
  }
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
});

document.querySelectorAll("[data-jump]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    activateTab(link.dataset.jump);
  });
});

function getSectionLabel(panel) {
  const matchingTab = document.querySelector(`.tab[data-tab="${panel.id}"]`);
  return matchingTab ? matchingTab.textContent.trim() : panel.id;
}

function createSnippet(text, query) {
  const clean = text.replace(/\s+/g, " ").trim();
  const lower = clean.toLowerCase();
  const q = query.toLowerCase();
  const index = lower.indexOf(q);

  if (index === -1) {
    return clean.slice(0, 180) + (clean.length > 180 ? "..." : "");
  }

  const start = Math.max(0, index - 70);
  const end = Math.min(clean.length, index + q.length + 110);
  const prefix = start > 0 ? "..." : "";
  const suffix = end < clean.length ? "..." : "";
  return prefix + clean.slice(start, end) + suffix;
}

function clearHighlights() {
  document.querySelectorAll(".search-highlight").forEach(item => {
    item.classList.remove("search-highlight");
  });
}

function showAllContent() {
  document.querySelectorAll(".article-card, .doc-link").forEach(item => {
    item.classList.remove("hidden-by-search");
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function runGlobalSearch(query) {
  const normalized = query.trim().toLowerCase();
  clearHighlights();
  showAllContent();

  if (!globalSearchResults || !globalSearchList) return;

  if (!normalized) {
    globalSearchResults.hidden = true;
    globalSearchList.innerHTML = "";
    if (emptyState) emptyState.hidden = true;

    const activeTab = document.querySelector(".tab.active");
    if (activeTab) {
      panels.forEach(panel => panel.classList.toggle("active", activeTab.dataset.tab === panel.id));
    }
    return;
  }

  const results = [];
  const searchableItems = document.querySelectorAll(".panel .article-card, .panel .doc-link");

  searchableItems.forEach((item, index) => {
    const panel = item.closest(".panel");
    if (!panel) return;

    const text = `${item.textContent} ${item.dataset.keywords || ""}`.replace(/\s+/g, " ").trim();
    const haystack = text.toLowerCase();

    if (haystack.includes(normalized)) {
      if (!item.id) {
        item.id = `search-hit-${index}`;
      }

      const titleNode = item.querySelector("h3") || item;
      const title = titleNode.textContent.trim();
      const section = getSectionLabel(panel);
      const snippet = createSnippet(text, normalized);

      results.push({
        title,
        section,
        snippet,
        panelId: panel.id,
        itemId: item.id
      });
    }
  });

  panels.forEach(panel => panel.classList.remove("active"));
  tabs.forEach(tab => tab.classList.remove("active"));
  globalSearchResults.hidden = false;
  if (emptyState) emptyState.hidden = results.length !== 0;

  if (globalSearchSummary) {
    globalSearchSummary.textContent = results.length === 1
      ? `Found 1 result across all tabs for “${query.trim()}”.`
      : `Found ${results.length} results across all tabs for “${query.trim()}”.`;
  }

  globalSearchList.innerHTML = results.map(result => `
    <article class="search-result-card" tabindex="0" role="button" data-panel="${result.panelId}" data-target="${result.itemId}">
      <div class="search-result-meta">${escapeHtml(result.section)}</div>
      <h3>${escapeHtml(result.title)}</h3>
      <p>${escapeHtml(result.snippet)}</p>
    </article>
  `).join("");

  document.querySelectorAll(".search-result-card").forEach(card => {
    const openResult = () => {
      const panelId = card.dataset.panel;
      const targetId = card.dataset.target;

      if (searchInput) searchInput.value = "";
      globalSearchResults.hidden = true;
      if (emptyState) emptyState.hidden = true;
      activateTab(panelId, { keepSearch: true });

      const target = document.getElementById(targetId);
      if (target) {
        clearHighlights();
        target.classList.add("search-highlight");
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => target.classList.remove("search-highlight"), 2500);
      }
    };

    card.addEventListener("click", openResult);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openResult();
      }
    });
  });
}

if (searchInput) {
  searchInput.addEventListener("input", event => runGlobalSearch(event.target.value));
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("webexHelpTheme", next);
    updateThemeButton(next);
  });
}

const savedTheme = localStorage.getItem("webexHelpTheme") || "light";
document.documentElement.dataset.theme = savedTheme;
updateThemeButton(savedTheme);

function collectFirstDigitalForm() {
  const form = document.querySelector("#firstDigitalPortForm");
  if (!form) return null;

  const data = new FormData(form);
  const checklist = Array.from(form.querySelectorAll(".checklist-fieldset input[type='checkbox']")).map(item => ({
    label: item.parentElement.textContent.trim(),
    checked: item.checked
  }));

  const values = Object.fromEntries(data.entries());
  values.checklist = checklist;
  values.messageTitle = `FirstDigital ${values.portOrOrder || "Port/Order"} Submission - ${values.businessName || "Customer"}`;

  const coreFields = [
    `## ${values.messageTitle}`,
    "",
    "**Business Information**",
    `- Business Name: ${values.businessName || ""}`,
    `- Business Service Address: ${values.businessServiceAddress || ""}`,
    `- Business Phone Number: ${values.businessPhoneNumber || ""}`,
    `- Business Contact Name: ${values.businessContactName || ""}`,
    `- Business Contact Phone: ${values.businessContactPhone || ""}`,
    `- Business Contact Email: ${values.businessContactEmail || ""}`,
    "",
    "**Order / Port Details**",
    `- Port or Order: ${values.portOrOrder || ""}`,
    `- WebEx User Quantity: ${values.webexUserQuantity || "0"}`,
    `- WebEx Work Space Quantity: ${values.webexWorkspaceQuantity || "0"}`,
    `- WebEx CC Agent Quantity: ${values.webexCcAgentQuantity || "0"}`,
    `- DID/Number Quantity: ${values.didNumberQuantity || "0"}`,
    `- Are all numbers with the same carrier?: ${values.sameCarrier || ""}`,
    `- Toll-Free Number Quantity: ${values.tollFreeNumberQuantity || "0"}`,
    `- Migration Preference: ${values.migrationPreference || ""}`,
    `- Current PBX/Phone System: ${values.currentPhoneSystem || ""}`,
    `- Contract Term: ${values.contractTerm || ""}`,
    `- Requested CNAM: ${values.requestedCnam || ""}`,
    `- Requested Port Date: ${values.requestedPortDate || ""}`,
    `- FD Connect Usage: ${values.fdConnectUsage || ""}`
  ];

  // Copy button uses the clean version only.
  values.copyMarkdown = coreFields.join("\n");

  // Send button uses full version.
  values.markdown = [
    ...coreFields,
    "",
    "**Numbers / DIDs / Toll-Free Numbers**",
    values.numbersList || "_Not provided_",
    "",
    "**Checklist**",
    ...checklist.map(item => `- ${item.checked ? "✅" : "⬜"} ${item.label}`),
    "",
    "**Additional Notes**",
    values.additionalNotes || "_None_"
  ].join("\n");

  return values;
}

function setFirstDigitalStatus(message, isError = false) {
  const status = document.querySelector("#firstDigitalFormStatus");
  if (!status) return;
  status.textContent = message;
  status.style.color = isError ? "#b42318" : "var(--brand)";
}

async function copyFirstDigitalTicketDetails() {
  const values = collectFirstDigitalForm();
  if (!values) return;

  try {
    await navigator.clipboard.writeText(values.copyMarkdown);
    setFirstDigitalStatus("Clean submission details copied to clipboard.");
  } catch (error) {
    setFirstDigitalStatus("Could not copy automatically. Select the form text manually.", true);
  }
}

async function submitFirstDigitalToWebexSpace(event) {
  event.preventDefault();

  const form = event.target;
  if (!form.reportValidity()) return;

  const cnam = document.querySelector("#requestedCnam");
  if (cnam && cnam.value.length > 15) {
    setFirstDigitalStatus("Requested CNAM must be 15 characters or fewer.", true);
    cnam.focus();
    return;
  }

  const values = collectFirstDigitalForm();
  if (!values) return;

  if (!window.WEBEX_SPACE_ENDPOINT) {
    setFirstDigitalStatus("Webex Space endpoint is not configured yet. Message details were copied instead.", true);
    await copyFirstDigitalTicketDetails();
    return;
  }

  setFirstDigitalStatus("Sending message to Webex Space...");

  try {
    const response = await fetch(window.WEBEX_SPACE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source: "HelpCenter FirstDigital Port/Order Form",
        title: values.messageTitle,
        markdown: values.markdown,
        form: values
      })
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`${response.status}: ${body.slice(0, 500)}`);
    }

    setFirstDigitalStatus("Message sent to Webex Space successfully.");
    form.reset();
  } catch (error) {
    console.error("Webex Space submit failed:", error);
    setFirstDigitalStatus(`Webex Space submission failed: ${error.message}`, true);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#firstDigitalPortForm");
  const copyButton = document.querySelector("#copyFirstDigitalTicket");
  const cnam = document.querySelector("#requestedCnam");

  if (form) {
    form.addEventListener("submit", submitFirstDigitalToWebexSpace);
  }

  if (copyButton) {
    copyButton.addEventListener("click", copyFirstDigitalTicketDetails);
  }

  if (cnam) {
    cnam.addEventListener("input", () => {
      if (cnam.value.length > 15) {
        setFirstDigitalStatus("Requested CNAM must be 15 characters or fewer. Spaces count.", true);
      } else {
        setFirstDigitalStatus("");
      }
    });
  }

  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && document.getElementById(initialHash)) {
    activateTab(initialHash);
  }
});
