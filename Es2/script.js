// 2 -  Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro
// o rosa a seconda del sesso inserito;


//dichiaro le variabili
var domandaNome, domandaSesso;

//chiedo all'utente nome e sesso
domandaNome = prompt("Come ti chiami?");
domandaSesso = prompt("Di che sesso sei? (Maschio o Femmina)").toLowerCase();

//creo una funzione DRY
function printDomanda() {
  var domandaFinale =  document.getElementById("stampa").innerHTML = "Ciao ";
  domandaFinale += document.getElementById("stampaNome").innerHTML = domandaNome;
}


//se il sesso è maschile il nome diventa blu, se è femminile rosa
if (domandaSesso === "maschio") {
printDomanda();
  document.getElementById("stampaNome").style.color = "blue";
} else {
  printDomanda();
  document.getElementById("stampaNome").style.color = "pink";
}
