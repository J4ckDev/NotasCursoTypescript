"use strict";
(function () {
    var batman = "Bruce";
    var superman = "Clark";
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ["Lex Lutor", 5, true];
    var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    var fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    var fuerzaFlash = fuerza.flash;
    var fuerzaSuperman = fuerza.superman;
    var fuerzaBatman = fuerza.batman;
    var fuerzaAcuaman = fuerza.acuaman;
    console.log(fuerzaFlash);
    console.log(fuerzaSuperman);
    console.log(fuerzaBatman);
    console.log(fuerzaAcuaman);
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    var poder = "100";
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    function sumar(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = true; }
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(", ");
    };
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
(function () {
    var batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            console.log("Disparando");
        },
    };
    var villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    var charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        var fullName = "".concat(firstName, " ").concat(lastName || "----");
        return upper ? fullName.toUpperCase() : fullName;
    };
    var name = fullName("Tony", "Stark", true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "----");
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName("Tony", "Stark");
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var otherNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            otherNames[_i - 1] = arguments[_i];
        }
        var otherNamesProcessed = otherNames.length > 0 ? " ".concat(otherNames.join(" ")) : "";
        return firstName + otherNamesProcessed;
    };
    var superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman: superman });
})();
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo está salvado!"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = "Flash";
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
})();
var msg = "Hello World!";
var hero = {
    name: "Ironman",
    age: 45,
};
hero.age = 50;
console.log(msg);
console.log(hero.age + 1);
function sayHello(msg) {
    console.log(msg);
}
(function () {
    var a = 10;
    console.log(a);
})();
(function () {
    var actualHero = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    actualHero = {
        name: "Clark Kent",
        powers: ["Super fuerza", "Volar"],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    var superman = {
        name: "Clark Kent",
        powers: ["Super fuerza", "Volar"],
        getName: function () {
            return this.name;
        },
    };
})();
(function () {
    var myCustomVariable = "Jonathan";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce Banner",
        age: 43,
        powers: ["Super fuerza"],
    };
    console.log(typeof myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = "Dr Strange";
    console.log(avenger.charAt(0));
    avenger = 150.23;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var numbers2 = [1, "2", 3];
    numbers2.push(4);
    numbers2.push("5");
    console.log(numbers);
    console.log(numbers2);
    var villians = ["Omega Rojo", "Dormamu", "Duende verde"];
    villians.forEach(function (villian) { return console.log(villian.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
        AudioLevel[AudioLevel["max2"] = 11] = "max2";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max2;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    var action = function () {
        if (false) {
            throw new Error("Error");
        }
        return true;
    };
    error("Tipo never");
})();
(function () {
    var nada = undefined;
    var isActive = undefined;
    console.log(nada);
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("123A");
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = "Batman";
    var linternaVerde = "Linterna verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    console.log("I'm ".concat(batman));
    console.log(linternaVerde.toUpperCase());
    console.log(batman[10].toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente");
})();
(function () {
    var hero = ["Dr Strange", 100, true];
    hero[0] = "Ironman";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map