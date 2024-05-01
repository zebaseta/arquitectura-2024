import { Request, Response } from 'express';
import * as clienteService from '../services/clientService';
import { getErrorMessage } from '../utils/handleError';
import { ClientFilter } from '../dtos/ClientFilter';

// Obtener todos los clientes
export const getClients = async (req: Request, res: Response) => {
    try {
        
        const filter = req.query;        
        const clientes = await clienteService.findAllClients(filter);
        res.status(200).json(clientes);
    } catch (error) {
        res.status(400).json({ message: 'Error al obtener los clientes', error: getErrorMessage(error) });
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

// Crear un nuevo cliente
export const createClient = async (req: Request, res: Response) => {
    try {
        const cliente = await clienteService.createClient(req.body);
        res.status(201).json(cliente);
    } catch (error: any) {
        res.status(400).json({ message: 'Error al crear el cliente', error: getErrorMessage(error) });
    }
};

// Actualizar un cliente existente
export const updateClient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updated = await clienteService.updateClient(parseInt(id), req.body);

        if (updated[0] === 1) { // Sequelize update devuelve un array con el número de filas afectadas
            res.status(200).json({ message: 'Cliente actualizado' });
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el cliente', error: getErrorMessage(error)});
    }
};

// Eliminar un cliente
export const deleteClient = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleted = await clienteService.deleteClient(parseInt(id));

        if (deleted === 1) { // Sequelize delete devuelve el número de filas afectadas
            res.status(200).json({ message: 'Cliente eliminado' });
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error al eliminar el cliente', error: getErrorMessage(error) });
    }
};


// Crear una nueva visita 
export const createVisit = async (req: Request, res: Response) => {
    try {
        const clientId = parseInt(req.params.id);
        const visitToCreate = {...req.body, clientId: clientId };
        const newVisit = await clienteService.createVisit(visitToCreate);
        res.status(201).json(newVisit);
    } catch (error: any) {
        res.status(400).json({ message: 'Error al crear visita', error: getErrorMessage(error) });
    }
};

//obtener todas las visitas de un cliente
export const getAllVisit = async (req: Request, res: Response) => {
    try {
        const clientId = parseInt(req.params.id);
        const {desde, hasta } = req.query;

        const visits = await clienteService.findAllVisit(clientId, desde, hasta);        
        res.json(visits);       
    } catch (error) {
        res.status(400).json({ message: 'Error al buscar visitas del cliente', error: getErrorMessage(error) });
    }
};