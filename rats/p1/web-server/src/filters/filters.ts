import { error } from "console";
import { CustomData } from "../data-structure/custom-data";
import { FileLogger } from "../infraestructure/file-logger";

export const filtroNombreApellido = (input: CustomData): CustomData => { 
    var regex = /^[a-zA-Z]+$/;
    if(!input.nombre || !regex.test(input.nombre)) {
        throw new Error("Nombre vacio o con caracteres invalidos");
    }
    if(!input.apellido || !regex.test(input.apellido)){
        throw new Error("Apellido vacio o con caracteres invalidos");
    }
    return input;
};

export const filtroCedula = (input: CustomData): CustomData => {
  const { cedula } = input;
  if (cedula.length === 7 || cedula.length === 8){
    if (!cedula.startsWith("0")){
      return input;    
    }
  } 
  throw new Error("Cedula no valida");  
};

export const filtroDepartamento = (input: CustomData): CustomData => {
    var departmentsUruguay = [
        "ARTIGAS",
        "CANELONES",
        "CERRO LARGO",
        "COLONIA",
        "DURAZNO",
        "FLORES",
        "FLORIDA",
        "LAVALLEJA",
        "MALDONADO",
        "MONTEVIDEO",
        "PAYSANDU",
        "RIO NEGRO",
        "RIVERA",
        "ROCHA",
        "SALTO",
        "SAN JOSE",
        "SORIANO",
        "TACUAREMBO",
        "TREINTA Y TRES"
    ];

    var departamentotoUpper = input.departamento.toUpperCase();
   
    if (!departmentsUruguay.includes(departamentotoUpper)) {
        throw new Error("Departamento no válido");  
    }    

    return input; 
};

export const filtroMovilidad = (input: CustomData): CustomData => {
  const { nombre, apellido } = input;
  if(input.necesita_asistencia_movilidad){
    console.log(`La persona ${nombre} ${apellido} necesita asistencia en movilidad`)
  } else {
    console.log(`La persona ${nombre} ${apellido} será agendado en el proceso común`)
  }
  return input;
};
