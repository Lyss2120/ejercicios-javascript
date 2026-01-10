/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

const firstName = "MoureDev";
const user = "mouredev";
const password = "1234";    
const age = 37;

if (firstName){
    console.log(age);
    
}
// 1. Imprime por consola tu nombre si una variable toma su valor

if (firstName === "MoureDev"){
    console.log('The name is'+ firstName);  
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

if (user === 'mouredev' && password === '1234'){
    console.log('usuario correcto');
    
}else console.log('usuario incorrecto')

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

age > 0 ? console.log('positivo')
:
age < 0 ? console.log('negativo')
:
console.log('cero')

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

 const canVote = (age) => { if( age >= 18 ){console.log('puede votar');
}else if (age < 18){
    console.log(`no puede votar le faltan ${18 - age} años`);
    
}}
canVote('15')
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7