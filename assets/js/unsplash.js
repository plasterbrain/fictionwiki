/**
 *  __  __                __           __     
 * | | | |_ __   __  __  | |  _ _  __ | |__  
 * | | | | '_ \/ __| '_ \| |/ _` / __|  '_ \ 
 * | |_| | | ||\__ \ |_) | | (_| \__ \ | | |
 * \____/|_||_|___/ .__/|_|\__,_|___/_| |_|
 *                |_|
 * @file    Embeds an Unsplash collection from an ID.
 * @author  plasterbrain
 * @license MIT <https://opensource.org/licenses/MIT>
 * @version 1.0.0
 */
import * as params from '@params';
window.addEventListener('load', function() {
    const url = "https://api.unsplash.com/collections/";
    const key = "?client_id=" + params.access_key;
    /**
     * {@link https://help.unsplash.com/en/articles/2511315-guideline-attribution}
     */
    const utm = "?utm_source=" + params.app_name + "&utm_medium=referral";

    /**
     * Empty figures from Unsplash shortcode(s) to be filled with images.
     * @constant {Element[]} @default
     */
    const $collections = Array.prototype.slice.call(document.querySelectorAll(".unsplash-collection"), 0);
    $collections.forEach(function ($coll) {
        let collectionID = $coll.getAttribute("data-id");
        let title = document.getElementById("uc__title-" + collectionID);
        let desc = document.getElementById("uc__desc-" + collectionID);
        
        // Collection Info
        fetch(url + collectionID + key)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            title.innerHTML = `<a href="${data.links.html}">${data.title}</a>`;
            if (data.total_photos != 1) {
                desc.querySelector('.ucc-other').querySelector(".ucc").innerHTML = data.total_photos;
            } else {
                desc.querySelector('.ucc-other').style.display = "none";
                desc.querySelector('.ucc-one').style.display = "block";
            }
        });

        // Collection Photos
        fetch(url + collectionID + "/photos" + key)
        .then(response => {
            return response.json();
        }).then(data => {
            data.forEach(function (img) {
                let colEl = $coll.appendChild(document.createElement("figure"));
                colEl.classList.add("column", "is-one-third-desktop", "is-half-tablet", "m-0", "p-2-desktop", "p-1");
                colEl.innerHTML = `
                    <a class="image is-3by2" href="${img.links.html + utm}">
                        <img width="400" height="${(img.height / img.width) * 400}" aria-describedby="${img.id}__attr ${img.id}__desc" id="${img.id}" src="${img.urls.small}" alt="${img.alt_description}" title="${img.description}">
                        <span class="is-sr-only" id="${img.id}__desc">${img.description}</span>
                    </a>
                    <figcaption id="${img.id}__attr" class="card-content is-size-7 p-0">
                        <a class="has-text-weight-normal" href="${img.user.links.html + utm}">${img.user.name}</a>
                    </figcaption>
                `;
            });
        });
    });
});