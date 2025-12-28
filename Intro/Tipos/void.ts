// void es para indicar que una función no retorna un valor
(() => {
  function callBatman(): void {
    return;
  }

  // Si retorno algo el transpilador se queja
  // const callSuperman = (): void => {
  //   return true;
  // };

  const a = callBatman();

  console.log(a);
})();
