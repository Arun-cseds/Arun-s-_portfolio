const tabs = document.querySelectorAll(".tabs li");
const tabContents = document.querySelectorAll(".tab-content");

let currentIndex = 0;

function showTab(index) {
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active"));

  tabs[index].classList.add("active");
  tabContents[index].classList.add("active");
}

function nextTab() {
  currentIndex = (currentIndex + 1) % tabs.length;
  showTab(currentIndex);
}

function prevTab() {
  currentIndex = (currentIndex - 1 + tabs.length) % tabs.length;
  showTab(currentIndex);
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    showTab(index);
    currentIndex = index;
  });
});

document.getElementById("next").addEventListener("click", nextTab);
document.getElementById("prev").addEventListener("click", prevTab);

showTab(currentIndex);
