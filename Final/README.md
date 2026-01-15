# Secciones finales del curso

En este proyecto se muestra el manejo de importaciones, exportaciones, el uso de generics y decoradores.

## Exportaciones e importaciones

En este proyecto es posible ver el manejo de las exportaciones por defecto y por nombre.

## Funciones genéricas

Una función genérica permite recibir cualquier tipo de dato, pero también es posible indicarle a Typescript que valor retorna dicha función basado en su entrada, de esta forma nos aseguramos que al momento de usar la función sepamos que tipos de dato podríamos esperar como respuesta.

## Decoradores

Un decorador es una función que se utiliza para añadir, expandir o restringir funcionalidades a una clase, una función o una propiedad. Originalmente los decoradores fueron creados para hacer el código más fácil de leer. En Typescript se puede encontrar más información sobre este tema [aquí](https://www.typescriptlang.org/docs/handbook/decorators.html).

Para que esto funcione en el archivo `tsconfig.json` debe habilitarse la funcionalidad con `"experimentalDecorators": true`. Aunque sigue experimental, en este momento es algo estable ya que frameworks como Angular y NestJS utilizan esta funcionalidad para proyectos de producción.

Existen los decoradores "simples" y los decoradores de fábrica (Decorator factories), el primero es la función que ejecuta una acción y el segundo es también una función que basado en una serie de condiciones, podría retornar la función correspondiente a ejecutar.

- **Decorador "simple":** El siguiente ejemplo se utiliza colocando `@printToConsole` y lo que hará es imprimir en consola el objeto al que se relacione.

  ```typescript
  function printToConsole(target: Function): void {
    console.log(target);
  }
  ```

- **Decorador de fábrica:** El siguiente ejemplo se utiliza colocando `@printToConsoleConditional()` o `@printToConsoleConditional(true)`, y lo que hará es que en caso de tener el valor en `true` imprimirá en consola el objeto al que se relacione usando la función definida como decorador simple; en caso contrario no hará nada.

  ```typescript
  const printToConsoleConditional = (print: boolean = false): Function => {
    return print ? printToConsole : () => {};
  };
  ```

### Decorador de clases

Estos decoradores son los más sencillos de configurar y se ejecutan al momento de la transpilación del código. Se definen antes de la declaración de una clase. Ejemplo usando los decoradores del inicio

```typescript
@printToConsole
class Something {}

@printToConsoleConditional()
class OtherThing {}
```

### Decorador de métodos

Estos decoradores (simple o de fábrica) funcionan igual que los de una clase, con la diferencia que pueden recibir un segundo parámetro que es el `propertyKey` o nombre de la función, y un tercer parámetro `descriptor` que describe lo que hace o ejecuta la función. Este último parámetro puede modificarse para por ejemplo realizar una validación antes de ejecutar la función original.

### Decorador de propiedades

Estos decoradores (simple o de fábrica) funcionan igual que los de una clase, con la diferencia que pueden recibir un segundo parámetro que es el `propertyKey` o nombre de la propiedad. También se puede intervenir el comportamiento de dicha propiedad o para adicionar metadatos.

## Ejecución del proyecto

Los pasos para levantar este proyecto son los siguientes:

1. Después de descargar el código ejecutar el comando `npm install`, de esta forma se instalarán las dependencias requeridas para su ejecución.
2. Cuando termine de instalar los node_modules, el proyecto puede ejecutarse con el comando `npm start`.

**Nota:** Por defecto, el puerto configurado es el `8081`, pero si necesitan cambiarlo porque ya está en uso, deben abrir el archivo `package.json` y en la sección de `scripts` verán la instrucción que levanta el entorno de desarrollo `"start": "webpack serve --mode development --open --port=8081"`, simplemente cambian el puerto por el que ustedes necesiten y guardan los cambios.
