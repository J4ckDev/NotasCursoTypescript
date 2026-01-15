function printToConsole(constructor: Function): void {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  return print ? printToConsole : () => {};
};

// Evitar que se realice una expansión al prototipo de un objeto
const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// function CheckValidPokemonId() {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     // console.log({ target, propertyKey, descriptor });
//     // Si en el decorador intervengo el descriptor.value, cambia el comportamiento de la función
//     // En este caso ya no saldría en la consola el mensaje de pokemon guardado en BD,
//     // sino que mostrará el nuevo mensaje Comportamiento cambiado
//     // descriptor.value = () => console.log("Comportamiento cambiado");
//     // Ahora usando el mismo descriptor.value se hará la validación de los IDs válidos

//     const originalMethod = descriptor.value;

//     descriptor.value = (id: number) => {
//       if (id < 1 || id > 1025) {
//         return console.error(
//           `Pokemon ID must be between 1 and 1025. Received ID ${id}`,
//         );
//       } else {
//         return originalMethod(id);
//       }
//     };
//   };
// }

// Versión simple del decorador de fábrica
function CheckValidPokemonId(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = (id: number) => {
    if (id < 1 || id > 1025) {
      return console.error(
        `Pokemon ID must be between 1 and 1025. Received ID ${id}`,
      );
    } else {
      return originalMethod(id);
    }
  };
}

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      set(this, value) {
        Object.defineProperty(this, propertyKey, {
          value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
  @readOnly()
  public publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @CheckValidPokemonId
  savePokemonToDB(id: number) {
    console.log(`Pokemon with id ${id} successfully saved`);
  }
}
