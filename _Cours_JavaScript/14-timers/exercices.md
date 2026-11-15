# 14 - Timers

## Niveau 1
1. Affiche "Bonjour" après 2 secondes avec `setTimeout`.
2. Crée un timeout de 2 secondes puis annule-le avec `clearTimeout` avant son exécution. Vérifie que rien ne s'affiche.

## Niveau 2
3. Avec `setInterval`, affiche un compteur de 1 à 5 (une fois par seconde), puis arrête l'intervalle avec `clearInterval`.

## Niveau 3
4. Affiche "Il reste N secondes" chaque seconde pendant 10 secondes en comptant à rebours, puis affiche "Terminé !" et arrête le timer.
5. Question : pourquoi `console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");` affiche-t-il A, C, B ?

---
### Corrections
```js
// 1
setTimeout(() => console.log("Bonjour"), 2000);

// 2
const t = setTimeout(() => console.log("jamais"), 2000);
clearTimeout(t);

// 3
let n = 0;
const id = setInterval(() => {
    n++;
    console.log(n);
    if (n === 5) clearInterval(id);
}, 1000);

// 4
let restant = 10;
const decompte = setInterval(() => {
    restant--;
    if (restant > 0) {
        console.log(`Il reste ${restant} secondes`);
    } else {
        console.log("Terminé !");
        clearInterval(decompte);
    }
}, 1000);

// 5 : setTimeout place la fonction dans une file. Elle ne s'exécute qu'après
// que le code synchrone (A puis C) est terminé.
```
