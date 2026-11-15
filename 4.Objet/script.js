/*
les objets en javascript
les objets sont des collections de paires clé/valeur
*/

// creation d'un objet

let personne = {
    nom: "John",
    age: 30,
    ville: "Paris"
}

// affichage de l'objet
console.log(personne);


// affichage d'une valeur de l'objet
console.log(personne.nom); // John

console.log(personne["age"]); // 30


// ajout d'une nouvelle propriété à l'objet
personne.pays = "France";
console.log(personne); // { nom: 'John', age: 30, ville: 'Paris', pays: 'France' }

// 
// modification d'une propriété de l'objet
personne.age = 31;
console.log(personne); // { nom: 'John', age: 31, ville: 'Paris', pays: 'France' }


// suppression d'une propriété de l'objet
delete personne.ville;
console.log(personne); // { nom: 'John', age: 31, pays: 'France' }


// creation d'un objet avec une fonction constructeur
function Personne(nom, age, ville) {
    this.nom = nom;
    this.age = age;
    this.ville = ville;
}


// creation d'une instance de l'objet Personne
let personne1 = new Personne("John", 30, "Paris");

