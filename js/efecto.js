
var palabra=document.getElementById("palabra");

function frase () {
	palabra=setTimeout(cambio, 3000);
}

function cambio () {
	palabra.innnerHTML='marketing'; 
}