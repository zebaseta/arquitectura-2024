
export class ClientDto{
    id: number = 0;
    name: string = ""; 
    rut: string = ""; 
    address: string = ""; 
    departamentId: number = 0;
    constructor(id: number, name: string, rut: string, address: string, departamentId: number){
        this.id = id;
        this.name = name;
        this.address = address;
        this.rut = rut;
        this.departamentId = departamentId;
    }
}