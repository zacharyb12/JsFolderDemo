// 08 - Tableaux (collections indexées : l'index commence à 0)

const nombres = [1, 2, 3, 4, 5];
console.log(nombres[0]);       // 1
console.log(nombres.length);   // 5

// Ajouter et retirer aux extrémités
nombres.push(6);                  // ajoute à la fin
nombres.unshift(0);               // ajoute au début
const dernier = nombres.pop();    // retire le dernier et le renvoie
const premier = nombres.shift();  // retire le premier et le renvoie
console.log(nombres, dernier, premier); // [1,2,3,4,5]  6  0

// splice(index, nombreASupprimer, ...elementsAAjouter)
nombres.splice(2, 1);     // supprime 1 élément à l'index 2 (la valeur 3)
nombres.splice(2, 0, 3);  // ajoute 3 à l'index 2 sans rien supprimer
console.log(nombres);     // [1,2,3,4,5]

// Conversion en texte
console.log(nombres.toString());  // "1,2,3,4,5"
console.log(nombres.join(" - ")); // "1 - 2 - 3 - 4 - 5"

// Inversion : modifie le tableau d'origine
nombres.reverse();
console.log(nombres);             // [5,4,3,2,1]

// Tri : sort() trie comme du TEXTE par défaut (piège avec les nombres)
const mixtes = [10, 9, 100];
console.log([...mixtes].sort());                 // [10, 100, 9] (ordre alphabétique)
console.log([...mixtes].sort((a, b) => a - b));  // [9, 10, 100] (tri numérique)

// Recherche
const fruits = ["pomme", "poire", "fraise"];
console.log(fruits.includes("poire"));  // true
console.log(fruits.indexOf("kiwi"));    // -1 : absent
console.log(fruits.slice(1));           // ["poire", "fraise"] : copie d'une partie, n'modifie pas le tableau

// new Array(5) crée 5 cases VIDES (pas 5 zéros)
console.log(new Array(5));                           // [ <5 empty items> ]
console.log(Array.from({ length: 5 }, (_, i) => i)); // [0, 1, 2, 3, 4]
