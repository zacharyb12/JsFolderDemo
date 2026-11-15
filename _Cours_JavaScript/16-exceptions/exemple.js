// 16 - Gestion des erreurs : try / catch / finally

// 1. throw + catch
try {
    throw new Error("Il y a eu une erreur");
} catch (error) {
    console.log("Erreur capturée :", error.message);
}

// 2. finally : s'exécute dans tous les cas
try {
    console.log("Traitement OK");
} catch (error) {
    console.log("Erreur :", error.message);
} finally {
    console.log("finally : toujours exécuté");
}

// 3. Validation d'une saisie (fonction testable sans prompt)
function lireNombre(saisie) {
    const nombre = parseInt(saisie, 10);
    if (Number.isNaN(nombre)) {
        throw new Error("La valeur n'est pas un nombre");
    }
    if (nombre < 0) {
        throw new Error("La valeur est négative");
    }
    if (nombre > 10) {
        throw new Error("La valeur est supérieure à 10");
    }
    return nombre;
}

for (const saisie of ["7", "abc", "-3", "42"]) {
    try {
        console.log(`OK : ${lireNombre(saisie)}`);
    } catch (error) {
        console.log(`"${saisie}" -> ${error.message}`);
    }
}

// Dans le navigateur, on combinerait avec prompt :
// try { const n = lireNombre(prompt("Un nombre entre 0 et 10 ?")); alert(n); }
// catch (error) { alert(error.message); }

// 4. Erreur native de JavaScript
try {
    JSON.parse("pas du json");
} catch (error) {
    console.log(error.name, "-", error.message);
}


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Créer sa propre erreur
class ErreurValidation extends Error {
    constructor(champ, message) {
        super(message);
        this.name = "ErreurValidation";
        this.champ = champ;
    }
}
try {
    throw new ErreurValidation("email", "Adresse email invalide");
} catch (erreur) {
    console.log(erreur.name, erreur.champ, erreur.message);
    console.log(erreur instanceof ErreurValidation); // true
    console.log(erreur instanceof Error);            // true
}

// B. Ne rattraper que ce qu'on sait gérer, et relancer le reste
function traiter(donnee) {
    try {
        return JSON.parse(donnee);
    } catch (erreur) {
        if (erreur instanceof SyntaxError) {
            return null;       // on gère ce cas attendu
        }
        throw erreur;          // on relance les autres erreurs
    }
}
console.log(traiter("{\"a\":1}")); // { a: 1 }
console.log(traiter("pas du json")); // null

// C. finally et return : finally s'exécute même avec return
function exemple() {
    try {
        return "depuis try";
    } finally {
        console.log("finally s'exécute avant le return effectif");
    }
}
console.log(exemple());

// D. Erreurs asynchrones : un try/catch ne voit pas une erreur levée dans un setTimeout
// try { setTimeout(() => { throw new Error("x"); }, 0); } catch (e) {}  // NON capturé ici
// Dans les fonctions async, utiliser await et try/catch (voir chapitre 19).

// E. Message d'erreur : informations utiles
try {
    null.nom;
} catch (erreur) {
    console.log(erreur.name);     // TypeError
    console.log(erreur.message);  // message de la propriété null
}
