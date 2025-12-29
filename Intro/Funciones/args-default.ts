(() => {
  // Parámetros obligatorios no pueden ir después de parámetros opcionales.
  // const fullName = (firstName: string, lastName?: string, upper: boolean): string => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false,
  ): string => {
    const fullName = `${firstName} ${lastName || "----"}`;
    return upper ? fullName.toUpperCase() : fullName;
  };

  const name = fullName("Tony", "Stark", true);

  console.log({ name });
})();
