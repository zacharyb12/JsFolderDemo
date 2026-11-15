# 01 - Les bases : variables, types, console

## Niveau 1 : premiers pas
1. Déclare une variable `prenom` contenant ton prénom, puis affiche-la avec `console.log`.
2. Déclare `const annee = 2026`, essaie de la modifier (`annee = 2027`). Que se passe-t-il ?

## Niveau 2 : types
3. Affiche le type (`typeof`) de 5 valeurs différentes : un nombre, une chaîne, un booléen, `null`, `undefined`.
4. Crée un objet `voiture` avec les propriétés `marque`, `modele`, `annee`, puis affiche sa marque.

## Niveau 3 : aller plus loin
5. Crée un tableau de 3 objets (`{ nom, age }`) et affiche-le avec `console.table`.

---
### Corrections
```js
// 1
let prenom = "Zac";
console.log(prenom);

// 2 : TypeError: Assignment to constant variable.
const annee = 2026;
// annee = 2027;

// 3
console.log(typeof 42, typeof "bonjour", typeof true, typeof null, typeof undefined);

// 4
const voiture = { marque: "Peugeot", modele: "208", annee: 2020 };
console.log(voiture.marque);

// 5
console.table([{ nom: "Ana", age: 20 }, { nom: "Ben", age: 25 }, { nom: "Cy", age: 31 }]);
```
