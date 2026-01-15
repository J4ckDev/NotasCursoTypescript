// import { Hero } from "./classes/Hero"; // Importar una sola clase
// import { Hero as SuperHero } from "./classes/Hero"; // Alias de una clase

// import * as HeroClases from "./classes/Hero"; // Importar todas las clases de un archivo
// import {
//   printObject,
//   genericFunction,
//   genericFunctionArrow,
// } from "./generics/generics";
// import { Hero, Villain } from "./interfaces";
// // import { Hero } from "./interfaces/hero";
// // import { Villain } from "./interfaces/villain";
// import { getPokemon } from "./generics/get-pokemon";

// // console.log("Hola Mundo!");

// const ironman = new HeroClases.Hero("Iron Man", 1, 55);
// // const batman = new SuperHero("Batman", 1, 40);

// console.log(ironman);
// console.log(ironman.power);

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject("Hola Mundo");
// console.log(genericFunction(3.141618).toFixed(2));
// console.log(genericFunction("Hola mundo").toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());

// const deadpool = {
//   name: "Deadpool",
//   realName: "Wade Winston Wilson",
//   dangerLevel: 130,
// };

// console.log(genericFunctionArrow<Hero>(deadpool));
// console.log(genericFunctionArrow<Villain>(deadpool));

// getPokemon(1)
//   .then((pokemon) => console.log(pokemon.name))
//   .catch(console.error)
//   .finally(() => console.log("Fin de getPokemon"));

import { Pokemon } from "./decorators/Pokemon";

const charmander = new Pokemon("Charmander");

// (Pokemon.prototype as any).customName = "Pikachu"; // Ahora como se bloquea no puedo asignar nuevas propiedades

charmander.savePokemonToDB(5000);

// Si publicApi fuera private, aunque Typescript se queja cuando transpila a JS esto se aplica y es válido
// Por esa razón se hace el Decorador readOnly
// charmander.publicApi = "https//google.com";

console.log(charmander.publicApi);
