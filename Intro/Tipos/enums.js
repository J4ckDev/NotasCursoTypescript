"use strict";
(function () {
    // Los enums o enumeraciones son un tipo de dato propio de typescript,
    // el cuál permite definir valores numéricos posibles para una variable,
    // evitando así valores inesperados
    // Si no se asignan números empieza desde 0, y si unos si tienen,
    // los que tengan le suman en uno al valor del anterior
    //
    // Si se asignan números ese será el valor que mantendrá
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
        AudioLevel[AudioLevel["max2"] = 11] = "max2";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max2;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
