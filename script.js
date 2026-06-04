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
