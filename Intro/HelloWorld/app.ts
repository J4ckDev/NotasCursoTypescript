const msg: string = "Hello World!";

const hero = {
  name: "Ironman",
  age: 45,
};

hero.age = 50;

console.log(msg);
console.log(hero.age + 1);

function sayHello(msg: string) {
  console.log(msg);
}

(() => {
  const a: number = 10;
  console.log(a);
})();
