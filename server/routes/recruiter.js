import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../utils/db.js";
import multer from "multer";
import { logoUpload } from "../utils/upload.js";

const recruiterRouter = Router();

//Get user profile
recruiterRouter.get("/", async (req, res) => {
  try {
    const recruiterUsers = await pool.query(`select * from recruiter_users`);

    return res.status(200).json({
      data: recruiterUsers.rows,
    });
  } catch {}
});

//Check email
recruiterRouter.get("/users/exists/:email", async (req, res) => {
  try {
    const isUserExist = await pool.query(
      `select * from recruiter_users where email = $1`,
      [req.params.email]
    );

    let check = isUserExist.rows.length === 1 ? true : false;

    return res.status(200).json({
      isEmailExist: check,
    });
  } catch (err) {
    throw err;
  }
});

//Create account
//Upload CV PDF file to cloudinary
const multerUpload = multer({ dest: "uploads/" });
const LogoUpload = multerUpload.fields([{ name: "logo", maxCount: 1 }]);

recruiterRouter.post("/", LogoUpload, async (req, res) => {
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
  } catch (err) {}
});

//Update profile
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

//Delete account
recruiterRouter.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  await pool.query(`delete from recruiter where recruiter_id=$1`, [userId]);
  return res.json({
    message: `User ${userId} has been deleted.`,
  });
});

//Create new job applicant
recruiterRouter.post("/createpost", async (req, res) => {
  try {
    const categories_id = await pool.query(
      `select categories_id from categories where name =$1`,
      [req.body.category]
    );
    const post = {
      recruiter_id: 2,
      categories_id: categories_id.rows[0].categories_id,
      job_title: req.body.title,
      type: req.body.type,
      min_salary: req.body.minSalary,
      max_salary: req.body.maxSalary,
      about_job_position: req.body.about,
      job_requirement: req.body.requirement,
      option_requirement: req.body.optional,
      created_at: new Date(),
      updated_at: new Date(),
    };

    console.log(post);

    await pool.query(
      `insert into jobs  ( recruiter_id,categories_id,job_title, type,min_salary, max_salary,about_job_position, job_requirement,option_requirement, created_at,updated_at) 
                values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        post.recruiter_id,
        post.categories_id,
        post.job_title,
        post.type,
        post.min_salary,
        post.max_salary,
        post.about_job_position,
        post.job_requirement,
        post.option_requirement,
        post.created_at,
        post.updated_at,
      ]
    );
    return res.status(201).json({
      message: "Post has been creted success",
    });
  } catch (er) {
    console.log(er);
  }
});
export default recruiterRouter;
