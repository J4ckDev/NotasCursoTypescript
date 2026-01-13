(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

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
