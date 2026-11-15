# Rapport de vérification du dossier JsFolderDemo

Les fichiers d'origine n'ont pas été modifiés. Les exemples corrigés sont dans `_Cours_JavaScript/`. Chaque exemple a été exécuté avec Node (chapitres sans DOM) ou testé dans jsdom (pages HTML avec interactions).

## 1. Fichiers corrompus ou vides (à restaurer)

Ces fichiers contiennent uniquement des octets NUL (`\0`). Leur contenu d'origine ne peut pas être récupéré depuis ce dossier : il faut le restaurer depuis une sauvegarde ou la version d'origine.

| Fichier | Taille | Remplacement fourni |
|---|---|---|
| `7.les boucles/script.js` | 644 o | `07-boucles/exemple.js` (écrit de zéro) |
| `99.Exo/compteur/index.html` | 407 o | `99-mini-projets/compteur/index.html` |
| `99.Exo/dateEtHeureNavigateur/index.html` | 476 o | `99-mini-projets/horloge/index.html` |
| `99.Exo/timerSeetTimeOut/index.html` | 501 o | `99-mini-projets/chrono/index.html` |
| `99.Exo/timerSetInterval/index.html` | 403 o | `99-mini-projets/chrono/index.html` |
| `19.Les requettes AJAX/script.js` | 0 o (vide) | `20-ajax-fetch/exemple.js` |
| `19.Les requettes AJAX/XHR/` | dossier vide | exemple XHR inclus dans `20-ajax-fetch/exemple.js` |

## 2. Erreurs dans le code

- **11.function/script.js** (le plus grave)
  - `function addition` est déclarée trois fois. La dernière (avec `...nombres`) écrase les autres : `addition(2)` renvoie `2` et non `7`.
  - `calculTotalTva` utilise `monArray.array.forEach` : `array` n'existe pas, erreur `TypeError`. La fonction n'est d'ailleurs jamais appelée.
  - `lireMessage("bonjour", () => { console.log(message) })` : `message` n'est pas défini dans cette fonction, erreur `ReferenceError`. Il faut écrire `(message) => console.log(message)`.
- **14.le destructuring/script.js**
  - `const { nom2, age2, adresse: { rue2, ville2 } } = utilisateur2` : `nom2` et `age2` n'existent pas dans l'objet, ils valent `undefined`. Le bon motif est `{ nom: nom2, age: age2, ... }`.
  - `user = { ... }` n'est pas déclaré : variable globale implicite, erreur en mode strict. Il faut `const user`.
- **15. exceptions et try catch/script.js** : dans le dernier bloc, `parseInt` renvoie `NaN`, qui n'est ni `< 0` ni `> 10`. L'alerte affiche "la valeur est NaN" au lieu du message d'erreur, car il n'y a pas de test `isNaN`.
- **16.les evenements du dom/script.js** : `card2.removeEventListener('click', changeColor2)` est appelé juste après l'ajout avec la même fonction. L'écouteur est retiré immédiatement, donc le changement de couleur ne fonctionne jamais.
- **17.les formulaires/Form1/script.js** : il manque un `return` après les messages d'erreur. Un `<li>` vide est ajouté même si le champ est vide ou trop court. Le message d'erreur n'est jamais effacé.
- **18. asynchrones et promesse/script.js** : dans le `.then`, le test `if (result === 'la promesse est rejetee')` ne peut jamais être vrai, car `.then` ne reçoit que les promesses résolues. Ce bloc est du code mort.
- **3.leDom/script.js** : le script ne s'exécute pas sans une page qui contient `#monId`, `#parent`, etc. Il lève une erreur sur `null` dès `idElement.id = ...`. Le commentaire "ajouter une classe" est faux : `className = ...` remplace toutes les classes (utiliser `classList.add`). `innerText` et `textContent` ne sont pas identiques (`innerText` tient compte du style CSS).
- **11. Set / Liste/script.js** : `set1.clear()` est appelé avant le `forEach`, donc le `forEach` n'affiche rien. Le commentaire "non ordonnés" est faux : un Set garde l'ordre d'insertion.
- **13.les timers/script.js** : le `setInterval` de 5000 ms est commenté "2 secondes". L'intervalle d'affichage "Bonjour" n'est jamais arrêté.
- **99.Exo/timerSeetTimeOut/script.js** : `maDiv.color = "black"` ne fait rien ; il faut `maDiv.style.color`. Il y a aussi un `addEventListener("click", () => {})` vide inutile.
- **99.Exo/timerSetInterval/timer.js** : la fonction `decrementer` est définie mais jamais utilisée.
- **99.Exo/exoList/exo.js**
  - La partie 1 est entièrement commentée.
  - Le tableau `listOccurence` contient une entrée factice `{name:"", occurence:0}` qui s'affiche ("le nom est présent 0 fois").
  - `setNomsDouble` est rempli mais la liste des doublons n'est jamais affichée, alors que l'énoncé la demande.
