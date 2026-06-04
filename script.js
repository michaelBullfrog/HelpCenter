const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const themeToggle = document.querySelector("#themeToggle");

function activateTab(tabId) {
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.tab === tabId));
  panels.forEach(panel => panel.classList.toggle("active", panel.id === tabId));
  window.history.replaceState(null, "", `#${tabId}`);
  searchInput.value = "";
  runSearch("");
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

const subtabs = document.querySelectorAll(".subtab");
const subpanels = document.querySelectorAll(".subpanel");

subtabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.subtab;
    subtabs.forEach(item => item.classList.toggle("active", item.dataset.subtab === target));
    subpanels.forEach(panel => panel.classList.toggle("active", panel.id === target));
  });
});

function runSearch(query) {
  const normalized = query.trim().toLowerCase();
  const activePanel = document.querySelector(".panel.active");
  if (!activePanel) return;

  const cards = activePanel.querySelectorAll(".article-card, .hero-card");
  let visibleCount = 0;

  cards.forEach(card => {
    const text = `${card.textContent} ${card.dataset.keywords || ""}`.toLowerCase();
    const matches = !normalized || text.includes(normalized);
    card.classList.toggle("hidden-by-search", !matches);
    if (matches) visibleCount++;
  });

  emptyState.hidden = visibleCount !== 0 || !normalized;
}

searchInput.addEventListener("input", event => runSearch(event.target.value));

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("webexHelpTheme", next);
});

const savedTheme = localStorage.getItem("webexHelpTheme");
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

const initialHash = window.location.hash.replace("#", "");
if (initialHash && document.getElementById(initialHash)) {
  activateTab(initialHash);
}
