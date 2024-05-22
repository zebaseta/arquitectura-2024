// src/producer.ts
import Queue from 'bull';
import { ClientDto } from '../dtos/ClientDto'; 

// Crear una nueva cola
const myQueue = new Queue('myQueue', 'redis://127.0.0.1:6379'); 

// Añadir un trabajo a la cola
export const SendClient = async (client: ClientDto) => {
  const job = await myQueue.add({
    task: 'sendClient',
    details: {client}
  });

  console.log(`Job added with client ID: ${client.id}`);
}


