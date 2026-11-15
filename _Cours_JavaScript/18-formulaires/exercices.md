# 18 - Formulaires (ouvrir 18-formulaires/index.html)

## Niveau 1
1. Au `submit`, récupère la valeur du champ `nom` et affiche-la dans la console.
2. Empêche le rechargement de la page avec `preventDefault`. Vérifie que le résultat s'affiche bien dans `#resultat`.

## Niveau 2
3. Valide que le nom fait au moins 3 caractères. Sinon affiche le message dans `#erreur-nom` et arrête la fonction avec `return`.
4. Récupère toutes les langues cochées avec `FormData.getAll("langues")`.

## Niveau 3
5. Ajoute un champ "Confirmer le mot de passe" dans le HTML, puis vérifie qu'il est identique au mot de passe avant d'afficher le résultat.

---
### Corrections
```js
// 1 et 2
const form = document.getElementById("monForm");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(form.elements["nom"].value);
});

// 3
const erreurNom = document.getElementById("erreur-nom");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nom = form.elements["nom"].value.trim();
    if (nom.length < 3) {
        erreurNom.textContent = "Au moins 3 caractères";
        return;
    }
    erreurNom.textContent = "";
});

// 4 (dans le submit)
const langues = new FormData(form).getAll("langues");
console.log(langues);

// 5 : après avoir ajouté <input id="confirm" type="password">
// if (form.elements["password"].value !== document.getElementById("confirm").value) {
//     erreurNom.textContent = "Les mots de passe ne correspondent pas";
//     return;
// }
```
