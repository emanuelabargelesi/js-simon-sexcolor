// 1 -  Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare
// sono stati individuati;


//dichiaro gli array vuoti
var arrayNumbers = [];
var arrayNumbersUtente = [];
var arrayFinale = [];

//dichiaro la funzione per ripetere un numero fino a max (il cui max viene settato all'interno della
//funzione funzioneRandom a 100)
function numeroRandom(max) {
  return Math.floor( Math.random() * max ) + 1;
}
//TO DO: EVITARE DOPPIONI NUMERI

//setto il countdown a 0 per contare le volte in cui la cpu genera un numero
var countdown = 0;

function funzioneRandom() {
while ( countdown < 5 ) {
  var randNum = numeroRandom(100);
  arrayNumbers.push(randNum);
  countdown += 1;
}
alert(arrayNumbers);
console.log("Questi sono i numeri random " + arrayNumbers);
}
funzioneRandom();


//timeout prima di eserguire la funzione
setTimeout(funzioneUtente, 3000);

//dichiaro la variabile che userò nella funzione sottostante
var domanda;

function funzioneUtente() {
  for (var i = 0; i < arrayNumbers.length; i++) {
 domanda = parseInt(prompt("Inserisci, in sequenza, i numeri visti in precedenza"));
 arrayNumbersUtente.push(domanda);
}
console.log(arrayNumbersUtente);

//verifica
for (var i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers.includes(arrayNumbersUtente[i]) === true) {
    arrayFinale.push(arrayNumbersUtente[i]);
  }
}
document.write("Hai indovinato i numeri: " + arrayFinale + " per un totale di: " + arrayFinale.length + " numeri");
}
