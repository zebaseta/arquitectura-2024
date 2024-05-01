import { Client } from "./Client";
import { Departament } from "./Departament";
import { Visit } from "./Visit";


export const setRelationships = async () =>{
    // Definir la relación
    Client.belongsTo(Departament, { foreignKey: 'departamentId' });
    Departament.hasMany(Client, { foreignKey: 'departamentId' });    
    Client.hasMany(Visit, { foreignKey: 'clientId' }); // Indica que un Cliente puede tener muchas Visitas.
    Visit.belongsTo(Client, { foreignKey: 'clientId' }); // Indica que una Visita pertenece a un Cliente.
}
