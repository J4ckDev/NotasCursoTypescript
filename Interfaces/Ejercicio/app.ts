(() => {
  // Crear interfaces
  interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelear(): void;
  }

  interface Guason {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }

  interface CiudadGotica {
    (ciudadanos: string[]): number;
  }

  interface DatosPersona {
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;
    imprimirBio(): void;
  }
  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  const conducirBatimovil = (auto: Auto): void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  };

  const batimovil: Auto = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
      console.log("...... gogogo!!!");
    },
  };

  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  const guason: Guason = {
    reir: true,
    comer: true,
    llorar: false,
  };

  const reir = (guason: Guason): void => {
    if (guason.reir) {
      console.log("JAJAJAJA");
    }
  };

  // Cree una interfaz para la siguiente funcion

  const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
    return ciudadanos.length;
  };

  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos

  /*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
  class Persona implements DatosPersona {
    constructor(
      public nombre: string,
      public edad: number,
      public sexo: string,
      public estadoCivil: string,
    ) {}

    public imprimirBio(): void {
      console.log(
        `${this.nombre} tiene ${this.edad} años, está ${this.estadoCivil} y es ${this.sexo}`,
      );
    }
  }
})();
