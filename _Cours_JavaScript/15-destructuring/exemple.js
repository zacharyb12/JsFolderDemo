// 15 - Destructuring : extraire des valeurs dans des variables

// 1. Tableau : les variables suivent l'ordre des éléments
const tableau = [1, 2, 3];
const [premier, second, troisieme] = tableau;
console.log(premier, second, troisieme); // 1 2 3

const [, , , , cinquieme = 0] = [1, 2, 3, 4]; // on saute des valeurs ; valeur par défaut
console.log(cinquieme); // 0

// Échanger deux variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// 2. Objet : les variables suivent les NOMS des clés
const utilisateur = { nom: "John", age: 30, ville: "Paris" };
const { nom, age, ville } = utilisateur;
console.log(nom, age, ville);

const { nom: nomComplet } = utilisateur;  // renommer la variable
console.log(nomComplet);                  // John

const { pays = "France" } = utilisateur;  // valeur par défaut si la clé n'existe pas
console.log(pays);                        // France

// 3. Objet imbriqué
const utilisateur2 = { nom: "Jane", adresse: { rue: "rue de la paix", ville: "Paris" } };
const { nom: nom2, adresse: { rue, ville: villeAdresse } } = utilisateur2;
console.log(nom2, rue, villeAdresse); // Jane rue de la paix Paris

// 4. Dans les paramètres d'une fonction
function afficherInfo({ nom, age = 18 }) {
    console.log(`Nom : ${nom}, Age : ${age}`);
}
afficherInfo({ nom: "John", age: 30 }); // Nom : John, Age : 30
afficherInfo({ nom: "Jane" });          // Nom : Jane, Age : 18

// 5. Clé contenant un espace : on utilise une chaîne entre guillemets
const donnees = { "code postal": "1000" };
const { "code postal": codePostal } = donnees;
console.log(codePostal); // 1000


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Destructuring dans une boucle
const personnes = [{ nom: "Ana", age: 20 }, { nom: "Ben", age: 31 }];
for (const { nom, age } of personnes) {
    console.log(`${nom} : ${age} ans`);
}

// B. Avec entries : index et valeur
for (const [index, { nom }] of personnes.entries()) {
    console.log(index, nom);
}

// C. Une fonction qui renvoie plusieurs valeurs (tableau ou objet)
function minMax(valeurs) {
    return [Math.min(...valeurs), Math.max(...valeurs)];
}
const [petit, grand] = minMax([4, 9, 1, 7]);
console.log(petit, grand); // 1 9

function infosServeur() {
    return { hote: "localhost", port: 3000 };
}
const { hote, port } = infosServeur();
console.log(`${hote}:${port}`); // localhost:3000

// D. Valeurs par défaut quand la propriété est undefined
const config = { theme: undefined, taille: 14 };
const { theme = "clair", taille = 12 } = config;
console.log(theme, taille); // clair 14 (theme était undefined, donc défaut)
// null n'est PAS remplacé par la valeur par défaut :
const { couleur = "rouge" } = { couleur: null };
console.log(couleur);       // null

// E. Destructuring de paramètre avec valeurs par défaut
function creerBouton({ texte = "OK", couleur = "bleu", large = false } = {}) {
    return `${texte} (${couleur}${large ? ", large" : ""})`;
}
console.log(creerBouton());                       // OK (bleu)
console.log(creerBouton({ texte: "Annuler", large: true })); // Annuler (bleu, large)

// F. Destructuring de chaîne (chaque caractère)
const [premiereLettre, , troisiemeLettre] = "Bonjour";
console.log(premiereLettre, troisiemeLettre); // B n
