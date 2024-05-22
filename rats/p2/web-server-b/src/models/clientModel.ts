import mongoose from 'mongoose';

const clientModelSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  rut: { type: String, required: true },
  address: { type: String, required: true }
});

const ClientModel = mongoose.model('ClientModel', clientModelSchema);
export default ClientModel;
