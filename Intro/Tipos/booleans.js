"use strict";
// En todos los archivos de Typescript para este ejercicio fue colocado dentro de funciones anónimas para evitar
// conflictos entre archivos que puedan tener variables con el mismo nombre
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman: isSuperman });
})();
