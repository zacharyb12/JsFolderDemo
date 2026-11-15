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
