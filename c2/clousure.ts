// Definimos la función `creaSumador` con el tipo de su parámetro y el tipo de retorno
function creaSumador(x: number): (y: number) => number {
	console.log(`esta recibiendo x = ${x}`);
	// La función retornada también tiene sus parámetros y retorno tipados
	return function(y: number): number {
		console.log(`esta recibiendo y = ${y}`);
		return x + y;
	};
}

const sumaEnClusure = creaSumador(5); // crea una clusure con 5

// const sumaEnClusure2 = creaSumador(1); // crea una clusure con 1
console.log(sumaEnClusure(2)); // muestra 7



/*
// Ejemplo adicional convertido a TypeScript
function prefixAndSuffix(prefix: string): (suffix: string) => string {
    return function(suffix: string): string {
        return `${prefix} ${suffix}`;
    };
}
const addSuffix = prefixAndSuffix('Hi!, I\'m ');
console.log(addSuffix('John'));
*/
