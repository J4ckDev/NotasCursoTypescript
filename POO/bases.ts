(() => {
  // Forma larga de declarar clases
  // class Avenger {
  //   private name: string = 'No name';
  //   private team: string;
  //   public realName?: string; // El ? representa un atributo opcional
  //   static avgAge: number = 35;

  //   constructor(name: string, team: string, realName?: string) {
  //     this.name = name;
  //     this.team = team;
  //     this.realName = realName;
  //   }
  // }

  // Forma corta
  class Avenger {
    static avgAge: number = 35;

    constructor(
      private name: string,
      private team: string,
      public realName?: string,
    ) {}

    bio(): string {
      return `${this.name} (${this.team})`;
    }

    static getClassName() {
      return this.name;
    }
  }

  const antman: Avenger = new Avenger(
    "Antman",
    "Capitán America",
    "Scott Lang",
  );

  // console.log(antman.name); // Esto funciona en JS porque no existe una forma en ES6 para declara métodos o atributos privados.
  console.log(antman);

  console.log(antman.bio());

  console.log(Avenger.getClassName());
})();
