// 07 - Boucles : for, while, do...while

// 1. for : on connaît le nombre de tours
for (let i = 1; i <= 5; i++) {
    console.log("Tour", i);
}

// 2. while : on répète tant que la condition est vraie
let compteur = 3;
while (compteur > 0) {
    console.log("Décompte :", compteur);
    compteur--;
}
console.log("Décollage !");

// 3. do...while : s'exécute au moins une fois
let essais = 0;
do {
    essais++;
    console.log("Essai", essais);
} while (essais < 2);

// 4. break (arrête la boucle) et continue (passe au tour suivant)
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;  // on saute les nombres pairs
    if (i > 7) break;           // on arrête après 7
    console.log("impair :", i); // 1, 3, 5, 7
}

// 5. Exemple concret : table de multiplication du 7
for (let i = 1; i <= 3; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}
