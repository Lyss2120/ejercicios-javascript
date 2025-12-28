/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let sum = 5 + 5;
let sub = 5 - 5;
let mult = 5 * 5;
let div = 5 / 5;
let rest = 5 % 5;
let exp = 5 ** 5;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignSum = sum += 5;
let asignSub = sub -= 5;
let asignMult = mult *= 5;
let asignDiv = div /= 5;
let asignRest = rest %= 5;
let asignExp = exp **= 5;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(4=='4');
console.log(4===4);
console.log(4>6);
console.log(4<2);
console.log(4!=='4');  

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(4==='4');
console.log(4>=54);
console.log(4>=6);
console.log(4<2);
console.log(4!='4');

// 5. Utiliza el operador lógico and

console.log(4 &&'4');


// 6. Utiliza el operador lógico or


console.log(4 || '4');


// 7. Combina ambos operadores lógicos

console.log(4==2 || '4' === 4 && 2 === 2 || 8 > 5);


// 8. Añade alguna negación

console.log(4==2 || '4' === 4 && 2 !== 2 || 8 > 5);

// 9. Utiliza el operador ternario

console.log(4 === 2 ? 'verdadero' : 'falso');


// 10. Combina operadores aritméticos, de comparáción y lógicas


console.log(4 === 2 ? '4' === 4 && 2 !== 2  : 'verdadero');
