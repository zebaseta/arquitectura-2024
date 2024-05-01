// src/producer.ts
import Queue from 'bull';

// Crear una nueva cola
const myQueue = new Queue('myQueue', 'redis://127.0.0.1:6379');

// Añadir un trabajo a la cola
const addJobToQueue = async () => {
  const job = await myQueue.add({
    task: 'sendEmail',
    details: { email: 'user@example.com', content: 'Hello, Bull!' }
  });

  console.log(`Job added with ID: ${job.id}`);
}

addJobToQueue();
