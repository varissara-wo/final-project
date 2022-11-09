import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../utils/db.js";

const professionalRouter = Router();

professionalRouter.get("/", async (req, res) => {
  try {
    const professionalUsers = await pool.query(`select * from professional`);

    return res.status(200).json({
      data: professionalUsers.rows,
    });
  } catch {}
});

professionalRouter.get("/users/exists/:email", async (req, res) => {
  try {
    const isUserExist = await pool.query(
      `select * from professional where email = $1`,
      [req.params.email]
    );

    console.log(isUserExist.rows.length);
    let message =
      isUserExist.rows.length === 1
        ? "This email is already available"
        : "Can use this email";

    return res.status(200).json({
      data: message,
    });
  } catch (err) {
    throw err;
  }
});

professionalRouter.post("/", async (req, res) => {
  try {
    const newProfessionalUser = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phone: req.body.phone,
      birthday: req.body.birthday,
      likedin: req.body.likedin,
      title: req.body.title,
      experience: req.body.experience,
      education: req.body.education,
      cv: req.body.cv,
      created_at: new Date(),
      updated_at: new Date(),
      last_logged_in: new Date(),
    };

    // const salt = await ;
    const salt = await bcrypt.genSalt(10);
    newProfessionalUser.password = await bcrypt.hash(
      newProfessionalUser.password,
      salt
    );

    await pool.query(
      `insert into professional (email,password,name,phone,birthday,linkedin,title,experience,education,cv,created_at,updated_at,last_logged_in) 
      values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
      [
        newProfessionalUser.email,
        newProfessionalUser.password,
        newProfessionalUser.name,
        newProfessionalUser.phone,
        newProfessionalUser.birthday,
        newProfessionalUser.likedin,
        newProfessionalUser.title,
        newProfessionalUser.experience,
        newProfessionalUser.education,
        newProfessionalUser.cv,
        newProfessionalUser.created_at,
        newProfessionalUser.updated_at,
        newProfessionalUser.last_logged_in,
      ]
    );

    return res.status(201).json({
      message: "New user has been created sucessfully",
    });
  } catch (err) {}
});

export default professionalRouter;
