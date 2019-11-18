function teamTabs() {

  const tabs = document.querySelectorAll('.team-tab');
  function changeTab(event) {
    const targetDetails = this.dataset.section;
    const activeTab = document.querySelector('.team-tabs .active');
    const makeActive = document.querySelector(`.team-show-details[data-section="${targetDetails}"]`);
    const makeHidden = document.querySelector(`.team-show-details[data-section="${activeTab.dataset.section}"]`);
    this.classList.toggle("active");
    activeTab.classList.toggle("active");
    makeActive.classList.toggle("hidden");
    makeHidden.classList.toggle("hidden");
    };

  tabs.forEach(tab => tab.addEventListener("click", changeTab));
};

export { teamTabs }

// `#{<% data.changemakers.each.do %>}`

// `#{<% end %>}`
