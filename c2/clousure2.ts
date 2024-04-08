// Definimos una interfaz para el objeto que retorna la función `contador`
interface ContadorEjC2 {
    incrementar: () => void;
    obtenerValor: () => number;
}

function contador(): ContadorEjC2 {
    let count = 0;
    return {
        incrementar: function () {
            count++;
        },
        obtenerValor: function () {
            return count;
        },
    };
}

const miContador: ContadorEjC2 = contador();
miContador.incrementar();
console.log(miContador.obtenerValor()); // Output: 1

/*
En este ejemplo, la función contador retorna un objeto que tiene dos métodos:
 incrementar y obtenerValor.
 La variable count se declara dentro de la función contador, 
 por lo que solo es accesible a través de los métodos del objeto que se retorna. 
 Al llamar miContador.incrementar() se accede a la variable count 
 a través de la closure y se incrementa su valor. Después, 
 al llamar miContador.obtenerValor() se devuelve el valor actual de la variable count.
*/
