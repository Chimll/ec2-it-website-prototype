const tabGroups = document.querySelectorAll("[data-role-tab]");

tabGroups.forEach((tab) => {
  tab.addEventListener("click", () => {
    const role = tab.dataset.roleTab;
    const tabs = document.querySelectorAll("[data-role-tab]");
    const panels = document.querySelectorAll("[data-role-panel]");

    tabs.forEach((item) => {
      item.setAttribute("aria-selected", String(item === tab));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.rolePanel === role;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });
  });
});
