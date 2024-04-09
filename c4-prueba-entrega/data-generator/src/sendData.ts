import axios from 'axios';
import { CustomData } from './data-structure/CustomData'

const faker = require('faker'); // o import faker from 'faker';


const sendData = async () => {
 
    const randomWords = Array.from({ length: 3}, () => faker.random.word());
    for (const word of randomWords) {
      try {
        let dataToProcess: CustomData = {data: word}
        const response = await axios.post('http://localhost:3000/words', dataToProcess);
        console.log('Data sent successfully:', response.data);
      } catch (error) {
        console.error('Error with word:', word);
        if (axios.isAxiosError(error)) {
          if (error.response) {// status != 2xx
            console.error('Error response data:', error.response.data);
            console.error('Error response status:', error.response.status);
          } else if (error.request) {// without response (timeout            
            console.error('Error request:', error.request);
          } else { // other error                        
            console.error('Error message:', error.message);
          }
        } else { // error without axios          
          console.error('Error:', error);
        }
      }
    }  
};

sendData();
