import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || ("mysql" as any),
    port: process.env.DB_PORT || (3306 as any),
    dialectOptions: {
      connectTimeout: 60000,
    },
  }
);

import { setRelationships } from "../data-access/relationships";
import { Departament } from "../data-access/Departament";
import { Client } from "../data-access/Client";
import { Visit } from "../data-access/Visit";

const syncTables = async () => {
  try {
    // Verifica si la sincronización está habilitada
    if (process.env.DB_SYNC === "true") {
      // Cambia 'force' a true si quieres que se borren y recreen las tablas
      await Departament.sync();
      await Client.sync();
      await Visit.sync();
      console.log("Los modelos fueron sincronizados con la base de datos.");
    }
  } catch (error) {
    console.error(
      "Error al sincronizar los modelos con la base de datos:",
      error
    );
  }
};
const dbSync = async () => {
  await setRelationships();
  await syncTables();
};

export { sequelize, dbSync };
