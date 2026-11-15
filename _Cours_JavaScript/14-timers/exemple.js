// 14 - Timers : setTimeout et setInterval

// setTimeout : exécute la fonction UNE fois, après un délai en millisecondes
setTimeout(() => console.log("setTimeout : affiché après 1 seconde"), 1000);

// clearTimeout : annule le timeout avant son exécution
const annule = setTimeout(() => console.log("ce message ne s'affiche jamais"), 500);
clearTimeout(annule);

// setInterval : exécute la fonction à intervalle régulier
let count = 0;
const id = setInterval(() => {
    count++;
    console.log(`Compteur : ${count}`);
    if (count === 3) {
        clearInterval(id); // indispensable, sinon l'intervalle tourne indéfiniment
        console.log("Intervalle arrêté");
    }
}, 500);

// Un timer ne bloque pas le code : ce message s'affiche en premier
console.log("Ce message s'affiche avant tous les timers");


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. setTimeout avec délai 0 : exécuté APRÈS le code synchrone en cours
console.log("1");
setTimeout(() => console.log("3 (setTimeout 0)"), 0);
console.log("2");
// Ordre : 1, 2, 3 (le timer attend que la pile d'appels soit vide)

// B. Passer des arguments à un timer
setTimeout((prenom, age) => console.log(`${prenom} a ${age} ans`), 100, "Ana", 20);

// C. Le piège de var dans une boucle avec setTimeout
for (var k = 0; k < 3; k++) {
    setTimeout(() => console.log("var :", k), 150); // affiche 3, 3, 3
}
for (let m = 0; m < 3; m++) {
    setTimeout(() => console.log("let :", m), 150); // affiche 0, 1, 2 : let crée une variable par tour
}

// D. Décompte avec un intervalle qui se stoppe lui-même
let secondes = 3;
const decompte = setInterval(() => {
    console.log(secondes > 0 ? `Départ dans ${secondes}` : "Partez !");
    if (secondes === 0) clearInterval(decompte);
    secondes--;
}, 200);

// E. Un timer renvoie un identifiant (utile pour l'annuler)
const idTimer = setTimeout(() => {}, 1000);
console.log(typeof idTimer); // "object" dans Node, "number" dans le navigateur
clearTimeout(idTimer);
