import { Router } from "express";
import { pool } from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginProfessionalRouter = Router();

loginProfessionalRouter.post("/", async (req, res) => {

    try {
        const isProfessionalUser = await pool.query(
            `select email,password from professional_users where email = $1 `, [req.body.email]
        );


        if (!isProfessionalUser.rows[0]) {
            return res.status(404).json({
                "message": "This E-mail not found"
            })
        }

        const isValidPassword = await bcrypt.compare(`${req.body.password}`, `${isProfessionalUser.rows[0].password}`);

        if (!isValidPassword) {
            return res.status(401).json({
                "message": "Password not Correct"

            })
        }

        const isProfessionalName = await pool.query(`select name from professional_users where email = $1`, [isProfessionalUser.rows[0].email])

        console.log(isProfessionalName.rows[0])

        const token = jwt.sign(

            {
                id: isProfessionalUser.rows[0].email,
                name: isProfessionalName.rows[0].name
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

    } catch (err) {
        console.log("this is error" + err)
        throw err;
    }

});

export default loginProfessionalRouter;