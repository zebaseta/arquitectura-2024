
export class ClientDto{
    id: number = 0;
    name: string = ""; 
    rut: string = ""; 
    address: string = ""; 
    
    constructor(id: number, name: string, rut: string, address: string){
        this.id = id;
        this.name = name;
        this.address = address;
        this.rut = rut;        
    }
}