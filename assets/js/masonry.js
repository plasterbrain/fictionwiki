/**
 * masonry
 * @file    Lightweight masonry library.
 * @author  Momchil Georgiev <fristys@gmail.com> (https://fristys.me)
 * @license MIT <https://opensource.org/licenses/MIT>
 * @version 1.1.7
 */
import { Masonry } from 'masonry/masonry.js';

// This wrapper keeps it from breaking when you use the back arrow to go to a page with a masonry grid
const options = { gutter: 1.5, gutterUnit: 'rem', useContainerWidth: true, trackItemSizeChanges: true, columnBreakpoints: {
    1215: 3,
    1023: 2,
    768: 1 } };
// @TODO all grids

const grid = document.getElementById("grid");
/**
 * Clicking a link after the grid and then using the back arrow in the browser
 * makes getBoundingClientRect negative and screws up positioning, so this will
 * trigger periodic checks until it makes sense to init.
 */
function initMasonry() {
    grid.classList.add("loading");
    if (grid.getBoundingClientRect().top <= 0) {
        setTimeout(initMasonry, 60);
    } else {
        grid.classList.remove("loading");
        new Masonry(grid, options);
    }
}
initMasonry();
