"use strict";
(function () {
    // Los rest parameters no pueden ser opcionales ...otherNames? -> Inválido
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
