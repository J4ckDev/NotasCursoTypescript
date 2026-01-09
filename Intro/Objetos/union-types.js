"use strict";
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
    // En JS se mostrará como tipo Objeto y no como tipo Hero
    console.log(typeof myCustomVariable);
})();
