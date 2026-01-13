import powers, { Power } from "../data/Powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
  ) {}

  get power(): string {
    return (
      powers.find((power) => power.id === this.powerId)?.desc ||
      "Power not found"
    );
  }
}

export const PI = 3.1416;
export const miNombre = "Fernando";
