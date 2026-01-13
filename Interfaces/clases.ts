(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  // Al usar las interfaces en una clase, esta funciona como un contrato que especifica
  // los atributos y métodos que se deben implementar. A diferencia de una clase abstracta
  // donde es posible definir también un contrato y definir en algunos casos ya métodos predefinidos,
  // la interfaz solo define que debe ingresar como parámetro y que debe salir, pero la implementación
  // dependería de cada clase.
  class Mutant implements Xmen, Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string,
    ) {}

    mutantPower(id: number): string {
      return this.name + " " + this.realName;
    }
  }
})();
