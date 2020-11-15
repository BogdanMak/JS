//- создать массив с 20 числами.
// let array = [];
// for (let i = 0; i < 20; i++) {
//    array.push(Math.round( Math.random() * 200 - 100));
//    document.write (array[i] + ", ");
// }
// document.write ("<hr>");

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let s = JSON.stringify(array);
// let clone = JSON.parse(s);
// let newArray = clone.map(value => {
//     value = value*3;
//     return value;
// });
// for (let i = 0; i < newArray.length; i++) {
//    document.write(newArray[i] + ", ");
// }

// -- перебрать (проитерировать) массив при помощи foreach()
// array.forEach((value) => {
// });

// -- при помощи filter получить числа кратные 3
// // -- при помощи filter получить числа кратные 10
// document.write ("<hr>");
// let filtredArray = array.filter((value) => {
//     if (value%3 ===0) {
//         return value;
//     }
// });
// let filtredArray2 = array.filter((value) => {
//     if (value%10 ===0) {
//         return value;
//     }
// });
// document.write (filtredArray + "<hr>");
// document.write (filtredArray2);

// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// document.write ("<hr>");
// let sort = array.sort((a,b)=> {
// return a - b;
// });
// document.write(sort);
// document.write ("<hr>");
// let sortBAck = array.sort((a,b)=> {
//     return b - a;
// });
// document.write(sortBAck);



//- создать массив со словами на 15-20 элементов.
// let arrayWords = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit",
//     "Alias", "aspernatur", "cupiditate", "ducimus", "eveniet", "illum", "laudantium", "gym", "libero", "natus", "nisi", "nostrum", "officiis"];

// -- отфильтровать слова длиной менее 4х символов
// let newArrayWords = arrayWords.filter((value) => {
//     if (value.length<4) {
//         return value;
//     }
// });
// document.write (newArrayWords);

// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sortedWords = arrayWords.sort();
//     document.write (sortedWords + "<hr>");
//
//     let backSortedWords = arrayWords.sort ((a, b) => {
//        if (a>b) {
//            return -1;
//        }
//        return 1;
//     });
// document.write (backSortedWords);

// -- перебрать массив при помощи map() и получить новый массив
// в котором все значения будут со знаком "!" в конце
// let newStringArray = arrayWords.map(value => {
//     value = value+"!";
//     return value;
// })
// for (let i = 0; i < newStringArray.length; i++) {
//    document.write (newStringArray[i] + ", ");
// }

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users =
//         [{name: 'vasya', age: 31, status: false},
//         {name: 'petya', age: 30, status: true},
//         {name: 'kolya', age: 29, status: true},
//         {name: 'olya', age: 28, status: false},
//         {name: 'max', age: 30, status: true},
//         {name: 'anya', age: 31, status: false},
//         {name: 'oleg', age: 28, status: false},
//         {name: 'andrey', age: 29, status: true},
//         {name: 'masha', age: 30, status: true},
//         {name: 'olya', age: 31, status: false},
//         {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let sortedUser = users.sort((a,b) => {
//     return a.age - b.age;
// });
// console.log(sortedUser);
// let sortedUser2 = users.sort((a,b) => {
//     return b.age - a.age;
// });
// console.log(sortedUser2);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sortedNameUser = users.sort((a,b) => {
//     return a.name.length - b.name.length;
// });
// console.log(sortedNameUser);
// let sortedNameUser2 = users.sort((a,b) => {
//     return b.name.length - a.name.length;
// });
// console.log(sortedNameUser2);

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
// let s = JSON.stringify(users);
// let clone = JSON.parse(s);
// clone.map((users) => {
//     users.id = Math.round(Math.random()*200-100);
// });
// let sortedClone = clone.sort((a,b) => {
//     return a.id - b.id;
// });
// console.log(sortedClone);

// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30", volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20", volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// - двигун більше 3х літрів
// let newCars1 = cars.filter((cars) => {
//     if (cars.volume>3) {
//         return cars;
//     }
// });
// console.log(newCars1);

// - двигун більше 2х літрів
// let newCars2 = cars.filter((cars) => {
// return cars.volume>2;
// });
// console.log(newCars2);

// - двигун = 2л
// let newCars3 = cars.filter((cars) => {
// return cars.volume===3;
// });
// console.log(newCars3);

// - виробник мерс
// let newCars4 = cars.filter((cars) => {
// return cars.producer==="mercedes";
// });
// console.log(newCars4);

