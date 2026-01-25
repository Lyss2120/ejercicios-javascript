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

for (const value in user){
    console.log(value, user[value],'USER');
}
Object.entries(user).forEach(([key, value]) => {
    console.log(key, value);
})
// 7. Crea un objeto anidado

const empleado = {
    name:'',
    age: 0,
    job:{
        cargo: '',
        tasks : '',
        exp: 0
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(empleado.job, 'propiedades anidadas');

// 9. Comprueba si los dos objetos creados son iguales

console.log(user === empleado);


// 10. Comprueba si dos propiedades diferentes son iguales

console.log(user.name=== user.nickName)
