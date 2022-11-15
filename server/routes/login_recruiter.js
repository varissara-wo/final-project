import { Router } from "express";
import { pool } from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginRecuiterRouter = Router();

loginRecuiterRouter.post("/", async (req, res) => {

    try {
        const isRecuiterUser = await pool.query(
            `select email,password from recuiter_users where email = $1 `, [req.body.email]
        );

        if (!isRecuiterUser.rows[0]) {
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

        const isRecuiterName = await pool.query(`select name from recuiter_users where email = $1`, [req.params.email])

        const token = jwt.sign(

            {
                id: isRecuiterUser.row,
                name: isRecuiterName.row
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

export default loginRecuiterRouter;