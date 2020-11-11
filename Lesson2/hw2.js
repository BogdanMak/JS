//Рядок 1-5
// let num = [1, 2, 3, 4, 5];
// let string = ["hi", "ok", "all", "is", "fine"];
// let mixed = [123, "ok", isGreen, 453, 657];
// let nums = [];
// nums[0] = 234;
// nums[1] = 188;
// nums[2] = 154;
// nums[3] = 54;
// nums[4] = 45;
// document.write (nums.length);
// for (let i = 0; i<nums.length; i++) {
//     document.write (nums[i] + "<hr>");
// }

// Рядок7!!!
// let text = "Hello world";
// for (let i = 0; i<10; i++) {
//     document.write ( `<div> ${text} </div>` );
// }

//Рядок8!!!
// let num = 1;
// for  (let i = 0; i<10; i++) {
//     document.write ( `${num}"Hello world!" + "<br>");
//     num++;
// }

// Рядок9!!!
// let num = 1;
// while (num<=20) {
//     document.write ("<h1> Hello world!!!</h1>");
//     num++;
// }

//Рядок10!!!
// let num = 1;
// while (num<=20) {
//     document.write (`<h1> ${num}.Hello world!!!</h1>`);
//     num++;
// }

// Рядок11!!!
// let array = [234,435,546,324,456,3465,436,346,5547,547];
// for (let i = 0; i<array.length; i++) {
//     console.log (array [i]);
// }

//Рядок12!!!
//Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let string = ["qwer","htrhtrh","dfbebdf","dfbdfb","gfngfn","dfvfdvdf","sdvdsv","sdvsdv","sdvdsv","sdvdsv",];
// for (let i = 0; i<string.length; i++) {
//    console.log (string[i]);
// }

//Рядок13!!!
// let mix = ["qwer",1234,[4,6],"dfbdfb","gfngfn",56546,65777,"sdvsdv","sdvdsv","sdvdsv",];
// for (let i = 0; i<mix.length; i++) {
//     console.log (mix[i]);
// }

//Рядок14!!!
// let mix = ["qwer",1234,[4,6],true,"gfngfn",56546,65777,false,"sdvdsv","sdvdsv",];
// for (let i = 0; i<mix.length; i++) {
//     if (typeof mix[i] === "boolean") {
//         document.write (mix[i] + "<hr>");
//     }
// }

//Рядок15!!!
// let mix = ["qwer",1234,[4,6],true,"gfngfn",56546,65777,false,"sdvdsv","sdvdsv",];
// for (let i = 0; i<mix.length; i++) {
//     if (typeof mix[i] === "number") {
//         document.write (mix[i] + "<hr>");
//     }
// }

//Рядок16!!!
// let mix = ["qwer",1234,[4,6],true,"gfngfn",56546,65777,false,"sdvdsv","sdvdsv",];
// for (let i = 0; i<mix.length; i++) {
//     if (typeof mix[i] === "string") {
//         document.write (mix[i] + "<hr>");
//     }
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

//Рядок17!!!
// let array = [];
// array[0] = 34;
// array[1] = true;
// array[2] = "gdfgfdg";
// array[3] = "gfhghgfhgf";
// array[4] = 546;
// array[5] = 6767;
// array[6] = "gfhgfhj";
// array[7] = false;
// array[8] = "gfngfn";
// array[9] = 76876898;
// for (let i = 0; i<array.length; i++) {
//     console.log (array[i]);
// }

// Рядок18!!!
// for (let i = 1; i<=10; i++) {
//     document.write (i + "<hr>");
//     console.log (i);
// }

//Рядок19!!!
// for (let i = 1; i<=100; i++) {
//     document.write (i + "<hr>");
//     console.log (i);
// }

// Рядок20!!!
// for (let i = 0; i<200; i+=2) {
//     document.write (i + "<hr>");
//     console.log (i);
// }

//Рядок21!!!
// for (let i = 2; i<=200; i+=2) {
//     document.write (i + "<hr>");
//     console.log (i);
// }

// //Рядок22!!!
// for (let i = 2; i<=200; i+=2) {
//     document.write (i + "<hr>");
//     console.log (i);
// }

//Рядок23!!!
// for (let i = 1; i<=200; i+=2) {
//     document.write (i + "<hr>");
//     console.log (i);
// }

