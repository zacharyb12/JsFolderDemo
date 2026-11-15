// Fonction qui affiche la date et l'heure
function afficherDateHeure() {
    // Création d'un objet Date qui contient la date et l'heure actuelles
    const d = new Date();
  
    // Tableau des jours de la semaine en abrégé
    const jours = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  
    // Tableau des mois de l'année en abrégé
    const mois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
  
    // Construction de la date sous la forme "Jour Date Mois"
    const date = `${jours[d.getDay()]} ${d.getDate()} ${mois[d.getMonth()]}`;
  
    // Récupération de l'heure formatée en "HH:MM:SS", sans AM/PM
    const heure = d.toLocaleTimeString('fr-FR', { hour12: false });
  
    // Affiche la date dans l'élément HTML avec l'id "date"
    document.getElementById("date").textContent = date;
  
    // Affiche l'heure dans l'élément HTML avec l'id "heure"
    document.getElementById("heure").textContent = heure;
  
    // Change le titre de l'onglet du navigateur avec l'heure
    document.title = heure;
  }
  
  // Lance l'affichage après un petit délai (100ms) pour s'assurer que la page est prête
  setTimeout(() => {
    afficherDateHeure(); // Affichage initial
    setInterval(afficherDateHeure, 1000); // Mise à jour toutes les secondes
  }, 100);
  