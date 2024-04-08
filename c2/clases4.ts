// Convertimos la función constructora en una clase base
class ConstruirConNombre {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }
}

// `Animal` hereda de `ConstruirConNombre`
class Animal extends ConstruirConNombre {
    alimentarse(): void {
        console.log("Alimentarse en animal");
    }
}

// `Persona` hereda de `Animal`
class Persona extends Animal {
    mostrarQueHayEnThis(): void {
        console.log(`en this hay ${JSON.stringify(this)}`);
        // Mostrar `this` directamente en la consola dará una representación más legible en entornos de desarrollo
        console.log(this);
    }
}

// Crear una instancia de `Persona`
const p = new Persona("Robert");

// Llamar al método `mostrarQueHayEnThis`
p.mostrarQueHayEnThis();
