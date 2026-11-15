/*
le destructuring permet de décomposer un tableau ou un objet en plusieurs variables
*/


// exemple de destructuring d'un tableau
// on recupere chaque valeur du tableau dans une variable

const tableau = [1, 2, 3]

const [premier , second , troisieme] = tableau


// Exemple de destructuring d'un objet
// on recupere chaque valeur de l'objet dans une variable

const utilisateur ={
    nom : "John",
    age : 30,
    ville : "Paris"
}

const { nom, age, ville } = utilisateur



// exemple d'un objet qui contient un objet 
const utilisateur2 = {
    nom : "John",
    age : 30,
    adresse : {
        rue : "rue de la paix",
        ville : "Paris"
    }
}

const { nom2, age2, adresse : { rue2 , ville2 } } = utilisateur2
console.log(nom2) // John
console.log(age2) // 30
console.log(rue2) // rue de la paix
console.log(ville2) // Paris



// exemple ou l'on recupere une des propriétés d'un objet en tant qu'objet 
const utilisateur3 = {
    nom3 : "John",
    age3 : 30,
    adresse : {
        rue : "rue de la paix",
        ville : "Paris"
    }
}


const { nom3, age3, adresse  } = utilisateur3
console.log(nom3) 
console.log(age3) 
console.log(adresse)


// utiliser l'index pour recuperer une valeur d'un tableau


const tableau2 = [1, 2, 3, 4, 5]

const trois = tableau2[2]


// destructuring avec le rest operator

const tableau3 = [1, 2, 3, 4, 5]

const [premier2, ...restValeur] = tableau3

console.log(premier2) // 1

restValeur.forEach(element => {
    console.log(element) // 2, 3, 4, 5
})


// on a la posibilité de skip certaines valeurs

const tableau4 = [1, 2, 3, 4, 5]

const [premier3, , , , quatrieme] = tableau4

// on a la possibilté d' echanger des valeurs 

let a = 1
let b = 2

[a, b] = [b, a]

// exemple de destructuring avec un objet 

user = {
    name: "John",
    age: 30,
    street: "123 Main St",
    city: "New York"
}

let nameUser = user.name
let ageUser = user.age
let streetUser = user.street
let cityUser = user.city

let userName = user["name"]
let userAge = user["age"]
let userStreet = user["street"]
let userCity = user["city"]


// utile si le nom de la clé contient des espaces ou des caractères spéciaux
let informations = user["city user"]


// definir une valeur par defaut et utiliser un autre nom

const info = {a : 1, b: 2, c: 3}

// on peut utiliser des nom different pour les variables
const { a : a1, b : b2, c : c3 = 4 } = info


// destructuring dans une fonction 

function afficherInfo({ nom, age }) {

    console.log(`Nom : ${nom}, Age : ${age}`)
}

const objetADecomposer = {
    nom: "John",
    age: 30
}

afficherInfo(objetADecomposer)
afficherInfo({ nom: "Jane", age: 25 })