// Mini-projet : noms uniques et doublons (avec un Set)
const listNoms = ["Jean", "Marie", "Pierre", "Jeanne", "Marie", "Paul", "Pierre", "Marie"];

const setNoms = new Set();      // noms déjà rencontrés
const setDoublons = new Set();  // noms apparus au moins deux fois
const occurrences = new Map();  // nombre d'apparitions de chaque nom

for (const nom of listNoms) {
    if (setNoms.has(nom)) {
        setDoublons.add(nom);
    } else {
        setNoms.add(nom);
    }
    occurrences.set(nom, (occurrences.get(nom) ?? 0) + 1);
}

console.log("Noms uniques :", [...setNoms]);
console.log("Doublons détectés :", [...setDoublons]);
for (const [nom, nb] of occurrences) {
    console.log(`Le nom ${nom} est présent ${nb} fois`);
}