// - двигун більше 3х літрів + виробник мерседес
// let newCars5 = cars.filter((cars) => {
//   return (cars.volume>3 && cars.producer === "mercedes" );
//  });
// console.log(newCars5);

// - двигун більше 3х літрів + виробник субару
// let newCars6 = cars.filter((cars) => {
//     return (cars.volume>3 && cars.producer === "subaru" );
// });
// console.log(newCars6);

// - сили більше ніж 300
// let newCars7 = cars.filter((cars) => {
//     return cars.power>300
// });
// console.log(newCars7);

// - сили більше ніж 300 + виробник субару
// let newCars8 = cars.filter((cars) => {
//     return (cars.power>300 && cars.producer === "subaru");
// });
// console.log(newCars8);

// - мотор серіі ej
// let newCars9 = cars.filter(value => value.engine.includes("ej"));
// console.log(newCars9);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let newCars10 = cars.filter((cars) => {
//     return (cars.power>300 && cars.producer === "subaru" && cars.engine.includes("ej"));
// });
// console.log(newCars10);

// - двигун меньше 3х літрів + виробник мерседес
// let newCars11 = cars.filter((cars) => {
//     return (cars.engine<3 && cars.producer==="mercedes");
// });
// console.log(newCars11);

// - двигун більше 2л + сили більше 250
// let newCars12 = cars.filter((cars) => {
//     return (cars.engine>2 && cars.power>250);
// });
// console.log(newCars12);

// - сили більше 250  + виробник бмв
// let newCars13 = cars.filter((cars) => {
//     return (cars.power>250 && cars.producer==="bmw");
// });
// console.log(newCars13);


let usersWithAddress =
[{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'ShevchenkoA', number: 16}},
{id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
{id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
{id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
{id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
{id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
{id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
{id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
{id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
{id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
{id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
let s = JSON.stringify(usersWithAddress);

// -- отсортировать его по id пользователей
// let sortedUsers = JSON.parse(s);
// sortedUsers.sort((a,b) => a.id - b.id);
// console.log(sortedUsers);

// -- отсортировать его по id пользователей в обратном опрядке
// let sortedUsers2=JSON.parse(s);
// sortedUsers2.sort((a,b) => b.id - a.id);
// console.log(sortedUsers2);

// -- отсортировать его по возрасту пользователей
// let sortedUsers3=JSON.parse(s);
// sortedUsers3.sort((a,b) => a.age - b.age);
// console.log(sortedUsers3);

// -- отсортировать его по возрасту пользователей в обратном порядке
// let sortedUsers4=JSON.parse(s);
// sortedUsers4.sort((a,b) => b.age - a.age);
// console.log(sortedUsers4);

// -- отсортировать его по имени пользователей
// let sortedUsers5 = JSON.parse(s);
// sortedUsers5.sort((a,b) =>{
//     if (a.name>b.name) {
//         return 1;
//     }
//     return -1;
// });
// console.log(sortedUsers5);

// -- отсортировать его по имени пользователей в обратном порядке
// let sortedUsers6 = JSON.parse(s);
// sortedUsers6.sort((a,b) =>{
//     if (a.name>b.name) {
//         return -1;
//     }
//     return 1;
// });
// console.log(sortedUsers6);


// -- отсортировать его по названию улицы  в алфавитном порядке
// let sortedUsers7 = JSON.parse(s);
// sortedUsers7.sort((a,b) =>{
//     if (a.address.street>b.address.street) {
//         return 1;
//     }
//     return -1;
// });
// console.log(sortedUsers7);

// -- отсортировать его по номеру дома по возрастанию
// let sortedUsers8 = JSON.parse(s);
// sortedUsers8.sort((a,b) => a.address.number - b.address.number);
// console.log(sortedUsers8);

// -- отфильтровать (оставить) тех кто младше 30
// let sortedUsers9 = JSON.parse(s);
// let newsortedUsers9 = sortedUsers9.filter (value => value.age >30);
// console.log(newsortedUsers9);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let sortedUsers10 = JSON.parse(s);
// let newsortedUsers10 = sortedUsers10.filter (value => value.status === false);
// console.log(newsortedUsers10);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let sortedUsers10 = JSON.parse(s);
// let newsortedUsers10 = sortedUsers10.filter (value => value.status === false && value.age<30);
// console.log(newsortedUsers10);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let sortedUsers11 = JSON.parse(s);
// let newsortedUsers11 = sortedUsers11.filter (value => value.address.number%2 ===0 );
// console.log(newsortedUsers11);







