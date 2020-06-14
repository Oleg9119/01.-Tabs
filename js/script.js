window.addEventListener("DOMContentLoaded", function() {
    
    "use strict";

    let tabs = document.querySelectorAll(".info-header-tab"),
        tabsContainer = document.querySelector(".info-header"),
        tabsContents = document.querySelectorAll(".info-tabcontent");

    function hideTabsContents(a) {
        for (let i = a; i < tabsContents.length; i++) {
            tabsContents[i].classList.remove('show');
            tabsContents[i].classList.add('hide');
        }
    }
    hideTabsContents(1);

    function showTabContent(b) {
        if (tabsContents[b].classList.contains('hide')) {
            tabsContents[b].classList.remove('hide');
            tabsContents[b].classList.add('show');
        }
    }

    tabsContainer.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabsContents(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});