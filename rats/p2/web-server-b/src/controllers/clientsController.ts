import { Request, Response } from 'express';
import * as clientsService from '../services/clientsService';

export const getAllClients = async (req: Request, res: Response) => {
  const records = await clientsService.getAllClients();
  res.json(records);
};
