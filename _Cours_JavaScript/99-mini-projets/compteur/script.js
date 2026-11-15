const affichage = document.querySelector(".compteur");
let compteur = 0;

affichage.style.fontSize = "50px";
affichage.style.color = "red";
affichage.style.textAlign = "center";

function mettreAJour() {
    affichage.textContent = compteur;
}

document.getElementById("increment").addEventListener("click", () => {
    compteur++;
    mettreAJour();
});
document.getElementById("decrement").addEventListener("click", () => {
    compteur--;
    mettreAJour();
});
document.getElementById("reset").addEventListener("click", () => {
    compteur = 0;
    mettreAJour();
});
