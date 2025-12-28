"use strict";
(function () {
    // Si no se define typescript  deduce que es un array de números number[]
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Aquí lo deduce como un array que puede tener números y strings (number | string)[]
    // const numbers2 = [1, "2", 3];
    // Aunque no es muy usual, también puedo definir múltiples tipos que espero dentro un array con el caracter pipe |
    var numbers2 = [1, "2", 3];
    // Permite la adición
    numbers2.push(4);
    numbers2.push("5");
    // Muestra un error porque es un booleano
    // numbers.push(true);
    console.log(numbers);
    console.log(numbers2);
    var villians = ["Omega Rojo", "Dormamu", "Duende verde"];
    villians.forEach(function (villian) { return console.log(villian.toUpperCase()); });
})();
