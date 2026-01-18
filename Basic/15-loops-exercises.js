/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let number of numbers) {
    console.log(number)
}

for (let i = 1; i <= 20; i++) {
    console.log(`Hola ${i}`)
}


// // 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// let i=0;
// while (i < 100) {
//     i++
//     console.log(i);
// }

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let number = 0;
while (number <= 50) {
    number++
    if (number % 2 == 0) {
        console.log(`pair number: ${number}`)
    }

}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const nameArray = ['Lyn', 'Lys', 'franzuá', 'Marlis']

for (let name of nameArray) {
    console.log(name)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const vocales = ['a', 'e', 'i', 'o', 'u']
const str = 'estrella'
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        count++
    }

}

for (let letra of str) {
    if (vocales.includes(letra)) {
        count++
    }
}

console.log(`count: ${count}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numbers2 = [1, 2, 3]
for (let number of numbers2) {
    console.log(`multiplicación: ${number} y ${number + 1} ${number * (number + 1)}`)
}

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i}: ${5 * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto

for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci 0+1=1 1+1=2 1+2=3 2+3=5 3+5=8 5+8=13 8+13=21
// 0+1=1 1+1=2 1+2=3 2+3=5 3+5=8 5+8=13 8+13=21
// f+f2=res res+f2=res f2+res=res  f

const fib = [0, 1];

for (let i = 2; i <= 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    console.log(`fibonacci ${fib[i - 1]} + ${fib[i - 2]} = ${fib[i] = fib[i - 1] + fib[i - 2]}`);

}


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10 

const num2 = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        num2.push(numbers[i])
    }
}

console.log(num2);


