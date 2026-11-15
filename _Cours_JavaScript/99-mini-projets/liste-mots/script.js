const bouton = document.getElementById("ajouterBtn");
const liste = document.getElementById("liste");

bouton.addEventListener("click", () => {
    try {
        const saisie = prompt("Entrez un mot :");

        if (saisie === null) return;                     // l'utilisateur a annulé
        const mot = saisie.trim();
        if (mot === "") {
            throw new Error("Vous devez saisir un mot non vide.");
        }
        if (!isNaN(mot)) {                               // isNaN("12") est false : un nombre est accepté
            throw new Error("Vous devez saisir un mot, pas un nombre.");
        }

        const li = document.createElement("li");
        li.textContent = mot;
        liste.append(li);
    } catch (erreur) {
        alert("Erreur : " + erreur.message);
    }
});
