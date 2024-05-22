import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import * as clientsController from "./controllers/clientsController";
import { startQueueProcessing } from './queue/consumer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const main = async () => {
 app.use(express.json());

 app.get("/clients", clientsController.getAllClients);
 console.log("process.env.MONGO_URI ", process.env.MONGO_URI);

 mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

 app.listen(PORT, () => {
  startQueueProcessing()
  console.log(`Server running on port ${PORT}`);
 });

}

main();
