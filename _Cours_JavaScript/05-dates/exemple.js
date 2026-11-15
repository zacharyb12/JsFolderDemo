// 05 - Dates
// Les résultats dépendent du moment d'exécution (new Date() = maintenant).

const maintenant = new Date();
console.log("Maintenant :", maintenant);

// Attention : les mois vont de 0 (janvier) à 11 (décembre)
const dateLocale = new Date(2023, 9, 3, 10, 0, 0); // 3 octobre 2023, 10h00 (heure locale)
console.log(dateLocale.getFullYear()); // 2023
console.log(dateLocale.getMonth());    // 9 (octobre)
console.log(dateLocale.getDate());     // 3
console.log(dateLocale.getHours());    // 10
console.log(dateLocale.getDay());      // 2 (mardi) : 0 = dimanche, 6 = samedi

// Piège : une chaîne ISO sans heure est lue en UTC (pas en heure locale)
const dateIso = new Date("2023-10-03");
console.log(dateIso.toISOString());    // 2023-10-03T00:00:00.000Z

// Timestamp : millisecondes depuis le 1er janvier 1970 (UTC)
console.log(dateLocale.getTime());

// Affichage formaté en français
console.log(dateLocale.toLocaleDateString("fr-FR", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
}));
console.log(dateLocale.toLocaleTimeString("fr-FR"));

// Calcul : ajouter 7 jours
const dans7Jours = new Date(dateLocale);
dans7Jours.setDate(dans7Jours.getDate() + 7);
console.log("Dans 7 jours :", dans7Jours.toLocaleDateString("fr-FR"));


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Obtenir la date du jour à minuit (utile pour comparer des jours)
const aujourdhui = new Date();
aujourdhui.setHours(0, 0, 0, 0);
console.log("Minuit aujourd'hui :", aujourdhui.toLocaleString("fr-FR"));

// B. Différence entre deux dates (en jours)
const debut = new Date(2026, 0, 1);    // 1er janvier 2026
const fin = new Date(2026, 11, 25);    // 25 décembre 2026
const msParJour = 1000 * 60 * 60 * 24;
const jours = Math.round((fin - debut) / msParJour); // la soustraction de dates donne des ms
console.log("Nombre de jours :", jours);

// C. Comparer deux dates
console.log(debut < fin);              // true : les dates se comparent comme des nombres
console.log(debut.getTime() === new Date(2026, 0, 1).getTime()); // true

// D. Formats d'affichage
const d = new Date(2026, 5, 10, 14, 30);
console.log(d.toLocaleDateString("fr-FR"));                  // 10/06/2026
console.log(d.toLocaleDateString("fr-FR", { dateStyle: "long" })); // 10 juin 2026
console.log(d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })); // 14:30
console.log(d.toISOString());          // format ISO, en UTC (dépend du fuseau)

// E. Les mois qui débordent sont corrigés automatiquement
console.log(new Date(2026, 12, 1).toLocaleDateString("fr-FR")); // 1er janvier 2027

// F. Âge à partir d'une date de naissance
function calculerAge(naissance, maintenant = new Date()) {
    let age = maintenant.getFullYear() - naissance.getFullYear();
    const anniversairePasse =
        maintenant.getMonth() > naissance.getMonth() ||
        (maintenant.getMonth() === naissance.getMonth() && maintenant.getDate() >= naissance.getDate());
    if (!anniversairePasse) age--;
    return age;
}
console.log(calculerAge(new Date(2000, 5, 15), new Date(2026, 5, 14))); // 25 (anniversaire pas encore passé)
console.log(calculerAge(new Date(2000, 5, 15), new Date(2026, 5, 15))); // 26
