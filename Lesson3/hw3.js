// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
// let objects = [
//     {object1: "dog", breed: "terrier", weight: 10, age: 5, height: 40, maintenenceLevel: "medium"},
//     {object2: "human", gender: "man", weight: 90, age: 30, height: 190, hobby: "swimming"},
//     {object1: "car", brand: "toyota", price: 10000, age: 5, color: "black", carInterrior: "leather"},
//     {object1: "flat", floor: 5, rooms: 1, squere: 30, height: 210, wallColor: "green"},
//     {object1: "book", name: "white fang", year: 1890, pages: 200, author: "London", popularity: "medium"},
// ]

//-- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
// let dogs = ["terrier", "Afadore", "Malamute", "Bulldog", "Spitz"];
// for (let i = 0; i < dogs.length; i++) {
//     console.log (dogs[i]);
// }
// let mens = ["Ivan", "Andriy", "Kyrylo", "Ostap", "Nazar"];
// for (let i = 0; i < mens.length; i++) {
//     console.log (mens[i]);
// }
// let cars = ["Toyota", "Renault", "Volkswagen", "BMW", "Mercedes"];
// for (let i = 0; i < cars.length; i++) {
//     console.log (cars[i]);
// }

//-- створити об'єкт (не меньше 5ти властивостей) який описує,
// одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
// let house = {
//     type: "flat",
//     rooms: {first:"bedroom", second:"living-room"},
//     squere: 30,
//     height: 210,
//     wallColor: ["green","pink"],
// }
// let cars = {
//     general: {brand: "toyota", type: "sedan"},
//     price: 10000,
//     age: 5,
//     color: "black",
//     carInterrior: ["leather", "plastic"],
// }
// let toy = {
//     material: {base: "wood", general: "metal"},
//     type: "educating",
//     price: 500,
//     country: "Made in China",
//     color: ["red", "green", "blue", "yellow"],
// }
// let table = {
//     material: {base: "wood", general: "metal"},
//     type: "dining-table",
//     price: 5000,
//     country: "Made in Ukraine",
//     color: ["black", "brown"],
// }
// let bag = {
//     material: {base: "leather", furiture: "metal"},
//     type: "woomens - bag",
//     price: 1500,
//     country: "Made in Ukraine",
//     color: ["black", "brown"],
// }

// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//  - статус Андрія
//  - статус Максима
//  - ім'я передостаннього об'єкту
//  - ім'я третього об'єкта
//  - вік Олега
//  - вік Олі
//  - вік + ім'я 5го об'єкта
//  - вік + сатус Анни
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// console.log(users[7].status);
// console.log(users[4].status);
// console.log(users[10].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age + users[4].name );
// console.log(users[5].age + users[5].status );

//-- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - замініть текст параграфа з id 'content' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// let text = document.getElementById("content");
// console.log (text);
// text.innerText = "new Text!!!";
// text.style.backgroundColor = "red";

// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір тексту на синій
// let text2 = document.getElementById("rules");
// console.log (text2);
// text2.style.backgroundColor = "blue";

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// let classes = document.getElementsByClassName("fc bp");
// console.log(classes);

// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний
// let array = document.getElementsByTagName("li");
// for (let i = 0; i < array.length; i++) {
//     array[i].style.backgroundColor = "red";
// }







