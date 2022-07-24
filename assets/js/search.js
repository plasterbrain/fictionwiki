/**
 *    .dMMMb  dMMMMMP .aMMMb  dMMMMb  .aMMMb  dMP dMP
 *   dMP" VP dMP     dMP"dMP dMP.dMP dMP"VMP dMP dMP
 *  VMMMb  dMMMP   dMMMMMP dMMMMK" dMP     dMMMMMP
 *dP .dMP dMP     dMP dMP dMP"AMF dMP.aMP dMP dMP
 *VMMMP" dMMMMMP dMP dMP dMP dMP  VMMMP" dMP dMP
 * 
 * @file    Loads lunr.js and injects results on the page.
 * @author  plasterbrain
 * @license MIT-0 <https://opensource.org/licenses/MIT-0>
 * @version 1.0.0
 */
document.addEventListener("DOMContentLoaded", function (event) {
    /**
     * Search input element, used to set value to query param.
     * @constant {Element} @default
     */
    const $search = document.getElementById("search");
    /**
     * Search submit button, used to bind click handler.
     * @constant {Element} @default
     */
    const $searchButton = document.getElementById("button-submit");
    /**
     * Result list, populated with... results!
     * @constant {Element} @default
     */
    const $resultBox = document.getElementById("search__results");
    /**
     * Singular results i18n label
     * @constant {Element} @default
     */
    const $resultsLabelSingular = document.getElementById("results-singular");
    /**
     * Plural results i18n label
     * @constant {Element} @default
     */
    const $resultsLabelPlural = document.getElementById("results-plural");
    /**
     * Span showing nmber of results found
     * @constant {Element} @default
     */
    const $resultCount = document.getElementById("src");
    /**
     * Search query submitted to the form.
     * @constant {URLSearchParams} @default
     */
    const query = new URLSearchParams(window.location.search).get("s");

    if (query !== null && query !== "") {
        $searchButton.classList.add("is-loading");
        $search.value = query;

        fetch("/index.json").then(response => {
            return response.json();
        }).then(jsondata => {
            var lunrSearch = lunr(function () {
                this.field("Title");
                this.field("PlainContent");
                this.ref("RelPermalink");

                jsondata.forEach(function (entry) {
                    this.add(entry);
                }, this);
            });

            search(query);

            /* "AJAX"-y version
            search.addEventListener("input", function () {
                search(this.value);
            });
            */
           /**
            * @function         search
            * @description      Fetches/shows lunr.js results for a term.
            * @param {*} query  The string to search.
            */
            function search(query) {
                var results = lunrSearch.search(query).map(function (result) {
                    return jsondata.filter(function (page) {
                        return page.RelPermalink === result.ref;
                    });
                });
                if (results.length === 1) {
                    $resultsLabelSingular.style.display = "block";
                    $resultsLabelPlural.style.display = "none";
                } else {
                    $resultsLabelSingular.style.display = "none";
                    $resultsLabelPlural.style.display = "block";
                    $resultCount.innerHTML = results.length;
                }
                results.forEach(function (weightLevel) {
                    weightLevel.forEach(function (sameWeightResult) {
                        let listItem = $resultBox.appendChild(document.createElement("li"));
                        listItem.classList.add("is-size-7", "mb-3");
                        listItem.innerHTML = `
                    <h3><a href="${sameWeightResult.RelPermalink}">${sameWeightResult.Title}</a></h3>
                    <p>${sameWeightResult.Summary}</p>
                    `;
                    });
                });
                $searchButton.classList.remove("is-loading");
            }
        });
    }
});