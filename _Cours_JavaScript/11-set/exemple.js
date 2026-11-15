// 11 - Set : collection de valeurs UNIQUES (les doublons sont ignorés)

const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(2);              // ignoré : 2 est déjà présent
console.log(set1.size);   // 2
console.log(set1.has(1)); // true

set1.delete(1);
console.log([...set1]);   // [2]

// Cas pratique : supprimer les doublons d'un tableau
const noms = ["Jean", "Marie", "Pierre", "Marie", "Jean"];
const uniques = [...new Set(noms)];
console.log(uniques);     // [ 'Jean', 'Marie', 'Pierre' ]

// forEach : parcourt les valeurs
new Set(["a", "b"]).forEach(valeur => console.log(valeur));

// clear : vide le Set
set1.clear();
console.log(set1.size);   // 0
