// 06 - Conditionnel

let age = 18;

// 1. if
if (age >= 18) {
    console.log("Vous êtes majeur.");
}

// 2. if / else
if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous êtes mineur.");
}

// 3. if / else if / else
if (age >= 18) {
    console.log("Vous êtes majeur.");
} else if (age >= 16) {
    console.log("Vous êtes presque majeur.");
} else {
    console.log("Vous êtes mineur.");
}

// 4. switch : compare une valeur à plusieurs cas
let jour = 2; // 0 = dimanche, 1 = lundi, ..., 6 = samedi
switch (jour) {
    case 0: console.log("Dimanche"); break;
    case 1: console.log("Lundi"); break;
    case 2: console.log("Mardi"); break;
    // Sans "break", l'exécution continue dans le cas suivant (fall-through)
    default: console.log("Jour inconnu");
}

// 5. Opérateur ternaire : if/else condensé
const statut = age >= 18 ? "majeur" : "mineur";
console.log(statut);

// 6. ?? (nullish coalescing) : valeur de secours si null ou undefined
let nomSaisi = null;
console.log(nomSaisi ?? "Inconnu");   // "Inconnu"

// Différence avec || : || remplace aussi 0 et ""
let quantite = 0;
console.log(quantite || 10);  // 10  (0 est falsy)
console.log(quantite ?? 10);  // 0   (0 n'est ni null ni undefined)


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Conditions multiples : && et ||
const age2 = 20;
const aPermis = true;
if (age2 >= 18 && aPermis) console.log("Peut conduire");
if (age2 < 18 || !aPermis) console.log("Ne peut pas conduire");

// B. Condition sur une valeur "truthy" / "falsy"
const panier = [];
if (panier.length === 0) console.log("Panier vide");   // comparaison explicite (plus clair)
if (!panier.length) console.log("Panier vide (falsy)"); // 0 est falsy

// C. Le piège du switch : oublier le break
const jourCourant = 1;
switch (jourCourant) {
    case 1:
        console.log("Lundi");
    case 2:                 // pas de break : le code continue ici !
        console.log("Mardi (fall-through)");
        break;
    default:
        console.log("Autre");
}

// D. switch avec plusieurs cas regroupés
const saison = "hiver";
switch (saison) {
    case "hiver":
    case "automne":
        console.log("Temps frais");
        break;
    case "été":
        console.log("Chaud");
        break;
}

// E. Ternaires imbriqués (à utiliser avec modération)
const note = 15;
const mention = note >= 16 ? "très bien" : note >= 14 ? "bien" : note >= 10 ? "passable" : "insuffisant";
console.log(mention); // bien

// F. Condition sur un objet
const user = { nom: "Ana", admin: false };
if (user.admin) {
    console.log("Accès admin");
} else if (user.nom) {
    console.log(`Bonjour ${user.nom}`); // Bonjour Ana
}

// G. Logique de garde : sortir tôt avec return dans une fonction
function afficherPrix(prix) {
    if (prix === undefined) return "Prix non renseigné";  // garde : on sort tôt
    if (prix < 0) return "Prix invalide";
    return `${prix} €`;
}
console.log(afficherPrix());   // Prix non renseigné
console.log(afficherPrix(-2)); // Prix invalide
console.log(afficherPrix(12)); // 12 €
