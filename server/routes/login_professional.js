import { Router } from "express";
import { pool } from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginProfessionalRouter = Router();

loginProfessionalRouter.post("/", async (req, res) => {

    try {
        const isProfessionalUser = await pool.query(
            `select email from professional_users where email = $1 `, [req.params.email]
        );

        if (!isProfessionalUser) {
            return res.status(404).json({
                "message": "This E-mail not found"
            })
        }

        const thisIsPassword = await pool.query(`select password from professional_users where password = $1 `, [req.body.password])

        const isValidPassword = await bcrypt.compare(req.body.password, `${thisIsPassword}`);

        console.log(thisIsPassword)

        if (!isValidPassword) {
            return res.status(401).json({
                "message": "Password not Correct"

            })
        }

        const isProfessionalName = await pool.query(`select name from professional_users where email = $1`, [req.params.email])

        const token = jwt.sign(

            {
                id: isProfessionalUser.row,
                name: isProfessionalName.row
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
        throw err;
    }

});

export default loginProfessionalRouter;