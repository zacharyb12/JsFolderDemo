/*
le Dom 

Le DOM (Document object Model) est la représentation sous la forme d’objet des
données qui composent la structure et le contenu d’une page Web et de XML.
Le DOM n’est pas un langage de programmation, ce n’est qu’une API qui
met à disposition des méthodes pour permettre de réaliser des interactions
avec des pages Web et du XML.
*/

// Recuperer quelque chose dans le DOM

// 1. Récupérer un élément par son ID

let element = document.getElementById("monId"); // Récupère l'élément avec l'ID "monId"

console.log(element); // Affiche l'élément dans la console

//2. Récupérer un élément par sa classe

let elements = document.getElementsByClassName("maClasse"); // Récupère tous les éléments avec la classe "maClasse"

//3. Récupérer un élément par son nom de balise

let elementsByTag = document.getElementsByTagName("p"); // Récupère tous les éléments <p> dans le document


//4. Récupérer un élément par son sélecteur CSS
let elementBySelector = document.querySelector(".maClasse"); // Récupère le premier élément avec la classe "maClasse"

//5.Recuperer un element avec querySelector
let elementBySelector2 = document.querySelector("#monId"); // Récupère l'élément avec l'ID "monId"


//6. Récupérer plusieurs éléments par leur sélecteur
let elementsBySelectorAll = document.querySelectorAll("p"); // Récupère tous les éléments <p> dans le document


//7. id avec le dom 

let idElement = document.getElementById("monId"); // Récupère l'élément avec l'ID "monId"

//modifier un id avec le dom 
idElement.id = "nouvelId"; // Modifie l'ID de l'élément en "nouvelId"


//8 ajouter ou modifier du texte avec le dom

let textElement = document.getElementById("monId"); // Récupère l'élément avec l'ID "monId"

textElement.innerHTML = "Nouveau texte"; // Modifie le contenu HTML de l'élément

textElement.innerText = "Nouveau texte"; // Modifie le texte de l'élément sans interpréter le HTML

textElement.textContent = "Nouveau texte"; // Modifie le texte de l'élément sans interpréter le HTML


//9 ajouter une classe avec le dom
let classElement = document.getElementById("monId"); // Récupère l'élément avec l'ID "monId"

classElement.className = "maClasse"; // Modifie la classe de l'élément en "maClasse"


//10 recuperer une valeur avec le dom
let valueElement = document.getElementById("monId");

// Modifie la valeur de l'élément (utile pour les champs de formulaire)
valueElement.value = "Nouvelle valeur"; 


// 11. Creer un element avec le dom

let newElement = document.createElement("div"); // Crée un nouvel élément <div>
newElement.innerHTML = "Ceci est un nouvel élément"; // Ajoute du contenu HTML à l'élément


// 12. Ajouter un élément au DOM

// Récupère l'élément parent où ajouter le nouvel élément
let parentElement = document.getElementById("parent"); 

//append ajoute un element à l'élément parent
parentElement.append(newElement);

// appendChild ajoute le nouvel élément à l'élément parent
parentElement.appendChild(newElement); 


// prepend ajoute un element au début de l'élément parent

parentElement.prepend(newElement);

// before ajoute un element avant l'élément parent
parentElement.before(newElement);

// insertAdjacentElement ajoute un élément à un endroit spécifique par rapport à l'élément parent

parentElement.insertAdjacentElement("beforebegin", newElement); // Avant l'élément parent

parentElement.insertAdjacentElement("afterbegin", newElement); // Au début de l'élément parent

parentElement.insertAdjacentElement("beforeend", newElement); // À la fin de l'élément parent

parentElement.insertAdjacentElement("afterend", newElement); // Après l'élément parent






