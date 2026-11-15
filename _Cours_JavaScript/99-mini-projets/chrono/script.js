const affichage = document.querySelector(".timer");
let secondes = 0;
let intervalId = null; // null = chrono arrêté

affichage.style.fontSize = "50px";
affichage.style.color = "red";
affichage.style.textAlign = "center";

function demarrer() {
    if (intervalId === null) {               // évite de lancer deux intervalles
        intervalId = setInterval(() => {
            secondes++;
            affichage.textContent = secondes;
        }, 1000);
    }
}

function arreter() {
    clearInterval(intervalId);
    intervalId = null;
}

function reinitialiser() {
    arreter();
    secondes = 0;
    affichage.textContent = secondes;
}

document.getElementById("start").addEventListener("click", demarrer);
document.getElementById("stop").addEventListener("click", arreter);
document.getElementById("reset").addEventListener("click", reinitialiser);

// Thème : on alterne le fond et la couleur de texte de la page
const body = document.body;
document.getElementById("theme").addEventListener("click", () => {
    const sombre = body.style.backgroundColor === "black";
    body.style.backgroundColor = sombre ? "white" : "black";
    body.style.color = sombre ? "black" : "white";
});
