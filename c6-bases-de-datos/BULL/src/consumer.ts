// src/consumer.ts
import Queue from 'bull';

// Conectarse a la misma cola que el productor
const myQueue = new Queue('myQueue', 'redis://127.0.0.1:6379');

// Procesar los trabajos en la cola
myQueue.process(async (job, done) => {
  console.log(`Processing job ${job.id}:`, job.data);

  // Aquí iría la lógica para manejar el trabajo, por ejemplo, enviar un email.
  // ...

  done(); // Indica que el trabajo ha sido completado
});

myQueue.on('completed', (job) => {
  console.log(`Job ${job.id} has been completed`);
});

myQueue.on('failed', (job, err) => {
  console.log(`Job ${job.id} failed with error ${err.message}`);
});
