import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var totalSeasonsAverageElm = document.getElementById("Average");
var card = document.getElementById('cards');
renderSeriesInTable(dataSeries);
totalSeasonsAverageElm.innerHTML = "".concat(getTotalSeasonsAverage(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (Serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(Serie.number, "</td>\n                             <td><a href = \"#\">").concat(Serie.name, "</a></td>\n                             <td>").concat(Serie.channel, "</td>\n                             <td>").concat(Serie.seasons, "</td>");
        var linkElement = trElement.querySelector("a");
        linkElement.addEventListener("click", function () { mostrarCard(Serie); });
        seriesTbody.appendChild(trElement);
    });
}
function getTotalSeasonsAverage(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    var totalSeries = 0;
    series.forEach(function (serie) { return totalSeries = totalSeries + 1; });
    var promedio = totalSeasons / totalSeries;
    return promedio;
}
function mostrarCard(series) {
    var serieNombre = card.querySelector(".card-body");
    var serieSummary = card.querySelector(".card-body");
    var serieWeb = card.querySelector(".card-body");
    var serieImg = card.querySelector(".card-img-top");
    serieNombre.innerHTML = "";
    serieSummary.innerHTML = "";
    serieWeb.innerHTML = "";
    serieImg.setAttribute("src", "");
    serieImg.setAttribute("src", series.image);
    var headerElement = document.createElement("h3");
    var paragraphElement = document.createElement("p");
    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", series.web);
    headerElement.innerHTML = series.name;
    paragraphElement.innerHTML = series.summary;
    linkElement.innerHTML = series.web;
    serieNombre.appendChild(headerElement);
    serieSummary.appendChild(paragraphElement);
    serieWeb.appendChild(linkElement);
}
