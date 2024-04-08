class Punto {
  x: number; // Añadimos anotaciones de tipo para `x`
  y: number; // Añadimos anotaciones de tipo para `y`

  constructor(x: number, y: number) { // Añadimos anotaciones de tipo para los parámetros del constructor
      this.x = x;
      this.y = y;
  }

  static distancia(a: Punto, b: Punto): number { // Añadimos anotaciones de tipo para los parámetros y el valor de retorno
      const dx = a.x - b.x;
      const dy = a.y - b.y;

      return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Punto(5, 5);
const p2 = new Punto(10, 10);

console.log(Punto.distancia(p1, p2)); // El resultado debería ser 7.0710678118654755
