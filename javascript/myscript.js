/**
 *  Il software deve chiedere per 5 volte all'utente di inserire un numero.
 *  Il programma stampa la somma di tutti i numeri inseriti.
 *  Esegui questo programma in due versioni, con il for e con il while.
 */

let sommaFor = 0

for (let i = 0; i < 5; i++){
    
    numero = parseInt(prompt("Inserisci un numero per 5 volte"));

    sommaFor = sommaFor + numero;

}

document.getElementById("sommaFor").innerHTML = sommaFor

let sommaWhile = 0

j = 0

while (j < 5){

    numeriWhile = parseInt(prompt("Inserisci un numero per 5 volte per il ciclo while"));

    sommaWhile = sommaWhile + numeriWhile;

    j++
}

document.getElementById("sommaWhile").innerHTML = sommaWhile