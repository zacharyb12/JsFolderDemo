// 12 - Fonctions

// 1. Déclaration
function maFonction() {
    console.log("Bonjour, le monde !");
}

// 2. Expression de fonction (fonction anonyme stockée dans une variable)
const maFunc = function () {
    console.log("Bonjour, le monde !");
};

// 3. Fonction fléchée
const maFunc2 = () => console.log("Bonjour, le monde !");

maFonction();
maFunc();
maFunc2();

// 4. Paramètres, valeur par défaut et return
function addition(a, b = 5) {  // b vaut 5 si on ne le fournit pas
    return a + b;
}
console.log(addition(2, 3)); // 5
console.log(addition(2));    // 7

// 5. Fonction passée en paramètre (callback)
function afficheMessage(message) {
    console.log(message);
}
function executeFonction(fonction, message) {
    fonction(message);
}
executeFonction(afficheMessage, "Bonjour le monde !");

// 6. Callback anonyme : le paramètre msg est fourni par lireMessage
function lireMessage(message, action) {
    action(message);
}
lireMessage("bonjour", (msg) => console.log(msg));

// 7. Cas pratique : calcul de la TVA
function calculTva(tauxTva, valeur) {
    return valeur * tauxTva / 100;
}

const produits = [
    { name: "Produit A", price: 10, quantity: 5 },
    { name: "Produit B", price: 20, quantity: 0 },
    { name: "Produit C", price: 15, quantity: 2 }
];

function calculTotalTva(tableau, tauxTva, calculFunc) {
    let totalTva = 0;
    tableau.forEach(element => {
        totalTva += calculFunc(tauxTva, element.price);
    });
    return totalTva;
}
console.log(calculTotalTva(produits, 20, calculTva)); // 9 (2 + 4 + 3)

// 8. Fonctions fléchées simples
const augmente = (valeur, quantite) => valeur + quantite;
const diminue = (valeur, quantite) => valeur - quantite;
console.log(augmente(10, 5), diminue(10, 5)); // 15 5


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Hoisting des fonctions déclarées : utilisable avant sa définition
console.log(saluerTot("Ana")); // "Salut Ana" : la déclaration est remontée
function saluerTot(nom) { return `Salut ${nom}`; }
// Une fonction fléchée ou expression NE bénéficie PAS de ce hoisting :
// const fleche = () => 1;  (appeler fleche() avant cette ligne lève une erreur)

// B. Closure : une fonction se souvient de son environnement
function creerCompteur() {
    let total = 0;                 // variable "privée"
    return () => {
        total++;
        return total;
    };
}
const compteurA = creerCompteur();
compteurA();
console.log(compteurA()); // 2
const compteurB = creerCompteur(); // compteur indépendant
console.log(compteurB());         // 1

// C. Fonction retournée : une "fabrique"
const multiplier = (facteur) => (x) => x * facteur;
const doubler = multiplier(2);
const tripler = multiplier(3);
console.log(doubler(5), tripler(5)); // 10 15

// D. IIFE : fonction appelée immédiatement (évite de polluer l'espace global)
(function () {
    const secret = "invisible de l'extérieur";
    console.log("IIFE :", secret);
})();

// E. Paramètres par défaut qui utilisent d'autres paramètres
function creerUser(nom, pseudo = nom.toLowerCase()) {
    return { nom, pseudo };
}
console.log(creerUser("Zac")); // { nom: 'Zac', pseudo: 'zac' }

// F. Un argument manquant vaut undefined ; un argument en trop est ignoré
function f(a, b) { return [a, b]; }
console.log(f(1));       // [ 1, undefined ]
console.log(f(1, 2, 3)); // [ 1, 2 ]

// G. Fonction qui ne renvoie rien : undefined
function rien() {}
console.log(rien()); // undefined
