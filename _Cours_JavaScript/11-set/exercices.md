# 11 - Set (valeurs uniques)

## Niveau 1
1. Crée un `Set` avec les valeurs `1, 2, 2, 3`. Affiche `size` (réponse : 3).
2. Ajoute `4` puis vérifie avec `has(4)`.

## Niveau 2
3. Supprime les doublons du tableau `["a", "b", "a", "c"]` en une ligne.
4. Supprime la valeur `2` d'un Set avec `delete`, puis affiche le contenu avec `[...set]`.

## Niveau 3
5. Étant donné `["Ana", "Ben", "Ana", "Cy", "Ben", "Ana"]`, affiche la liste des noms qui apparaissent plus d'une fois (utilise deux Set).

---
### Corrections
```js
// 1
const s = new Set([1, 2, 2, 3]);
console.log(s.size);   // 3

// 2
s.add(4);
console.log(s.has(4)); // true

// 3
console.log([...new Set(["a", "b", "a", "c"])]); // [ 'a', 'b', 'c' ]

// 4
s.delete(2);
console.log([...s]); // [ 1, 3, 4 ]

// 5
const noms = ["Ana", "Ben", "Ana", "Cy", "Ben", "Ana"];
const vus = new Set();
const doublons = new Set();
for (const nom of noms) {
    if (vus.has(nom)) doublons.add(nom);
    else vus.add(nom);
}
console.log([...doublons]); // [ 'Ana', 'Ben' ]
```
