import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import * as medicalRecordController from "./controllers/medicalRecordController";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/medical-records", medicalRecordController.getAllMedicalRecords);
app.post("/medical-records", medicalRecordController.createMedicalRecord);
app.get("/medical-records/dates", medicalRecordController.getRecordsByDate);
app.get(
  "/medical-records/doctor-consultation-counts",
  medicalRecordController.getConsultationCountsByDoctor
);
console.log("process.env.MONGO_URI ", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
