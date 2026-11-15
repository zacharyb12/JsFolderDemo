/*
le set est une collection d'éléments uniques et non ordonnés
*/

const set1 = new Set();


// add ajoute un élément au set
set1.add(1); // ajoute 1 au set
set1.add(2); // ajoute 2 au set


// has vérifie si un élément est présent dans le set

console.log(set1.has(1)); // true


// delete supprime un élément du set

set1.delete(1); // supprime 1 du set


// clear supprime tous les éléments du set

set1.clear(); // supprime tous les éléments du set

// forEach itère sur les éléments du set

set1.forEach((value) => {
    console.log(value); // affiche chaque élément du set
})


// size renvoie le nombre d'éléments dans le set

let taille = set1.size;
console.log(taille);


