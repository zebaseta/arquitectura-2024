export class DepartamentDto{
    id: number = 0;
    nombre: string = "";    
    constructor(id: number, nombre: string){
        this.id = id;
        this.nombre = nombre;        
    }
}