/**
 * __  __   __   ___   __  _  _  ___   _  _ 
 *(  \/  ) (  ) / __) /  \( \( )(  ,) ( \/ )
 * )    (  /__\ \__ \( () ))  (  )  \  \  / 
 *(_/\/\_)(_)(_)(___/ \__/(_)\_)(_)\_)(__/
 *
 * @file        Lightweight masonry library
 * @description Non-library code licensed MIT-0 by me.
 * @author      Momchil Georgiev <fristys@gmail.com> (https://fristys.me)
 * @license     MIT <https://opensource.org/licenses/MIT>
 * @version     1.1.7
 */
import { Masonry } from "@fristys/masonry/lib/masonry";
// This wrapper keeps it from breaking when you use the back arrow to go to a page with a masonry grid
const options = {
    gutter: 1.5, gutterUnit: 'rem', useContainerWidth: true, trackItemSizeChanges: true, columnBreakpoints: {
        1215: 3,
        1023: 2,
        768: 1
    }
};
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