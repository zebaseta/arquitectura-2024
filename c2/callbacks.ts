// Definimos el tipo de la función callback para mayor claridad y restricción
type CallbackFunction = () => void;

function hacerAlgo(callback: CallbackFunction): void {
  console.log("Haciendo algo...");
  callback();
}

function mostrarMensaje(): void {
  console.log("El callback se ejecutó.");
}

hacerAlgo(mostrarMensaje);
