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
