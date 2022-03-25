/*
    Snack 1
    Creare un array di oggetti:
    Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

// creazione array bici da corsa
const bici = [
    {
        'nome': 'Atala',
        'peso': 18
    },
    {
        'nome': 'Bianchi',
        'peso': 14
    },
    {
        'nome': 'Decathlon',
        'peso': 18
    }
];

let lightest = getLightest(bici);
console.log(lightest);

// stampa su pagina HTML
for (let key in lightest) {
    document.getElementById("liteBike").innerHTML += `<span class="bike-info">${key}: ${lightest[key]}</span>`;
}

// dato un array di bici, restituisce quella col peso minore
function getLightest(bikes) {
    // inizialmente imposta la variabile del numero minimo a un intero molto grande
    let min = Number.MAX_SAFE_INTEGER;
    let min_index;
    for (let i = 0; i < bikes.length; i++) {
        let {peso} = bikes[i];
        if (peso < min) {
            min = parseInt(peso);
            min_index = i;
        }
    }

    return bikes[min_index];
}