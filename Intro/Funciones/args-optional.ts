(() => {
  // Para definir un parámetro opcional se adiciona el caracter ? al final del nombre del parámetro de la variable
  // Esto es muy útil porque en Javascript por defecto todos los argumentos de una función son opcionales
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "----"}`;
  };

  const name = fullName("Tony");

  console.log({ name });
})();
