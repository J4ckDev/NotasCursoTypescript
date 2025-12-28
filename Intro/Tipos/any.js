"use strict";
// Debe evitarse el any, pero si aparece se puede trabajar de la siguiente forma.
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = "Dr Strange";
    // Para acceder a las propiedades puedo hacer un cast
    console.log(avenger.charAt(0));
    avenger = 150.23;
    // Otra forma de hacer un cast
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
