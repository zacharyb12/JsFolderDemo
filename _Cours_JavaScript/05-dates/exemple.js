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
