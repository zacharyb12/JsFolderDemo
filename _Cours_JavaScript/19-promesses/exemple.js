// 19 - Asynchrone et promesses
// Une promesse est dans un des états : pending (en attente), fulfilled (résolue), rejected (rejetée)

// Utilitaire : attendre un délai
const attendre = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 1. Créer une promesse
function verifUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === "admin" && password === "admin") {
                resolve("Bienvenue admin");
            } else {
                reject(new Error("Email ou mot de passe incorrect"));
            }
        }, 1000);
    });
}

// 2. Consommer avec then / catch / finally
verifUser("admin", "admin")
    .then(message => console.log(message))
    .catch(erreur => console.log("Échec :", erreur.message))
    .finally(() => console.log("Vérification terminée (then)"));

// 3. async / await : même logique, écrite de façon linéaire
async function connexion() {
    try {
        const message = await verifUser("admin", "faux");
        console.log(message);
    } catch (erreur) {
        console.log("Échec (async) :", erreur.message);
    } finally {
        console.log("Vérification terminée (async)");
    }
}
connexion();

// 4. Plusieurs promesses en parallèle avec Promise.all
async function demo() {
    const resultats = await Promise.all([
        attendre(300).then(() => "A"),
        attendre(200).then(() => "B"),
    ]);
    console.log(resultats); // [ 'A', 'B' ] : attend la plus lente (environ 300 ms)
}
demo();
