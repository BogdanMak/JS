// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// чтобы при клике на кнопку исчезал элемент с id="text".let btn = document.getElementById("press");
// let text = document.getElementById("text");
// btn.onclick = () => {
//         text.style.display = "none";
// };

//Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.createElement("button");
// button.innerText = "pushOnTheButtonPlease";
// let body = document.getElementsByTagName("body");
// for (let i = 0; i < body.length; i++) {
//     body[i].appendChild(button);
// }
// button.onclick = () => {
//     button.style.display = "none";
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
// let btn = document.getElementById("button");
// btn.onclick = () => {
//     let input = document.getElementById("inp");
//     let age = input.value;
//     if (age < 18 && age > 0 ) {
//         console.log("Your age less than 18!!!");
//     }
//     else if (age >18 && age <105) {
//         console.log("Welcome!!!");
//     }
//     else {
//         console.log("You give me wrong age!!!");
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// let main = document.getElementById("main menu");
// let sections = document.getElementById("sections");
// let hidden = false;
// main.onclick = () => {
//     if(hidden) {
//         sections.style.display = "block";
//         hidden = false;
//     }
//     else {
//         sections.style.display = "none";
//         hidden = true;
//     }
// }

//- Создать список комментариев , пример объекта коментария -
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let content = document.getElementById("content");
// let commentArray = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ]
// commentArray.forEach ((value) => {
//    let div = document.createElement("div");
//    let h = document.createElement("h2");
//    h.innerHTML = value.title;
//    let p = document.createElement("p");
//    p.innerHTML = value.body;
//    let button = document.createElement("button");
//    button.innerHTML = "press and hide everything";
//    let hidden = false;
//    button.onclick = () => {
//        if(hidden) {
//         p.style.display = "block";
//         hidden = false;
//     }
//     else {
//         p.style.display = "none";
//         hidden = true;
//     }
//    }
//    content.appendChild(div);
//    div.appendChild(h);
//    div.appendChild(p);
//    div.appendChild(button);
// });

//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let form1 = document.createElement("form");
// let form2 = document.createElement("form");
// let inp11 = document.createElement("input");
// let inp12 = document.createElement("input");
// let inp21 = document.createElement("input");
// let inp22 = document.createElement("input");
// let btn = document.createElement("button");
// btn.innerText = "PRESS!"
// btn.onclick = () => {
//     console.log ("Input 1: " + inp11.value);
//     console.log ("Input 1.1: " + inp12.value);
//     console.log ("Input 2.1: " + inp21.value);
//     console.log ("Input 2.2: " + inp22.value);
// }
// form1.appendChild(inp11);
// form1.appendChild(inp12);
// form2.appendChild(inp21);
// form2.appendChild(inp22);
// let body = document.getElementsByTagName("body");
// for (let i = 0; i < body.length; i++) {
//     body[i].appendChild(form1);
//     body[i].appendChild(form2);
//     body[i].appendChild(btn);
// }

//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
// let inp1 = document.createElement("input");
// let inp2 = document.createElement("input");
// let inp3 = document.createElement("input");
// let btn = document.createElement("button");
// btn.innerHTML = "PRESS TO START";
// content.appendChild(inp1);
// content.appendChild(inp2);
// content.appendChild(inp3);
// content.appendChild(btn);
// let place = document.getElementById("content");
// function NewTable (rows, columns, tag) {
//
//     let table = document.createElement("table");
//     for (let i = 0; i < rows; i++) {
//
//         let tr = document.createElement("tr");
//         for (let j = 0; j < columns; j++) {
//             let td = document.createElement("td");
//             td.innerText = inp3.value;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     tag.appendChild(table);
// }
// btn.onclick =()=> {
//     NewTable(inp1.value, inp2.value, place )
// }

//- Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// function NewTable (rows, columns, tag) {
//     let table = document.createElement("table");
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement("tr");
//         for (let j = 0; j < columns; j++) {
//             let td = document.createElement("td");
//             td.innerHTML = i + "" + j;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     tag.appendChild(table);
// }
// NewTable (5,5,place);

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let content = document.getElementById("content");
// let img = document.createElement("img");
// let btnLeft = document.createElement("button");
// btnLeft.innerHTML = "LEFT";
// let btnRight = document.createElement("button");
// btnRight.innerHTML = "RIGHT";
// let pictures = [
//     {id: 1, img_url: "images/№1.jpg"},
//     {id: 2, img_url: "images/№2.jpg"},
//     {id: 3, img_url: "images/№3.jpg"},
//     {id: 4, img_url: "images/№4.jpg"},
//     {id: 5, img_url: "images/№5.jpg"},
// ];
// let index = 4;
// img.src = pictures[index].img_url;
// btnLeft.onclick=()=> {
//     index--;
//     if (index === -1) {
//         index = pictures.length-1;
//     }
//     img.src = pictures[index].img_url;
//
// }
// btnRight.onclick=()=> {
//     index++;
//
//     if (index === pictures.length) {
//         index = 0;
//     }
//     img.src = pictures[index].img_url;
// }
// img.style.width = "100px";
// img.style.heigt = "100px";
// content.appendChild(btnLeft);
// content.appendChild(img);
// content.appendChild(btnRight);

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let content = document.getElementById("content");
// let inp = document.createElement("input");
// let btn = document.createElement("button");
// let arr = ["lorem", "ipsum", "dolor", "sit", "amet"];
// btn.innerHTML = "START!";
// content.appendChild(btn);
// content.appendChild(inp);
// let text = "warning!!!"
// btn.onclick = ()=> {
//     for (let i = 0; i < arr.length; i++) {
//         if (inp.value.toLowerCase()===arr[i]) {
//             alert(text);
//         }
//     } inp.value = null;
// }

//- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
// let content = document.getElementById("content");
// let inp = document.createElement("input");
// let btn = document.createElement("button");
// let arr = ["lorem", "ipsum", "dolor", "sit", "amet"];
// btn.innerHTML = "START!";
// content.appendChild(btn);
// content.appendChild(inp);
// let text = "warning!!!"
// btn.onclick = ()=> {
//     for (let i = 0; i < arr.length; i++) {
//         if (inp.value.includes(arr[i])) {
//             alert(text);
//         }
//     } inp.value = null;
// }

//-- создать скрипт, который берет считывает на странице (rules.html) текст и делает
// сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
// let content = document.getElementById("content");
// let arr = document.getElementsByTagName("h2");
// let ul = document.createElement("ul");
// for (let i = 0; i < arr.length; i++) {
//
//    let li = document.createElement("li");
//    ul.appendChild(li);
//    let a = document.createElement("a");
//    li.appendChild(a);
//    let anchor = "anchor" + i;
//    arr[i].setAttribute("id", anchor);
//    a.href = "#" + anchor;
//    a.innerHTML=arr[i].innerHTML;
// }
// content.appendChild(ul);
// content.style.float = "right";
// content.style.width = "50%";

//Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];


let content = document.getElementById("content");
let userDiv = document.createElement("div");
userDiv.className = "user";
userDiv.appendChild(USERS(usersWithAddress));

let check1 = document.createElement("input");
let label1 = document.createElement("label");
label1.innerHTML = "status: false!";
check1.type = "checkbox";

let check2 = document.createElement("input");
let label2 = document.createElement("label");
label2.innerHTML = "older than 29!";
check2.type = "checkbox";

let check3 = document.createElement("input");
let label3 = document.createElement("label");
label3.innerHTML = "city: Kyiv!";
check3.type = "checkbox";

let btn = document.createElement("button");
btn.innerHTML = "PRESS!!!";


content.appendChild(userDiv);
content.appendChild(label1);
content.appendChild(check1);
content.appendChild(label2);
content.appendChild(check2);
content.appendChild(label3);
content.appendChild(check3);
content.appendChild(btn);
let usersArray = JSON.parse(JSON.stringify(usersWithAddress));
btn.onclick= () => {

    if (check1.checked) {
        usersArray = usersArray.filter(value => !value.status)
    }
    else if (check2.checked) {
        usersArray = usersArray.filter(value => value.age>29);

    }
    else if (check3.checked) {
        usersArray = usersArray.filter(value => value.address.city === "Kyiv");
    }
    userDiv.innerHTML = "";
    userDiv.appendChild(USERS(usersArray));
}

function USERS (array) {
    let main = document.createElement("div");
    array.forEach (item => {
        let div = document.createElement("div");
        div.innerHTML=JSON.stringify(item);
        main.appendChild(div);
    });
    return main;
}















