// ============================================================================
// 08 - TABLEAUX (collections indexées)
// ----------------------------------------------------------------------------
// Un tableau (array) est une liste ORDONNÉE d'éléments.
// - Chaque élément a un INDEX : le premier est à l'index 0, le dernier à length - 1.
// - length donne le nombre d'éléments.
// - Un tableau peut contenir n'importe quel type (nombres, texte, objets, autres tableaux...).
// - Un tableau est un OBJET en JavaScript : typeof [] renvoie "object".
// ============================================================================


// ----------------------------------------------------------------------------
// 1. Créer un tableau
// ----------------------------------------------------------------------------
const vide = [];
const nombres = [1, 2, 3, 4, 5];
const melange = [42, "texte", true, null, { nom: "Ana" }, [1, 2]];
const avecConstructeur = new Array(1, 2, 3);  // équivalent à [1, 2, 3]
const cinqVides = new Array(5);               // 5 cases VIDES : length = 5, mais aucune valeur
const zeros = Array(3).fill(0);               // [0, 0, 0] : fill remplit toutes les cases
const serie = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]

console.log(vide, melange, zeros, serie);
console.log(cinqVides);                       // [ <5 empty items> ]


// ----------------------------------------------------------------------------
// 2. Lire un élément
// ----------------------------------------------------------------------------
console.log(nombres[0]);                      // 1 : premier élément
console.log(nombres[nombres.length - 1]);     // 5 : dernier élément
console.log(nombres[10]);                     // undefined : index inexistant, pas d'erreur
console.log(nombres.at(-1));                  // 5 : at() accepte les index négatifs (-1 = dernier)


// ----------------------------------------------------------------------------
// 3. Modifier un élément
// ----------------------------------------------------------------------------
nombres[0] = 100;            // remplace la valeur à l'index 0
console.log(nombres);        // [100, 2, 3, 4, 5]
nombres[0] = 1;              // on remet la valeur d'origine
// Attention : nombres[10] = 1 créerait des cases vides entre 5 et 10.


// ----------------------------------------------------------------------------
// 4. Ajouter et retirer aux extrémités  (MODIFIENT le tableau d'origine)
//    push    : ajoute à la fin          pop     : retire la fin (renvoie la valeur)
//    unshift : ajoute au début          shift   : retire le début (renvoie la valeur)
// ----------------------------------------------------------------------------
const pile = [];
pile.push("a");                // ["a"]
pile.push("b", "c");           // ["a", "b", "c"] : plusieurs valeurs à la fois
const dernier = pile.pop();    // renvoie "c", pile = ["a", "b"]
pile.unshift("z");             // ["z", "a", "b"]
const premier = pile.shift();  // renvoie "z", pile = ["a", "b"]
console.log(pile, dernier, premier); // [ 'a', 'b' ] c z


// ----------------------------------------------------------------------------
// 5. splice : ajouter ou supprimer AU MILIEU  (modifie le tableau)
//    splice(index, nombreASupprimer, ...elementsAAjouter)
//    Renvoie les éléments supprimés.
// ----------------------------------------------------------------------------
const lettres = ["a", "b", "c", "d"];
const supprimes = lettres.splice(1, 2);   // supprime 2 éléments à partir de l'index 1
console.log(lettres, supprimes);          // [ 'a', 'd' ]  [ 'b', 'c' ]
lettres.splice(1, 0, "X", "Y");           // insère sans rien supprimer (0)
console.log(lettres);                     // [ 'a', 'X', 'Y', 'd' ]


// ----------------------------------------------------------------------------
// 6. slice : COPIER une partie  (NE modifie PAS le tableau)
//    slice(debut, fin) : la fin est EXCLUE
// ----------------------------------------------------------------------------
const morceau = nombres.slice(1, 3);      // indices 1 et 2 -> [2, 3]
console.log(morceau, nombres);            // nombres est inchangé
console.log(nombres.slice(-2));           // les 2 derniers : [4, 5]


// ----------------------------------------------------------------------------
// 7. Copier un tableau : attention aux RÉFÉRENCES
// ----------------------------------------------------------------------------
const original = [1, 2];
const reference = original;   // PAS une copie : les deux noms désignent le MÊME tableau
reference.push(3);
console.log(original);        // [1, 2, 3] : l'original a changé aussi !

