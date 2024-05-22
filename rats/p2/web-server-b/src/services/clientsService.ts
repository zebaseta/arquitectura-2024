import ClientModel from '../models/clientModel'

export const getAllClients = async () => {
  return await ClientModel.find();
};


export const createClient = async (recordData: any) => {
  const record = new ClientModel(recordData);
  return await record.save();
};