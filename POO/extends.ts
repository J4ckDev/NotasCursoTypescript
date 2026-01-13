(() => {
  class Avenger {
    constructor(
      public name: string,
      public realName: string,
    ) {
      console.log("Constructor Avenger llamado!!");
    }

    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean,
    ) {
      super(name, realName);
      console.log("Constructor Xmen llamado");
    }

    get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe tener mínimo 3 caracteres");
      }
      this.name = name;
    }

    public getFullNameFromXmen(): void {
      return console.log(super.getFullname());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  console.log(wolverine);
  // wolverine.getFullNameFromXmen();
  console.log(wolverine.fullName); // Uso del getter
  wolverine.fullName = "Jonathan"; // Uso del setter
  console.log(wolverine.fullName);
})();
