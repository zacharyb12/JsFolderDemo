# 13 - Rest et Spread

## Niveau 1
1. Fusionne `[1, 2]` et `[3, 4]` en un seul tableau avec le spread.
2. Copie l'objet `{ nom: "Ana" }` avec le spread, modifie la copie, et vérifie que l'original n'a pas changé.

## Niveau 2
3. Écris `somme(...nombres)` qui renvoie la somme de ses arguments. Teste avec 3 valeurs, puis avec un tableau passé en spread.
4. Fusionne `{ a: 1, b: 2 }` et `{ b: 20, c: 3 }`. Quelle valeur de `b` obtient-on ?

## Niveau 3
5. Avec le rest dans la déstructuration : sépare le premier élément de `[10, 20, 30, 40]` et le reste. Fais de même pour un objet : extrais `nom` et regroupe le reste dans `autres`.

---
### Corrections
```js
// 1
console.log([...[1, 2], ...[3, 4]]); // [1, 2, 3, 4]

// 2
const original = { nom: "Ana" };
const copie = { ...original };
copie.nom = "Ben";
console.log(original.nom, copie.nom); // Ana Ben

// 3
function somme(...nombres) {
    return nombres.reduce((total, n) => total + n, 0);
}
console.log(somme(1, 2, 3));        // 6
console.log(somme(...[4, 5, 6]));   // 15

// 4 : la dernière valeur gagne, donc b = 20
console.log({ ...{ a: 1, b: 2 }, ...{ b: 20, c: 3 } }); // { a: 1, b: 20, c: 3 }

// 5
const [premier, ...reste] = [10, 20, 30, 40];
console.log(premier, reste); // 10 [ 20, 30, 40 ]
const { nom, ...autres } = { nom: "Ana", age: 20, ville: "Paris" };
console.log(nom, autres);    // Ana { age: 20, ville: 'Paris' }
```
