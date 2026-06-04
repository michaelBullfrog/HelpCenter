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

function updateThemeButton(theme) {
  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  themeText.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function activateTab(tabId, options = {}) {
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.tab === tabId));
  panels.forEach(panel => panel.classList.toggle("active", panel.id === tabId));
  window.history.replaceState(null, "", `#${tabId}`);

  if (!options.keepSearch) {
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
  panels.forEach(panel => {
    panel.hidden = false;
  });
}

function runGlobalSearch(query) {
  const normalized = query.trim().toLowerCase();
  clearHighlights();
  showAllContent();

  if (!normalized) {
    globalSearchResults.hidden = true;
    globalSearchList.innerHTML = "";
    emptyState.hidden = true;
    panels.forEach(panel => panel.classList.toggle("active", document.querySelector(`.tab.active`)?.dataset.tab === panel.id));
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
  emptyState.hidden = results.length !== 0;

  globalSearchSummary.textContent = results.length === 1
    ? `Found 1 result across all tabs for “${query.trim()}”.`
    : `Found ${results.length} results across all tabs for “${query.trim()}”.`;

  globalSearchList.innerHTML = results.map(result => `
    <article class="search-result-card" tabindex="0" role="button" data-panel="${result.panelId}" data-target="${result.itemId}">
      <div class="search-result-meta">${result.section}</div>
      <h3>${escapeHtml(result.title)}</h3>
      <p>${escapeHtml(result.snippet)}</p>
    </article>
  `).join("");

  document.querySelectorAll(".search-result-card").forEach(card => {
    const openResult = () => {
      const panelId = card.dataset.panel;
      const targetId = card.dataset.target;

      searchInput.value = "";
      globalSearchResults.hidden = true;
      emptyState.hidden = true;
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

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

searchInput.addEventListener("input", event => runGlobalSearch(event.target.value));

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("webexHelpTheme", next);
  updateThemeButton(next);
});

const savedTheme = localStorage.getItem("webexHelpTheme") || "light";
document.documentElement.dataset.theme = savedTheme;
updateThemeButton(savedTheme);

const initialHash = window.location.hash.replace("#", "");
if (initialHash && document.getElementById(initialHash)) {
  activateTab(initialHash);
}


// Optional Rev.io PSA endpoint.
// Configure this to point to a secure backend proxy. Do NOT put Rev.io API keys in this public static site.
// Example: window.REVIO_TICKET_ENDPOINT = "https://your-render-app.onrender.com/api/revio-ticket";
window.REVIO_TICKET_ENDPOINT = window.REVIO_TICKET_ENDPOINT || "";

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
  values.ticketTitle = `FirstDigital Port Submission - ${values.companyName || "Customer"}`;
  values.ticketDescription = "FirstDigital Port Submission";
  values.workRequested = [
    `Customer / Company: ${values.companyName || ""}`,
    `Submitted By: ${values.submittedBy || ""}`,
    `Contact Email: ${values.contactEmail || ""}`,
    `Contact Phone: ${values.contactPhone || ""}`,
    `Current Carrier: ${values.currentCarrier || ""}`,
    `Account Number: ${values.accountNumber || ""}`,
    `BTN: ${values.btn || ""}`,
    `Port-out PIN / Passcode: ${values.portPin || ""}`,
    `Requested Port Date: ${values.requestedDate || ""}`,
    `Port Type: ${values.portType || ""}`,
    "",
    "Service Address:",
    values.serviceAddress || "",
    "",
    "Numbers to Port:",
    values.numbersToPort || "",
    "",
    "Numbers Remaining With Losing Carrier:",
    values.numbersRemaining || "",
    "",
    "Checklist:",
    ...checklist.map(item => `${item.checked ? "[x]" : "[ ]"} ${item.label}`),
    "",
    "Routing / Special Notes:",
    values.routingNotes || ""
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
  const text = `${values.ticketTitle}\n\n${values.workRequested}`;

  try {
    await navigator.clipboard.writeText(text);
    setFirstDigitalStatus("Ticket details copied to clipboard.");
  } catch (error) {
    setFirstDigitalStatus("Could not copy automatically. Select the form text manually.", true);
  }
}

async function submitFirstDigitalToRevPsa(event) {
  event.preventDefault();

  const form = event.target;
  if (!form.reportValidity()) return;

  const values = collectFirstDigitalForm();
  if (!values) return;

  if (!window.REVIO_TICKET_ENDPOINT) {
    setFirstDigitalStatus("Rev PSA endpoint is not configured yet. Ticket details were copied instead.", true);
    await copyFirstDigitalTicketDetails();
    return;
  }

  setFirstDigitalStatus("Submitting ticket to Rev PSA...");

  try {
    const response = await fetch(window.REVIO_TICKET_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source: "HelpCenter FirstDigital Port Form",
        ticketDescription: values.ticketDescription,
        summary: values.ticketTitle,
        workRequested: values.workRequested,
        form: values
      })
    });

    if (!response.ok) {
      const body = await response.text();
      throw new Error(`${response.status}: ${body.slice(0, 500)}`);
    }

    setFirstDigitalStatus("Submitted to Rev PSA successfully.");
    form.reset();
  } catch (error) {
    console.error("Rev PSA submit failed:", error);
    setFirstDigitalStatus(`Rev PSA submission failed: ${error.message}`, true);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#firstDigitalPortForm");
  const copyButton = document.querySelector("#copyFirstDigitalTicket");

  if (form) {
    form.addEventListener("submit", submitFirstDigitalToRevPsa);
  }

  if (copyButton) {
    copyButton.addEventListener("click", copyFirstDigitalTicketDetails);
  }
});
