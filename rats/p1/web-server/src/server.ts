import express, { Express, Request, Response } from "express";
import { QueueFactory } from "./pipeline/QueueFactory";
import { Pipeline } from "./pipeline/Pipeline";
import {
  filtroNombreApellido,
  filtroCedula,
  filtroDepartamento,
  filtroMovilidad,
} from "./filters/filters";
import { CustomData } from "./data-structure/custom-data";
import { PersonServiceValidator } from "./services/person-service-validator";
import { FileLogger } from "./infraestructure/file-logger";

require("dotenv").config();

const app: Express = express();
const port: number = 3000;

// construye una funcion de creacion de colas dependiendo de un parm se crea una funcion u otra (bull o rabbit)
const queueFactory = QueueFactory.getQueueFactory<CustomData>; //ojo que no la invoca aca si no dentro de la Pipeline

// Crear una nueva instancia de Pipeline usando Bull como backend de la cola
const pipeline = new Pipeline<CustomData>(
  [filtroNombreApellido, filtroCedula, filtroDepartamento, filtroMovilidad],
  queueFactory
);

app.use(express.json());

app.post("/persons", (req: Request, res: Response) => {
  try {
    let dataToProcess: CustomData = req.body;
    const valid = PersonServiceValidator.validate(dataToProcess);
    if (!valid) {
      res.status(400).send();
      return;
    }
    pipeline.processInput(dataToProcess);
    res.status(200).send({
      message: `Se ha iniciado el proceso de agenda para la persona  ${dataToProcess.nombre} ${dataToProcess.apellido}`,
    });
  } catch (error) {
    res.status(400).send({ message: error, user: req.body });
  }
});

//se crea el listener para cuando un job termina
pipeline.on("finalOutput", (output) => {
  const msg = `Se ha finalizado satisfactoriamente el proceso de agenda para la persona ${output.nombre} ${output.apellido}`;
  console.log(msg);
  FileLogger.log(msg)
});

//se crea el listener para cuando un job da error
pipeline.on("errorInFilter", (error, data) => {
  const msg = `No se ha podido agendar ${data.nombre} ${data.apellido}: ${error}`;  
  console.error(msg)
  FileLogger.log(msg)
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
