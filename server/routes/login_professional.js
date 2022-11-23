import { Router } from "express";
import { pool } from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { protect } from "../middlewares/protect.js";

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

export default loginProfessionalRouter;
