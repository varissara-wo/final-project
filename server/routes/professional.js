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
professionalRouter.put("/:id", async (req, res) => {
  const updatedUser = {
    ...req.body,
    updated_at: new Date(),
  };
  const userId = req.params.id;
  const alreadyUse = await pool.query(
    `select * from professional where email =$1`,
    [updatedUser.email]
  );
  if (alreadyUse) {
    return res.json({
      message: "This email is already available",
    });
  } else {
    await pool.query(
      `UPDATE professional SET email=$1,name=$2,phone=$3,birthday=$4,linkedin=$5,title=$6,experience=$7,cv=$8,education=$9,updated_at=$10 where professional_id=$11`,
      [
        updatedUser.email,
        updatedUser.name,
        updatedUser.phone,
        updatedUser.birthday,
        updatedUser.linkedin,
        updatedUser.title,
        updatedUser.experience,
        updatedUser.cv,
        updatedUser.education,
        updatedUser.updated_at,
        userId,
      ]
    );
    return res.json({
      message: `User ${userId} has been updated.`,
    });
  }
});
professionalRouter.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  await pool.query(`delete from professional where professional_id=$1`, [
    userId,
  ]);
  return res.json({
    message: `User ${userId} has been deleted.`,
  });
});

export default professionalRouter;
