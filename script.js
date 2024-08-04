document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li');
    const contents = document.querySelectorAll('.tab-content');
    let currentIndex = 0;
    let autoSwitchInterval;
    let isAutoSwitchActive = true;
    let inactivityTimeout;
    let clickCount = 0;
    let clickTimeout;

    function showTab(index) {
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        tabs[index].classList.add('active');
        contents[index].classList.add('active');
    }

    function startAutoSwitch() {
        if (!isAutoSwitchActive) return;
        autoSwitchInterval = setInterval(autoSwitchTabs, 10000); // Switch every 10 seconds
    }

    function stopAutoSwitch() {
        clearInterval(autoSwitchInterval);
    }

    function autoSwitchTabs() {
        currentIndex = (currentIndex + 1) % tabs.length;
        showTab(currentIndex);
    }

    function handleClick() {
        clickCount++;
        clearTimeout(clickTimeout);

        clickTimeout = setTimeout(() => {
            if (clickCount === 2) {
                // Double-click detected
                stopAutoSwitch();
                isAutoSwitchActive = false;
            } else if (clickCount === 3) {
                // Triple-click detected
                stopAutoSwitch();
                isAutoSwitchActive = true;
                startAutoSwitch();
            }
            clickCount = 0;
        }, 300); // Timeout duration to detect click count (adjust as needed)
    }

    // Initial start of auto-switching
    startAutoSwitch();

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentIndex = index;
            showTab(index);
        });

        tab.addEventListener('click', handleClick);
    });

    showTab(currentIndex);
});
