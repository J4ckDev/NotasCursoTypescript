(() => {
  // Basados en lo visto en el archivo ./objects.ts si queremos tener varios heroes instanciados en variables
  // para evitar repetir código en los tipos, podemos hacer uso de la palabra reservada type para definir
  // tipos personalizados, en este caso el tipo hero
  // Estos tipos son solo reglas o constraints que usa TS para validar la información, en el JS transpilado
  // no existe ninguna contraparte a los tipos

  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "Viajar en el tiempo"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    powers: ["Super fuerza", "Volar"],
    getName() {
      return this.name;
    },
  };
})();
