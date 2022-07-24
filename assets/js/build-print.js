/**
 *  ______   ______  _____  ______  _______ 
 * | |  | \ | |  | \  | |  | |  \ \  | |
 * | |__|_/ | |__| |  | |  | |  | |  | |
 * |_|      |_|  \_\ _|_|_ |_|  |_|  |_|
 * @file    Adds functionality to print preview buttons
 * @desc    This one does actually have to be built in Hugo. ∑(;°Д°)
 * @author  plasterbrain
 * @license MIT-0 <https://opensource.org/licenses/MIT-0>
 * @version 1.0.0
 */
import * as params from '@params';
document.addEventListener("DOMContentLoaded", function (event) {
    const $back = document.getElementById("button-back");
    const $print = document.getElementById("button-print");
    const $buttons = Array.prototype.slice.call(
        document.querySelectorAll(".print__helper"));
    /**
     * Checkboxes.
     * @constant {Element[]} @default
     */
    const $checkboxes = Array.prototype.slice.call(document.getElementsByClassName("print__checkbox"));

    $print.addEventListener("click", function() {
        $buttons.forEach($button => {
            $button.style = "display:none;"
        });
        // This has to be added dynamically or it eats our buttons.
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.id = "pagedjs";
        script.setAttribute("src", params.pagedjs);
        document.head.appendChild(script);
    });

    $checkboxes.forEach(function ($checkbox) {
        $checkbox.addEventListener("change", function () {
            const $section = document.getElementById(this.getAttribute("aria-controls"));
            if (this.checked) {
                $section.style = "display:block;"
            } else {
                $section.style = "display:none;"
            }
        });
    });

    window.addEventListener('afterprint', () => {
        $back.style = "display:block;"
        document.body.prepend($back);
    });
});