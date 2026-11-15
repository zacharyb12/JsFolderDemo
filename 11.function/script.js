/* les fonctions */

// definition d'une fonction
function maFonction() {
    console.log("Bonjour, le monde!");
}

// fonction anonyme
let maFunc = function() {
    console.log("Bonjour, le monde!");
}

// fonction fléchée
let maFunc2 = () => {
    console.log("Bonjour, le monde!");
}

maFonction()
maFunc()
maFunc2()

/* les paramètres */

function addition(a, b) {
    return a + b
}

// valeur par défaut permet de ne pas passer de valeur
function addition(a, b = 5) {
    let result = a + b
    return result
}

addition(2, 3) // 5

addition(2) // 7


/*function avec diffférents paramètres */

function afficheMessage(message){
    console.log(message)
} 


// l'on peut passer une fonction en paramètre d'une autre fonction
function executeFonction(fonction , message){
    
    fonction(message)
}

executeFonction(afficheMessage, "Bonjour le monde!") 

/* cas pratique */

let listProducts = [
    { name: "Produit A", price: 10, quantity: 5 },
    { name: "Produit B", price: 20, quantity: 0 },
    { name: "Produit C", price: 15, quantity: 2 }
]
function calculTva(tva ,valeur){
return valeur * tva / 100
}


function calculTotalTva(monArray,tva,calculFunc){
let totalTva = 0

    monArray.array.forEach(element => {
    totalTva += calculFunc(tva, element.price)
    });

return totalTva
}


/*
exemple pratique incrementer et decrementer une valeur
*/

let valeur= 0

const augmenteValeur = (valeur,quantity) => {


    return valeur + quantity
}

const diminueValeur = (valeur,quantity) => {
return valeur - quantity
}

/*
operateur Rest permet de passer un nombre indefini d'arguments
*/

function addition(...nombres) {
    let somme = 0

    nombres.forEach(nombre => {
        somme += nombre
    });

    return somme
}
addition(1,5)
addition(1,5,8,7,9,8,5)


/*
fonction flechées
*/

function lireMessage(message , action){
    action(message)
}

// ici je passe une fonction anonyme l'on peut preciser la fonction directement plutot que de la definir
lireMessage("bonjour", () => { console.log(message) } )





// let myValue = [1, 2, 3, 4, 5]
// console.log(addition(...myValue)) // 15


// let myValue2 = [1, 2, 3, 4, 5,...myValue]



