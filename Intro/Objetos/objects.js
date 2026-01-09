"use strict";
(function () {
    // Typescript deduce los tipos de dato de cada propiedad para definir un tipo en caso de no recibir indicaciones
    // let actualHero = {
    //   name: "Barry Allen",
    //   age: 24,
    //   powers: ["Super velocidad", "Viajar en el tiempo"],
    // };
    // Ahora para definir un tipo explícitamente, se maneja la sintaxis variable:{clave: tipo}
    // Adicionalmente se pueden definir propiedades opcionales con el caracter ?
    var actualHero = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"],
    };
    // Si intento asignar la variable actualHero a otro objeto, typescript no me va a dejar porque
    // anteriormente ya se definió el contenido que debería tener ese objeto
    // actualHero = {
    //   name2: "otro nombre",
    // };
    // Si intento asignar un objeto con al menos una propiedad que si existe en el objeto inicial,
    // pero sin incluir el resto me va a marcar un error de que faltan elementos.
    // actualHero = {
    //   name: "Clark Kent",
    // };
    // Para asignar a otro objeto la variable actualHero, debo cambiar todos los elementos con los tipos que
    // infirió typescript inicialmente
    // actualHero = {
    //   name: "Clark Kent",
    //   age: 30,
    //   powers: ["Super fuerza", "Volar"]
    // };
    actualHero = {
        name: "Clark Kent",
        powers: ["Super fuerza", "Volar"],
        getName: function () {
            return this.name;
        },
    };
})();
