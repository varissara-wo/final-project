import { Router } from "express";
import { pool } from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import { cvUpload } from "../utils/upload.js";
const loginProfessionalRouter = Router();

// loginProfessionalRouter.use(protect);
loginProfessionalRouter.post("/", async (req, res) => {
  try {
    const isProfessionalUser = await pool.query(
      `select email,password from professional_users where email = $1 `,
      [req.body.email]
    );

    if (!isProfessionalUser.rows[0]) {
      return res.status(404).json({
        message: "This E-mail not found",
      });
    }

    const isValidPassword = await bcrypt.compare(
      `${req.body.password}`,
      `${isProfessionalUser.rows[0].password}`
    );

    if (!isValidPassword) {
      return res.status(401).json({
        message: "Password not Correct",
      });
    }

    const userId = await pool.query(
      `select professional_id from professional_users where email = $1`,
      [isProfessionalUser.rows[0].email]
    );

    const profile = await pool.query(
      `select * from professional_users where email = $1`,
      [isProfessionalUser.rows[0].email]
    );

    const token = jwt.sign(
      {
        id: userId.rows[0].professional_id,
        profile: profile.rows[0],
        userType: "professional",
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "900000",
      }
    );

    return res.json({
      message: "Login Succesfully",
      token,
    });
  } catch (error) {
    console.log("this is error" + error);
    throw error;
  }
});

loginProfessionalRouter.get("/users/exists/:email", async (req, res) => {
  try {
    const isUserExist = await pool.query(
      `select * from professional_users where email = $1`,
      [req.params.email]
    );

    let check = isUserExist.rows.length > 0 ? true : false;

    return res.status(200).json({
      isEmailExist: check,
    });
  } catch (err) {
    console.log(err);
  }
});

//Create account
//Upload CV PDF file to cloudinary
const multerUpload = multer({ dest: "uploads/" });
const CvUpload = multerUpload.fields([{ name: "cv", maxCount: 1 }]);

loginProfessionalRouter.post("/register", CvUpload, async (req, res) => {
  const file = req.files.cv[0];
  try {
    const responseCvUpload = await cvUpload(file);
    const cvUrl = responseCvUpload;
    const newProfessionalUser = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phone: req.body.phone,
      birthday: req.body.birthday,
      linkedin: req.body.linkedin,
      title: req.body.title,
      experience: req.body.experience,
      education: req.body.education,
      cv: cvUrl,
      created_at: new Date(),
      updated_at: new Date(),
      last_logged_in: new Date(),
    };

    console.log(newProfessionalUser);
    const salt = await bcrypt.genSalt(10);
    newProfessionalUser.password = await bcrypt.hash(
      newProfessionalUser.password,
      salt
    );
    await pool.query(
      `insert into professional_users (email,password,name,phone,birthday,linkedin,job_title,experience,education,cv_url,created_at,updated_at,last_logged_in) 
      values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
      [
        newProfessionalUser.email,
        newProfessionalUser.password,
        newProfessionalUser.name,
        newProfessionalUser.phone,
        newProfessionalUser.birthday,
        newProfessionalUser.linkedin,
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

export default loginProfessionalRouter;
