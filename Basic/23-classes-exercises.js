/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

// class myClass {
//     constructor(personName, age) {
//         this.personName = personName
//         this.age = age
//     }
// }

// const myClassIntance = new myClass('lolo', 37)

// // 2. Añade un método a la clase que utilice las propiedades


// myClass.prototype.greet = function () {
//     return `Hola, soy ${this.personName} y tengo ${this.age} años.`;
// };
// const myClassIntance2 = new myClass('nini', 7)

// // 3. Muestra los valores de las propiedades e invoca a la función

// console.log(myClassIntance2.greet());

// // 4. Añade un método estático a la primera clase

// myClass.walk = function () {
//     return `caminando.`;
// };

// // 5. Haz uso del método estático

// console.log(myClass.walk());

// // 6. Crea una clase que haga uso de herencia

// class Person extends myClass {
//     constructor(personName, age, job) {
//         super(personName, age)
//         this.job = job

//     }
//     work() {
//         console.log("trabajando")
//     }
// }

// const Arquitecto = new Person('Osvaldo', 45)
// console.log(Arquitecto.work());


// 7. Crea una clase que haga uso de getters y setters

class Car {
    constructor(make, model, year, owner) {
        this.make = make,
            this.model = model,
            this.year = year,
            this.owner = owner
    }

    get owner() {
        return this.owner
    }
    set owner(name) {
        this.owner = name
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

class Car2 {
    #owner
    #model
    constructor(make, model, year, owner) {
        this.make = make,
            this.#model = model,
            this.year = year,
            this.#owner = owner
    }

    get owner() {
        return this.#owner
    }
    set owner(name) {
        this.#owner = name
    }
    run() {
        console.log("El carro corre")
    }
}
// Encapsulamiento nativo: A diferencia de la convención de guion bajo (_) usada anteriormente, el # aplica restricciones reales en tiempo de ejecución.

// 9. Utiliza los get y set y muestra sus valores

const myCar = new Car2('toyota', 'prius', 2015, 'Mario')

console.log(myCar.owner);


// 10. Sobrescribe un método de una clase que utilice herencia 

class Car4sale extends Car2 {
    constructor(make, model, year, owner, price, offers) {
        super(make, model, year, owner),
            this.make = make,
            this.model = model,
            this.year = year,
            this.owner = owner,
            this.price = price,
            this.offers = offers
    }
    run() {
        console.log(`the ${this.make} ${this.model}, is running`)

    }
}
const myCar4sale = new Car4sale('toyota', 'prius', 2015, 'Mario', 50000, 3)
myCar4sale.run()