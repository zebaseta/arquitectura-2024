import { Request, Response } from 'express';
import * as departamentService from '../services/departamentService';
import { getErrorMessage } from '../utils/handleError';
// Obtener todos los departamentos
export const getDepartaments = async (req: Request, res: Response) => {
    try {
        const departamentos = await departamentService.findAllDepartaments();
        res.status(200).send(departamentos);
    } catch (error) {
        res.status(400).json({ message: 'Error al obtener los departamentos', error: getErrorMessage(error) });
    }
};

// Obtener un departamento por su ID
export const getDepartament = async (req: Request, res: Response) => {
    try {
        const departamento = await departamentService.findDepartamentById(parseInt(req.params.id));
        if (departamento) {
            res.json(departamento);
        } else {
            res.status(404).json({ message: 'Departamento no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error al buscar el departamento', error: getErrorMessage(error) });
    }
};

// Crear un nuevo departamento
export const createDepartament = async (req: Request, res: Response) => {
    try {
        const departamento = await departamentService.createDepartament(req.body);
        res.status(201).json(departamento);
    } catch (error: any) {
        res.status(400).json({ message: 'Error al crear el departamento', error: getErrorMessage(error) });
    }
};

// Actualizar un departamento existente
export const updateDepartament = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updated = await departamentService.updateDepartament(parseInt(id), req.body);

        if (updated[0] === 1) { // Sequelize update devuelve un array con el número de filas afectadas
            res.status(200).json({ message: 'Departamento actualizado' });
        } else {
            res.status(404).json({ message: 'Departamento no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el departamento', error: getErrorMessage(error)});
    }
};