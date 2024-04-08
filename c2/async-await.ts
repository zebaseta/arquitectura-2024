async function operacionAsincronica(): Promise<void> {
  try {
    // Especificamos que `resultado` es de tipo `string` porque la promesa se resuelve con un string
    const resultado: string = await new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("La operación asincrónica se completó con éxito");
      }, 3000);
    });

    console.log(resultado);
  } catch (error) {
    console.error(error);
  }
}

operacionAsincronica();
