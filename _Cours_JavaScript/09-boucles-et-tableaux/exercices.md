# 09 - Boucles et tableaux

## Niveau 1 : parcourir
1. Crée un tableau de 4 prénoms et affiche chacun avec `for...of`.
2. Affiche le même tableau avec `forEach`.

## Niveau 2 : objets dans un tableau
3. Crée un tableau de produits `{ nom, prix }` et affiche "nom : prix €" pour chacun avec une boucle `for` classique.
4. Utilise `map` pour créer un tableau contenant uniquement les prix.

## Niveau 3 : calcul
5. Calcule le total des prix avec `forEach` (une variable `total` à l'extérieur), puis avec `reduce`.

---
### Corrections
```js
// 1
const prenoms = ["Ana", "Ben", "Cy", "Dia"];
for (const prenom of prenoms) console.log(prenom);

// 2
prenoms.forEach(prenom => console.log(prenom));

// 3
const produits = [{ nom: "Pain", prix: 2 }, { nom: "Lait", prix: 1.5 }];
for (let i = 0; i < produits.length; i++) {
    console.log(`${produits[i].nom} : ${produits[i].prix} €`);
}

// 4
const prix = produits.map(p => p.prix);
console.log(prix); // [2, 1.5]

// 5
let total = 0;
produits.forEach(p => { total += p.prix; });
const totalReduce = produits.reduce((somme, p) => somme + p.prix, 0);
console.log(total, totalReduce); // 3.5 3.5
```
