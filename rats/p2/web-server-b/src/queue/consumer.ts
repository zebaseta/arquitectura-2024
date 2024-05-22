import Queue from 'bull';
import { ClientDto } from '../dtos/clientDto';
import * as clientsService from '../services/clientsService';

export const myQueue = new Queue('myQueue', 'redis://127.0.0.1:6379'); 


export const startQueueProcessing = () => {
    myQueue.process(async (job) => {
        const { task, details } = job.data ;

        if (task === 'sendClient') {
            await processSendClient(details.client);
        } else {
            console.log('Unknown task:', task);
        }
    });

    console.log('Consumer is running...');
};

const processSendClient = async (client: ClientDto) => {
    console.log('Processing client:', client);    
    clientsService.createClient(client)
};
