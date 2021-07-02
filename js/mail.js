console.log("JS OK");


/* 
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/*

 1- prompt in cui si chiede mail all'utente;
 2- crea array con lista mail valide;
 3- check con if che la mail dell'utente sia presente nella lista;
 4- messaggio su esito controllo (da stampare sia in console che inner in html)

*/

// prendo la mail dall'utente

var userMail = prompt("Insersci la tua mail.");
console.log("Mail Utente", userMail);

// -----------------------------

// lista mail autorizzate (array)

var authorizedMails = ["francesco@mail.it", "giovanni@mail.it", "giorgio@mail.it", "lorenzo@mail.it", "claudio@mail.it"];
console.table(authorizedMails);
console.log(authorizedMails.length);

// -----------------------------


var messageMail = document.getElementById("message-mail");
// console.log("stampa messaggio", messageMail);


// condizione if per indirizzi mail

/* if (userMail == authorizedMails[0]) {
    console.log("la tua mail è corretta, puoi entrare nella tua webmail!");
    messageMail.innerHTML = ("La tua mail è corretta, puoi entrare nella tua webmail!");
} else if (userMail == authorizedMails[1]) {
    console.log("la tua mail è corretta, puoi entrare nella tua webmail!");
    messageMail.innerHTML = ("La tua mail è corretta, puoi entrare nella tua webmail!");
} else if (userMail == authorizedMails[2]) {
    console.log("la tua mail è corretta, puoi entrare nella tua webmail!");
    messageMail.innerHTML = ("La tua mail è corretta, puoi entrare nella tua webmail!");
} else if (userMail == authorizedMails[3]) {
    console.log("la tua mail è corretta, puoi entrare nella tua webmail!");
    messageMail.innerHTML = ("La tua mail è corretta, puoi entrare nella tua webmail!");
} else if (userMail == authorizedMails[4]) {
    console.log("la tua mail è corretta, puoi entrare nella tua webmail!");
    messageMail.innerHTML = ("La tua mail è corretta, puoi entrare nella tua webmail!");
} else {
    messageMail.innerHTML = ("Mi dispiace, la tua mail non è corretta. Riprova");
    alert("la tua mail non è corretta. Riprova!");
}
 */

// -----------------------

// condizione con ciclo 

for (var i = 0; i < authorizedMails.length; i++){
    if (authorizedMails[i] === userMail) {
        console.log("la tua mail è corretta, puoi entrare nella tua webmail!");
        messageMail.innerHTML = ("La tua mail è corretta, puoi entrare nella tua webmail!");
    } else {
        messageMail.innerHTML = ("Mi dispiace, la tua mail non è corretta. Riprova");
        alert("la tua mail non è corretta. Riprova!");
    }
}

// -----------------------