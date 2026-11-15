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


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Map ou objet ?
// - Map : clés de n'importe quel type, ordre d'insertion garanti, size, itération simple
// - Objet : bien pour une structure fixe (propriétés connues), clés = texte ou symbole

// B. Compter des occurrences avec une Map
const mots = ["chat", "chien", "chat", "oiseau", "chat"];
const compte = new Map();
for (const mot of mots) {
    compte.set(mot, (compte.get(mot) ?? 0) + 1); // ?? donne 0 si la clé n'existe pas encore
}
console.log(compte); // Map(3) { 'chat' => 3, 'chien' => 1, 'oiseau' => 1 }

// C. Convertir entre Map et tableau
console.log([...compte]);               // [ ['chat', 3], ['chien', 1], ['oiseau', 1] ]
console.log(Object.fromEntries(compte)); // { chat: 3, chien: 1, oiseau: 1 } : vers un objet
const depuisObjet = new Map(Object.entries({ a: 1, b: 2 })); // depuis un objet

// D. Nettoyer une Map
compte.clear();
console.log(compte.size); // 0

// E. Clés multiples de types différents
const types = new Map([[1, "nombre"], ["1", "texte"], [true, "booléen"]]);
console.log(types.get(1), types.get("1"), types.get(true)); // nombre texte booléen
