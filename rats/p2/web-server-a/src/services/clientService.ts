import { Sequelize, Op } from 'sequelize';
import { Client } from '../data-access/Client';
import { ClientDto } from '../dtos/ClientDto';
import { SendClient} from '../queue/producer';
import  RedisCache from  '../cache/redis';

export const findClientById = async (id: number) => {
  return await Client.findByPk(id);
};

export const findRedisClientById = async (id: number) => {
  const redisCache = RedisCache.getInstance(); // Obtener la instancia única de RedisCache
  return await redisCache.getCache(id.toString());;
};


export const createClient = async (clienteDto: ClientDto) => {  
  if (!clienteDto) throw Error("Dto vacío");
  const redisCache = RedisCache.getInstance(); // Obtener la instancia única de RedisCache
  let cliente = {...clienteDto};
  SendClient(clienteDto);        
  await redisCache.setCache(cliente.id.toString(), cliente, 1000);
  return await Client.create(cliente);
};
