# 08 - Tableaux

Rappel : l'index commence à **0**, `length` donne le nombre d'éléments. Les méthodes `push`, `pop`, `shift`, `unshift`, `splice`, `sort` et `reverse` **modifient** le tableau. `slice`, `map`, `filter`, `concat` et `[...tab]` **créent un nouveau** tableau.

## Niveau 1 : accéder, ajouter, retirer
1. Crée `couleurs = ["rouge", "vert", "bleu", "jaune"]`. Affiche le premier élément, le dernier (avec `at(-1)`) et la longueur.
2. Ajoute `"violet"` à la fin avec `push`, puis `"noir"` au début avec `unshift`. Affiche le tableau.
3. Retire le dernier élément avec `pop` puis le premier avec `shift`. Affiche les deux valeurs retirées et le tableau restant.

## Niveau 2 : chercher, copier, couper
4. Avec `notes = [12, 8, 15, 10, 6]`, affiche la note maximum et la minimum (`Math.max(...notes)`).
5. Affiche la position de `15` (`indexOf`), vérifie si `20` est présent (`includes`), et affiche l'index d'une valeur absente (`-1`).
6. Crée `copieNotes` avec le spread, ajoute `20` à la copie, puis vérifie que `notes` n'a pas changé.
7. Garde les 3 premières notes avec `slice`, sans modifier `notes`.

## Niveau 3 : trier, remplacer, matrice
8. Crée un tableau trié croissant sans modifier `notes` (copie + `sort` avec une fonction de comparaison).
9. Remplace la note `8` par `9` et `10` avec `splice`.
10. Crée une grille 3 × 3 remplie de `0` avec `Array.from`, puis mets des `1` sur la diagonale. Affiche chaque ligne.

## Niveau 4 : défi
11. Écris `supprimerDoublons(tab)` sans `Set`, uniquement avec `filter` et `indexOf`.
12. Écris `aplatir(tab)` qui transforme `[1, [2, [3, 4]], 5]` en `[1, 2, 3, 4, 5]`, d'abord avec une fonction récursive, puis avec `flat(Infinity)` pour comparer.

---
### Corrections
```javascript
// 1
{
  const couleurs = ["rouge", "vert", "bleu", "jaune"];
  console.log(couleurs[0], couleurs.at(-1), couleurs.length);
}
// 2
{
  const couleurs = ["rouge", "vert", "bleu", "jaune"];
  couleurs.push("violet");
  couleurs.unshift("noir");
  console.log(couleurs); // [ 'noir', 'rouge', 'vert', 'bleu', 'jaune', 'violet' ]
}
// 3
{
  const couleurs = ["rouge", "vert", "bleu", "jaune"];
  const fin = couleurs.pop();
  const debut = couleurs.shift();
  console.log(fin, debut, couleurs); // jaune rouge [ 'vert', 'bleu' ]
}
// 4
{
  const notes = [12, 8, 15, 10, 6];
  console.log(Math.max(...notes), Math.min(...notes)); // 15 6
}
// 5
{
  const notes = [12, 8, 15, 10, 6];
  console.log(notes.indexOf(15), notes.includes(20), notes.indexOf(99)); // 2 false -1
}
// 6
{
  const notes = [12, 8, 15, 10, 6];
  const copieNotes = [...notes];
  copieNotes.push(20);
  console.log(notes.length, copieNotes.length); // 5 6
}
// 7
{
  const notes = [12, 8, 15, 10, 6];
  console.log(notes.slice(0, 3), notes.length); // [ 12, 8, 15 ] 5
}
// 8
{
  const notes = [12, 8, 15, 10, 6];
  const croissant = [...notes].sort((a, b) => a - b);
  console.log(croissant, notes); // [6, 8, 10, 12, 15] et notes inchangé
}
// 9
{
  const notes = [12, 8, 15, 10, 6];
  const i = notes.indexOf(8);
  notes.splice(i, 1, 9, 10); // remplace 1 élément (le 8) par 9 et 10
  console.log(notes); // [ 12, 9, 10, 15, 10, 6 ]
}
// 10
{
  const grille = Array.from({ length: 3 }, () => Array(3).fill(0));
  for (let i = 0; i < 3; i++) grille[i][i] = 1;
  grille.forEach(ligne => console.log(ligne.join(" ")));
}
// 11
{
  const supprimerDoublons = (tab) => tab.filter((v, i) => tab.indexOf(v) === i);
  console.log(supprimerDoublons([1, 2, 2, 3, 1])); // [ 1, 2, 3 ]
}
// 12
{
  const aplatir = (tab) => tab.reduce((acc, v) => acc.concat(Array.isArray(v) ? aplatir(v) : v), []);
  console.log(aplatir([1, [2, [3, 4]], 5])); // [ 1, 2, 3, 4, 5 ]
  console.log([1, [2, [3, 4]], 5].flat(Infinity)); // même résultat avec flat
}
```
