// El ejercicio consiste en declarar todos los tipos para cada objeto, en mi caso declararé todos los tipos al inicio de la función
(() => {
  // Declaración de tipos
  type Auto = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
  };

  type Villano = {
    nombre: string;
    edad: number | undefined;
    mutante: boolean;
  };

  type Mutante = {
    poder: string;
    estatura: number;
  };

  type UnidadMutante = {
    lider: boolean;
    miembros: string[];
  };

  // Objetos
  const batimovil: Auto = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
  };

  const bumblebee: Auto = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
      // El metodo disparar es opcional
      console.log("Disparando");
    },
  };

  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos: Villano[] = [
    {
      nombre: "Lex Luthor",
      edad: 54,
      mutante: false,
    },
    {
      nombre: "Erik Magnus Lehnsherr",
      edad: 49,
      mutante: true,
    },
    {
      nombre: "James Logan",
      edad: undefined,
      mutante: true,
    },
  ];

  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  const charles: Mutante = {
    poder: "psiquico",
    estatura: 1.78,
  };

  const apocalipsis: UnidadMutante = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
  };

  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: Mutante | UnidadMutante;

  mystique = charles;
  mystique = apocalipsis;
})();
