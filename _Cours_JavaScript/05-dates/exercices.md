# 05 - Dates

Rappel : les mois vont de **0 à 11**.

## Niveau 1 : créer et lire
1. Affiche la date et l'heure actuelles.
2. Crée la date du 25 décembre 2026 avec `new Date(2026, 11, 25)`. Affiche son année et son mois (la réponse doit être 11).

## Niveau 2 : formater et calculer
3. Affiche le jour de la semaine de cette date en français : `toLocaleDateString("fr-FR", { weekday: "long" })`.
4. Calcule le nombre de jours entre aujourd'hui et le 25 décembre 2026 (différence de `getTime()`, divisée par `1000 * 60 * 60 * 24`, puis arrondie).

## Niveau 3 : logique
5. Écris `estWeekend(date)` qui renvoie `true` si la date est un samedi ou un dimanche.

---
### Corrections
```js
// 1
console.log(new Date());

// 2
const noel = new Date(2026, 11, 25);
console.log(noel.getFullYear(), noel.getMonth()); // 2026 11

// 3
console.log(noel.toLocaleDateString("fr-FR", { weekday: "long" })); // vendredi

// 4
const aujourdhui = new Date();
const jours = Math.round((noel.getTime() - aujourdhui.getTime()) / (1000 * 60 * 60 * 24));
console.log(jours);

// 5
function estWeekend(date) {
    const jour = date.getDay(); // 0 = dimanche, 6 = samedi
    return jour === 0 || jour === 6;
}
console.log(estWeekend(new Date(2026, 10, 14))); // samedi 14 nov. 2026 -> true
```
