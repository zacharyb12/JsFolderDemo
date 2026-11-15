/**
 le parametre rest et spread 
 ils permettent de manipuler des tableaux et des objets de manière plus flexible.

 le reste permet de regrouper plusieurs arguments en un seul tableau

le spread permet de décomposer un tableau ou un objet en plusieurs arguments ou propriétés
 
 */

//Si on a un tableau de nombres
// et que l'on veut creer un nouveau tableau avec ces nombres et d'autres nombres
// on peut utiliser le spread operator pour faire cela

const nombres = [1, 2, 3, 4, 5]

const newNombres = [...nombres, 6, 7, 8]

console.log(newNombres) // [1, 2, 3, 4, 5, 6, 7, 8]


//on peut l'utiliser avec des objets egalement

const obj1 = { a: 1, b: 2 }

const obj2 = { c: 3, d: 4 }

const newObj = { ...obj1, ...obj2 }

console.log(newObj) // { a: 1, b: 2, c: 3, d: 4 }



// le rest operator permet de regrouper plusieurs arguments en un seul tableau

// ici tout les elements passé en parametre sont regroupé dans un tableau
function addition(...nombres) {
    let somme = 0

    nombres.forEach(nombre => {
        somme += nombre
    });

    return somme
}


//  ici on regroupe des informations ( Rest operator )
const obja = [1, 2, 3]
const objb = [ 4, 5,6]

const obj3 = {...obja,a:1,b:5,c:6,d:4 }

console.log(obj3)



// ici on decompose un tableau ( Spread operator )

const myValue = [1, 2, 3, 4, 5]

const newTab = [...myValue]

console.log(newTab) // [1, 2, 3, 4, 5]