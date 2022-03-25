/*
    Snack2
    Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
    nome, punti fatti, falli subiti.
    Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti.
    Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono
    solo nomi e falli subiti e stampiamo tutto in console.
*/

// creazione array di squadre calcio
let squadre = [
    {
        'nome': 'Napoli',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Juventus',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Milan',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Inter',
        'puntiFatti': 0,
        'falliSubiti': 0
    },
    {
        'nome': 'Roma',
        'puntiFatti': 0,
        'falliSubiti': 0
    }
];

console.log(squadre);

// aggiunta dei valori casuali per 'puntiFatti' e 'falliSubiti' al posto degli zeri
squadre = puntiFalliRandomize(squadre);

console.log(squadre);

const nomiFalliSquadre = [];

// destrutturizzazione per estrarre solo nomi e falliSubiti
for (let i = 0; i < squadre.length; i++) {
    let {nome, falliSubiti} = squadre[i];
    nomiFalliSquadre.push({nome, falliSubiti});
}

console.log(nomiFalliSquadre);



// Dato come argomento un array di squadre la funzione restituisce
// lo stesso array con punti fatti e falli subiti generati in modo casuale
function puntiFalliRandomize(squadre) {

    for (let i = 0; i < squadre.length; i++) {
        squadre[i].puntiFatti = parseInt(getRandomInt(1, 100));
        squadre[i].falliSubiti = parseInt(getRandomInt(1, 50));
    }

    return squadre;
}

// Restituisce in intero casuale da 'min a 'max'
function getRandomInt(min, max) {
    return Math.floor(Math.random() * 100) + 1;
}