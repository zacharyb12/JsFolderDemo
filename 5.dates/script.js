/*
les Dates en javascript
les dates sont des objets en javascript
*/

// creation d'une date
let date = new Date(); // date actuelle

console.log(date); // Tue Oct 03 2023 10:00:00 GMT+0200 (heure d’été d’Europe centrale)


// creation d'une date avec une date précise
let datePrecise = new Date("2023-10-03"); // 3 octobre 2023

console.log(datePrecise); // Tue Oct 03 2023 00:00:00 GMT+0200 (heure d’été d’Europe centrale)


// creation d'une date avec des paramètres (année, mois, jour, heure, minute, seconde)
let dateParam = new Date(2023, 9, 3, 10, 0, 0); // 3 octobre 2023 à 10h00

console.log(dateParam); // Tue Oct 03 2023 10:00:00 GMT+0200 (heure d’été d’Europe centrale)


// affichage de l'année, du mois, du jour, de l'heure, de la minute et de la seconde
console.log(date.getFullYear()); // 2023
console.log(date.getMonth()); // 9 (octobre)
console.log(date.getDate()); // 3
console.log(date.getHours()); // 10
console.log(date.getMinutes()); // 0
console.log(date.getSeconds()); // 0
console.log(date.getMilliseconds()); // 0


// affichage du jour de la semaine (0 = dimanche, 1 = lundi, ..., 6 = samedi)
console.log(date.getDay()); // 2 (mardi)

// affichage du timestamp (nombre de millisecondes depuis le 1er janvier 1970)
console.log(date.getTime()); // 1696320000000 (timestamp de la date actuelle)

// affichage de la date au format ISO (YYYY-MM-DDTHH:mm:ss.sssZ)
console.log(date.toISOString()); // 2023-10-03T08:00:00.000Z (date actuelle au format ISO)

