# 17 - Événements du DOM (ouvrir 17-evenements-dom/index.html)

## Niveau 1
1. Ajoute à `#btnUnique` un écouteur `click` qui affiche "Clic !" dans la console.
2. Fais changer la couleur de `#titre` au survol (`mouseenter`) et la remettre au départ (`mouseleave`).

## Niveau 2
3. Ajoute un écouteur qui ne s'exécute qu'une seule fois sur un bouton (`{ once: true }`).
4. Empêche la navigation du lien `#lien` avec `preventDefault`, et affiche "lien bloqué" dans la console.

## Niveau 3
5. Ajoute une liste (`#liste`) dont on peut supprimer un élément en cliquant dessus, y compris les éléments ajoutés plus tard (délégation d'événements sur `ul`).

---
### Corrections
```js
// 1
document.getElementById("btnUnique").addEventListener("click", () => console.log("Clic !"));

// 2
const titre = document.getElementById("titre");
titre.addEventListener("mouseenter", () => titre.style.color = "red");
titre.addEventListener("mouseleave", () => titre.style.color = "");

// 3
document.getElementById("btnUnique").addEventListener("click", () => console.log("Une seule fois"), { once: true });

// 4
document.getElementById("lien").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("lien bloqué");
});

// 5
document.getElementById("liste").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") e.target.remove();
});
```
