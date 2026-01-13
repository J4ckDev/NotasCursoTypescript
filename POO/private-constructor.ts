(() => {
  // Esto se usa para hacer el patrón singleton, que asegura una unica clase
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy la apocalipsis única");
      }

      return Apocalipsis.instance;
    }

    public changeName(newName: string): void {
      this.name = newName;
    }
  }

  // Cuando el constructor es privado no permite instanciar la clase de la forma clásica
  // const apocalipsis1 = new Apocalipsis("Soy Apocalipsis1... el único");
  // const apocalipsis2 = new Apocalipsis("Soy Apocalipsis1... el único");
  // const apocalipsis3 = new Apocalipsis("Soy Apocalipsis1... el único");
  //
  // En su lugar se hace lo siguiente:
  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName("Prueba");

  console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
