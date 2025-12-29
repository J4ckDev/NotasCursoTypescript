"use strict";
(function () {
    // Para definir un parámetro opcional se adiciona el caracter ? al final del nombre del parámetro de la variable
    // Esto es muy útil porque en Javascript por defecto todos los argumentos de una función son opcionales
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || "----");
    };
    var name = fullName("Tony");
    console.log({ name: name });
})();
