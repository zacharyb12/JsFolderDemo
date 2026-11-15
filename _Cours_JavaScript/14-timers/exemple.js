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
