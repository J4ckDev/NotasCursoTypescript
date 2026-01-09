(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Jonathan";
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Bruce Banner",
    age: 43,
    powers: ["Super fuerza"],
  };
  // En JS se mostrará como tipo Objeto y no como tipo Hero
  console.log(typeof myCustomVariable);
})();
