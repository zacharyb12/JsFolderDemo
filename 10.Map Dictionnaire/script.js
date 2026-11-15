/*
le dictionnaire Map
*/


let dico = new Map(); // creation d'un dictionnaire vide

dico.set( 1,"a"); // ajout d'une paire clé-valeur
dico.set(2,"b"); // ajout d'une paire clé-valeur
dico.set(3,"c"); // ajout d'une paire clé-valeur


// set() : ajout d'une paire clé-valeur

dico.set( 4,"d"); // ajout d'une paire clé-valeur


// get() : récupération d'une valeur à partir de sa clé

let valeur = dico.get(1); // récupération de la valeur associée à la clé 1
console.log(valeur); // affiche "a"

// has() : vérification de l'existence d'une clé dans le dictionnaire

let isInside = dico.has(1) 

console.log(isInside); // affiche true

// delete() : suppression d'une paire clé-valeur

dico.delete(1); // suppression de la paire clé-valeur associée à la clé 1
