export class VisitDto{
    id: number = 0;
    date!: Date;
    detail: string = "";
    clientId: number = 0;
    constructor(id: number, date: Date, detail: string, clientId: number){
        this.id = id;
        this.date = date;
        this.detail = detail;
        this.clientId = clientId;
    }
}