let p = document.querySelector(".compteur");
let compteur = 0;

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
}

// Sélection des boutons par ID
let increment = document.querySelector("#increment");
increment.addEventListener("click", incrementer);

let decrement = document.querySelector("#decrement");
decrement.addEventListener("click", decrementer);

let reinitialiser = document.querySelector("#reset");
reinitialiser.addEventListener("click", reset);
