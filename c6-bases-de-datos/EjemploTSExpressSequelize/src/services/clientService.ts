import { Sequelize, Op } from 'sequelize';
import { Client } from '../data-access/Client';
import { Visit } from '../data-access/Visit';
import { ClientDto } from '../dtos/ClientDto';
import { VisitDto } from '../dtos/VisitDto';
import { Departament } from '../data-access/Departament';


export const findAllClients = async (filter:any) => {
  
  if (!filter.name && !filter.detalle){   
    return await Client.findAll();
  }else if (filter.name){
    return await Client.findAll({
      where: {
        nombre: {
          [Op.like]: `%${filter.name}%` // Usando el operador LIKE para buscar cualquier cliente que contenga 'nombre' en cualquier parte de su nombre
        }
      }
    })
  }else if(filter.detalle){
    
    //filtrar por detalle
    return await  Client.findAll({
      include: [{
        model: Visit,
        where: {  detalle: {
          [Op.like]: `%${filter.detalle}%` // Usando el operador LIKE para buscar cualquier cliente que contenga 'nombre' en cualquier parte de su nombre
        } }
      }]
    });
  }
  
};

export const findClientById = async (id: number) => {
  return await Client.findByPk(id);
};

export const createClient = async (clienteDto: ClientDto) => {
  if (!clienteDto) throw Error("Dto vacío");
  let cliente = {...clienteDto};
  return await Client.create(cliente);
};

export const updateClient = async (id: number, clienteDto: ClientDto) => {
  if (!clienteDto) throw Error("Dto vacío");
  return await Client.update(clienteDto, { where: { id } });
};

export const deleteClient = async (id: number) => {
  return await Client.destroy({ where: { id } });
};

export const createVisit = async (visitDto: VisitDto) =>{
  if (!visitDto) throw Error("Dto vacío");
  let visit = {...visitDto};
  console.log(visit)
  return await Visit.create(visit)
}


export const findAllVisit = async (clientId: number, from: any, to:any) => {
  if (!from || !to){
    return await Visit.findAll({where: {clientId: clientId}});
  }else{
    return await Visit.findAll({
      where: {
        clienteId: clientId, // Reemplaza clienteId con el ID real del cliente
        fecha: {
          [Op.between]: [from, to] // Reemplaza fechaInicio y fechaFin con las fechas deseadas
        }
      },
      order: [['id', 'ASC']] // Ordena las visitas por id de forma ascendente
    });
  }
};



export const findCountClientsGroupByDepartament = async ()=>{
  return await Client.findAll({
      attributes: [
        'departamentoId',
        [Sequelize.fn('COUNT', Sequelize.col('Cliente.id')), 'totalClientes']
      ],
      group: 'departamentoId',
      include: [{
        model: Departament,
        attributes: ['nombre']
      }]
    });
}

