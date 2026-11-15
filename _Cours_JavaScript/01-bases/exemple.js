// 01 - Les bases : variables, types, console

// 1. Variables
let x = 10;        // modifiable, portée de bloc
var y = 20;        // ancienne syntaxe, portée de fonction (à éviter)
const z = 30;      // constante : réaffectation interdite
// z = 40;         // TypeError si on décommente cette ligne

// 2. Types de données
let entier = 5;
let decimal = 3.14;
let grandEntier = 1234567890123456789012345678901234567890n; // BigInt (suffixe n)
let texte = "John Doe";
let estActif = true;
let indefini;               // undefined : déclarée mais sans valeur
let vide = null;            // null : absence volontaire de valeur
let pasUnNombre = NaN;      // NaN : Not a Number
let infini = Infinity;      // Infinity (majuscule)
let objet = { nom: "John", age: 30, adresse: { rue: "rue de la paix", ville: "Paris" } };
let tableau = [1, 2, 3];
function direBonjour() { console.log("Bonjour !"); }
let maintenant = new Date();

console.log(typeof entier, typeof texte, typeof indefini, typeof vide);
// number string undefined object   (typeof null renvoie "object" : piège historique)

// 3. Console
console.log("message normal");
console.info("information");
console.debug("debug");
console.warn("avertissement (jaune dans le navigateur)");
console.error("erreur (rouge dans le navigateur)");
console.table(tableau);

// 4. Popups (navigateur uniquement, bloquent la page)
// alert("Bonjour");
// let prenom = prompt("Votre prénom ?");   // renvoie une string, ou null si annulé
// let ok = confirm("Êtes-vous sûr ?");     // true si OK, false si Annuler
