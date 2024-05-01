import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  departamentId: { // Esta es la nueva columna que actúa como clave foránea.
    type: DataTypes.INTEGER,
    allowNull: true, // Esto permite que un Cliente no tenga un Departamento asociado. Cambia a false si cada Cliente debe tener un Departamento.
    references: {
      model: 'Departaments', // Esto es el nombre del modelo al que se refiere.
      key: 'id', // La clave primaria del modelo Departamento a la que se hace referencia.
    }
  }
}, {
  tableName: 'Clients',
  timestamps: false
});
