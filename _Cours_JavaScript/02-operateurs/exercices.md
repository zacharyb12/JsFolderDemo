# 02 - Opérateurs

## Niveau 1 : calculs et comparaisons
1. Affiche le résultat de `17 + 5`, `17 % 5` et `2 ** 4`.
2. Affiche `5 == "5"` et `5 === "5"`. Explique la différence avec un commentaire.

## Niveau 2 : logique
3. Écris une expression qui vaut `true` si un nombre `n` est compris entre 10 et 20 inclus (utilise `&&`). Teste avec 9, 10, 15 et 21.
4. Un score commence à 0. Ajoute 3 points, puis 5, puis retire 2 avec les opérateurs composés `+=` et `-=`. Affiche le score final.

## Niveau 3 : piège
5. Explique ce que renvoie `"5" - 3` et `"5" + 3`, puis écris pourquoi on préfère `===` à `==`.

---
### Corrections
```js
// 1
console.log(17 + 5, 17 % 5, 2 ** 4); // 22 2 16

// 2 : == compare la valeur après conversion, === compare aussi le type
console.log(5 == "5");  // true
console.log(5 === "5"); // false

// 3
const n = 15;
console.log(n >= 10 && n <= 20); // true
// Tester 9, 10, 15, 21 : false, true, true, false

// 4
let score = 0;
score += 3;
score += 5;
score -= 2;
console.log(score); // 6

// 5 : "5" - 3 = 2 (conversion en nombre), "5" + 3 = "53" (concaténation)
