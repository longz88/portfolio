const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const tabNavs = document.querySelectorAll(".nav-bar li a");

const openTab = (tabName) => {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

tabNavs.forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelector(".nav-bar li a.active-nav")
      .classList.remove("active-nav");

    this.classList.add("active-nav");
  });
});
