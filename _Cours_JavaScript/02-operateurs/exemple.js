// 02 - Opérateurs

// 1. Arithmétiques
console.log(5 + 3);   // 8
console.log(5 - 3);   // 2
console.log(5 * 3);   // 15
console.log(5 / 2);   // 2.5
console.log(5 % 3);   // 2 (reste de la division entière)
console.log(5 ** 3);  // 125 (puissance)

// Affectations composées
let score = 10;
score += 5;   // score = score + 5  -> 15
score -= 3;   // 12
score *= 2;   // 24
console.log(score);

// 2. Comparaison
console.log(5 == "5");   // true  : égalité de valeur (conversion de type)
console.log(5 === "5");  // false : égalité stricte (valeur ET type)
console.log(5 != "3");   // true
console.log(5 !== "5");  // true
console.log(5 > 3, 5 >= 5, 5 < 3, 5 <= 5); // true true false true
// Bonne pratique : utiliser toujours === et !==

// 3. Logiques
console.log(true && false); // false : ET
console.log(true || false); // true  : OU
console.log(!true);         // false : NON

// || renvoie la première valeur "truthy" (vérité)
let pseudo = "" || "Anonyme";  // "Anonyme" car "" est falsy
console.log(pseudo);

// 4. Le + sur des chaînes et la conversion automatique
console.log("5" + 3);  // "53" : concaténation, le nombre devient du texte
console.log("5" - 3);  // 2    : la soustraction convertit en nombre


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Court-circuit : && et || s'arrêtent dès que le résultat est connu
const utilisateur = null;
console.log(utilisateur && utilisateur.nom);   // null : pas d'erreur, utilisateur.nom n'est pas évalué
const nomAffiche = utilisateur?.nom ?? "Inconnu"; // ?. (optional chaining) + ?? : sécurisé
console.log(nomAffiche);                       // "Inconnu"

// B. Opérateur ?. : accès sécurisé à une propriété
const user = { adresse: { ville: "Paris" } };
console.log(user.adresse?.ville);              // "Paris"
console.log(user.telephone?.numero);           // undefined : pas d'erreur
// console.log(user.telephone.numero);         // TypeError : telephone est undefined

// C. Incrémentation : avant ou après ?
let n = 5;
console.log(n++);  // 5 : affiche puis incrémente (n vaut 6 ensuite)
console.log(++n);  // 7 : incrémente puis affiche
console.log(n);    // 7

// D. Opérateur typeof et opérateur in
console.log(typeof 3.14);             // "number"
console.log("nom" in { nom: "Ana" }); // true : la clé existe dans l'objet
console.log(2 in [10, 20, 30]);       // true : l'index 2 existe

// E. Priorité : les * et / passent avant les + et -
console.log(2 + 3 * 4);     // 14, pas 20
console.log((2 + 3) * 4);   // 20

// F. Comparer des nombres et des chaînes
console.log("10" > "9");   // false : comparaison alphabétique ("1" < "9")
console.log(10 > 9);       // true  : comparaison numérique
console.log("10" > 9);     // true  : "10" converti en nombre
