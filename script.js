document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs li');
    const contents = document.querySelectorAll('.tab-content');
    let currentIndex = 0;

    function showTab(index) {
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        tabs[index].classList.add('active');
        contents[index].classList.add('active');
    }

    function autoSwitchTabs() {
        currentIndex = (currentIndex + 1) % tabs.length;
        showTab(currentIndex);
    }

    setInterval(autoSwitchTabs, 10000); // Switch every 10 seconds

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentIndex = index;
            showTab(index);
        });
    });

    showTab(currentIndex);
});
