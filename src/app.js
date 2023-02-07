/*
* File: app.js
* Author: Verebélyi Ivett
* Copyright: 2023, Verebélyi Ivett
* Group: Szoft I-2 E
* Date: 2023-02-06
* Github: https://github.com/IvettAdel
* Licenc: GNU GPL
*/

const r1sideElem = document.querySelector("#r2side");
const r2sideElem = document.querySelector("#r2side");
const magassagsideElem = document.querySelector("#magassagside")
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");


calcButton.addEventListener('click', () => {
   let r1side = Number(r1sideElem.value);
   let r2side = Number(r2sideElem.value);
   let magassagside = Number(magassagsideElem.value);


   let area = calcArea(r1side, r2side, magassagside);
   areaElem.value = area;
});

function calcArea(r1side, r2side, magassagside) {
    let térfogat = ( 1/3 ) * 3,14 + r1side + r2side + magassagside  
    * Math.sqrt(
    )
    return terulet;
}