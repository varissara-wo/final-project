import { Router } from "express";
import { pool } from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { protect } from "../middlewares/protect.js";

const loginRecuiterRouter = Router();

// loginRecuiterRouter.use(protect);
// const generateaccesstoken = (user)=>{
//   {
//     id: userId.rows[0].recruiter_id,
//     profile: profile.rows[0],
//     userType: "recruiter",
//   },
//   process.env.SECRET_KEY,
//   {
//     expiresIn: "900000",
//   }
// }
// const generaterefreshaccesstoken = (user)=>{

//     {
//       id: userId.rows[0].recruiter_id,
//       profile: profile.rows[0],
//       userType: "recruiter",
//     },
//     process.env.SECRET_KEY,
//     {
//       expiresIn: "900000",
//     }
// }

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
    // generateaccesstoken(profile)
    // generaterefreshaccesstoken(profile)
    const token = jwt.sign(
      {
        id: userId.rows[0].recruiter_id,
        profile: profile.rows[0],
        userType: "recruiter",
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "900000",
      }
    );
    // const refreshtoken = jwt.sign(
    //   {
    //     id: userId.rows[0].recruiter_id,
    //     profile: profile.rows[0],
    //     userType: "recruiter",
    //   },
    //   process.env.SECRET_KEY,
    //   {
    //     expiresIn: "900000",
    //   }
    // )
    //   const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife})
    //   const response = {
    //     "status": "Logged in",
    //     "token": token,
    //     "refreshToken": refreshToken,
    // // }
    // tokenList[refreshToken] = response

    return res.json({
      message: "Login Succesfully",
      token,
    });
  } catch (error) {
    console.log("this is error" + error);
    throw error;
  }
});
// let refreshtoken = []
// loginRecuiterRouter.post("/refresh",(req,res)=>{
//   const refreshtoken = req.body.token
//   if(!refreshtoken){
//     return res.status(401).json("not authen")
//   }
// })
export default loginRecuiterRouter;
