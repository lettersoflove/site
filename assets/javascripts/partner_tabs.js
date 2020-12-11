function partnerTabs() {

  const tabs = document.querySelectorAll('.partner-tab');
  function changeTab(event) {
    const targetDetails = this.dataset.section;
    const activeTab = document.querySelector('.partner-tabs .active');
    const makeActive = document.querySelector(`.partner-show-details[data-section="${targetDetails}"]`);
    const makeHidden = document.querySelector(`.partner-show-details[data-section="${activeTab.dataset.section}"]`);
    this.classList.toggle("active");
    activeTab.classList.toggle("active");
    makeActive.classList.toggle("hidden");
    makeHidden.classList.toggle("hidden");
    };

  tabs.forEach(tab => tab.addEventListener("click", changeTab));
};

export { partnerTabs }
