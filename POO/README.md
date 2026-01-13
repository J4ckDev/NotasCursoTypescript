# Programación orientada a objetos en Typescript

Esto permite manejar todo lo relacionado a los conceptos de clases, métodos, herencia, etc. En Typescript existen mejores validaciones a diferencia de realizar POO en Javascript. [Más info aquí](https://www.typescriptlang.org/docs/handbook/2/classes.html)

## Modificadores de acceso

Los modificadores de acceso controlan la visibilidad y accesibilidad de sus atributos y métodos. En Typescript tenemos los isguientes:

- **private**: Restringe el acceso del atributo o método a que solo sea accedido por la instancia de la clase donde fue declarado.
- **public**: Permite que el atributo o método de la instancia de la clase sea accedido desde cualquier parte del programa. Si no se define un modificador, este será el modificador por defecto.
- **protected**: Restringe el acceso del atributo o método a la instancia de la clase donde es declarado y por las clases que hereden de la clase donde fue declarado el atributo o método.
- **static**: Permite que el atributo o método sea accedido desde cualquier parte del programa sin instanciar una clase.

## Creación de una clase

Para crear una clase debe usarse la palabra reservada `class` seguido del nombre de dicha clase, y también será necesario definir un constructor que procese los datos necesarios para inicializar los atributos cuando se instancie esa clase. El ejemplo de esta parte puede verse en el archivo [bases.ts](./bases.ts).

## Herencia

Luego de tener una clase con atributos y métodos base, puede crearse otra clase donde después del nombre se adiciona la palabra reservada `extends` seguida del nombre de la clase base de la cuál heredará sus atributos o métodos. El ejemplo de esta parte puede verse en el archivo [extends.ts](./extends.ts).

## Clase abstracta

Para declarar una clase abstracta se usa las palabras reservadas `abstract class` seguido del nombre de esa clase. Este tipo de clase no podrá ser instanciada, ya que funciona como un contrato que le indica a las clases que hereden de ella qué métodos deben implementar y qué metodos pueden usarse en común. El ejemplo de esta parte puede verse en el archivo [abstract.ts](./abstract.ts).

## Constructor privado

La utilidad de este constructor es principalmente para implementer el patrón singleton acompañado de atributos y métodos estáticos. El ejemplo de esta parte puede verse en el archivo [private-constructor.ts](./private-constructor.ts).
