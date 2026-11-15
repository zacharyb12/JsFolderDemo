# 12 - Fonctions

## Niveau 1
1. Écris `direBonjour(nom)` qui affiche `"Bonjour <nom> !"`.
2. Écris `carre(x)` qui renvoie `x * x`. Affiche `carre(7)`.

## Niveau 2
3. Écris `saluer(nom = "inconnu")` avec une valeur par défaut. Appelle-la avec et sans argument.
4. Écris `prixTtc(prixHt, tva = 20)` qui renvoie le prix TTC (`prixHt * (1 + tva / 100)`). Teste avec 100.

## Niveau 3
5. Écris `appliquer(tableau, fonction)` qui renvoie un nouveau tableau où chaque élément a été transformé par `fonction`. Utilise-la avec `x => x * 2`.

---
### Corrections
```js
// 1
function direBonjour(nom) {
    console.log(`Bonjour ${nom} !`);
}
direBonjour("Zac");

// 2
const carre = (x) => x * x;
console.log(carre(7)); // 49

// 3
function saluer(nom = "inconnu") {
    console.log(`Bonjour ${nom}`);
}
saluer("Ana"); saluer(); // Bonjour Ana / Bonjour inconnu

// 4
function prixTtc(prixHt, tva = 20) {
    return prixHt * (1 + tva / 100);
}
console.log(prixTtc(100)); // 120

// 5
function appliquer(tableau, fonction) {
    const resultat = [];
    for (const element of tableau) resultat.push(fonction(element));
    return resultat;
}
console.log(appliquer([1, 2, 3], x => x * 2)); // [2, 4, 6]
```
