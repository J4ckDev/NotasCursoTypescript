"use strict";
var msg = "Hello World!";
var hero = {
    name: "Ironman",
    age: 45,
};
hero.age = 50;
console.log(msg);
console.log(hero.age + 1);
function sayHello(msg) {
    console.log(msg);
}
(function () {
    var a = 10;
    console.log(a);
})();
