const JOURS = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const MOIS = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];

function afficherDateHeure() {
    const d = new Date();
    const date = `${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]} ${d.getFullYear()}`;
    const heure = d.toLocaleTimeString("fr-FR"); // HH:MM:SS

    document.getElementById("date").textContent = date;
    document.getElementById("heure").textContent = heure;
    document.title = heure;
}

afficherDateHeure();                    // affichage immédiat
setInterval(afficherDateHeure, 1000);   // mise à jour chaque seconde
