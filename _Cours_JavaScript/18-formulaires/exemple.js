// 18 - Formulaires : lire, valider et envoyer des données
// Note : les attributs HTML (required, type="email"...) sont vérifiés par le navigateur
// AVANT l'événement submit. La validation JavaScript s'ajoute en plus.

const form = document.getElementById("monForm");
const erreurNom = document.getElementById("erreur-nom");
const resultat = document.getElementById("resultat");

// Écouter la saisie en temps réel
const motDePasse = document.getElementById("password");
motDePasse.addEventListener("input", () => {
    console.log("Longueur du mot de passe :", motDePasse.value.length);
});

form.addEventListener("submit", (event) => {
    event.preventDefault(); // empêche le rechargement de la page

    // 1. Validation du nom
    const nom = form.elements["nom"].value.trim();
    erreurNom.textContent = "";
    if (nom === "") {
        erreurNom.textContent = "Le nom doit être rempli.";
        return; // on arrête la fonction ici
    }
    if (nom.length < 4) {
        erreurNom.textContent = "Le nom doit faire au moins 4 caractères.";
        return;
    }

    // 2. Récupération de toutes les données
    const donnees = new FormData(form);
    const langues = donnees.getAll("langues");           // tableau : plusieurs cases possibles
    const sexe = donnees.get("sexe");                     // null si aucun radio coché
    const age = Number(donnees.get("age"));               // FormData renvoie du texte : on convertit
    const photo = donnees.get("photo");                   // objet File

    const valeurs = {
        nom,
        email: donnees.get("email"),
        age,
        dateNaissance: donnees.get("dateNaissance"),
        pays: donnees.get("pays"),
        langues,
        sexe,
        bio: donnees.get("bio"),
        photo: photo.name || "aucune",
    };

    console.log(valeurs);
    resultat.textContent = JSON.stringify(valeurs, null, 2);
});
