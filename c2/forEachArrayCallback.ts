let array = [1, 2, 3, 4, 5];

array.forEach((valor, indice) => {
  setTimeout(() => { // Operación asíncrona simulada
    console.log(`Elemento en índice ${indice}: ${valor}`);
  }, 1000);
});

console.log("Este mensaje se muestra después de iniciar los setTimeout, pero antes de que se ejecuten.");
