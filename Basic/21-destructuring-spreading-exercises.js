/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
const myArr = [1, 2, 3]
const [a, b, ,] = myArr
console.log(a, b);

let value2 = myArr[2]
let value3 = myArr[0]

console.log(value2, value3);


// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [value4, value5, value6, value7 = 7] = myArr
console.log(value5, value7);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

const myObj = {
    x: 'hola',
    y: 'como',
    z: 'estas'
}

let { x, y } = myObj;

console.log(x, y);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {x: hla, y: cmo, z: sts} = myObj; 
console.log(cmo,sts);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

const starWars = {
    character: '',
    name: '',
    planet: {
        planetName: 'tierra',
        population: 7000
    }
} 

let {planet: {planetName, population}} = starWars    
console.log(planetName, population);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let arrOne = [1, 2, 3]  
let arrTwo = [4, 5, 6] 
let arrThree = [...arrOne, ...arrTwo]
console.log(arrThree);  

// 7. Usa propagación para crear una copia de un array

let arrOneCopy = [...arrOne]
console.log(arrOneCopy);
// 8. Usa propagación para combinar dos objetos en uno nuevo

let person = {
    name : 'lala',
    lastName: 'lolo'
}
let person2 = {
    exp: 2,
    job: 'developer',
}


let newEmployee = {...person, ...person2}
console.log(newEmployee);

// 9. Usa propagación para crear una copia de un objeto

let newEmployeeCpy = {...newEmployee}

console.log(newEmployeeCpy);

// 10. Combina desestructuración y propagación

const {name, ...rest} = newEmployee

console.log(name, rest);

