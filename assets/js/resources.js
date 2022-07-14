document.addEventListener("DOMContentLoaded", function (event) {
    /**
     * Content part of each tab.
     * @constant {Element[]} @default
     */
    const $tabPanels = document.getElementsByClassName("tab__content");
    /**
     * Button part of each tab.
     * @constant {Element[]} @default
     */
    const $tabs = Array.prototype.slice.call(
        document.querySelectorAll("#tabs-page .tab"), 0);
    const tabIDPre = "content-";

    /**
     * Window URL
     * @constant {URLSearchParams} @default
     */
    const urlParams = new URLSearchParams(window.location.search);
    let currentTab = urlParams.get("tab") ?? "main";
    switchToTab(tabIDPre + currentTab);
    if (window.location.hash) {
        // Honor URL anchor now that the content is on-screen
        window.location.hash = window.location.hash;
    }

    $tabs.forEach(function ($tab) {
        const $target = $tab.getAttribute("aria-controls");
        $tab.addEventListener("click", function (e) {
            switchToTab($target);
        });
    });

    /**
     * @function       switchToTab
     * @description    Shows content for the selected tab.
     * @param {string} tab 
     */
    function switchToTab(tab) {
        for (const $panel of $tabPanels) {
            let $toc = document.getElementById(
                $panel.getAttribute("data-toc"));
            if ($panel.id === tab) {
                $panel.style.display = "block";
                $panel.setAttribute("aria-expanded", "true");
                $toc.style.display = "block";
            } else {
                $panel.style.display = "none";
                $panel.setAttribute("aria-expanded", "false");
                $toc.style.display = "none";
            }
        }
        for (var $tab of $tabs) {
            if ($tab.getAttribute("aria-controls") === tab) {
                $tab.setAttribute("aria-selected", "true");
                $tab.parentElement.className = "is-active";
            } else {
                $tab.setAttribute("aria-selected", "false");
                $tab.parentElement.className = "";
            }
        }
    };
});