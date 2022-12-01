import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../utils/db.js";
import multer from "multer";
import { logoUpload } from "../utils/upload.js";
import { cvUpload } from "../utils/upload.js";
import { v2 as cloudinary } from "cloudinary";
import { protect } from "../middlewares/protect.js";
const recruiterRouter = Router();

recruiterRouter.use(protect);

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
  } catch (err) {
    ("error");
  }
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
  await pool.query(`delete from recruiter_users where recruiter_id=$1`, [
    userId,
  ]);
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
      recruiter_id: req.body.recruiterId,
      categories_id: categories_id.rows[0].categories_id,
      job_title: req.body.title,
      type: req.body.type,
      min_salary: req.body.minSalary,
      max_salary: req.body.maxSalary,
      about_job_position: req.body.about,
      job_requirement: req.body.requirement,
      option_requirement: req.body.optional,
      total_candidates: 0,
      on_track_candidates: 0,
      recruit_status: "open",
      created_at: new Date(),
      updated_at: new Date(),
    };

    console.log(post);

    await pool.query(
      `insert into jobs  ( recruiter_id,categories_id,job_title, type,min_salary, 
        max_salary,about_job_position, job_requirement,option_requirement, 
        total_candidates, on_track_candidates,recruit_status, created_at,updated_at) 
                values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)`,
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
        post.total_candidates,
        post.on_track_candidates,
        post.recruit_status,
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
recruiterRouter.get("/jobs/:id", async (req, res) => {
  const recruiter_id = req.params.id;
  const type = req.query.type || "";
  let query = "";
  let values = [];
  try {
    if (type.toLowerCase() == "closed") {
      query = `select * from jobs   inner join categories on jobs.categories_id =
     categories.categories_id where recruiter_id = $1 and  recruit_status = 'closed'`;

      values = [recruiter_id];
    } else if (type.toLowerCase() == "ontrack") {
      query = `select * from jobs   inner join categories on jobs.categories_id = 
      categories.categories_id where recruiter_id = $1 and on_track_candidates >= 1`;
      values = [recruiter_id];
    } else {
      query = `select * from jobs   inner join categories on jobs.categories_id = 
      categories.categories_id where recruiter_id = $1 `;
      values = [recruiter_id];
    }
    console.log(query, values);
    const results = await pool.query(query, values);
    const data = results.rows;
    return res.status(200).json({
      data: data,
    });
  } catch (err) {
    throw err;
  }
});
recruiterRouter.get("/categories/:id", async (req, res) => {
  const categories_id = req.params.id;
  try {
    const categories = await pool.query(
      `select * from categories where categories_id = $1`,
      [categories_id]
    );
    return res.status(200).json({
      data: categories.rows,
    });
  } catch (err) {
    throw err;
  }
});
recruiterRouter.put("/jobs/:id", async (req, res) => {
  const jobs_id = req.params.id;
  const updatejob = {
    closed_at: new Date(),
    recruit_status: "closed",
  };

  try {
    await pool.query(
      `UPDATE jobs SET closed_at=$1, recruit_status=$2 where job_id=$3
       `,
      [updatejob.closed_at, updatejob.recruit_status, jobs_id]
    );
    return res.json({
      message: ` ${jobs_id} has been closed.`,
    });
  } catch (err) {
    throw err;
  }
});
recruiterRouter.put("/update/:id", async (req, res) => {
  const jobs_id = req.params.id;
  const updatejob = {};

  try {
    await pool.query(
      `UPDATE jobs SET closed_at=$1, recruit_status=$2 where job_id=$3
       `,
      [updatejob.closed_at, updatejob.recruit_status, jobs_id]
    );
    return res.json({
      message: ` ${jobs_id} has been closed.`,
    });
  } catch (err) {
    throw err;
  }
});
recruiterRouter.get("/profile/:id", async (req, res) => {
  const recruiter = req.params.id;
  try {
    const recruiterUsers = await pool.query(
      `select * from recruiter_users  where recruiter_id =$1`,
      [recruiter]
    );
    const data = recruiterUsers.rows;

    data[0].logo_url = JSON.parse(data[0].logo_url).url;

    return res.status(200).json({
      data: data[0],
    });
  } catch (err) {
    console.log(err);
  }
});
recruiterRouter.put("/profile/:id", LogoUpload, async (req, res) => {
  const recruiter = req.params.id;

  // console.log(file);
  console.log(req.body);

  let logoUrl;

  if (req.body.logo) {
    logoUrl = req.body.logo;
  } else {
    console.log("hahhaha");
    const file = req.files.logo[0];
    console.log(file);
    // const file = req.files.logo;
    const idimg = await pool.query(
      `select logo_url  from recruiter_users  where recruiter_id = $1`,
      [recruiter]
    );
    const id = JSON.parse(idimg.rows[0].logo_url).publicId;
    console.log("idimgjaaaaaaaaaaaaaaaaaa");
    console.log(id);
    try {
      await cloudinary.uploader.destroy(id);
      console.log("kookai");
      const responseLogoUpload = await logoUpload(file);
      logoUrl = responseLogoUpload;
      console.log(logoUrl);
    } catch (err) {}
  }

  const userUpdate = {
    logo_url: logoUrl,
    company_name: req.body.company_name,
    email: req.body.email,
    company_website: req.body.company_website,
    about_company: req.body.about_company,
  };
  const emailUse = await pool.query(
    `select * from recruiter_users where email = $1 and recruiter_id != $2`,
    [userUpdate.email, recruiter]
  );

  try {
    if (emailUse.rows.length !== 0) {
      return res.json({
        message: "email is alreadyuse",
      });
    } else {
      await pool.query(
        `UPDATE  recruiter_users set logo_url=$1 ,company_name=$2,email=$3,company_website=$4,about_company=$5 where recruiter_id =$6`,
        [
          userUpdate.logo_url,
          userUpdate.company_name,
          userUpdate.email,
          userUpdate.company_website,
          userUpdate.about_company,
          recruiter,
        ]
      );

      return res.status(200).json({
        message: ` ${recruiter} has been update.`,
      });
    }
  } catch (err) {
    console.log(err);
  }
});
export default recruiterRouter;
