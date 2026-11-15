// 09 - Boucles et tableaux

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];

// while
let i = 0;
while (i < users.length) {
    console.log(users[i].name);
    i++;
}

// do...while
let j = 0;
do {
    console.log(users[j].name);
    j++;
} while (j < users.length);

// for classique : on a l'index
for (let k = 0; k < users.length; k++) {
    console.log(k, users[k].name);
}

// forEach : fonction appelée pour chaque élément
users.forEach((user, index) => console.log(index, user.name));

// for...of : récupère directement les valeurs (le plus lisible pour un tableau)
for (const user of users) {
    console.log(user.name);
}

// for...in : parcourt les CLÉS. À réserver aux objets, pas aux tableaux.
for (const index in users) {
    console.log(typeof index, users[index].name); // l'index est une string : "0", "1"...
}

// map : transforme chaque élément et renvoie un NOUVEAU tableau
const noms = users.map(user => user.name);
console.log(noms); // [ 'John', 'Jane', 'Bob' ]
