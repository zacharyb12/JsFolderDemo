

/*
1
Écris un script qui simule un panier d’achats.
Tu dois :

Créer une collection de produits (tableau d’objets), chaque produit ayant un nom, prix, et quantité.

Parcourir ce tableau avec une boucle pour :

Afficher chaque produit sous la forme : "Produit: nom - Prix: prix € - Quantité: qte"

Si le produit a une quantité de 0, afficher : " Produit en rupture de stock : nom"

Calculer le total à payer (prix * quantité pour chaque produit).
*/

// creation de la liste
// let products = [
//     { name: "pomme", price: 10, quantity: 5 },
//     { name: "fraise", price: 20, quantity: 0 },
//     { name: "poire", price: 15, quantity: 2 }
// ]

// // creation desj elements et definition de leur style
// let body = document.querySelector("body")
// let div = document.createElement("div")

// // variable pour recuperer le total
// let total = 0
// let price = document.createElement("p")
// price.style.textAlign = "center"
// price.style.fontSize = "20px"
// price.style.fontWeight = "bold"
// price.style.backgroundColor = "lightblue"
// price.style.color = "black"

// // boucle pour parcourir les produits
// for (let i = 0; i < products.length; i++) {
//     // creation de l'element p pour chaque produit
//     let p = document.createElement("p")
//     p.style.textAlign = "center"
//     p.style.fontSize = "20px"
//     p.style.fontWeight = "bold"

//     // verification de la quantite de chaque produit
//     if(products[i].quantity === 0){

//         p.innerText = ` Produit en rupture de stock : ${products[i].name}`
//         p.style.color = "red"

//     }else{

//         p.innerText = `Produit: ${products[i].name} - Prix: ${products[i].price} € - Quantité: ${products[i].quantity}`
//         total += products[i].price * products[i].quantity

//     }

//     // definition du total
//     price.innerText = `Total à payer : ${total} €`

//     // on ajoute chaque element dans la div
//     div.appendChild(p)


// }

// // on ajoute le tout dans le body
// div.appendChild(price)
// body.appendChild(div)


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

let listNoms = ["Jean", "Marie", "Pierre", "Jeannne", "Marie", "Paul", "Pierrot", "Marie"]
let listOccurence = [{name:"", occurence: 0}]
 let setNoms = new Set()
let setNomsDouble = new Set()
let occurence = 0

listNoms.forEach((nom) => {

if(!setNoms.has(nom)){

    setNoms.add(nom)
    listOccurence.push({name:nom, occurence: 1})
}
else{
    setNomsDouble.add(nom)

    listOccurence.forEach((item) => {
        if(item.name === nom){
            item.occurence++
        }
    })
}


})

let body = document.querySelector("body")

let div = document.createElement("div")

listOccurence.forEach((element) => {
    let p = document.createElement("p")

    p.innerText = `le nom  ${element.name} est present ${element.occurence} fois `
    div.appendChild(p)
})

body.appendChild(div)
