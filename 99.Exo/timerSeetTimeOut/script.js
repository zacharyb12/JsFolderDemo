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

    // Relancer le timer si actif
    timer = setTimeout(incrementer, 1000);
}

function reset() {
    compteur = 0;
    p.innerText = compteur;
    clearTimeout(timer); // stoppe le timer si actif
    timer = null;
}

function demarrerTimer() {
    if (timer === null) {
        timer = setTimeout(incrementer, 1000); // démarre après 1 seconde
    }
}

function arreterTimer() {
    clearTimeout(timer);
    timer = null;
}

// Sélection des boutons
document.querySelector("#reset").addEventListener("click", reset);
document.querySelector("#start").addEventListener("click", demarrerTimer);
document.querySelector("#stop").addEventListener("click", arreterTimer);


let maDiv = document.querySelector("body")
maDiv.style.backgroundColor = "white"
maDiv.color = "black"


let btn = document.querySelector("#theme")

btn.addEventListener("click", function () {
if(maDiv.style.backgroundColor === "white"){
    maDiv.style.backgroundColor = "black"
    maDiv.style.color = "white"
    }
    else{
        maDiv.style.backgroundColor = "white"
        maDiv.style.color = "black"
    }
})


btn.addEventListener("click",() => { } )