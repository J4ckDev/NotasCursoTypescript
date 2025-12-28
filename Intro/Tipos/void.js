"use strict";
// void es para indicar que una función no retorna un valor
(function () {
    function callBatman() {
        return;
    }
    // Si retorno algo el transpilador se queja
    // const callSuperman = (): void => {
    //   return true;
    // };
    var a = callBatman();
    console.log(a);
})();
