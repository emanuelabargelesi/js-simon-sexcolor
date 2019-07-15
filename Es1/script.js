// 1 -  Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare
// sono stati individuati;


//dichiaro i due array vuoti
var arrayNumbers = [];
var arrayNumbersUtente = [];

//dichiaro la funzione per ripetere un numero fino a max (il cui max viene settato all'interno della
//funzione funzioneRandom a 100)
function numeroRandom(max) {
  return Math.floor( Math.random() * max ) + 1;
}

//setto il countdown a 0 per contare le volte in cui la cpu genera un numero
var countdown = 0;

function funzioneRandom() {
while ( countdown < 5 ) {
  var randNum = numeroRandom(100);
  arrayNumbers.push(randNum);
  countdown += 1;
}
alert(arrayNumbers);
console.log("Questi sono i numeri random" + arrayNumbers);
}
funzioneRandom();


//timeout prima di eserguire la funzione
setTimeout(funzioneUtente, 3000);

//dichiaro la variabile che userò nella funzione sottostante
var domanda;

function funzioneUtente() {
  //setto il contatore a 0 per contare le volte in cui l'utente scrive un numero esatto
  var contatore = 0;
for (var i = 0; i < arrayNumbers.length; i++) {
    domanda = parseInt(prompt("Inserisci, in sequenza, i numeri visti in precedenza"));
  if (domanda === arrayNumbers[i]) {
     arrayNumbersUtente.push(domanda);
     //il contatore aumenta di 1 a ogni numero corretto inserito
     contatore += 1;
  }
  console.log("Questi sono i numeri indovinati: " + arrayNumbersUtente + " Numeri totali indovinati: " + contatore);
}
}
