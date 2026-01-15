# Trabajando con librerías no escritas en Typescript

Para este ejemplo vamos a trabajar con la librería para hacer servidores con NodeJS llamada [Express](https://github.com/expressjs/express), ya que esta librería fue escrita enteramente en Javascript, por lo cual es perfecta para ver como podríamos trabajar usando Typescript a pesar de que esta librería no funciona con eso.

Para lograr esto se usan paquetes de definicion que contienen archivos `index.d.ts` donde internamente estan todas las definiciones de los métodos y propiedades que un objeto o librería puede tener, lo cuál permite que durante el desarrollo con Typescript tengamos acceso a las definiciones, ya que al compilar funciona la transpilación. Para este caso concreto se usó el comando `npm install --save-dev @types/express`
