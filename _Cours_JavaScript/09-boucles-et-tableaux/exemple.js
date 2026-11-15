// ============================================================================
// 09 - BOUCLES ET TABLEAUX : parcourir un tableau
// ----------------------------------------------------------------------------
// Il existe deux familles de parcours :
//  A. les BOUCLES (while, for, for...of) : on contrôle tout, on peut faire break/continue
//  B. les MÉTHODES de tableau (forEach, map, filter, find, reduce...) :
//     on leur passe une fonction, plus lisibles et souvent préférées
// ============================================================================

const users = [
    { id: 1, name: "John", age: 17 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 40 },
];


// ----------------------------------------------------------------------------
// A. LES BOUCLES
// ----------------------------------------------------------------------------

// 1. while : on répète tant que la condition est vraie
let i = 0;
while (i < users.length) {
    console.log("while :", users[i].name);
    i++;                                  // IMPORTANT : sans ça, boucle infinie
}

// 2. do...while : la condition est testée APRÈS le premier tour
let j = 0;
do {
    console.log("do-while :", users[j].name);
    j++;
} while (j < users.length);

// 3. for classique : on a l'index, pratique pour modifier le tableau
for (let k = 0; k < users.length; k++) {
    console.log(`for : [${k}] ${users[k].name}`);
}

// 4. for...of : on reçoit directement chaque VALEUR (le plus lisible)
for (const user of users) {
    console.log("for...of :", user.name);
}

// Si on a besoin de l'index ET de la valeur avec for...of :
for (const [index, user] of users.entries()) {
    console.log(`entries : ${index} -> ${user.name}`);
}

// 5. for...in : parcourt les CLÉS (ici les index, sous forme de TEXTE "0", "1"...)
//    À réserver aux OBJETS. Sur un tableau il peut poser des soucis (ordre, propriétés en plus).
for (const index in users) {
    console.log("for...in :", typeof index, index);   // typeof index → "string"
}

// 6. break et continue
for (const user of users) {
    if (user.age < 18) continue;   // on saute les mineurs
    console.log("majeur :", user.name);
}
for (const user of users) {
    if (user.name === "Jane") break; // on s'arrête à Jane
    console.log("avant Jane :", user.name);
}


// ----------------------------------------------------------------------------
// B. LES MÉTHODES DE PARCOURS
// ----------------------------------------------------------------------------

// 7. forEach : exécute une fonction pour chaque élément, NE RENVOIE RIEN
users.forEach((user, index) => {
    console.log(`forEach : ${index} ${user.name}`);
});
// forEach ne sert pas à créer un tableau. Pour cela, utilisez map.

// 8. map : TRANSFORME chaque élément et renvoie un NOUVEAU tableau de même taille
const noms = users.map(user => user.name);
console.log(noms);                          // [ 'John', 'Jane', 'Bob' ]
const libelles = users.map(u => `${u.name} (${u.age} ans)`);
console.log(libelles);

// 9. filter : garde les éléments pour lesquels la fonction renvoie true
const majeurs = users.filter(user => user.age >= 18);
console.log(majeurs.map(u => u.name));      // [ 'Jane', 'Bob' ]

// 10. find : renvoie le PREMIER élément qui passe le test (ou undefined)
const jane = users.find(user => user.name === "Jane");
console.log(jane);                          // { id: 2, name: 'Jane', age: 25 }

// 11. findIndex : pareil, mais renvoie l'index (ou -1)
console.log(users.findIndex(u => u.id === 3)); // 2

// 12. some / every : renvoient un booléen
console.log(users.some(u => u.age > 30));   // true : au moins un
console.log(users.every(u => u.age > 18));  // false : pas tous

// 13. reduce : réduit le tableau à UNE valeur (somme, total, objet...)
const sommeAges = users.reduce((somme, user) => somme + user.age, 0);
console.log("Somme des âges :", sommeAges); // 82
// 0 = valeur de départ de l'accumulateur. Sans lui, le premier élément sert de départ.

// 14. Chaînage : filter, puis map, puis reduce
const moyenneMajeurs = users
    .filter(u => u.age >= 18)
    .map(u => u.age)
    .reduce((somme, age, _, tab) => somme + age / tab.length, 0);
console.log("Âge moyen des majeurs :", moyenneMajeurs); // 32.5


// ----------------------------------------------------------------------------
// C. Quelle méthode choisir ?
// ----------------------------------------------------------------------------
//  Je veux...                                   -> méthode
//  faire quelque chose pour chaque élément       -> forEach (ou for...of)
//  obtenir un tableau transformé                 -> map
//  garder une partie des éléments                -> filter
//  trouver un élément                            -> find / findIndex
//  savoir si une condition est vraie            -> some / every / includes
//  calculer une seule valeur                     -> reduce
//  sortir de la boucle                           -> boucle for / for...of (break)
