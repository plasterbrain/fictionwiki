/**                          __   _     
 *  _ __ ___ _    _ __   _ _| |  (_) __ 
 * | '__/ _ \ \ / / _ \/ _` | |  | / __|
 * | | |  __/\ V /  __/ (_| | |_ | \__ \
 * |_|  \___| \_/ \___|\__,_|_(_)| |___/
 *                             |__/     
 * @file        Open-source HTML presentation framework
 * @author      Hakim El Hattab <hakim.elhattab@gmail.com>
 * @version     4.3.1
 */
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

const isRtl = document.getElementById("document").getAttribute("data-rtl") == "true";
let deck = new Reveal({
    plugins: [Markdown],
    controlsTutorial: false,
    progress: true,
    loop: true,
    keyboardCondition: "focused",
    rtl: isRtl,
    shuffle: false,
    fragmentInURL: false,
    embedded: true,
    help: false,
    showNotes: true,
    postMessage: false,
    pdfSeparateFragments: false,
    viewDistance: 3,
    hideInactiveCursor: false,
    autoSlide: 3000
})
deck.initialize();