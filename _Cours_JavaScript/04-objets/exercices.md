# 04 - Objets

## Niveau 1 : lire et modifier
1. Crée un objet `livre` avec `titre`, `auteur` et `annee`. Affiche son `titre`.
2. Ajoute une propriété `genre`, puis supprime `annee` avec `delete`. Affiche l'objet.

## Niveau 2 : méthodes
3. Ajoute une méthode `decrire()` à `livre` qui renvoie `"<titre> de <auteur>"`.
4. Parcours `livre` avec `Object.entries` et affiche chaque couple clé / valeur.

## Niveau 3 : classe
5. Crée une classe `Livre` avec un constructeur `(titre, auteur)` et une méthode `decrire()`. Instancie 2 livres.

---
### Corrections
```js
// 1 et 2
const livre = { titre: "Le Petit Prince", auteur: "Saint-Exupéry", annee: 1943 };
console.log(livre.titre);
livre.genre = "Conte";
delete livre.annee;
console.log(livre);

// 3
livre.decrire = function () {
    return `${this.titre} de ${this.auteur}`;
};
console.log(livre.decrire());

// 4
for (const [cle, valeur] of Object.entries(livre)) {
    console.log(cle, valeur);
}

// 5
class Livre {
    constructor(titre, auteur) {
        this.titre = titre;
        this.auteur = auteur;
    }
    decrire() {
        return `${this.titre} de ${this.auteur}`;
    }
}
console.log(new Livre("1984", "Orwell").decrire());
console.log(new Livre("Dune", "Herbert").decrire());
```
