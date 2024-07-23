document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    let activeIndex = 0;
    let autoSwitchInterval;

    function switchTab(index) {
        tabs.forEach((tab, i) => {
            tab.classList.toggle('active', i === index);
        });
        tabContents.forEach((content, i) => {
            content.classList.toggle('active', i === index);
        });
        activeIndex = index; // Update activeIndex when switching manually
    }

    function startAutoSwitch() {
        autoSwitchInterval = setInterval(() => {
            activeIndex = (activeIndex + 1) % tabs.length;
            switchTab(activeIndex);
        }, 5000); // Switch every 5 seconds
    }

    function stopAutoSwitch() {
        clearInterval(autoSwitchInterval);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            stopAutoSwitch(); // Stop auto-switching when a tab is clicked
            switchTab(index);
            startAutoSwitch(); // Restart auto-switching after click
        });
    });

    // Initialize
    switchTab(activeIndex);
    startAutoSwitch();
});
