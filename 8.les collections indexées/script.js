/*
Les collections indexées
*/

let myArray = [1, 2, 3, 4, 5]; // tableau de nombres

// utiliser le constructeur

let myArray2 = new Array(1, 2, 3, 4, 5); // tableau de nombres

// creer un tableau vide

let myArray3 = new Array(5); // tableau vide


// access aux elements d'un tableau

console.log(myArray[0]); // 1


// recuperer la taille de notre tableau 

let taille = myArray.length; // 5


// ajouter un element a la fin de notre tableau

myArray.push(6); // ajoute 6 à la fin du tableau


// unshift : ajouter un element au debut de notre tableau

myArray.unshift(0); // ajoute 0 au début du tableau

// pop : supprimer le dernier element de notre tableau
myArray.pop(1); // supprime le dernier élément du tableau (1 dans ce cas)


// shift : supprimer le premier element de notre tableau
let value = myArray.shift(0); // supprime le premier élément du tableau (0 dans ce cas)


// splice : supprimer un element de notre tableau
myArray.splice(2, 1); // supprime l'élément à l'index 2 (3 dans ce cas)

// splice : ajouter un element a notre tableau

myArray.splice(2, 0, 3); // ajoute 3 à l'index 2 (avant 4 dans ce cas)


// tostring : convertir notre tableau en une chaine de caracteres

let myArrayStr = myArray.toString(); // "1,2,3,4,5,6"

// reverse : inverser notre tableau

myArray.reverse(); // inverse le tableau (6,5,4,3,2,1)

// sort : trier notre tableau
myArray.sort(); // trie le tableau (1,2,3,4,5,6)

