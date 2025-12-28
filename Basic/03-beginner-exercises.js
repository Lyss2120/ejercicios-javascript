/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// SOY UN COMENTARIO DE UNA LINEA

// 2. Escribe un comentario en varias líneas


/* SOY UN COMENTARIO DE VARIAS LINEAS
    HOLA
    console.log("¡Hola, JavaScript!")
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
const booleanValue = true;
const number = 7;
const valueFloat = 1.52;
const string = 'hello';
const valueNull = null;
const valueUndefined = undefined;
const symbol = Symbol('asymbol');
const bigInt = BigInt(8777878454515545487877845455454488745454454545454545545);
const bigInt2 = 445458777878454515545487877845455454488745454454545454545545n;

// 4. Imprime por consola el valor de todas las variables
console.log(booleanValue, 'booleanValue');
console.log(number, 'number');
console.log(valueFloat, 'valueFloat');
console.log(string, 'string');
console.log(valueNull, 'valueNull');
console.log(valueUndefined, 'valueUndefined');
console.log(symbol, 'symbol');
console.log(bigInt, 'bigInt');
console.log(bigInt2, 'bigInt2');   

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof booleanValue, 'booleanValue');
console.log(typeof number, 'number');
console.log(typeof valueFloat, 'valueFloat');
console.log(typeof string, 'string');
console.log(typeof valueNull, 'valueNull');
console.log(typeof valueUndefined, 'valueUndefined');
console.log(typeof symbol, 'symbol');
console.log(typeof bigInt, 'bigInt');
console.log(typeof bigInt2, 'bigInt2');   

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

booleanValue = false;
number = 5;
valueFloat = 5.5;
string = 'chao';
valueNull = null;
valueUndefined = undefined;
symbol = Symbol('unsymbol');
bigInt = BigInt(11111111111111111111155555555554454545454545545);
bigInt2 = 555555555555555555778454554444444444454545454545545n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

booleanValue = 'false';
number = true;
valueFloat = null;
string = Symbol('unsymbol');
valueNull = 5.5;
valueUndefined = 8;
symbol = 'unsymbol';
bigInt = 555555555555555555778454554444444444454545454545545n;
bigInt2 = BigInt(11111111111111111111155555555554454545454545545);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const booleanValueConst = true;
const numberConst = 7;
const valueFloatConst = 1.52;
const stringConst = 'hello';
const valueNullConst = null;
const valueUndefinedConst = undefined;
const symbolConst = Symbol('asymbol');
const bigIntConst = BigInt(8777878454515545487877845455454488745454454545454545545);
const bigInt2Const = 445458777878454515545487877845455454488745454454545454545545n;

// 9. A continuación, modifica los valores de las constantes
//no

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/* const booleanValueConst = true;
const numberConst = 7;
const valueFloatConst = 1.52;
const stringConst = 'hello';
const valueNullConst = null;
const valueUndefinedConst = undefined;
const symbolConst = Symbol('asymbol');
const bigIntConst = BigInt(8777878454515545487877845455454488745454454545454545545);
const bigInt2Const = 445458777878454515545487877845455454488745454454545454545545n;
 */