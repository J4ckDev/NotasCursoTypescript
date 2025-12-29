(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatisignal = (): string => {
    return "Batiseñal activada!";
  };

  console.log(typeof activateBatisignal);

  // Aquí typescript deduce que heroName será de tipo string
  const heroName = returnName();
})();
