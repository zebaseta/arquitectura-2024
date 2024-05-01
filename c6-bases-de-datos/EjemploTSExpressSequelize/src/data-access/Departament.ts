import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

export const Departament = sequelize.define('Departament', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'Departaments',
    timestamps: false
  });
  