"use strict";
(function () {
    // Basados en lo visto en el archivo ./objects.ts si queremos tener varios heroes instanciados en variables
    // para evitar repetir código en los tipos, podemos hacer uso de la palabra reservada type para definir
    // tipos personalizados, en este caso el tipo hero
    // Estos tipos son solo reglas o constraints que usa TS para validar la información, en el JS transpilado
    // no existe ninguna contraparte a los tipos
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
