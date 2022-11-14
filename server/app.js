import express from "express";
import bodyParser from "body-parser";
import professionalRouter from "./routes/professional.js";
import recruiterRouter from "./routes/recruiter.js";
import cors from "cors";
import { pool } from "./utils/db.js";
import loginProfessionalRouter from "./routes/login_professional.js"

const app = express();
const PORT = 4000;
app.use(bodyParser.json());
app.use(cors());

//Connect to elephantSQL

const connectDb = async () => {
  try {
    await pool.connect();
    console.log("Connect to Postgres");
  } catch (err) {
    console.log(err);
  }
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/professional", professionalRouter);
app.use("/recruiter", recruiterRouter);
app.use("/login_professional", loginProfessionalRouter)
app.listen(PORT, () => {
  connectDb();
  console.log(`Server start at Port ${PORT}`);
});