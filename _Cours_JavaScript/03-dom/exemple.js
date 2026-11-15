// 03 - Le DOM : récupérer, modifier, créer, ajouter et supprimer des éléments
// Ouvrir index.html dans le navigateur, puis regarder la console (F12).
// Le script est chargé avec "defer" : la page est entièrement lue avant son exécution.

// 1. Récupérer des éléments
const paragraphe = document.getElementById("monId");              // par id (un seul élément)
const paragraphes = document.getElementsByTagName("p");           // par balise (liste "vivante")
const avecClasse = document.getElementsByClassName("maClasse");   // par classe
const premierP = document.querySelector("p");                     // premier élément correspondant au sélecteur CSS
const tousLesLi = document.querySelectorAll("li");                // tous les éléments correspondant au sélecteur CSS
const parent = document.getElementById("parent");
const input = document.getElementById("monInput");
console.log(paragraphe, paragraphes.length, avecClasse.length, premierP, tousLesLi.length);

// 2. Modifier le contenu
paragraphe.textContent = "Texte modifié (HTML non interprété)";
paragraphe.innerHTML = "Texte <strong>avec du HTML</strong>";   // interprète le HTML
// Attention : innerHTML avec une saisie utilisateur peut introduire du code malveillant (XSS)

// 3. Modifier un attribut (ici l'id)
paragraphe.id = "nouvelId";

// 4. Classes : classList est préférable à className (qui remplace TOUTES les classes)
paragraphe.classList.add("important");
paragraphe.classList.remove("maClasse");
paragraphe.classList.toggle("actif");       // ajoute si absente, retire si présente
console.log(paragraphe.className);

// 5. Styles inline (propriétés CSS en camelCase)
paragraphe.style.color = "red";
paragraphe.style.fontSize = "1.5rem";

// 6. Valeur d'un champ de formulaire
console.log(input.value);          // lire
input.value = "nouvelle valeur";   // écrire

// 7. Créer et ajouter des éléments
const fin = document.createElement("li");
fin.textContent = "Ajouté avec append (à la fin)";
parent.append(fin);

const debut = document.createElement("li");
debut.textContent = "Ajouté avec prepend (au début)";
parent.prepend(debut);

const positionnel = document.createElement("li");
positionnel.textContent = "Ajouté avec insertAdjacentElement (afterbegin)";
parent.insertAdjacentElement("afterbegin", positionnel);  // positions : beforebegin, afterbegin, beforeend, afterend

// 8. Supprimer un élément
const temporaire = document.createElement("li");
temporaire.textContent = "Je vais disparaître";
parent.append(temporaire);
temporaire.remove();
