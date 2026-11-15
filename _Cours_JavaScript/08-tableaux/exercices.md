# 08 - Tableaux

## Niveau 1 : accéder et ajouter
1. Crée un tableau de 4 fruits. Affiche le premier (`[0]`) et le dernier (`[length - 1]`).
2. Ajoute un fruit à la fin avec `push`, puis un au début avec `unshift`. Affiche le tableau.

## Niveau 2 : retirer et chercher
3. Retire le dernier élément avec `pop`, affiche la valeur retirée et le tableau.
4. Donne la position d'un fruit avec `indexOf`, puis vérifie sa présence avec `includes`. Que renvoie `indexOf` si le fruit est absent ?

## Niveau 3 : trier
5. Trie un tableau de nombres `[10, 9, 100, 1]` en ordre croissant puis décroissant. Pourquoi le `sort()` sans fonction ne suffit-il pas ?

---
### Corrections
```js
// 1
const fruits = ["pomme", "poire", "fraise", "kiwi"];
console.log(fruits[0], fruits[fruits.length - 1]);

// 2
fruits.push("banane");
fruits.unshift("cerise");
console.log(fruits);

// 3
const retire = fruits.pop();
console.log(retire, fruits);

// 4 : indexOf renvoie -1 si absent
console.log(fruits.indexOf("fraise"), fruits.includes("melon"));

// 5 : sort() compare des TEXTES par défaut ("100" avant "9")
const nombres = [10, 9, 100, 1];
console.log([...nombres].sort((a, b) => a - b)); // croissant
console.log([...nombres].sort((a, b) => b - a)); // décroissant
```
