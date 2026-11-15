// Mini-projet : panier d'achats (Node ou console du navigateur)
const produits = [
    { name: "Pomme", price: 10, quantity: 5 },
    { name: "Fraise", price: 20, quantity: 0 },
    { name: "Poire", price: 15, quantity: 2 }
];

let total = 0;
for (let i = 0; i < produits.length; i++) {
    const { name, price, quantity } = produits[i];
    if (quantity === 0) {
        console.log(`Produit en rupture de stock : ${name}`);
    } else {
        console.log(`Produit: ${name} - Prix: ${price} € - Quantité: ${quantity}`);
        total += price * quantity;
    }
}
console.log(`Total à payer : ${total} €`); // 10*5 + 15*2 = 80
