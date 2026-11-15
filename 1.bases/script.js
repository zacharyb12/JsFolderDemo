/*
les bases de la programmation javascript
*/

// 0 . Les commentaires
// 0.1 Commentaires sur une seule ligne
// Ceci est un commentaire sur une seule ligne

// 0.2 Commentaires sur plusieurs lignes

/* Ceci est un commentaire sur plusieurs lignes
    
Il peut s'étendre sur plusieurs lignes
*/


// 1. Variables
//Bonne pratique : La convention de nommage pour les variables est le « camelCase ».


// 1.1 Déclaration de variables

// let : portée de bloc (block scope) - accessible uniquement dans le bloc où elle est déclarée

let x = 10;

// var : portée de fonction (function scope) - accessible dans toute la fonction où elle est déclarée
var y = 20;

// const : constante - valeur ne peut pas être modifiée après sa déclaration
const z = 30;


// 1.2 Types de données

// - Number : nombre (entier ou flottant)
let a = 5; // entier
let b = 3.14; // flottant


// - BigInt : entier de grande taille (plus grand que 2^53 - 1)
let bigInt = 1234567890123456789012345678901234567890n; // BigInt


// - String : chaîne de caractères
let name = "John Doe"; // chaîne de caractères


// - Boolean : vrai ou faux
let isTrue = true; // vrai

let isFalse = false; // faux


// - Undefined : variable déclarée mais non initialisée
let c; // undefined


// - Null : valeur nulle ou vide
let d = null; // null


//Nan : Not a Number - valeur qui n'est pas un nombre
let e = NaN; // Not a Number

// infinity : valeur infinie (positive ou négative)
let f = Infinity; // positive infinity
let g = -Infinity; // negative infinity



// 1.2.2 Types d'objets

// - Object : objet (collection de paires clé-valeur)
let obj = { 
  name: "John", 
  age: 30 ,
  adresse : {
    rue : "rue de la paix",
    ville : "Paris"
  }
};



// - Array : tableau (collection d'éléments indexés)
let arrNumber = [1, 2, 3, 4, 5]; // tableau
let arrString = ["John", "Doe"]; // tableau de chaînes de caractères et de nombres
let arrObj = [{ name: "John" }, { name: "Doe" }]; // tableau d'objets



// - Function : fonction (bloc de code réutilisable)

function myFunction() {
  console.log("Hello World!"); // fonction
}

// - Date : date (objet représentant une date et une heure)

let date = new Date(); // objet Date



// 2. Console 

// 2.1 Affichage dans la console

console.log("Hello World!"); // affiche "Hello World!" dans la console

console.debug("Info!"); // affiche "Info!" dans la console en bleu

console.warn("Warning!"); // affiche "Warning!" dans la console en jaune

console.error("Error!"); // affiche "Error!" dans la console en rouge


//3. Popup


// affiche une alerte avec le message "Hello World!"
alert("Hello World!"); 


//prompt : affiche une boîte de dialogue avec un champ de saisie
let nameValue = prompt("Enter your name: "); // affiche une boîte de dialogue avec le message "Enter your name: " et un champ de saisie

console.log(nameValue); // affiche le nom saisi dans la console


//confirm : affiche une boîte de dialogue avec un message et deux boutons (OK et Annuler)
// affiche une boîte de dialogue avec le message "Are you sure?" et deux boutons (OK et Annuler)
let isConfirmed = confirm("Are you sure?"); 