//Рядок24
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let i = 0; i<2; i++){
//     document.write ("<hr>"  + i + "<br>");
//     for (let j=1; j<=60; j++) {
//         document.write (j + ", ")
//     }
// }

//Рядок25
// let m = 0;
// for (let i = 0; i<=2; i++) {
//     document.write("<hr>" + i + "<br>");
//     m++;
//     for (let j = 0; j <= 60; j++) {
//        document.write("<hr>" + j + "<br>");
//        if (i==2 && j==20){
//            break;
//        }        for (let k = 1; k <= 60; k++) {
//             document.write(k + ", ")
//         }
//     }
// }

// Line27!!!
// let array = ["a", "b", "c"];
// let word = "";
// for (let i = 2; i>=0; i--) {
//     word = array[i]+word;
// }
// document.write (word);

//Line28!!!
// let array = ["a", "b", "c"];
// let word = "";
// let index = array.length-1;
// while (index>=0) {
//     word = array[index]+word;
//     index--;
// }
// document.write (word);

//Line29!!!
// let array = ["a", "b", "c"];
// let word = "";
// for (let z of array ) {
//     document.write (word + z);
// }

//  Line37!!!
// let array = ["a", "b", "c"];
// let index = 0;
// while (index<3) {
//     array.push (index+1);
//     index++;
// }
// document.write(array);

//Line38!!!
// let array = [1,2,3];
// let index = 3;
// for (let i =0; i<array.length; i++) {
//     array.pop (array[i]);
//     array.unshift(index);
//     index--;
// }
// document.write (array);

//Line 39!!!
// let array = [1,2,3];
// let index = 4;
// for (let i =0; i<3; i++) {
//     array.push (index);
//     index++;
// }
// document.write (array);

// LIne40!!!
// let array = [1,2,3];
// let index = 6;
// for (let i =0; i<3; i++) {
//     array.unshift(index);
//     index--;
// }
// document.write (array);

// Line41!!!
// let array = ["js", "css", "jg"];
// let first = array.shift();
// document.write (first);

//Line42!!!
// let array = ["js", "css", "jg"];
// let last = array.pop();
// document.write (last);

//Line43!!!
// let array = ["1", "2", "3", "4", "5"];
// let nextArray = array.slice(3);
// document.write (nextArray);

//Line 45!!!
// let array = ["1", "2", "3", "4", "5"];
// let nextArray = array.slice(0,2);
// document.write (nextArray);

//Line46!!!
// let array = ["1", "2", "3", "4", "5"];
// let nextArray = array.splice(1,2);
// document.write (array);

//Line47!!!
// let array = ["1", "2", "3", "4", "5"];
// let nextArray = array.splice(2,0, "a","b","c");
// document.write (array);

//Line46????
// let array = ["1", "2", "3", "4", "5"];
// array.splice(1,0, "a","b");
// array.splice(6,0, "c");
// array.splice(8,0, "e");
// document.write (array);

// Line47!!!
// let array = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i<array.length; i++) {
//     if (array[i]%2==0) {
//         document.write(array[i] + ", ");
//     }
// }

//Line48!!!
// let array = [1,2,3,4,5,6,7,8,9,10];
// let secondArray = [];
// for (let i = 0; i<array.length; i++) {
//   secondArray.push( array[i]);
// }
// document.write (secondArray);

//Line49!!!
// let array = [1,2,3,4,5,6,7,8,9,10];
// let secondArray = [];
// for (let i = 0; i<array.length; i++) {
//     secondArray[i] = ( array[i]);
// }
// document.write (secondArray);

// Line55!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];

//NUM 1!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let index = 0;
// while (index<array.length) {
//     console.log (array [index]);
//     index++;
// }

// NUM2!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<array.length; i++) {
//     console.log (array[i]);
// }

//NUM3!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let index = 0;
// while (index<array.length) {
//     if (index % 2 !=0) {
//         document.write (array [index] +", ");
//     }
//     index++;
// }

//NUM4!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<array.length; i++) {
//     if (i % 2 == 0) {
//         document.write (array[i] + ", ");
//         }
//     }

//NUM5!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<array.length; i++) {
//     if (array [i] % 2 == 0) {
//         document.write (array[i] + ", ");
//         }
//     }

//NUM6!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let index = 0;
// while (index<array.length) {
//     if (array [index] % 2 ==0) {
//         document.write (array [index] +", ");
//     }
//     index++;
// }

// NUM7!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i<array.length; i++) {
//     if (array [i] % 3 === 0) {
//         array[i] = "okten";
//         }
//     }
// document.write(array);

//NUM8!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = array.length-1; i>=0; i--) {
//         document.write(array[i] + ", ");
// }

//NUM9!!!
//NUM3!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let index = array.length;
// while (index>0) {
//     if (index % 2 !==0) {
//         document.write (array [index] +", ");
//     }
//     index--;
// }
//NUM4!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = array.length-1; i>=0; i--) {
//     if (i % 2 === 0) {
//         document.write (array[i] + ", ");
//         }
//     }
//NUM5!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = array.length-1; i>=0; i--) {
//     if (array [i] % 2 === 0) {
//         document.write (array[i] + ", ");
//         }
//     }
//NUM6!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// let index = array.length-1;
// while (index >=0) {
//     if (array [index] % 2 ===0) {
//         document.write (array [index] +", ");
//     }
//     index--;
// }
//
// NUM7!!!
// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = array.length-1; i>=0; i--) {
//     if (array [i] % 3 === 0) {
//         array[i] = "okten";
//         }
//     }
// document.write(array);

// NUM10!!!
// let array = [];
// for (let i = 0; i<50; i++) {
//     array[i] = i*2;
// }
// document.write (array);
// let array = [];
// let ind = 0;
// for (let i = 0; i<100; i++) {
//     if (i%2!==0) {
//         array[ind] = i;
//         ind++;
//     }
// }
// document.write (array);




















