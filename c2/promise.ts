const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("La operación asincrónica se completó con éxito");
  }, 3000);
});

promise
  .then((message: string) => { // Añadimos anotación de tipo `string` al parámetro `message`
    console.log(message);
  })
  .catch((error: any) => { // `error` podría ser de cualquier tipo, así que usamos `any`
    console.error(error);
  });
