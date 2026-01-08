/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let firstName = "Brais"
let lastName = "Moure"

console.log(firstName + " " + lastName)

// 2. Muestra la longitud de una cadena de texto

console.log(firstName.length, 'length of firstName');

// 3. Muestra el primer y último carácter de un string

console.log(firstName.charAt(0), 'index of firstName');
console.log(firstName.charAt(firstName.length - 1), 'last index of firstName');

// 4. Convierte a mayúsculas y minúsculas un string

console.log(firstName.toUpperCase(), 'toUpperCase of firstName');
console.log(firstName.toLowerCase(), 'toLowerCase of firstName');

// 5. Crea una cadena de texto en varias líneas

const multiLine = `Hola 
soy
un mensaje 
de 
varias 
lineas`

console.log(multiLine);

// 6. Interpola el valor de una variable en un string

console.log(`Variable interpolada: '${multiLine}'`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

const text = 'Reemplaza todos los espacios en blanco de un string por guiones'

console.log(text.replaceAll(' ', '-'));


// 8. Comprueba si una cadena de texto contiene una palabra concreta

 console.log(text.includes('string'));

// 9. Comprueba si dos strings son iguales

console.log( 'Comprueba'=== 'Comprueba' );

// 10. Comprueba si dos strings tienen la misma longitud

const str='Comprueba';
const str2='Manzanass';

console.log(str.length === str2.length);
