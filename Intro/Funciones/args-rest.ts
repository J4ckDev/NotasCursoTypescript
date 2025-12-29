(() => {
  // Los rest parameters no pueden ser opcionales ...otherNames? -> Inválido
  const fullName = (firstName: string, ...otherNames: string[]): string => {
    const otherNamesProcessed =
      otherNames.length > 0 ? ` ${otherNames.join(" ")}` : "";
    return firstName + otherNamesProcessed;
  };

  const superman = fullName("Clark", "Joseph", "Kent");

  console.log({ superman });
})();
