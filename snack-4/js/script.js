/*
    Snack 4
    Dato un elenco degli studenti di una facoltà, con il totale dei loro voti
    let students = [
        { name: 'Marco', id: 213, grades: 78 },
        { name: 'Paola', id: 110, grades: 96 },
        { name: 'Andrea', id: 250, grades: 48 },
        { name: 'Gaia', id: 145, grades: 74 },
        { name: 'Luigi', id: 196, grades: 68 },
        { name: 'Piero', id: 102, grades: 50 },
        { name: 'Francesca', id: 120, grades: 84 },
    ];
    1- Dobbiamo creare delle targhe con il loro nome in maiuscolo.Ci serve quindi un nuovo array di stringhe.
        Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
    2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
    3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70
        e id superiore a 120
*/

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];

// 1) Creazione array targhe in maiuscolo
let targhe = students.map( (student) => {
    return student.name.toUpperCase();
});

console.log(targhe);

// 2) Creazione array studenti con voti > 70
let gradesOver70 = students.filter((student) => {
    if (student.grades > 70) {
        return true;
    }
    return false;
});

console.log(gradesOver70);

// 3) Creazione array studenti con voti > 70 e id superiore a 120
let gradesIdOver = students.filter((student) => {
    if (student.grades > 70 && student.id > 120) {
        return true;
    }
    return false;
});

console.log(gradesIdOver);