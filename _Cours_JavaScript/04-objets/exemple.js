// 04 - Objets : collections de paires clé / valeur

// Création
let personne = { nom: "John", age: 30, ville: "Paris" };
console.log(personne);

// Lecture
console.log(personne.nom);       // "John"
console.log(personne["age"]);    // 30 (notation crochets : utile si la clé contient un espace)

// Ajout, modification, suppression
personne.pays = "France";        // ajout
personne.age = 31;               // modification
delete personne.ville;           // suppression
console.log(personne);           // { nom: 'John', age: 31, pays: 'France' }

// Méthode : une fonction stockée dans un objet
const compte = {
    titulaire: "John",
    solde: 100,
    depot(montant) {
        this.solde += montant;   // this = l'objet compte
    }
};
compte.depot(50);
console.log(compte.solde);       // 150

// Fonction constructeur
function Personne(nom, age) {
    this.nom = nom;
    this.age = age;
}
const p1 = new Personne("Jane", 25);
console.log(p1.nom);             // "Jane"

// Classe (syntaxe moderne, même idée)
class Voiture {
    constructor(marque) {
        this.marque = marque;
    }
    klaxonner() {
        return `${this.marque} klaxonne !`;
    }
}
console.log(new Voiture("Peugeot").klaxonner()); // "Peugeot klaxonne !"

// Parcourir un objet
for (const cle of Object.keys(personne)) {
    console.log(cle, "=>", personne[cle]);
}
console.log(Object.entries(personne)); // [ ['nom', 'John'], ['age', 31], ['pays', 'France'] ]


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Référence : copier un objet ne le duplique PAS
const a = { x: 1 };
const b = a;               // b et a désignent le MÊME objet
b.x = 99;
console.log(a.x);          // 99

// Copie superficielle (un niveau) : spread
const c = { ...a, x: 5 };
console.log(a.x, c.x);     // 99 5

// Attention : les objets imbriqués restent partagés
const original = { adresse: { ville: "Paris" } };
const copie = { ...original };
copie.adresse.ville = "Lyon";
console.log(original.adresse.ville); // "Lyon" : l'objet imbriqué est partagé

// B. Méthodes utiles
const produit = { nom: "Stylo", prix: 2 };
console.log(Object.keys(produit));    // [ 'nom', 'prix' ]
console.log(Object.values(produit));  // [ 'Stylo', 2 ]
console.log("prix" in produit);       // true
console.log(produit.hasOwnProperty("nom")); // true
console.log(Object.freeze(produit) === produit); // true : objet figé
produit.prix = 10;                    // ignoré silencieusement (objet figé)
console.log(produit.prix);            // 2

// C. Raccourcis : nom de propriété identique à une variable
const titre = "Dune";
const auteur = "Herbert";
const livre = { titre, auteur };      // équivalent à { titre: titre, auteur: auteur }
console.log(livre);

// D. Clés calculées
const cle = "couleur";
const voiture = { [cle]: "rouge", [`ann${"ee"}`]: 2020 };
console.log(voiture);                 // { couleur: 'rouge', annee: 2020 }

// E. this : désigne l'objet courant dans une méthode
const compteur = {
    valeur: 0,
    incrementer() { this.valeur++; return this; }, // return this permet de chaîner
};
compteur.incrementer().incrementer();
console.log(compteur.valeur);         // 2
