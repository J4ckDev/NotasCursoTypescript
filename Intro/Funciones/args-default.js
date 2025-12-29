"use strict";
(function () {
    // Parámetros obligatorios no pueden ir después de parámetros opcionales.
    // const fullName = (firstName: string, lastName?: string, upper: boolean): string => {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        var fullName = "".concat(firstName, " ").concat(lastName || "----");
        return upper ? fullName.toUpperCase() : fullName;
    };
    var name = fullName("Tony", "Stark", true);
    console.log({ name: name });
})();
