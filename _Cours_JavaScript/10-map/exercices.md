# 10 - Map (dictionnaire)

## Niveau 1
1. Crée une `Map` associant 3 pays à leur capitale (`"France" => "Paris"`...). Affiche la capitale de la France avec `get`.
2. Vérifie avec `has` si `"Japon"` est présent.

## Niveau 2
3. Ajoute une entrée avec `set`, supprime une autre avec `delete`, puis affiche `size`.
4. Une clé peut-elle être un nombre ? Teste `map.set(1, "un")` puis `map.get("1")`. Explique le résultat.

## Niveau 3
5. Parcours la Map avec `for...of` et affiche `"pays : capitale"` pour chaque entrée.

---
### Corrections
```js
// 1 et 2
const capitales = new Map([["France", "Paris"], ["Belgique", "Bruxelles"], ["Italie", "Rome"]]);
console.log(capitales.get("France")); // Paris
console.log(capitales.has("Japon"));  // false

// 3
capitales.set("Espagne", "Madrid");
capitales.delete("Italie");
console.log(capitales.size); // 3

// 4 : get("1") renvoie undefined, car 1 (nombre) et "1" (texte) sont deux clés différentes

// 5
for (const [pays, capitale] of capitales) {
    console.log(`${pays} : ${capitale}`);
}
```