const copie = [...original];  // vraie copie (spread)
copie.push(4);
console.log(original, copie); // [1, 2, 3]  [1, 2, 3, 4]


// ----------------------------------------------------------------------------
// 8. Chercher dans un tableau
// ----------------------------------------------------------------------------
const fruits = ["pomme", "poire", "fraise", "poire"];
console.log(fruits.indexOf("poire"));        // 1 : première occurrence
console.log(fruits.lastIndexOf("poire"));    // 3 : dernière occurrence
console.log(fruits.indexOf("kiwi"));         // -1 : absent
console.log(fruits.includes("fraise"));      // true
console.log(fruits.find(f => f.startsWith("f")));      // "fraise" : premier élément qui passe le test
console.log(fruits.findIndex(f => f.startsWith("f"))); // 2 : son index
console.log(fruits.find(f => f === "kiwi"));           // undefined : rien trouvé


// ----------------------------------------------------------------------------
// 9. Transformer en texte et en nouveau tableau (NE modifient PAS l'original)
// ----------------------------------------------------------------------------
console.log(fruits.join(", "));      // "pomme, poire, fraise, poire"
console.log(fruits.toString());      // "pomme,poire,fraise,poire"
const majuscules = fruits.map(f => f.toUpperCase());  // nouveau tableau
console.log(majuscules);
console.log(fruits);                 // inchangé


// ----------------------------------------------------------------------------
// 10. Concaténer deux tableaux (nouveau tableau)
// ----------------------------------------------------------------------------
const t1 = [1, 2];
const t2 = [3, 4];
console.log(t1.concat(t2));   // [1, 2, 3, 4]
console.log([...t1, ...t2]);  // [1, 2, 3, 4] : même résultat avec le spread


// ----------------------------------------------------------------------------
// 11. Inverser et trier  (MODIFIENT le tableau)
// ----------------------------------------------------------------------------
const inverse = [1, 2, 3];
inverse.reverse();
console.log(inverse);                                // [3, 2, 1]

// sort() sans fonction compare les valeurs comme des TEXTES
console.log([10, 9, 100, 1].sort());                 // [1, 10, 100, 9] : piège !
console.log([10, 9, 100, 1].sort((a, b) => a - b));  // [1, 9, 10, 100] : croissant
console.log([10, 9, 100, 1].sort((a, b) => b - a));  // [100, 10, 9, 1] : décroissant
// Pour éviter de modifier l'original : [...tableau].sort(...)


// ----------------------------------------------------------------------------
// 12. Tableau de tableaux (grille, matrice)
// ----------------------------------------------------------------------------
const grille = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(grille[1][2]);              // 6 : ligne 1, colonne 2
for (const ligne of grille) {
    console.log(ligne.join(" "));       // "1 2 3" puis "4 5 6"
}


// ----------------------------------------------------------------------------
// 13. Tester le contenu
// ----------------------------------------------------------------------------
console.log(nombres.every(n => n > 0));  // true : TOUS les éléments vérifient la condition
console.log(nombres.some(n => n > 4));   // true : AU MOINS UN élément la vérifie
console.log(Array.isArray(nombres));     // true : test fiable pour savoir si c'est un tableau
console.log(typeof nombres);             // "object"


// ----------------------------------------------------------------------------
// 14. Tableau d'objets : le cas le plus courant
// ----------------------------------------------------------------------------
const produits = [
    { nom: "Pain", prix: 2, stock: 10 },
    { nom: "Lait", prix: 1.5, stock: 0 },
    { nom: "Beurre", prix: 3.2, stock: 4 },
];
const disponibles = produits.filter(p => p.stock > 0);   // garde ceux qui passent le test
console.log(disponibles.map(p => p.nom));                // [ 'Pain', 'Beurre' ]
console.log(produits.find(p => p.nom === "Lait"));       // l'objet Lait
const total = produits.reduce((somme, p) => somme + p.prix * p.stock, 0);
console.log(total.toFixed(2));                           // valeur totale du stock
