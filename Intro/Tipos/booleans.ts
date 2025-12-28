// En todos los archivos de Typescript para este ejercicio fue colocado dentro de funciones anónimas para evitar
// conflictos entre archivos que puedan tener variables con el mismo nombre
(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;

  isSuperman = isBatman ? true : false;

  console.log({ isSuperman });
})();
