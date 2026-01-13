export const printObject = (argument: any): void => {
  console.log(argument);
};
// El <T> marca que el mismo tipo de entrada es el de salida
// dentro de <> puede ir algo diferente a T, pero esa letra es
// la más usada para definir algo de tipo genérico
export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T): T => {
  return argument;
};
