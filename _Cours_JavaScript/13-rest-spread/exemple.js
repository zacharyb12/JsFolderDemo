// 13 - Rest et Spread (les trois petits points ...)

// 1. SPREAD : "déplier" un tableau ou un objet
const nombres = [1, 2, 3, 4, 5];
const plusDeNombres = [...nombres, 6, 7, 8];
console.log(plusDeNombres); // [1,2,3,4,5,6,7,8]

const copie = [...nombres];   // copie (superficielle) du tableau
copie.push(99);
console.log(nombres.length, copie.length); // 5 6 : l'original n'a pas changé

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const fusion = { ...obj1, ...obj2, b: 20 }; // la dernière valeur écrase la précédente
console.log(fusion); // { a: 1, b: 20, c: 3, d: 4 }

// 2. REST dans les paramètres : regroupe les arguments dans un tableau
function addition(...valeurs) {
    return valeurs.reduce((somme, v) => somme + v, 0);
}
console.log(addition(1, 5));          // 6
console.log(addition(1, 5, 8, 7, 9)); // 30
console.log(addition(...nombres));    // 15 : spread pour passer un tableau en arguments

// 3. REST dans la déstructuration
const [premier, ...reste] = nombres;
console.log(premier); // 1
console.log(reste);   // [2, 3, 4, 5]

const { a, ...autres } = { a: 1, b: 2, c: 3 };
console.log(a, autres); // 1 { b: 2, c: 3 }


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Spread dans un appel de fonction
console.log(Math.max(...[3, 8, 1])); // 8 : équivalent à Math.max(3, 8, 1)

// B. Copie superficielle : les objets imbriqués sont PARTAGÉS
const profil = { nom: "Ana", adresse: { ville: "Paris" } };
const profilCopie = { ...profil, nom: "Ben" };
profilCopie.adresse.ville = "Lyon";
console.log(profil.adresse.ville); // "Lyon" : attention à la copie superficielle

// C. Copie profonde simple (valable pour données sans fonctions ni dates)
const profilProfond = JSON.parse(JSON.stringify(profil));
profilProfond.adresse.ville = "Nice";
console.log(profil.adresse.ville); // "Lyon" : inchangé

// D. Mettre à jour un élément d'un tableau sans le modifier (immuabilité)
const panier = [{ id: 1, qte: 1 }, { id: 2, qte: 3 }];
const nouveau = panier.map(p => p.id === 2 ? { ...p, qte: 4 } : p);
console.log(panier[1].qte, nouveau[1].qte); // 3 4

// E. Ajouter une propriété conditionnellement
const options = { couleur: "bleu", ...(true && { taille: "M" }) };
console.log(options); // { couleur: 'bleu', taille: 'M' }

// F. Rest dans une fonction avec des paramètres fixes d'abord
function logger(niveau, ...messages) {
    console.log(`[${niveau}]`, ...messages);
}
logger("INFO", "serveur démarré", "port 3000"); // [INFO] serveur démarré port 3000
