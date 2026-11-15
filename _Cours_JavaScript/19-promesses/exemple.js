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


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Chaîner des promesses : chaque then reçoit la valeur renvoyée par le précédent
Promise.resolve(2)
    .then(x => x * 10)        // 20
    .then(x => x + 1)         // 21
    .then(x => console.log("Chaîne :", x));

// B. Une erreur traverse la chaîne jusqu'au premier catch
Promise.resolve("ok")
    .then(() => { throw new Error("échec au milieu"); })
    .then(() => console.log("ne s'affiche pas"))
    .catch(e => console.log("Attrapé :", e.message));

// C. Promise.race : la première promesse terminée gagne
Promise.race([attendre(300).then(() => "lent"), attendre(100).then(() => "rapide")])
    .then(v => console.log("Race :", v)); // rapide

// D. Promise.allSettled : toutes les promesses, réussies ou non
Promise.allSettled([
    Promise.resolve("ok"),
    Promise.reject(new Error("raté")),
]).then(resultats => console.log(resultats.map(r => r.status))); // [ 'fulfilled', 'rejected' ]

// E. Promise.all échoue si UNE promesse échoue
Promise.all([Promise.resolve(1), Promise.reject(new Error("une erreur"))])
    .catch(e => console.log("Promise.all :", e.message));

// F. Boucler avec await : les appels sont séquentiels (un après l'autre)
async function traiterTous(items) {
    for (const item of items) {
        await attendre(50);
        console.log("traité", item);
    }
}
traiterTous(["a", "b"]);

// G. Lancer en parallèle avec map + Promise.all
async function traiterEnParallele(items) {
    const resultats = await Promise.all(items.map(async item => {
        await attendre(50);
        return item.toUpperCase();
    }));
    console.log(resultats); // [ 'A', 'B' ]
}
traiterEnParallele(["a", "b"]);
