// En modo estricto no es posible definir que una variable
// puede ser de tipo null o undefined además del tipo de dato esperado
// Para evitar esto se puede poner en el tsconfig la propiedad strictNullChecks en false, aunque esto no es recomendable
(() => {
  let nada: undefined = undefined;

  // Se puede omitir la validacion indicando la posibilidad de undefined,
  // aunque igualmente no es recomendado
  let isActive: boolean | undefined = undefined;
  console.log(nada);
})();
