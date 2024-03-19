document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tabs li");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and tab contents
            tabs.forEach((t) => t.classList.remove("active"));
            tabContents.forEach((content) => content.classList.remove("active"));

            // Add active class to the clicked tab and corresponding tab content
            tab.classList.add("active");
            tabContents[index].classList.add("active");
        });
    });

    // Automatically switch tabs every 5 seconds
    let activeTab = 0;
    setInterval(() => {
        activeTab = (activeTab + 1) % tabs.length;
        tabs.forEach((t) => t.classList.remove("active"));
        tabContents.forEach((content) => content.classList.remove("active"));
        tabs[activeTab].classList.add("active");
        tabContents[activeTab].classList.add("active");
    }, 5000);
});

