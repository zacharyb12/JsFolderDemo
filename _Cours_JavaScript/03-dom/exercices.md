# 03 - Le DOM (ouvrir 03-dom/index.html et regarder la console)

## Niveau 1 : lire la page
1. Récupère le paragraphe d'id `monId` et affiche son texte (`textContent`) dans la console.
2. Remplace son texte par "Je suis modifié".

## Niveau 2 : modifier et créer
3. Ajoute au paragraphe la classe `mise-en-avant` avec `classList.add`.
4. Crée un `<li>` contenant "Nouveau" et ajoute-le à la fin de `#parent` avec `append`.

## Niveau 3 : fonction réutilisable
5. Écris `ajouterElement(texte)` qui crée un `<li>` avec ce texte et l'ajoute à `#parent`. Appelle-la 3 fois avec des textes différents.

---
### Corrections
```js
// 1
const paragraphe = document.getElementById("monId");
console.log(paragraphe.textContent);

// 2
paragraphe.textContent = "Je suis modifié";

// 3
paragraphe.classList.add("mise-en-avant");

// 4
const li = document.createElement("li");
li.textContent = "Nouveau";
document.getElementById("parent").append(li);

// 5
function ajouterElement(texte) {
    const li = document.createElement("li");
    li.textContent = texte;
    document.getElementById("parent").append(li);
}
ajouterElement("Premier");
ajouterElement("Deuxième");
ajouterElement("Troisième");
```
