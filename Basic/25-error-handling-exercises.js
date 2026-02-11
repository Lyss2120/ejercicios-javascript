/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

// let age = 55

const ageCheck = () => {
    try {
        console.log(age);
    }
    catch (err) {
        console.log('ha ocurrido un error: ', err.message);
    }
}
ageCheck()

// 2. Captura ()una excepción utilizando try-catch y finally

function loquesea() {
    try {
        console.log(age);
    }
    catch (err) {
        console.log('ha ocurrido un error en loquesea: ', err.message);
    }
    finally {
        console.log('has ingresado tu edad?');
    }
}
loquesea()
// 3. Lanza una excepción genérica

const saludo = (firstName) => {
    if (firstName === '') {
        throw new Error("no ha ingresado un nombre para saludo")
    };
    return firstName
}
try {
    saludo('')
} catch (error) {
    console.log(error.message);

}
const salu2 = (firstName, lastName) => {
    if (typeof (firstName) !== 'string' || typeof (lastName) !== 'string') {
        // throw new TypeError("debe ingresar un string")
        throw new TypeError("salu2 debe ingresar un string")
    }
    if (firstName.length >= 10 || lastName.length >= 10) {
        throw new myError('debe ingresar un nombre y apellido de menos de 10 caracteres', firstName, lastName)
    }
    return `Bienvenido ${firstName} ${lastName}`
}

// try {
//     console.log(salu2(4,7));
// } catch (error) {
//     if (error instanceof TypeError) {
//         console.log('ha ocurrido un error de tipo:', error.message);

//     }
// }
// 4. Crea una excepción personalizada

class myError extends Error {
    constructor(message, firstName, lastName) {
        super(message)
        this.firstName = firstName
        this.lastName = lastName
    }
    identifyUser() {
        console.log('el usuario ingresado es: ', this.firstName, this.lastName);
    }
}

// 5. Lanza una excepción personalizada

try {
    console.log(salu2('Mario', 'Gonzalez'));
    console.log(salu2('Marianellaaaa', 'Gonzalezzzzzz'));

} catch (error) {
    console.log('se ha producido un error personalizado: ', error.message);
    error.identifyUser()
}


// 6. Lanza varias excepciones según una lógica definida

const checkLicense = (license) => {
    try {
        if (license === 0) {
            throw new Error('debe ingresar una licencia superior a 1')
        }
        // if (typeof license !== 'number') {
        //     throw new TypeError('debe ingresar un dato tipo número')
        // }
        if (!Number.isInteger(license)) {
            throw new TypeError('debe ingresar un número entero')
        }
        if (license > 4) {
            throw new RangeError('debe ingresar una licencia entre 1 y 4')
        }
        if (!license) {
            throw new ReferenceError('debe ingresar una licencia')
        }
        else {
            return `licencia tipo ${license} ingresada exitosamente`
        }
    }
    catch (error) {
        console.log(`se ha producido un ${error.name} en checkLicense: ${error.message}`);
    }
}
console.log(checkLicense('3'))


// 7. Captura varias excepciones en un mismo try-catch

function mult(num, num2) {
    if (!Number.isInteger(num) || !Number.isInteger(num2)) {
        throw new TypeError('debe ingresar números enteros')
    }
    if (num === 0 || num2 === 0) {
        throw new RangeError('la operación mult sólo recibe números mayores a 0')
    } else return num * num2
}

try {
    console.log(mult(5, 5))
    console.log(mult(0, 0))
    console.log(mult(5.5, 5))
} catch (error) {
    if (error instanceof RangeError) {
        console.log(`se ha producido un ${error.name} en mult: ${error.message}`);
    }
    if (error instanceof TypeError) {
        console.log(`se ha producido un error ${error.name} en mult: ${error.message}`);
    }
    // if (error instanceof error) {
    //     console.log(`se ha producido un error ${error.name} en mult: ${error.message}`);
    // }
}


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const transformToFloat = (num) => {
    try {
        return parseFloat(num)
    } catch (error) {
        console.log(`se ha producido un error ${error.name} en transformToFloat: ${error.message}`);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

const myObj = { name: 'mario', lastName: 'gonzalez' }
const checkProp = (obj) => {
    if (obj.age) {
        return obj.age
    } else { throw new noPropError('No ha ingresado la edad del usuario') }

}

class noPropError extends Error {
    constructor(message) {
        super(message)
    }
}

try { checkProp(myObj) }
catch (err) {
    console.log('error personalizado:',err.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10