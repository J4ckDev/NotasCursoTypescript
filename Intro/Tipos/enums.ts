(() => {
  // Los enums o enumeraciones son un tipo de dato propio de typescript,
  // el cuál permite definir valores numéricos posibles para una variable,
  // evitando así valores inesperados

  // Si no se asignan números empieza desde 0, y si unos si tienen,
  // los que tengan le suman en uno al valor del anterior
  //
  // Si se asignan números ese será el valor que mantendrá
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
    max2,
  }

  let currentAudio = AudioLevel.max2;

  console.log(currentAudio);

  console.log(AudioLevel);
})();
