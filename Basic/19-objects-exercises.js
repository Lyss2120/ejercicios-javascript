/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let user = {
    nickName :'nana',
    age: 75 ,
    password : 'jgjgjgj'
}

// 2. Accede y muestra su valor

console.log(user.nickName);

// 3. Agrega una nueva propiedad

user.name= 'Hortencia'

// 4. Elimina una de las 3 primeras propiedades

delete user.age

// 5. Agrega una función e invócala

user.log = (name) =>{ console.log(`hola mi nombre es ${name}`);
}
user.log('Hortencia')
console.log(user);

// 6. Itera las propiedades del objeto

// 7. Crea un objeto anidado

// 8. Accede y muestra el valor de las propiedades anidadas

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales