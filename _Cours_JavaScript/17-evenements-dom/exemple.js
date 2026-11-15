// 17 - Événements du DOM
// Un événement = une action (clic, survol, saisie...). On s'abonne avec addEventListener.

// 1. Survol : mouseenter / mouseleave
const titre = document.getElementById("titre");
titre.addEventListener("mouseenter", () => { titre.style.color = "red"; });
titre.addEventListener("mouseleave", () => { titre.style.color = ""; }); // "" retire la couleur inline

// 2. once : le gestionnaire ne se déclenche qu'une seule fois
const sousTitre = document.getElementById("sousTitre");
sousTitre.addEventListener("click", () => {
    sousTitre.textContent = "Merci pour le clic !";
}, { once: true });

// 3. Retirer un écouteur : il faut la MÊME référence de fonction
const boite = document.getElementById("boite");
function changerCouleur() {
    const estBlanc = boite.style.backgroundColor === "white";
    boite.style.backgroundColor = estBlanc ? "black" : "white";
    boite.style.color = estBlanc ? "white" : "black";
}
boite.addEventListener("click", changerCouleur);
// boite.removeEventListener("click", changerCouleur); // décommenter pour désactiver le changement

// 4. L'objet event : informations sur l'événement
const btnUnique = document.getElementById("btnUnique");
btnUnique.addEventListener("click", (event) => {
    console.log("Type :", event.type);
    console.log("Élément cliqué :", event.target);
}, { once: true });

// 5. preventDefault : annule le comportement par défaut (ici la navigation du lien)
document.getElementById("lien").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Clic sur le lien : navigation annulée");
});

// 6. Délégation d'événements : un seul écouteur sur la liste gère tous les <li>,
//    y compris ceux ajoutés plus tard
const liste = document.getElementById("liste");
liste.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("Élément cliqué :", event.target.textContent);
        event.target.remove();
    }
});

document.getElementById("btnAjouter").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = `Nouvel élément ${liste.children.length + 1}`;
    liste.append(li); // le clic sur ce li fonctionne sans nouvel écouteur
});
