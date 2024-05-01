import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
export const Visit = sequelize.define('Visit', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY, // Utiliza DATEONLY para almacenar solo la fecha sin la hora, o DATE si también necesitas la hora.
      allowNull: false
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clientId: { // Esta es la clave foránea que vincula cada Visita con un Cliente.
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Clients', // Este es el nombre del modelo al que se refiere.
        key: 'id', // La clave primaria del modelo Cliente a la que se hace referencia.
      }
    }
  }, {
    tableName: 'Visits',
    timestamps: false
  });
  
  
  