import express from "express";
import bodyParser from "body-parser";
import professionalRouter from "./routes/professional.js";
import recruiterRouter from "./routes/recruiter.js";
import { pool } from "./utils/db.js";

const app = express();
const PORT = 4000;
app.use(bodyParser.json());

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
app.listen(PORT, () => {
  connectDb();
  console.log(`Server start at Port ${PORT}`);
});
