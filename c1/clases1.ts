class PersonaEj1 {
    attrib:string = "Un valor por defecto"

    hablar(): void {
        console.log(`Blahhhhhhh`);
    }

    correr(): void {
        console.log(`run run`);
    }

    mostrarQueHayEnThis(): void {
        // En TypeScript, al igual que en JavaScript, convertir `this` directamente a string da como resultado "[object Object]".
        // Usaremos JSON.stringify para una mejor visualización, aunque podría fallar con referencias circulares.
        console.log(`en this hay ${JSON.stringify(this)}`);
    }
}

const personaEj1 = new PersonaEj1();

personaEj1.hablar();
personaEj1.correr();
personaEj1.mostrarQueHayEnThis();
