"use strict";
(function () {
    // Aunque las llaman tuplas, pueden definirse más de 2 elementos de diferente tipo y en el orden especificado
    var hero = ["Dr Strange", 100, true];
    // Áquí marca el error porque la primera posición espera un string y la segunda un number
    // En la transpilación de Javascript no ocurría ningun error
    // hero[0] = 50;
    // hero[1] = "Ironman";
    hero[0] = "Ironman";
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
