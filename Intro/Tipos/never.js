"use strict";
(function () {
    // Never no es undefined o void.
    // El tipo never realmente lo que espera es que la función no termine exitosamente
    // En otras palabras se espera que se reviente la ejecución del código
    var error = function (message) {
        throw new Error(message);
    };
    // Si quiero que retorne un dato, pero también se espera un error entonces
    // se puede definir el tipo never y el otro tipo válido que esperaria
    var action = function () {
        if (false) {
            throw new Error("Error");
        }
        return true;
    };
    error("Tipo never");
})();
