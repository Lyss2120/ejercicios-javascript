/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
const myArr = [1, 2, 3]
const [a,b, ,]= myArr
console.log(a, b);

let value2= myArr[2]
let value3= myArr[0]

console.log(value2, value3);


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [value4, value5, value6, value7 = 7 ] = myArr
console.log(value5, value7);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

const myObj = {
    x: 'hola',
    y: 'como',
z: 'estas'
}

let {x,y} = myObj;

console.log(x,y);



// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// 6. Usa propagación para combinar dos arrays en uno nuevo

// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación