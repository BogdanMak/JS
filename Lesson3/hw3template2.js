
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// let text = document.getElementById("main_header");
// text.style.color = "red";

// -- робить шириниу елементу ul 400 пікселів
// let ulStyle = document.getElementsByTagName("ul");
// for (let i = 0; i < ulStyle.length; i++) {
//     ulStyle[i].style.width = "400px";
// }

// // -- робить шириниу всіх елементів з класом linkList шириною 50%
// let LinkList = document.getElementsByTagName("li");
// for (let i = 0; i < LinkList.length; i++) {
//     LinkList[i].style.width = "50%";
// }

// -- отримує текст який зберігається в елементі з класом listElement2
// let LE2 = document.getElementsByClassName("linkList listElement2");
// let text = document.createElement('div');
// text.innerText = "new text for new element";
// text.style.color = "black";
// for (let i = 0; i < LE2.length; i++) {
//     LE2[i].appendChild(text);
// }
// let LinkLi = document.getElementsByTagName("li");
// for (let i = 0; i < LinkLi.length; i++) {
//     LinkLi[i].style.backgroundColor = "grey";
// }

// -- отримує всі елементи 'a' та додає їм клас anchor
// let ancor = document.getElementsByTagName("a");
// for (let i = 0; i < ancor.length; i++) {
//     ancor[i].classList.add ("anchor");

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let ancor = document.getElementsByTagName("a");
// for (let i = 0; i < ancor.length; i++) {
//     if (ancor[i].text.includes("link3")) {
//      ancor[i].style.fontSize = "40px";
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let ancor = document.getElementsByTagName("a");
// for (let i = 0; i < ancor.length; i++) {
//     let text = ancor[i].textContent;
//     ancor[i].classList.add ("element_" + text);
// }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let text = prompt("tell me color of backgraund, please!");
// let sub = document.getElementsByClassName("sub-header");
// for (const subElement of sub) {
//     subElement.style.backgroundColor = `${text}`;
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту
// у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let text = prompt("tell me color of background, please!");
// let subHeader = document.getElementsByClassName("sub-header");
// for (let i = 0; i < subHeader.length; i++) {
//     if (subHeader[i].textContent ==="content 2 segment") {
//         subHeader[i].style.backgroundColor = `${text}`;
//     }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let text = prompt("insert your text, please!");
// let content1 = document.getElementsByClassName("content_1");
// for (let i = 0; i <  content1.length; i++) {
//         content1[i].innerHTML = `${text}`;
// }

// -- отримати елементи p та змінити їм paddin на довільне значення
let padding = document.getElementsByTagName("p");
for (let i = 0; i < padding.length; i++) {
    padding[i].style.padding = "40px";
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let text = prompt("insert your text, please!");
// let text2 = document.getElementsByClassName("text2");
// for (let i = 0; i <  text2.length; i++) {
//     text2[i].innerHTML = `${text}`;
// }