- **99.Exo/ajoutListe/script.js** : `!isNaN(saisie)` accepte une saisie faite uniquement d'espaces. Le texte de la page dit "Créer un bouton", alors que le bouton existe déjà dans le HTML.
- **8.les collections indexées/script.js** : `pop(1)` et `shift(0)` reçoivent des arguments qui ne servent à rien et sont trompeurs. `new Array(5)` ne crée pas un "tableau vide" mais 5 cases vides. Les résultats commentés sont faux :
  - `toString()` donne `"1,2,3,4,5"` (et non `"1,2,3,4,5,6"`) ;
  - `reverse()` donne `[5,4,3,2,1]` (et non `(6,5,4,3,2,1)`) ;
  - le piège du `sort()` sur des nombres n'est pas signalé.
- **5.dates/script.js** : `new Date("2023-10-03")` est lu en UTC, donc il affiche 02:00 à Bruxelles et non "00:00 GMT+0200" comme indiqué. Les valeurs écrites en commentaire ne correspondent pas à l'instant d'exécution.
- **12.rest et Spread/script.js** : le commentaire "Rest operator" sur `obj3` est faux, c'est un spread. La variable `objb` n'est pas utilisée.
- **0.DemoPratique/script.js** : le code fonctionne.
- **4.Objet, 2.operateurs, 6.Conditionnel, 9.les boucles, 10.Map** : le code fonctionne. Dans 9, `for...in` sur un tableau est déconseillé et ce n'est pas indiqué.

## 3. Fautes d'orthographe et de HTML

- Titres et commentaires : "Nan" → `NaN`, "infinity" → `Infinity`, "1.2.2" (numérotation), "fléchées" (le titre de la section parle de callbacks), "il y  eu" → "il y a eu", "posibilité" / "possibilté" → "possibilité", "diffférents", "enpecher" → "empêcher", "rejetee" / "echoue" (accents), "tout les" → "tous les", "regroupé" → "regroupés", "remets" → "remettez", "doit etre" → "doit être", "Recuperer" → "Récupérer", "Neerlandais" → "Néerlandais", "bouttons" → "boutons", "Deroulante" → "Déroulante", "Vous devez entrez un mot" → "Vous devez entrer un mot" (dans `99.Exo/ajoutListe`), "Jeannne" → "Jeanne" (données).
- Dossier `99.Exo/timerSeetTimeOut` : le nom devrait être `timerSetTimeOut`.
- HTML : `</br>` (17 demoType et Form1) n'est pas une balise valide, il faut `<br>`. `< ul >` dans le texte de `ajoutListe/index.html` est mal formé.
- Dans `1.bases` : `let name` utilise un nom de variable prêtant à confusion avec `window.name`. Renommé en `nomComplet` dans la version corrigée.

## 4. Ce qui a été ajouté dans `_Cours_JavaScript/`

- Un exemple corrigé et commenté par chapitre (`exemple.js`), testé.
- Un exercice progressif par chapitre (`exercices.md`), en trois niveaux, avec corrections.
- Pages HTML pour les chapitres DOM (03, 17, 18, 20) et les mini-projets (99).
- Le chapitre 07 (boucles), dont le fichier était corrompu, et le chapitre 20 (AJAX avec XHR), dont le dossier était vide.
- Une synthèse des mini-projets (`99-mini-projets/`), avec exercices.

## 5. Points à traiter de votre côté

- Restaurer les fichiers vides ou corrompus listés en section 1.
- Supprimer le fichier `.write_test` (0 octet) resté à la racine de `JsFolderDemo`. Il vient de mon test d'écriture, et je n'ai pas pu le supprimer faute d'autorisation de suppression.
