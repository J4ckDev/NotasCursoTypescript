"use strict";
(function () {
    var _a;
    var batman = "Batman";
    var linternaVerde = "Linterna verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    console.log("I'm ".concat(batman));
    console.log(linternaVerde.toUpperCase());
    // Para typescript no es un error porque espera que siga siendo string
    console.log(batman[10].toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente");
})();
