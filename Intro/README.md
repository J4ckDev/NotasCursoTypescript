# Introducción a Typescript

Aunque algunas veces se omite el uso de Typescript por la capa extra que adiciona a un proyecto, en muchos casos es ventajoso usarlo porque el código ya es más diciente sobre los tipos de datos usados, es más fácil el debugging y durante el desarrollo nos puede señalar errores en las variables que estamos usando.

## Instalación

Para instalar Typescript debemos seguir estos pasos:

1. Descargar e instalar [NodeJS](https://nodejs.org/es). También se puede usar un gestor de versiones de Node como [NVM](https://github.com/nvm-sh/nvm) para Linux o MacOS, o [NVM Windows](https://github.com/coreybutler/nvm-windows) para Windows OS.
2. Abrir un terminal o powershell.
3. Ejecutar el comando `npm install -g typescript`.
4. Si se instala correctamente al ejecutar el comando `tsc --version` mostrará la versión de Typescript instalada, en mi caso mostró `Version 5.9.3`. En caso de que muestre **No se reconoce el comando especificado**, cerrar y volver a abrir el terminal.

## Declaración de variables

Typescript identifica como fue declarada una variable, por lo cuál sin necesidad de ejecutar el código el IDE señala los errores. Un ejemplo de lo que ocurriría a continuación:

```typescript
const msg1 = "Hello World"; // Typescript automáticamente identifica que esta variable es inmutable.
msg1 = 5; // Como es una constante, señala el error de que no se puede cambiar su valor.
let msg2 = "Hello World"; // Typescript automáticamente deduce que la variable msg2 es de tipo String
msg2 = 2; // Como typescript espera string, señala el error de que no se puede asignar a tipo Number.
```

Ahora aunque Typescript puede deducir los tipos con base al valor inicializado, es preferible especificar su tipo de dato colocando dos puntos después de la variable y antes del igual que asigna el valor a la variable, así por ejemplo si una constante será de tipo string podemos declararla como `const msg: string = "Hello World"`.

## Tipos de datos

Typescript tiene como base todos los tipos de datos que tiene Javascript, tiene otros tipos de datos adicionales y también nos permite crear nuevos tipos. En la [documentación oficial](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) se encuentran todos los tipos y su detalle.

## Transpilación a Javascript

Como el navegador no entiende la sintaxis de Typescript es importante que al finalizar se ejecute el comando `tsc ubicacion/script.ts` para transpilar el código a Javascript, y ese archivo generado es el que importaríamos a un HTML, en la carpeta [HelloWorld](./HelloWorld) puede verse ese ejemplo.

### Archivo tsconfig

El archivo [tsconfig.js](https://aka.ms/tsconfig) permite gestionar las configuraciones que debería aplicar Typescript y también nos permite transpilar a Javascript todos los scripts que encuentre solo ejecutando el comando `tsc`. Para crear y tener una configuración base podemos ejecutar el comando `tsc --init`, que entre su contenido lo principal para tener activado sería lo siguiente:

```json
{
  "compilerOptions": {
    "module": "CommonJS", // Forma como debe gestionar los módulos
    "target": "ES5", // Versión a la cuál va a transpilar
    "strict": true // Modo estricto
  }
}
```

### Watch Mode

Este modo permite sean identificados los cambios que surjan en los script de Typescript y en vivo empieza a trasnpilar el código a Javascript, para lograr esto se ejecuta el comando `tcs --watch`
