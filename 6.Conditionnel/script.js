/*
le conditionnel en javascript
le conditionnel permet d'exécuter du code en fonction de conditions
*/


// 1 .le if 

// le if permet d'exécuter du code si une condition est vraie

let age = 18;
if (age >= 18) {
    console.log("Vous êtes majeur.");
}



// le if...else permet d'exécuter du code si une condition est vraie, sinon exécuter un autre code

if (age >= 18) {
    console.log("Vous êtes majeur.");
}else {
    console.log("Vous êtes mineur.");
}


// le if...else if...else permet d'exécuter du code si une condition est vraie, 
// sinon exécuter une autre condition, sinon exécuter un autre code
if (age >= 18) {
    console.log("Vous êtes majeur.");
}
else if (age >= 16) {
    console.log("Vous êtes presque majeur.");
}
else {
    console.log("Vous êtes mineur.");
}

// 2 .le switch
// le switch permet d'exécuter du code en fonction de la valeur d'une variable

let jour = 2; // 0 = dimanche, 1 = lundi, ..., 6 = samedi

switch (jour) {
    case 0:
        console.log("Dimanche");
        break;
    case 1:
        console.log("Lundi");
        break;
    case 2:
        console.log("Mardi");
        break;
    case 3:
        console.log("Mercredi");
        break;
    case 4:
        console.log("Jeudi");
        break;
    case 5:
        console.log("Vendredi");
        break;
    case 6:
        console.log("Samedi");
        break;
    default:
        console.log("Jour inconnu");
}

// 3 .le ternaire

// le ternaire permet d'exécuter du code en fonction d'une condition,
// il est une version condensée du if...else


let estMajeur = (age >= 18) ? "Vous êtes majeur." : "Vous êtes mineur.";


//4.le coalescing
// le coalescing permet de vérifier si une variable est définie ou non

// il est une version condensée du if...else

let nom = "John";

let prenom = nom ?? "Inconnu"; // si nom est défini, prenom prend la valeur de nom, sinon prenom prend la valeur "Inconnu"
