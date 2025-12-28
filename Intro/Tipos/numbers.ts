(() => {
  let avengers: number = 10;

  console.log(avengers);
  const villians: number = 20;

  if (avengers < villians) {
    console.log("Estamos en problemas");
  } else {
    console.log("Nos salvamos");
  }

  // tener en cuenta que NaN sgue siendo un número
  avengers = Number("123A");

  console.log({ avengers });
})();
