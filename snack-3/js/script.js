/*
    Snack 3
    Dato l'array di nomi:
    const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
    e dati due numeri min e max (min più piccolo di max).
    Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
    Eseguiamo questo esercizio prima con forEach e poi con filter.
*/

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = prompt("Inserisci min");
const max = prompt("Inserisci max");

// creazione dell'array che conterrà i valore compresi tra min e max
const newArray = [];

myArray.forEach(
    (element, i, myArray) => {
        if (i >= min && i <= max) {
            newArray.push(element);
        }
    }
);

console.log(newArray);


const newArrayFilter = myArray.filter(
    (element, i) => {
        if (i >= min && i <= max) {
            return true;
        }
        return false;
    }
);

console.log(newArrayFilter);
