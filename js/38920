/*jshint esversion: 6*/
const cv = document.getElementById('canvas');
const ctx = cv.getContext('2d');

//kolor wypełnienia
ctx.fillStyle = "black";
//rysujemy prostokąt/kwadraty
//x, y, width, height
ctx.fillRect(25, 25, 100, 100);

//kolor obrysu
ctx.fillStroke = "green";

//drugi prostokąt
ctx.strokeRect(25, 25, 100, 100);

//czyszczenie obszaru
ctx.clearRect(45, 45, 60, 60);

//rysowanie linii
ctx.fillStyle = "gray";
ctx.moveTo(cv.width / 2, cv.height / 2);
ctx.lineTo(0, 0);
ctx.lineTo(400, 400);
ctx.lineTo(400, 0);
ctx.lineTo(0, 400);
ctx.stroke();

//rysowanie koła
ctx.beginPath();
//x, y, radius, start, stop, true/false(zgodnie z ruchem wskazówek zegara lub nie)
ctx.arc(cv.width / 2, cv.height / 2, 100, 0,2*Math.PI);
ctx.arc(cv.width / 2, cv.height / 2, 90, 0, Math.PI);
ctx.arc(cv.width / 2, cv.height - 50, 30, 0,2*Math.PI);
ctx.arc(cv.width / 2, 50, 30, 0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(50, cv.height / 2, 30, 0,2*Math.PI);
ctx.arc(350, cv.height / 2, 30, 0,2*Math.PI);
ctx.stroke();
