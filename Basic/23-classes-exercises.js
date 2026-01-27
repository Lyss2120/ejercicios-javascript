/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class myClass {
    constructor(personName,age){
        this.personName = personName
        this.age = age
    }
}

const myClassIntance = new myClass('lolo', 37)

// 2. Añade un método a la clase que utilice las propiedades


myClass.prototype.greet = function() {
  return `Hola, soy ${this.personName} y tengo ${this.age} años.`;
};
const myClassIntance2 = new myClass('nini', 7)

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(myClassIntance2.greet());

// 4. Añade un método estático a la primera clase

myClass.walk = function() {
  return `caminando.`;
};

// 5. Haz uso del método estático

console.log(myClass.walk());

// 6. Crea una clase que haga uso de herencia

class Person extends myClass {
    constructor(personName, age, job){
        super(personName, age)
        this.job = job

    }
     work() {
        console.log("trabajando")
    }
}

const Arquitecto = new Person('Osvaldo',45)
console.log(Arquitecto.work());


// 7. Crea una clase que haga uso de getters y setters

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 