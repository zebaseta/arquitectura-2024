import { Request, Response } from 'express';
import * as clienteService from '../services/clientService';
import { getErrorMessage } from '../utils/handleError';

// Crear un nuevo cliente
export const createClient = async (req: Request, res: Response) => {
    try {
        const cliente = await clienteService.createClient(req.body);
        res.status(201).json(cliente);
    } catch (error: any) {
        res.status(400).json({ message: 'Error al crear el cliente', error: getErrorMessage(error) });
    }
};


// Obtener un cliente por su ID
export const getClient = async (req: Request, res: Response) => {
    try {
        const cliente = await clienteService.findClientById(parseInt(req.params.id));
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error al buscar el cliente', error: getErrorMessage(error) });
    }
};



// Obtener un cliente por su ID
export const getRedisClient = async (req: Request, res: Response) => {
    try {
        const cliente = await clienteService.findRedisClientById(parseInt(req.params.id));
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error al buscar el cliente', error: getErrorMessage(error) });
    }
};