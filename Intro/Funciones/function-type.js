"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo está salvado!"; };
    // Las siguientes asignaciones se pueden hacer porque typescript a myFunction lo infiere como tipo any
    // let myFunction;
    // Cuando le adiciono el tipo Function, la asignación a un número no es válida pero acepta todas las asignaciones a funciones.
    // let myFunction: Function;
    // Ahora si solo quiero que myFunction funcione solo con la asignación de addNumber o con funciones que reciben 2 números y
    // retornan un número, el tipo queda de la siguiente forma
    // let myFunction: (y: number, z: number) => number;
    // Para aceptar solo la función greet o funciones que reciban solo un string y retornen un string, quedaría de la siguiente forma:
    // let myFunction: (y: string) => string;
    // Para aceptar solo funciones que no reciben parámetros y retornan un string
    var myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // Typescript infiere los tipos para cada función
    // myFunction = addNumber;
    // console.log(myFunction(1, 2));
    // myFunction = greet;
    // console.log(myFunction("Jonathan"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
