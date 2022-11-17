import { Router } from "express";
import { pool } from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { protect } from "../middlewares/protect.js"

const loginRecuiterRouter = Router();

loginRecuiterRouter.use(protect);

loginRecuiterRouter.post("/", async (req, res) => {

    try {
        const isRecuiterUser = await pool.query(
            `select email,password from recruiter_users  where email = $1 `, [req.body.email]
        );

        if (!isRecuiterUser.rows[0]) {
            return res.status(404).json({
                "message": "This E-mail not found"
            })
        }

        const isValidPassword = await bcrypt.compare(`${req.body.password}`, `${isRecuiterUser.rows[0].password}`);

        if (!isValidPassword) {
            return res.status(401).json({
                "message": "Password not Correct"
            })
        }

        const isRecuiterName = await pool.query(`select company_name from recruiter_users  where email = $1`, [isRecuiterUser.rows[0].email])

        const token = jwt.sign(

            {
                id: isRecuiterUser.rows[0].email,
                name: isRecuiterName.rows[0].name
            },
            process.env.SECRET_KEY,
            {
                expiresIn: '900000',
            }
        );


        return res.json({
            message: "Login Succesfully",
            token
        })

    } catch (error) {
        console.log("this is error" + error)
        throw error;
    }

});

export default loginRecuiterRouter;