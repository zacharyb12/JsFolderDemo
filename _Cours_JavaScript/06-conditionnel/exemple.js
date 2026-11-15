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
