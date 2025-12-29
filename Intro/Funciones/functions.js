"use strict";
(function () {
    var hero = "Flash";
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return "Batiseñal activada!";
    };
    console.log(typeof activateBatisignal);
    // Aquí typescript deduce que heroName será de tipo string
    var heroName = returnName();
})();
