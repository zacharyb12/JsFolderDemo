# 09 - Boucles et méthodes de tableau

Rappel :
- `for...of` pour parcourir les valeurs, `for` classique si on a besoin de l'index
- `forEach` pour faire quelque chose, `map` pour transformer, `filter` pour garder, `find` pour trouver, `some` / `every` pour tester, `reduce` pour calculer une valeur unique

## Niveau 1 : parcourir
1. Crée un tableau de 3 prénoms et affiche chacun avec `for...of`.
2. Affiche les mêmes prénoms numérotés (`1. Ana`, `2. Ben`...) avec `forEach`.
3. Avec une boucle `while`, affiche les nombres de 1 à 5.

## Niveau 2 : transformer et filtrer
4. Avec `produits = [{ nom, prix, stock }]`, garde les produits dont le prix est supérieur à 10 et affiche leurs noms (`filter` puis `map`).
5. Crée un tableau des prix TTC (prix × 1.2) arrondis à deux décimales avec `map`.
6. Trouve la personne nommée `"Ben"` dans un tableau d'objets avec `find`.
7. Vérifie avec `some` qu'au moins un produit est en rupture (stock 0), et avec `every` que tous les prix sont positifs.

## Niveau 3 : calculer
8. Calcule la valeur totale du stock (prix × stock de chaque produit) avec `reduce`.
9. Affiche, triés par ordre alphabétique, les noms des produits disponibles (stock > 0). Enchaîne `filter`, `map` et `sort`.
10. Compte les occurrences de chaque mot de `["chat", "chien", "chat"]` dans un objet avec `reduce`. Résultat attendu : `{ chat: 2, chien: 1 }`.

## Niveau 4 : défi
11. Regroupe les personnes par ville avec `reduce` : on veut `{ Paris: ["Ana", "Cy"], Lyon: ["Ben"] }`.
12. Trouve le produit le plus cher avec `reduce`, sans trier le tableau.

---
### Corrections
```javascript
const personnes = [
  { nom: "Ana", ville: "Paris", age: 25 },
  { nom: "Ben", ville: "Lyon", age: 31 },
  { nom: "Cy", ville: "Paris", age: 40 },
];
const produits = [
  { nom: "Stylo", prix: 2, stock: 10 },
  { nom: "Cahier", prix: 12, stock: 0 },
  { nom: "Sac", prix: 30, stock: 3 },
];
// 1
for (const p of ["Ana", "Ben", "Cy"]) console.log(p);
// 2
["Ana", "Ben", "Cy"].forEach((p, i) => console.log(`${i + 1}. ${p}`));
// 3
{ let n = 1; while (n <= 5) { console.log(n); n++; } }
// 4
console.log(produits.filter(p => p.prix > 10).map(p => p.nom)); // [ 'Cahier', 'Sac' ]
// 5
console.log(produits.map(p => +(p.prix * 1.2).toFixed(2))); // [ 2.4, 14.4, 36 ]
// 6
console.log(personnes.find(p => p.nom === "Ben")); // { nom: 'Ben', ville: 'Lyon', age: 31 }
// 7
console.log(produits.some(p => p.stock === 0), produits.every(p => p.prix > 0)); // true true
// 8
const total = produits.reduce((somme, p) => somme + p.prix * p.stock, 0);
console.log(total); // 2*10 + 12*0 + 30*3 = 110
// 9
console.log(produits.filter(p => p.stock > 0).map(p => p.nom).sort()); // [ 'Sac', 'Stylo' ]
// 10
const mots = ["chat", "chien", "chat"];
const occurrences = mots.reduce((acc, m) => { acc[m] = (acc[m] ?? 0) + 1; return acc; }, {});
console.log(occurrences); // { chat: 2, chien: 1 }
// 11
const parVille = personnes.reduce((acc, p) => {
  (acc[p.ville] ??= []).push(p.nom);
  return acc;
}, {});
console.log(parVille); // { Paris: [ 'Ana', 'Cy' ], Lyon: [ 'Ben' ] }
// 12
const plusCher = produits.reduce((max, p) => (p.prix > max.prix ? p : max));
console.log(plusCher.nom); // Sac
```
