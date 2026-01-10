/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

const firstName = "MoureDev";
const user = "mouredev";
const password = "1234";
const age = 37;

if (firstName) {
    console.log(age);

}
// 1. Imprime por consola tu nombre si una variable toma su valor

if (firstName === "MoureDev") {
    console.log('The name is' + firstName);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

if (user === 'mouredev' && password === '1234') {
    console.log('usuario correcto');

} else console.log('usuario incorrecto')

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

age > 0 ? console.log('positivo')
    :
    age < 0 ? console.log('negativo')
        :
        console.log('cero')

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

const canVote = (age) => {
    if (age >= 18) {
        console.log('puede votar');
    } else if (age < 18) {
        console.log(`no puede votar le faltan ${18 - age} años`);

    }
}
canVote('15')

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const adult = age >= 18 ? 'adulto' : 'menor'

console.log(adult);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

const mes = 9
const season = (mes) => {
    (mes === 1 || mes === 2 || mes === 12) ? console.log('estamos en verano') :
        (mes === 3 || mes === 4 || mes === 5) ? console.log('estamos en otoño') :
            (mes === 6 || mes === 7 || mes === 8) ? console.log('estamos en invierno') :
                (mes === 9 || mes === 10 || mes === 11) && console.log('estamos en primavera')
}
season(mes);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

const monthDays = (mes) => {
    (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) ? console.log('31 DIAS') :
        (mes === 4 || mes === 6 || mes === 9 || mes === 11) ? console.log('30 DIAS') :
            (mes === 2) && console.log('28 O 29 DIAS')
}
monthDays(mes);

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

const language = 'fr';
switch (language) {
    case 'es':
        console.log('Hola');
        break;
    case 'en':
        console.log('Hello');
        break;
    case 'fr':
        console.log('Bonjour');
        break;
    default:
        console.log('Idioma no reconocido');
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
const switchSeason = (mes) => {
    switch (mes) {
        case 1:
        case 2:
        case 12:
            console.log('estamos en verano!')
            break;
        case 3:
        case 4:
        case 5:
            console.log('estamos en otoño!')
            break;
        case 6:
        case 7:
        case 8:
            console.log('estamos en invierno!')
            break;
        case 9:
        case 10:
        case 11:
            console.log('estamos en primavera!')
            break;
        default:
            console.log('no existe esa estacion!')
            break;
    }
}

switchSeason(2)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

const switchMonthDays = (mes) => {
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log('31 DIAS!')
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log('30 DIAS!')
            break;
        case 2:
            console.log('28 o 29 DIAS!')
            break;

        default:
            console.log('el mes no existe')
            break;
    }
}

switchMonthDays(6)

