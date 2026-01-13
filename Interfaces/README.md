# Interfaces

Las interfaces soy muy similares con los tipos declarados mediante la palabra clave `type`, la [diferencia](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces) radica en que las interfaces es posible expandirlas como si se hiciera una herencia de clase con la palabra reservada `extends` y que la declaración entre las interfaces y tipos cambia.

## Declaración de una interfaz vs la declaración de un tipo

En los siguientes fragmentos puede verse la diferencia en como se declara un tipo y una interfaz, pero su contenido en la especificación de tipos es similar.

```typescript
interface Hero {
  name: string;
  age?: number;
  powers: string[];
  getName?: () => string;
}
```

```typescript
type Hero = {
  name: string;
  age?: number;
  powers: string[];
  getName?: () => string;
};
```
