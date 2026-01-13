"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark Kent",
        powers: ["Super fuerza", "Volar"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + " " + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: "Jonathan",
        age: 25,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Ottawa",
        },
        getFullAddress() {
            return this.address.city;
        },
    };
    const client2 = {
        name: "Martha",
        age: 30,
        address: {
            id: 126,
            zip: "K2S U2A",
            city: "Toronto",
        },
        getFullAddress() {
            return this.address.city;
        },
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return a + b;
    };
})();
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        },
    };
    const guason = {
        reir: true,
        comer: true,
        llorar: false,
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        constructor(nombre, edad, sexo, estadoCivil) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.estadoCivil = estadoCivil;
        }
        imprimirBio() {
            console.log(`${this.nombre} tiene ${this.edad} años, está ${this.estadoCivil} y es ${this.sexo}`);
        }
    }
})();
//# sourceMappingURL=app.js.map