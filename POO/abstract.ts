(() => {
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string,
    ) {}

    public fullName(): void {
      console.log(`${this.name} (${this.realName})`);
    }
  }

  class Xmen extends Mutante {
    salvarMundo(): string {
      return "Mundo a salvo";
    }
  }
  class Villian extends Mutante {
    conquistarMundo(): string {
      return "Mundo conquistado";
    }
  }

  const wolverine: Mutante = new Xmen("Wolverine", "Logan");
  const magneto: Mutante = new Villian("Magento", "Magnus");

  const printName = (personaje: Mutante) => {
    console.log(personaje.realName);
  };

  printName(wolverine);
  printName(magneto);

  wolverine.fullName();
  magneto.fullName();
})();
