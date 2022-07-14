import * as params from '@params';
document.addEventListener("DOMContentLoaded", function (event) {
    let menu = document.getElementById("main");
    if (menu) {
        const search = params.keywords;
        var result = menu.innerHTML
        search.forEach(function(kw) {
            let string = "@" + kw.toUpperCase();
            result = result.split(string).join("<mark class='mark-" + kw.toLowerCase() + "'>" + string + "</mark>");
        });
        menu.innerHTML = result;
    }
});