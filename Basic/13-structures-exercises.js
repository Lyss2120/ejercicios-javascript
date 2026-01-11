/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let myArray = ['gato', 'pajaro', 'perro', 'tortuga', 'ardilla']

// 2. Añade dos más. Uno al principio y otro al final

myArray.unshift('serpiente')
myArray.push('raton')
console.log(myArray);


// 3. Elimina el que se encuentra en tercera posición

myArray.splice(2, 1)
console.log(myArray);

// 4. Crea un set que almacene cinco libros

let mySet = new Set(['hola', 'adios', 'chao', 'bonasera', 'bonjournou'])
console.log(mySet);

// 5. Añade dos más. Uno de ellos repetido

mySet.add('hial', 'hola')
console.log(mySet);

// 6. Elimina uno concreto a tu elección

mySet.delete('adios')
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([['enero', 1], ['febrero', 2]])
console.log(myMap);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has('mayo'));
console.log(myMap.values());

// 9. Añade al mapa una clave con un array que almacene los meses de verano

myMap.set(
    'verano', ['diciembre', 'enero', 'febrero']
)

console.log(myMap);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray2 = ['pan', 'mermelada', 'mantequilla', 'churrasco', 'jamon', 'queso']
let mySet2 = new Set(myArray2)
console.log(mySet2);
let myMap2 = new Map([['hola',mySet2]])
console.log(myMap2);
