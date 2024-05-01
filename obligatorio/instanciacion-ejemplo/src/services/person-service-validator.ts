import { CustomData } from "../data-structure/custom-data";

export class PersonServiceValidator {
  static validate(person: CustomData) {
    if (
      person.nombre &&
      person.apellido &&
      person.cedula &&
      person.telefono &&
      person.departamento &&
      typeof person.necesita_asistencia_movilidad === "boolean"
    ) {
      return true;
    }
    return false;
  }
}
