// Debe evitarse el any, pero si aparece se puede trabajar de la siguiente forma.
(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Dr Strange";
  // Para acceder a las propiedades puedo hacer un cast
  console.log((avenger as string).charAt(0));

  avenger = 150.23;
  // Otra forma de hacer un cast
  console.log(<number>avenger.toFixed(2));

  console.log(exists);
  console.log(power);
})();
