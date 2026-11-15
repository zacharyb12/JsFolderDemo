# 15 - Destructuring

## Niveau 1
1. Extrais `nom` et `age` de `{ nom: "Ana", age: 20, ville: "Lyon" }` dans deux variables.
2. Extrais les deux premiers éléments de `["rouge", "vert", "bleu"]`.

## Niveau 2
3. Extrais la propriété `ville` en la renommant `lieu`.
4. Extrais `pays` de `{ nom: "Ana" }` avec une valeur par défaut `"France"`.

## Niveau 3
5. Écris `afficher({ nom, adresse: { ville } })` qui affiche "nom habite à ville". Appelle-la avec `{ nom: "Ben", adresse: { ville: "Namur" } }`.
6. Échange deux variables `a = 1` et `b = 2` avec la déstructuration (sans variable temporaire).

---
### Corrections
```js
// 1
const { nom, age } = { nom: "Ana", age: 20, ville: "Lyon" };
console.log(nom, age);

// 2
const [premier, second] = ["rouge", "vert", "bleu"];
console.log(premier, second);

// 3
const { ville: lieu } = { ville: "Lyon" };
console.log(lieu);

// 4
const { pays = "France" } = { nom: "Ana" };
console.log(pays); // France

// 5
function afficher({ nom, adresse: { ville } }) {
    console.log(`${nom} habite à ${ville}`);
}
afficher({ nom: "Ben", adresse: { ville: "Namur" } });

// 6
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1
```
