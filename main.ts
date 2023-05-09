import { Serie } from './Serie.js';

import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const totalSeasonsAverageElm: HTMLElement = document.getElementById("Average")!;
let card: HTMLElement = document.getElementById('cards')!;

renderSeriesInTable(dataSeries);
totalSeasonsAverageElm.innerHTML = `${getTotalSeasonsAverage(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((Serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${Serie.number}</td>
                             <td><a href = "#">${Serie.name}</a></td>
                             <td>${Serie.channel}</td>
                             <td>${Serie.seasons}</td>`;
                             let linkElement = trElement.querySelector("a")!;
    linkElement.addEventListener("click", () => {mostrarCard(Serie);});
    seriesTbody.appendChild(trElement);
  });
  }

function getTotalSeasonsAverage(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons= totalSeasons + serie.seasons);
    let totalSeries: number = 0;
    series.forEach((serie) => totalSeries= totalSeries + 1);
    let promedio: number = totalSeasons/totalSeries
    return promedio;
  }

  function mostrarCard(series: Serie): void {
    let serieNombre = card.querySelector(".card-body")!;
    let serieSummary = card.querySelector(".card-body")!;
    let serieWeb = card.querySelector(".card-body")!;
    let serieImg = card.querySelector(".card-img-top")!;
  
    serieNombre.innerHTML = "";
    serieSummary.innerHTML = "";
    serieWeb.innerHTML = "";
    
    serieImg.setAttribute("src", "");
    serieImg.setAttribute("src", series.image);
  
    let headerElement = document.createElement("h3");
    let paragraphElement = document.createElement("p");
    let linkElement = document.createElement("a");
  
    linkElement.setAttribute("href", series.web);
    
    headerElement.innerHTML = series.name;
    paragraphElement.innerHTML = series.summary;
    linkElement.innerHTML = series.web;
  
    serieNombre.appendChild(headerElement);
    serieSummary.appendChild(paragraphElement);
    serieWeb.appendChild(linkElement);
  
  }