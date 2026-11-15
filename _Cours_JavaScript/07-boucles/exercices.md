# 07 - Boucles

## Niveau 1 : for et while
1. Affiche les nombres de 1 à 10 avec une boucle `for`.
2. Affiche les nombres de 10 à 1 avec une boucle `while`.

## Niveau 2 : conditions dans les boucles
3. Affiche uniquement les nombres pairs entre 1 et 20.
4. Calcule la somme des nombres de 1 à 100 et affiche le résultat (réponse : 5050).

## Niveau 3 : boucles imbriquées
5. Affiche ce motif avec une boucle imbriquée :
```
*
**
***
****
*****
```

---
### Corrections
```js
// 1
for (let i = 1; i <= 10; i++) console.log(i);

// 2
let n = 10;
while (n >= 1) {
    console.log(n);
    n--;
}

// 3
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

// 4
let somme = 0;
for (let i = 1; i <= 100; i++) somme += i;
console.log(somme); // 5050

// 5
for (let ligne = 1; ligne <= 5; ligne++) {
    let texte = "";
    for (let etoile = 1; etoile <= ligne; etoile++) texte += "*";
    console.log(texte);
}
```
