import { Departament } from "../data-access/Departament";
import { DepartamentDto } from "../dtos/DepartamentDto";

export const findAllDepartaments = async () => {
    return await Departament.findAll();
  };
  
  export const findDepartamentById = async (id: number) => {
    return await Departament.findByPk(id);    
  };
  
  export const createDepartament = async (departamentDto: DepartamentDto) => {
    if (!departamentDto) throw Error("Dto vacío"); 
    let departamento = {...departamentDto};
    return await Departament.create(departamento);
  };
  
  export const updateDepartament = async (id: number, departamentoDto: DepartamentDto) => {
    if (!departamentoDto) throw Error("Dto vacío");
    return await Departament.update(departamentoDto, { where: { id } });
  };
  
  export const deleteDepartament = async (id: number) => {
    return await Departament.destroy({ where: { id } });
  };