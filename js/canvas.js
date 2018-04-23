/*jshint esversion: 6 */
// const - coś stałego
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

var szer = canvasElem.width;
var wys = canvasElem.height;

// kolor wypełnienia
ctx.fillStyle = "#3e62b3";
// rysujemy prostokąt/kwadrat
// x, y, width, height
ctx.fillRect(25, 25, 100, 100);

//kolor obrysu
ctx.fillStroke = "#ed0e0e";
// drugi prostokąt
ctx.strokeRect(30, 30, 100, 100);

// czyszczenia obszaru
ctx.clearRect(45, 45, 60, 60);

// rysowanie linii
ctx.fillStroke = "gray";
ctx.moveTo(0, 0);
ctx.lineTo(szer, wys);
ctx.moveTo(0, wys);
ctx.lineTo(wys, 0);
ctx.stroke();

//rysowanie koła
ctx.beginPath();
// x, y, radius, start, stop, true/false
ctx.arc(szer / 2, wys / 2, 100, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(szer / 2, wys / 2, 90, 0, Math.PI);
ctx.stroke();

ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(szer / 2, wys / 4 , 60, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(szer / 4, wys / 2, 60, 0, 2 * Math.PI);
ctx.stroke();

//tekst
ctx.lineWidth = 1;
ctx.font = "normal 20px Arial";
ctx.textBaseLine = "middle";
ctx.textAlign = "left";
ctx.strokeText("Grafika w canvas", 70, 180);
