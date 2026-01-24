/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

// function sum(a, b) {
//     return 'la suma es ' + (a + b)
// }
// console.log(sum(5, 5));

// // 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

// // 1°
// function highValue(numbers) {
//     return Math.max(...numbers);
// }
// // console.log(highValue([1,2,3,4,5]));
// // 2°
// function highValue2(numbers) {
//     let max = numbers[0];
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             max = numbers[i]
//         }
//     } return max
// }
// // console.log(highValue2([1, 2, 3, 4, 5]));

// // 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// const countVo = function (string) {
//     let count = 0
//     for (let i = 0; i < string.length; i++) {
//         switch (string[i]) {
//             case 'a':
//                 count++;
//                 break;
//             case 'e':
//                 count++;
//                 break;
//             case 'i':
//                 count++;
//                 break;
//             case 'o':
//                 count++;
//                 break;
//             case 'u':
//                 count++;
//                 break;
//             default:
//                 break;
//         }
//     }
//     return 'tiene ' + count + ' vocales'
// }

// console.log(countVo('implementacion'));

// // 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// const upperCase =(arr)=>{
//     let arr2=[];   
//     arr.forEach((word)=>{
//         arr2.push(word.toUpperCase())
//     })
//     return 'mayúsculas '+ arr2
// }
//  console.log(upperCase(['hola', 'mundo', 'como', 'estas']));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
//es primo si solo se divide por 1 y  por si mismo

function primeNumber(num) {
    let isPrime = `${num} es primo`
    for (let i = 2; i < num; i++) {

        num % i == 0 ? (isPrime = num + ' no es primo ', console.log('no es primo, es divisible por ' + i)) : console.log(i);
    }
    return isPrime
}
console.log(primeNumber(8));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const comunElements = (arr1, arr2) => {
    let arrCom = []
    arr1.forEach((element) => {
        if (arr2.includes(element)) {
            arrCom.push(element)
        }
    })
    return arrCom
}
console.log(comunElements(array1, array2));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let arrayPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const sumPares = (arr) => {
    let result = 0;
    arrayPares.forEach((num) => {
        if (num % 2 == 0) {
            // console.log(num);
            result += num
        }
    })
    return 'los pares suman ' + result
}

console.log(sumPares(arrayPares));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

const squareNumber = () => {
    let arrCuad = []
    arrayPares.forEach((num) => {
        arrCuad.push(num **2)
    })
    return arrCuad
}
console.log(squareNumber([1, 2, 3, 4, 5]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

const reverseString = (str)=>{
  let words=  str.split(' ').reverse().join(' ')
    return words
}
console.log(reverseString('hola como estas'))   
// 10. Crea una función que calcule el factorial de un número dado