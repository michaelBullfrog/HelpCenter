const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");
const themeText = document.querySelector("#themeText");

function updateThemeButton(theme) {
  const isDark = theme === "dark";
  themeIcon.textContent = isDark ? "☀️" : "🌙";
  themeText.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function activateTab(tabId) {
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.tab === tabId));
  panels.forEach(panel => panel.classList.toggle("active", panel.id === tabId));
  window.history.replaceState(null, "", `#${tabId}`);
  searchInput.value = "";
  runSearch("");
}

tabs.forEach(tab => tab.addEventListener("click", () => activateTab(tab.dataset.tab)));

document.querySelectorAll("[data-jump]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    activateTab(link.dataset.jump);
  });
});

function runSearch(query) {
  const normalized = query.trim().toLowerCase();
  const activePanel = document.querySelector(".panel.active");
  if (!activePanel) return;

  const searchable = activePanel.querySelectorAll(".article-card, .doc-link");
  let visibleCount = 0;

  searchable.forEach(item => {
    const text = `${item.textContent} ${item.dataset.keywords || ""}`.toLowerCase();
    const matches = !normalized || text.includes(normalized);
    item.classList.toggle("hidden-by-search", !matches);
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
  updateThemeButton(next);
});

const savedTheme = localStorage.getItem("webexHelpTheme") || "light";
document.documentElement.dataset.theme = savedTheme;
updateThemeButton(savedTheme);

const initialHash = window.location.hash.replace("#", "");
if (initialHash && document.getElementById(initialHash)) {
  activateTab(initialHash);
}
