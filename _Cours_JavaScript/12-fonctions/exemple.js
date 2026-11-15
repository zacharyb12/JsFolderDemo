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
