/*
les timers en javascript
// setTimeout : permet d'exécuter une fonction après un certain délai
// setInterval : permet d'exécuter une fonction à intervalle régulier
*/

// setTimeout : permet d'exécuter une fonction après un certain délai
setTimeout(() => {
    console.log("Bonjour le monde !");
}, 2000); // 2 secondes


// setInterval : permet d'exécuter une fonction à intervalle régulier
setInterval(() => {
    console.log("Bonjour le monde !");
}, 5000); // 2 secondes



// les methodes clearTimeout et clearInterval permettent d'arrêter l'exécution 
// de setTimeout et setInterval respectivement

// clearInterval : permet d'arrêter l'exécution d'un setInterval
let intervalId = setInterval(() => {
    console.log("Bonjour le monde !");
}, 2000); // 2 secondes

// arrête l'exécution de l'intervalle
clearInterval(intervalId); 


// clearTimeout : permet d'arrêter l'exécution d'un setTimeout
let timeoutId = setTimeout(() => {
    console.log("Bonjour le monde !");
}, 2000); // 2 secondes

// arrête l'exécution du timeout
clearTimeout(timeoutId); 


// exemple d'utilisation de setTimeout et setInterval
let count = 0;

let intervalId2 = setInterval(() => {
    count++;
    console.log(`Compteur : ${count}`);
    
    if (count === 10) {
        // arrête l'intervalle après 10 itérations
        clearInterval(intervalId2); 
    }
}, 1000); // 1 seconde

