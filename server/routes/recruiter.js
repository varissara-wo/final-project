import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../utils/db.js";

const recruiterRouter = Router();

recruiterRouter.get("/", async (req, res) => {
  try {
    const recruiterUsers = await pool.query(`select * from recruiter`);

    return res.status(200).json({
      data: recruiterUsers.rows,
    });
  } catch {}
});
recruiterRouter.get("/users/exists/:email", async (req, res) => {
  try {
    const isUserExist = await pool.query(
      `select * from recruiter where email = $1`,
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

recruiterRouter.post("/", async (req, res) => {
  try {
    const recruiterUser = {
      email: req.body.email,
      password: req.body.password,
      companyname: req.body.companyname,
      website: req.body.website,
      about: req.body.about,
      logo: req.body.logo,

      created_at: new Date(),
      updated_at: new Date(),
      last_logged_in: new Date(),
    };
    const salt = await bcrypt.genSalt(10);

    recruiterUser.password = await bcrypt.hash(recruiterUser.password, salt);

    await pool.query(
      `insert into recruiter  (company_name,email,password,website,about,logo,created_at,updated_at,last_logged_in) 
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
  } catch (err) {}
});
recruiterRouter.put("/:id", async (req, res) => {
  const updatedUser = {
    ...req.body,
    updated_at: new Date(),
  };
  const userId = req.params.id;
  const alreadyUse = await pool.query(
    `select * from recruiter where email =$1`,
    [updatedUser.email]
  );

  console.log(userId);
  if (alreadyUse.rows.length === 1) {
    return res.json({
      message: "This email is already available",
    });
  } else {
    await pool.query(
      `UPDATE recruiter SET logo=$1,email=$2,company_name=$3,website=$4,about=$5,updated_at=$6 where recruiter_id=$7`,
      [
        updatedUser.logo,
        updatedUser.email,
        updatedUser.companyname,
        updatedUser.website,
        updatedUser.about,
        updatedUser.updated_at,
        userId,
      ]
    );
    return res.json({
      message: `User ${userId} has been updated.`,
    });
  }
});
recruiterRouter.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  await pool.query(`delete from recruiter where recruiter_id=$1`, [userId]);
  return res.json({
    message: `User ${userId} has been deleted.`,
  });
});
recruiterRouter.post("/createpost", async (req, res) => {
  const category_id= await pool.query(`select * from categories where name =$1`,[req.info.category]);
    const post = {
      recruiter_id: 1,
      category_id:category_id.category_id,
      type:req.info.type,
      
    
      created_at: new Date(),
     
    };
  
    await pool.query(
      `insert into jobs  (company_name,email,password,website,about,logo,created_at,updated_at,last_logged_in) 
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
  
});
export default recruiterRouter;
