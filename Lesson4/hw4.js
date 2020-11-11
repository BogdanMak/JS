// створити функцію яка виводить масив
// function showArray(arr) {
//     for (let i = 0; i<arr.length; i++) {
//         document.write (arr[i] + ", ");
//     }
//
// }
// showArray([325,345,547654,4747,254245]);

// створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.
// function showArray(arr2) {
//     for (let i = 0; i<arr2.length; i++) {
//         document.write (arr2[i] + ", ");
//     }
// }
// let arr1 =[];
// random(arr1);
// function random (arr1) {
//     for (let i = 0; i < 5; i++) {
//         arr1[i] = (Math.round(Math.random() * 100));
//     }
//     showArray(arr1);
// }

//- створити функцію яка приймає три числа та виводить та повертає найменьше.
// function numbers (num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         return num1;
//     }
//     else if (num2 < num1 && num2 < num3) {
//         return num2;
//     }
//     else if (num3 < num2 && num3 < num1) {
//         return num3;
//     }
//
// }

//- створити функцію яка приймає три числа та виводить та повертає найбільше.
// function numbers (num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1);
//         return num1;
//     }
//     else if (num2 > num1 && num2 > num3) {
//         document.write(num2);
//         return num2;
//     }
//     else if (num3 > num2 && num3 > num1) {
//         document.write(num3);
//         return num3;
//     }
// }

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function biggest () {
//     let min = arguments[0];
//     let max = arguments[0];
// for ( let i = 0; i<arguments.length; i++) {
//     if (arguments[i]<min) {
//         min = arguments[i];
//     }
//     if (arguments[i]>max) {
//         max = arguments[i];
//     }
// }
//     document.write (`Min number: ${min}!!! Max number: ${max}!!!`);
// }
// biggest (54,234,435,35,356,456,67);

// - створити функцію яка виводить масив
// function array (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(arr[i] + ", ");
//     }
// }
// let ar = [435,234,435435,345425];
// array (ar);

// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// function biggest (arr) {
//     let min = arr[0];
//     let max = arr[0];
// for ( let i = 0; i<arr.length; i++) {
//     if (arr[i]<min) {
//         min = arr[i];
//     }
//     if (arr[i]>max) {
//         max = arr[i];
//     }
// }
//     document.write (`Min number: ${min}!!! Max number: ${max}!!!`);
// }

//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function sumOfArr (array) {
//     let sum = 0;
//     for (let i = 0; i<array.length; i++) {
//         sum+=array[i];
//     }
//     document.write (sum);
// }
// let ar = [2,3,4,5];
// sumOfArr (ar);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function averageOfArr (array) {
//     let sum = 0;
//     let av = 0;
//     for (let i = 0; i<array.length; i++) {
//         sum+=array[i];
//         av++;
//     }
//     document.write (sum/array.length ); //or sum/arr.length
// }
// let ar = [2,3,4,5];
// averageOfArr (ar);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// phone1 = {
//     screen: 5.1,
//     price: 6000,
//     color: "green",
// };
// phone2 = {
//     screen: 6.1,
//     price: 8000,
//     color: "red",
// };
// let array = [phone1, phone2];
//
// function object (arr) {
//     let count = 0;
//     for (let i = 0; i<arr.length; i++) {
//       count++;
//     }
//     return count;
// }
// let numbers = object(array);
// console.log(numbers);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// phone1 = {
//     screen: 5.1,
//     price: 6000,
//     color: "green",
// };
// phone2 = {
//     screen: 6.1,
//     price: 8000,
//     color: "red",
// };
// let array = [phone1, phone2];
//
// function object (arr) {
//     let count = 0;
//     for (const item of arr) {
//         for (const keys in item) {
//             count++;
//         }
//     }
//     return count;
// }
// let numbers = object(array);
// console.log(numbers);

// - створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
// let array1 = [1,2,3,4];
// let array2 = [4,3,2,1];
// function sumOfArrays (arr1, arr2) {
//     let arr3 = [];
//     for (let i = 0; i<arr1.length; i++) {
//         for (let j = 0; j<arr2.length; j++) {
//             if (j === i) {
//                 arr3.push(arr1[i]+arr2[j]);
//             }
//         }
//     }
//     return arr3;
// }
// let array3 = sumOfArrays(array1,array2);
// for (const number of array3) {
//     document.write(number + ", ");
// }

//приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr = [23,"dssfv",4,5];
// function turnAround (array, number){
//     for (let i = 0; i<array.length; i++) {
//         let temp = 0;
//         if (i === number) {
//             temp = array[i+1];
//             array[i+1] = array[i];
//             array [i] = temp;
//         }
//     }
//     return array;
// }
// let result = turnAround(arr,0);
// for (let i = 0; i<result.length; i++) {
//     document.write(result[i] + ", ");
// }

//Додає в боді блок з текстом "Hello owu"
function text () {
    "<p>Hello owu<\p>"
}



