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


// ============================================================================
// ALLER PLUS LOIN
// ============================================================================

// A. Boucles imbriquées : une boucle dans une autre
for (let ligne = 1; ligne <= 3; ligne++) {
    let texte = "";
    for (let colonne = 1; colonne <= 3; colonne++) {
        texte += `${ligne * colonne}\t`;   // \t = tabulation
    }
    console.log(texte);
}

// B. Accumuler un résultat
let somme = 0;
for (let i = 1; i <= 100; i++) somme += i;
console.log("Somme 1..100 =", somme); // 5050

// C. Boucler à l'envers
for (let i = 5; i >= 1; i--) console.log("compte à rebours", i);

// D. Pas de 2 ou de 5
for (let i = 0; i <= 10; i += 5) console.log("multiple de 5 :", i);

// E. Boucle infinie : à éviter, sauf avec break
let tours = 0;
while (true) {
    tours++;
    if (tours === 3) break;   // sortie obligatoire
}
console.log("Tours :", tours); // 3

// F. Parcourir une chaîne de caractères
for (const lettre of "Bonjour") {
    console.log(lettre);
}

// G. Étiquette (label) pour sortir de deux boucles d'un coup
externe: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i * j === 4) {
            console.log(`trouvé : ${i} x ${j} = 4`);
            break externe;   // sort des DEUX boucles
        }
    }
}

// H. Le piège de la variable de boucle avec var (portée de fonction)
for (var v = 0; v < 2; v++) {}
console.log("v après la boucle :", v); // 2 : var reste accessible
