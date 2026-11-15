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


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Opérations ensemblistes
const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5]);

const intersection = [...A].filter(x => B.has(x));   // présents dans A ET B
const union = new Set([...A, ...B]);                  // présents dans A OU B
const difference = [...A].filter(x => !B.has(x));     // dans A mais pas dans B
console.log("intersection :", intersection);  // [ 3, 4 ]
console.log("union :", [...union]);           // [ 1, 2, 3, 4, 5 ]
console.log("différence :", difference);      // [ 1, 2 ]

// B. Un Set compare les objets par RÉFÉRENCE
const s = new Set();
s.add({ id: 1 });
s.add({ id: 1 });       // un AUTRE objet, donc ajouté
console.log(s.size);    // 2

// C. Un Set garde l'ordre d'insertion
console.log([...new Set([3, 1, 2, 1])]); // [ 3, 1, 2 ]

// D. NaN est unique dans un Set
console.log(new Set([NaN, NaN]).size);   // 1

// E. Parcourir avec for...of
for (const valeur of new Set(["x", "y"])) console.log(valeur);
