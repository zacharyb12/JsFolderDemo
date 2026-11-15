# 19 - Promesses et asynchrone

## Niveau 1
1. Crée une promesse résolue avec `"OK"` (`Promise.resolve`) et affiche sa valeur avec `.then`.
2. Crée une promesse rejetée avec `Promise.reject(new Error("Échec"))` et affiche le message avec `.catch`.

## Niveau 2
3. Avec la fonction `attendre(ms)` du cours, affiche "1 seconde écoulée" après `await attendre(1000)` dans une fonction `async`.
4. Transforme `verifUser` en fonction `async` et utilise `try / catch` pour afficher le résultat.

## Niveau 3
5. Lance 3 promesses avec des délais différents (`attendre(300)`, `attendre(100)`, `attendre(200)`) avec `Promise.all` et affiche les résultats dans l'ordre du tableau.

---
### Corrections
```js
// 1
Promise.resolve("OK").then(v => console.log(v));

// 2
Promise.reject(new Error("Échec")).catch(e => console.log(e.message));

// 3
const attendre = (ms) => new Promise(r => setTimeout(r, ms));
async function demo() {
    await attendre(1000);
    console.log("1 seconde écoulée");
}
demo();

// 4
async function connexion(email, mdp) {
    try {
        console.log(await verifUser(email, mdp));
    } catch (e) {
        console.log("Erreur :", e.message);
    }
}

// 5
(async () => {
    const r = await Promise.all([
        attendre(300).then(() => "A"),
        attendre(100).then(() => "B"),
        attendre(200).then(() => "C"),
    ]);
    console.log(r); // [ 'A', 'B', 'C' ] : l'ordre suit le tableau, pas le temps
})();
```
