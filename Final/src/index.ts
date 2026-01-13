// import { Hero } from "./classes/Hero"; // Importar una sola clase
// import { Hero as SuperHero } from "./classes/Hero"; // Alias de una clase

import * as HeroClases from "./classes/Hero"; // Importar todas las clases de un archivo

console.log("Hola Mundo!");

const ironman = new HeroClases.Hero("Iron Man", 1, 55);
// const batman = new SuperHero("Batman", 1, 40);

console.log(ironman);
console.log(ironman.power);
