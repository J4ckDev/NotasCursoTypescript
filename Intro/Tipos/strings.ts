(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna verde";
  const volcanNegro: string = `Héroe: Volcan Negro`;

  console.log(`I'm ${batman}`);
  console.log(linternaVerde.toUpperCase());

  // Para typescript no es un error porque espera que siga siendo string
  console.log(batman[10].toUpperCase());

  console.log(batman[10]?.toUpperCase() || "No está presente");
})();
