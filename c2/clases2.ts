class PersonaEj2 {
    nombre: string; // Añadimos una anotación de tipo para 'nombre'

    constructor(nombre: string) { // Añadimos anotación de tipo al parámetro del constructor
        this.nombre = nombre;
    }

    showName(): void { // Añadimos el tipo de retorno 'void' para indicar que este método no devuelve nada
        console.log(`Name = ${this.nombre}`);
    }

    mostrarQueHayEnThis(): void { // Añadimos el tipo de retorno 'void' aquí también
        console.log(`en this hay ${JSON.stringify(this)}`);
    }
}

const personaEj2 = new PersonaEj2("Robert"); // Usamos 'const' en lugar de 'var' para una mejor práctica de declaración de variables
personaEj2.showName();
personaEj2.mostrarQueHayEnThis();
