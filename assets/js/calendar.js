/**
 *    ____     __               __
 *  / ___| _ _| |  __ _ __   __| | _ _ _  _ 
 * | |   / _` | |/ _ \ '_ \/ _` |/ _` | '__|
 * | |__| (_| | |  __/ || | (_| | (_| | |
 * \____\__,_|_|\___|_||_|\__,_|\__,_|_|
 * @file    Provides functionality for switching between timeline views.
 * @author  plasterbrain
 * @license MIT <https://opensource.org/licenses/MIT>
 * @version 1.0.0
 */
document.addEventListener("DOMContentLoaded", function (event) {

    const $viewTabs = Array.prototype.slice.call(
        document.querySelectorAll("#tabs-timeline .tab"), 0);
    const $viewPanels = Array.prototype.slice.call(
        document.querySelectorAll("#page__timeline .tabpanel"), 0);
    /**
     * Buttons used to select a month in the currently selected year.
     * @constant {Element[]} @default
     */
    const $monthButtons = Array.prototype.slice.call(
        document.querySelectorAll(".button-month"), 0);
    const monthButtonClass = "button-month button p-1";
    const monthButtonClassSelected = monthButtonClass + " has-text-primary is-selected";
    /**
     * Divs for each month within the currently selected year.
     * @var {Element[]}
     */
    var $monthSections = [];
    /**
     * Select used to choose a year in the timeline.
     * @constant {Element} @default
     */
    const $yearSelect = document.getElementById("select-year");
    /**
     * Currently selected year string to be compared to year section IDs.
     * @var {string}
     */
    var currentYear = "year-0001";
    /** 
     * Divs for each year which contain that year's monthly views.
     * @constant {Element[]} @default
     */
    const $yearSections = Array.prototype.slice.call(
        document.querySelectorAll(".calendar__year"), 0);

    $viewTabs.forEach(function ($tab) {
        const $target = $tab.getAttribute("aria-controls");
        $tab.addEventListener("click", function (e) {
            for (const $panel of $viewPanels) {
                if ($panel.id === $target) {
                    $panel.style.display = "block";
                    $panel.setAttribute("aria-expanded", "true");
                } else {
                    $panel.style.display = "none";
                    $panel.setAttribute("aria-expanded", "false");
                }
            }
            for (var $tab of $viewTabs) {
                if ($tab.getAttribute("aria-controls") === $target) {
                    $tab.setAttribute("aria-selected", "true");
                    $tab.parentElement.className = "is-active";
                } else {
                    $tab.setAttribute("aria-selected", "false");
                    $tab.parentElement.className = "";
                }
            }
        });
    });

    $monthButtons.forEach(function ($button) {
        const month = $button.getAttribute("data-target");
        $button.addEventListener("click", function () {
            // Disable clicked status on all buttons
            $monthButtons.forEach(function ($button) {
                $button.className = monthButtonClass;
                $button.setAttribute("aria-selected", "false");
            });
            // Reenable clicked status on the clicked button
            this.className = monthButtonClassSelected;
            this.setAttribute("aria-selected", "true");

            // Show the associated month and hide everything else.
            $monthSections.forEach(function ($month) {
                if ($month.getAttribute("data-month") !== month) {
                    $month.style.display = "none";
                    $month.setAttribute("aria-expanded", "false");
                } else {
                    $month.style.display = "block";
                    $month.setAttribute("aria-expanded", "true");
                }
            });
        });
    });

    selectYear($yearSections[0]);
    // There's no select element if the timeline only spans one year.
    if ($yearSelect != null) {
        $yearSelect.onchange = function() {
            currentYear = $yearSelect.value;
            $yearSections.forEach(function ($year) {
                if ($year.id !== currentYear) {
                    $year.style.display = "none";
                } else {
                    $year.style.display = "block";
                    selectYear($year);
                }
            });
        };
    }

    /**
     * @function        selectYear
     * @description     Adjusts month sections/buttons based on the given year.
     * @param {Element} _section A year div container.
     */
    function selectYear(_section) {
        $monthSections = Array.prototype.slice.call(
            _section.querySelectorAll(".calendar__month"), 0);
        $monthSections.forEach(function ($month) {
            $month.style.display = "none";
        });
        $monthSections[0].style.display = "block";

        // Disable any non-applicable month buttons
        const activeMonths = _section.getAttribute("data-months").split(",");
        var i = 1;
        var didFirst = false;
        $monthButtons.forEach(function ($button) {
            let monthNo = i.toString();
            if (activeMonths.includes(monthNo)) {
                $button.removeAttribute("disabled");
                $button.setAttribute("aria-controls", `${currentYear}-month-${monthNo}`);
                if (!didFirst) {
                    $button.className = monthButtonClassSelected;
                    didFirst = true;
                }
            } else {
                $button.setAttribute("disabled", "");
                $button.removeAttribute("aria-controls");
                $button.setAttribute("aria-selected", "false");
                $button.className = monthButtonClass;
            }
            i++;
        });
    }
});