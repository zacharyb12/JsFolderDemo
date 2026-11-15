/*
1
Écris un script qui simule un panier d’achats.
Tu dois :

Créer une collection de produits (tableau d’objets), chaque produit ayant un nom, prix, et quantité.

Parcourir ce tableau avec une boucle pour :

Afficher chaque produit sous la forme : "Produit: nom - Prix: prix € - Quantité: qte"

Si le produit a une quantité de 0, afficher : "⚠️ Produit en rupture de stock : nom"

Calculer le total à payer (prix * quantité pour chaque produit).
*/

let products = [
    { name: "Produit A", price: 10, quantity: 5 },
    { name: "Produit B", price: 20, quantity: 0 },
    { name: "Produit C", price: 15, quantity: 2 }
]

let body = document.querySelector("body")
let div = document.createElement("div")

for (let i = 0; i < products.length; i++) {
    let item = document.createElement("p")
    item.innerHTML = `Produit: ${products[i].name} - Prix: ${products[i].price} € - Quantité: ${products[i].quantity}`
    div.appendChild(item)
    
}

body.appendChild(div)
/*
2
Crée une liste (array) contenant des noms (ou nombres), 
certains apparaissant plusieurs fois.
Exemple :
Parcours la liste avec une boucle, et utilise un Set pour :
Stocker les noms uniques rencontrés.
Détecter les doublons (si un nom est déjà dans le Set, c’est un doublon).
À la fin :
Affiche tous les noms uniques (via le Set).
Affiche une liste des doublons détectés.
*/

// let stockProducts = new Map(); // creation d'un dictionnaire vide

// stockProducts.set(1, { name: "Produit A", price: 10, quantity: 5 }); // ajout d'une paire clé-valeur
// stockProducts.set(2, { name: "Produit B", price: 20, quantity: 0 }); // ajout d'une paire clé-valeur
// stockProducts.set(3, { name: "Produit C", price: 15, quantity: 2 }); // ajout d'une paire clé-valeur


// let continueLoop = true
// let response = ""

// let body = document.querySelector("body") // selectionne le body du document
// let div = document.createElement("div")


//     stockProducts.forEach((product, key) => {
//     let p = document.createElement("p")
//     p.innerHTML = `Produit: ${product.name} - Prix: ${product.price} € - Quantité: ${product.quantity}`
//     div.appendChild(p)
//     })

//     body.appendChild(div)