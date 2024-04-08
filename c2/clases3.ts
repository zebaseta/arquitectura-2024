class AnimalEjemplo3 {
    alimentarse(): void { // Agregamos el tipo de retorno 'void' para indicar que este método no devuelve nada
        console.log("Alimentarse en animal");
    }
}

class PersonaEjemplo3 extends AnimalEjemplo3 {
    nombre: string; // Añadimos una anotación de tipo para 'nombre'

    constructor(nombre: string) { // Añadimos anotación de tipo al parámetro del constructor
        super(); // Llamamos al constructor de la clase base 'Animal'
        this.nombre = nombre;
    }

    showName(): void { // Añadimos el tipo de retorno 'void' para indicar que este método no devuelve nada
        console.log(`Name = ${this.nombre}`);
    }

    mostrarQueHayEnThis(): void { // Añadimos el tipo de retorno 'void' aquí también
        console.log(`en this hay ${JSON.stringify(this)}`);
    }

    alimentarse(): void { // Especificamos el tipo de retorno 'void' y sobreescribimos el método 'alimentarse'
        super.alimentarse(); // Llamamos al método 'alimentarse' de la clase base 'Animal'
        console.log("Alimentarse en persona");
    }
}

const personaEjemplo3 = new PersonaEjemplo3("Robert"); // Usamos 'const' en lugar de 'var' para una mejor práctica de declaración de variables

personaEjemplo3.mostrarQueHayEnThis();
personaEjemplo3.alimentarse();



