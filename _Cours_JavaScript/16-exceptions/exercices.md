# 16 - Exceptions (try / catch / finally)

## Niveau 1
1. Entoure `JSON.parse("{")` d'un `try / catch` et affiche le message d'erreur.
2. Ajoute un `finally` qui affiche "fin du traitement" dans les deux cas (avec et sans erreur).

## Niveau 2
3. Écris `diviser(a, b)` qui lève une `Error("Division par zéro")` si `b === 0`. Appelle-la dans un `try / catch` avec `(10, 2)` puis `(10, 0)`.
4. Écris `lireAge(saisie)` qui lève une erreur si la valeur n'est pas un nombre entre 0 et 120. Teste avec `"25"`, `"abc"` et `"200"`.

## Niveau 3
5. Dans le navigateur, demande un âge avec `prompt` et utilise `lireAge` dans un `try`. Affiche un `alert` avec le message d'erreur si la saisie est invalide, sinon "Âge valide".

---
### Corrections
```js
// 1 et 2
try {
    JSON.parse("{");
} catch (erreur) {
    console.log(erreur.message);
} finally {
    console.log("fin du traitement");
}

// 3
function diviser(a, b) {
    if (b === 0) throw new Error("Division par zéro");
    return a / b;
}
try {
    console.log(diviser(10, 2));
    console.log(diviser(10, 0));
} catch (erreur) {
    console.log("Erreur :", erreur.message);
}

// 4
function lireAge(saisie) {
    const age = Number(saisie);
    if (saisie.trim() === "" || Number.isNaN(age) || age < 0 || age > 120) {
        throw new Error("Âge invalide");
    }
    return age;
}
for (const s of ["25", "abc", "200"]) {
    try { console.log("OK", lireAge(s)); }
    catch (e) { console.log(s, "->", e.message); }
}

// 5 (navigateur)
// try { lireAge(prompt("Votre âge ?")); alert("Âge valide"); }
// catch (e) { alert(e.message); }
```
