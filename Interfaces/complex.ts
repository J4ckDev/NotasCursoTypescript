(() => {
  // Aunque esto es válido, si una interfaz llega a tener muchos niveles en algún momento puede ser ilegible
  // // por lo que es recomendado separar en varias interfaces cada nivel.
  // interface Client {
  //   name: string;
  //   age?: number;
  //   address: {
  //     id: number;
  //     zip: string;
  //     city: string;
  //   };
  // }

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(): string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Jonathan",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
    getFullAddress() {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Martha",
    age: 30,
    address: {
      id: 126,
      zip: "K2S U2A",
      city: "Toronto",
    },
    getFullAddress() {
      return this.address.city;
    },
  };
})();
