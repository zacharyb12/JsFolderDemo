# 06 - Conditionnel

## Niveau 1 : if
1. Déclare `note = 12`. Si la note est supérieure ou égale à 10, affiche "Reçu".
2. Déclare `nombre = 7` et affiche "pair" ou "impair" avec `if / else` (utilise `%`).

## Niveau 2 : else if et switch
3. Avec une note, affiche la mention : 16 et plus "très bien", 14 et plus "bien", 10 et plus "passable", sinon "insuffisant".
4. Avec `switch`, affiche le nom du jour pour `numero = 1` à `7` (1 = lundi). Ajoute un `default` pour les autres valeurs.

## Niveau 3 : opérateurs courts
5. Compare `valeur = 0` avec `valeur || 10` et `valeur ?? 10`. Explique la différence, puis écris la même logique avec un ternaire.

---
### Corrections
```js
// 1
const note = 12;
if (note >= 10) console.log("Reçu");

// 2
const nombre = 7;
if (nombre % 2 === 0) console.log("pair");
else console.log("impair");

// 3
if (note >= 16) console.log("très bien");
else if (note >= 14) console.log("bien");
else if (note >= 10) console.log("passable");
else console.log("insuffisant");

// 4
const numero = 1;
switch (numero) {
    case 1: console.log("lundi"); break;
    case 2: console.log("mardi"); break;
    // ... 3 à 7 sur le même modèle
    default: console.log("numéro inconnu");
}

// 5 : || remplace aussi 0 (0 est falsy), ?? seulement null / undefined
const valeur = 0;
console.log(valeur || 10); // 10
console.log(valeur ?? 10); // 0
console.log(valeur === 0 ? "zéro" : "autre"); // ternaire
