/*
les boucles et collections
*/

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
]


// parcourir avec le while un Array
let i = 0;

while (i < users.length) {
    console.log(users[i].name); // John Jane Bob
    i++;
}

// do while

let j = 0;

do{
    console.log(users[j].name); // John Jane Bob
    j++
}while (j < users.length)


// for 

for (let i = 0; i < users.length; i++) {
    const element = users[i].name;
    
}


// foreach

users.forEach( (user) => {
    console.log(user.name); // John Jane Bob
})


// for of

for (const user of users) {

    console.log(user.name); // John Jane Bob

}


// for in

for (const key in users) {
    console.log(users[key].name); // John Jane Bob
}

