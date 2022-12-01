import { Router } from "express";
import { pool } from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import { logoUpload } from "../utils/upload.js";
import { protect } from "../middlewares/protect.js";

const loginRecuiterRouter = Router();

loginRecuiterRouter.post("/", async (req, res) => {
  try {
    const isRecuiterUser = await pool.query(
      `select email,password from recruiter_users  where email = $1 `,
      [req.body.email]
    );

    if (!isRecuiterUser.rows[0]) {
      return res.status(404).json({
        message: "This E-mail not found",
      });
    }

    const isValidPassword = await bcrypt.compare(
      `${req.body.password}`,
      `${isRecuiterUser.rows[0].password}`
    );

    if (!isValidPassword) {
      return res.status(401).json({
        message: "Password not Correct",
      });
    }

    const userId = await pool.query(
      `select recruiter_id from recruiter_users  where email = $1`,
      [isRecuiterUser.rows[0].email]
    );

    const profile = await pool.query(
      `select * from recruiter_users  where email = $1`,
      [isRecuiterUser.rows[0].email]
    );

    const token = jwt.sign(
      {
        id: userId.rows[0].recruiter_id,
        profile: profile.rows[0],
        userType: "recruiter",
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "8h",
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

loginRecuiterRouter.get("/users/exists/:email", async (req, res) => {
  try {
    const isUserExist = await pool.query(
      `select * from recruiter_users where email = $1`,
      [req.params.email]
    );

    let check = isUserExist.rows.length > 0 ? true : false;

    return res.status(200).json({
      isEmailExist: check,
    });
  } catch (err) {
    console.log(err);
    console.log(err);
  }
});

//Create account
//Upload CV PDF file to cloudinary
const multerUpload = multer({ dest: "uploads/" });
const LogoUpload = multerUpload.fields([{ name: "logo", maxCount: 1 }]);

loginRecuiterRouter.post("/register", LogoUpload, async (req, res) => {
  const file = req.files.logo[0];
  try {
    const responseLogoUpload = await logoUpload(file);
    const logoUrl = responseLogoUpload;
    const recruiterUser = {
      email: req.body.email,
      password: req.body.password,
      companyname: req.body.companyname,
      website: req.body.website,
      about: req.body.about,
      logo: logoUrl,
      created_at: new Date(),
      updated_at: new Date(),
      last_logged_in: new Date(),
    };
    const salt = await bcrypt.genSalt(10);
    recruiterUser.password = await bcrypt.hash(recruiterUser.password, salt);
    await pool.query(
      `insert into recruiter_users  (company_name,email,password,company_website,about_company,logo_url,created_at,updated_at,last_logged_in) 
                values($1,$2,$3,$4,$5,$6,$7,$8,$9)`,

      [
        recruiterUser.companyname,
        recruiterUser.email,
        recruiterUser.password,
        recruiterUser.website,
        recruiterUser.about,
        recruiterUser.logo,
        recruiterUser.created_at,
        recruiterUser.updated_at,
        recruiterUser.last_logged_in,
      ]
    );
    return res.status(201).json({
      message: "New user has been created sucessfully",
    });
  } catch (err) {
    ("error");
  }
});

export default loginRecuiterRouter;
