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
