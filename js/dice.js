/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
*/

console.log("Js OK");



/* 

1- Generare numero random per computer e per utente;
2- sapere quale dei due è più alto
3- inviare messaggio di vittoria o sconfitta 

*/

var player1 = Math.floor(Math.random() * 6 + 1);
var player2 = Math.floor(Math.random() * 6 + 1);

var outcome = document.getElementById("outcome");

console.log(player1);
console.log(player2);

if (player1 > player2) {
    console.log("Player 1 ha vinto");
    outcome.innerHTML = "Complimenti il player 1 ha vinto";

} else if (player1 < player2){
    console.log("Player 2 ha vinto");
    outcome.innerHTML = "Complimenti il player 2 ha vinto";
} else {
    console.log("Avete pareggiato");
    outcome.innerHTML = "Avete pareggiato";
}
