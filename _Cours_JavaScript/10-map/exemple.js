// 10 - Map : dictionnaire clé / valeur (la clé peut être de n'importe quel type)

const dico = new Map();      // dictionnaire vide
dico.set(1, "a");            // ajoute une paire clé / valeur
dico.set(2, "b").set(3, "c"); // set renvoie la Map : on peut chaîner
console.log(dico.get(1));    // "a"
console.log(dico.has(2));    // true
console.log(dico.has(99));   // false
console.log(dico.size);      // 3

dico.delete(1);              // supprime la clé 1
console.log(dico.get(1));    // undefined

// Contrairement à un objet, la clé peut être un objet
const cle = { id: 1 };
const infos = new Map([[cle, "infos de l'utilisateur"]]);
console.log(infos.get(cle)); // "infos de l'utilisateur"

// Parcours
dico.forEach((valeur, cle2) => console.log(cle2, "=>", valeur));
for (const [cle3, valeur] of dico) {
    console.log(cle3, valeur);
}
console.log([...dico.keys()], [...dico.values()]);

// Initialisation avec une liste de paires
const produits = new Map([
    ["pomme", 1.2],
    ["poire", 1.5],
]);
console.log(produits.get("poire")); // 1.5
