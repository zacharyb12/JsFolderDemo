let p = document.querySelector(".timer");
let compteur = 0;
let timer = null;

// Style du compteur
p.style.fontSize = "50px";
p.style.color = "red";
p.style.fontWeight = "bold";
p.style.textAlign = "center";
p.style.backgroundColor = "black";
p.innerText = compteur;

// Fonctions
function incrementer() {
    compteur++;
    p.innerText = compteur;
}

function decrementer() {
    compteur--;
    p.innerText = compteur;
}

function reset() {
    compteur = 0;
    p.innerText = compteur;
    clearInterval(timer); // stop le timer si actif
    timer = null;
}

function demarrerTimer() {
    if (timer === null) {
        timer = setInterval(incrementer, 1000); // incrémente toutes les secondes
    }
}

function arreterTimer() {
    clearInterval(timer);
    timer = null;
}

// Sélection des boutons
document.querySelector("#reset").addEventListener("click", reset);
document.querySelector("#start").addEventListener("click", demarrerTimer);
document.querySelector("#stop").addEventListener("click", arreterTimer);
