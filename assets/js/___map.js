var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://i.etsystatic.com/6736785/r/il/1d92b1/1187157813/il_794xN.1187157813_bsyf.jpg', {
    maxZoom: 3
}).addTo(map);
var marker = L.marker([51.5, -0.09],
    { alt: 'Kyiv' }).addTo(map) // "Kyiv" is the accessible name of this marker
    .bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!');