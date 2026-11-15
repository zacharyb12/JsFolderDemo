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
