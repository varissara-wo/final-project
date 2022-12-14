import { Router } from "express";
import bcrypt from "bcrypt";
import { pool } from "../utils/db.js";
import multer from "multer";
import { cvUpload, deleteFileUploaded } from "../utils/upload.js";
import { v2 as cloudinary } from "cloudinary";
import { protect } from "../middlewares/protect.js";

const professionalRouter = Router();

professionalRouter.use(protect);

//Get user profile
professionalRouter.get("/", async (req, res) => {
  try {
    const professionalUsers = await pool.query(
      `select * from professional_users`
    );

    return res.status(200).json({
      data: professionalUsers.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

//Get user profile by Id
professionalRouter.get("profile/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const professionalUsers = await pool.query(
      `select * from professional_users where professional_id = $1`,
      [userId]
    );

    return res.status(200).json({
      data: professionalUsers.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

//Check email
professionalRouter.get("/users/exists/:email", async (req, res) => {
  try {
    const isUserExist = await pool.query(
      `select * from professional_users where email = $1`,
      [req.params.email]
    );

    let check = isUserExist.rows.length === 1 ? true : false;

    return res.status(200).json({
      isEmailExist: check,
    });
  } catch (err) {
    console.log(err);
  }
});

//Create account
//Upload CV PDF file to cloudinary
const multerUpload = multer({ dest: "uploads/" });
const CvUpload = multerUpload.fields([{ name: "cv", maxCount: 1 }]);

professionalRouter.post("/", CvUpload, async (req, res) => {
  const file = req.files.cv[0];
  try {
    const responseCvUpload = await cvUpload(file);
    const cvUrl = responseCvUpload;
    const newProfessionalUser = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phone: req.body.phone,
      birthday: req.body.birthday,
      linkedin: req.body.linkedin,
      title: req.body.title,
      experience: req.body.experience,
      education: req.body.education,
      cv: cvUrl,
      created_at: new Date(),
      updated_at: new Date(),
      last_logged_in: new Date(),
    };
    const salt = await bcrypt.genSalt(10);
    newProfessionalUser.password = await bcrypt.hash(
      newProfessionalUser.password,
      salt
    );
    await pool.query(
      `insert into professional_users (email,password,name,phone,birthday,linkedin,job_title,experience,education,cv_url,created_at,updated_at,last_logged_in) 
      values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
      [
        newProfessionalUser.email,
        newProfessionalUser.password,
        newProfessionalUser.name,
        newProfessionalUser.phone,
        newProfessionalUser.birthday,
        newProfessionalUser.linkedin,
        newProfessionalUser.title,
        newProfessionalUser.experience,
        newProfessionalUser.education,
        newProfessionalUser.cv,
        newProfessionalUser.created_at,
        newProfessionalUser.updated_at,
        newProfessionalUser.last_logged_in,
      ]
    );
    return res.status(201).json({
      message: "New user has been created sucessfully",
    });
  } catch (err) {}
});

//Update user
professionalRouter.put("/:id", CvUpload, async (req, res) => {
  const professionalId = req.params.id;
  const {
    email,
    name,
    phone,
    birthday,
    linkedin,
    title,
    experience,
    education,
  } = req.body;

  if (req.files.cv) {
    const cvFile = req.files.cv[0];
    try {
      const idImg = await pool.query(
        `select cv_url from professional_users  where professional_id = $1`,
        [professionalId]
      );
      const publicId = JSON.parse(idImg.rows[0].cv_url).publicId;
      deleteFileUploaded(publicId);
      const cvUrl = await cvUpload(cvFile);
      const updated_at = new Date();
      await pool.query(
        `UPDATE professional_users
        SET email=$1, name=$2, phone=$3, birthday=$4, linkedin=$5, job_title=$6, experience=$7, education=$8, cv_url=$9, updated_at=$10
        WHERE professional_id=$11;`,
        [
          email,
          name,
          phone,
          birthday,
          linkedin,
          title,
          experience,
          education,
          cvUrl,
          updated_at,
          professionalId,
        ]
      );
      return res.json({
        message: `User ${professionalId} has been updated.`,
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const updated_at = new Date();
      await pool.query(
        `UPDATE professional_users
          SET email=$1, name=$2, phone=$3, birthday=$4, linkedin=$5, job_title=$6, experience=$7, education=$8, updated_at=$9
          WHERE professional_id=$10;`,
        [
          email,
          name,
          phone,
          birthday,
          linkedin,
          title,
          experience,
          education,
          updated_at,
          professionalId,
        ]
      );
      return res.json({
        message: `User ${professionalId} has been updated.`,
      });
    } catch (error) {
      console.log(error);
    }
  }
});

//Delete user
professionalRouter.delete("/:id", async (req, res) => {
  const userId = req.params.id;
  await pool.query(`delete from professional_users where professional_id=$1`, [
    userId,
  ]);
  return res.json({
    message: `User ${userId} has been deleted.`,
  });
});

professionalRouter.get("/follow/:id", async (req, res) => {
  try {
    const professId = req.params.id;
    const followjobs = await pool.query(
      `select * from follow_jobs inner join jobs on jobs.job_id = follow_jobs.job_id
        inner join categories  on  categories.categories_id =  jobs.categories_id
        inner join recruiter_users on  recruiter_users.recruiter_id =  jobs.recruiter_id
        where professional_id =$1`,
      [professId]
    );
    const data = followjobs.rows;

    if (data.length > 0) {
      data.map((data) => {
        data.logo_url = JSON.parse(data.logo_url).url;
      });
    }

    return res.status(200).json({
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
});

professionalRouter.post("/follow/application", async (req, res) => {
  const follow = {
    job_id: req.body.jobId,
    professional_id: req.body.professionalId,
  };

  try {
    const isFollow = await pool.query(
      `select * from follow_jobs where job_id = $1 and professional_id = $2`,
      [follow.job_id, follow.professional_id]
    );

    if (isFollow.rows.length === 0) {
      await pool.query(
        `insert into follow_jobs (job_id,professional_id) values($1,$2)`,
        [follow.job_id, follow.professional_id]
      );
      return res.json({
        message: "Follow  job application sucessfully",
      });
    } else {
      await pool.query(
        `delete from follow_jobs where job_id = $1 and professional_id = $2`,
        [follow.job_id, follow.professional_id]
      );
      return res.json({
        message: "Unfollow  job application sucessfully",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

//get jobs
professionalRouter.get("/jobs", async (req, res) => {
  try {
    const getJob = await pool.query(
      `select jobs.job_id,categories.name,jobs.job_title,jobs.type,
      jobs.min_salary,jobs.max_salary, recruiter_users.company_name,
      recruiter_users.logo_url from jobs
      left join recruiter_users
      on jobs.recruiter_id =  recruiter_users.recruiter_id
      left join categories
      on jobs.categories_id =  categories.categories_id
      where recruit_status = 'open'`
    );

    return res.json({
      data: getJob.rows,
    });
  } catch (err) {
    console.log(err);
  }
});
professionalRouter.get("/", async (req, res) => {
  try {
    const getJob = await pool.query(
      `select jobs.job_id,categories.name,jobs.job_title,jobs.type,
      jobs.min_salary,jobs.max_salary, recruiter_users.company_name,
      recruiter_users.logo_url from jobs
      left join recruiter_users
      on jobs.recruiter_id =  recruiter_users.recruiter_id
      left join categories
      on jobs.categories_id =  categories.categories_id
      where recruit_status = 'open'`
    );

    const data = getJob.rows;
    data.map((data) => {
      data.logo_url = JSON.parse(data.logo_url).url;
    });

    return res.json({
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
});

professionalRouter.get("/jobs/:jobId", async (req, res) => {
  const jobId = req.params.jobId;

  try {
    const getJobById = await pool.query(
      `select jobs.job_id,categories.name,jobs.job_title,jobs.type,
    jobs.min_salary::integer,jobs.max_salary::integer, recruiter_users.company_name, recruiter_users.about_company,
    recruiter_users.logo_url, jobs.about_job_position, jobs.job_requirement, jobs.option_requirement, jobs.created_at, categories.name from jobs
    left join recruiter_users
    on jobs.recruiter_id =  recruiter_users.recruiter_id
    left join categories
    on jobs.categories_id =  categories.categories_id
    where recruit_status = 'open' and job_id = $1`,
      [jobId]
    );

    const data = getJobById.rows[0];
    data.logo_url = JSON.parse(data.logo_url).url;

    return res.json({
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
});

//query search
professionalRouter.get("/searchjobs/:userId", async (req, res) => {
  const keywords = req.query.keywords || "";
  const category = req.query.category || "";
  const maxPrice = Number(req.query.maxPrice) || 0;
  const minPrice = Number(req.query.minPrice) || 0;
  const type = req.query.type || "";
  const userId = req.params.userId;
  const queryForm = `select jobs.job_id,categories.name,jobs.job_title,jobs.type,
 jobs.min_salary,jobs.max_salary, recruiter_users.company_name,
 recruiter_users.logo_url from jobs 
 left join recruiter_users
 on jobs.recruiter_id =  recruiter_users.recruiter_id
 left join categories
 on jobs.categories_id =  categories.categories_id`;

  let query = "";
  let values = [];

  if (keywords && category && maxPrice && minPrice && type) {
    query =
      queryForm +
      ` where jobs.type = $1 
        and (jobs.job_title ilike '%'||$2||'%' 
        or recruiter_users.company_name ilike '%'||$2||'%') 
        and categories.name ilike '%'||$3||'%' 
        and jobs.max_salary::integer  <= $4
        and jobs.min_salary::integer  >= $5 
        and jobs.recruit_status = 'open'`;
    values = [type, keywords, category, maxPrice, minPrice];
  } else if (category && maxPrice && minPrice && type) {
    query =
      queryForm +
      ` where jobs.type = $1 
        and categories.name ilike '%'||$2||'%'  
	      and jobs.max_salary::integer  <= $3
        and jobs.min_salary::integer  >= $4 
        and jobs.recruit_status = 'open'`;
    values = [type, category, maxPrice, minPrice];
  } else if (keywords && maxPrice && minPrice && type) {
    query =
      queryForm +
      ` where (jobs.max_salary::integer  <=$1) 
        and (jobs.min_salary::integer  >=$2) 
        and  jobs.type = $3
        and jobs.recruit_status = 'open' 
        and (jobs.job_title ilike '%'||$4||'%' 
        or recruiter_users.company_name ilike '%'||$4||'%')`;
    values = [maxPrice, minPrice, type, keywords];
  } else if (keywords && category && minPrice && type) {
    query =
      queryForm +
      ` where jobs.type = $1 
        and (jobs.job_title ilike '%'||$2||'%' 
        or recruiter_users.company_name ilike '%'||$2||'%') 
        and categories.name ilike '%'||$3||'%'  
	      and (jobs.min_salary::integer  >= $4)  
        and jobs.recruit_status = 'open'`;
    values = [type, keywords, category, minPrice];
  } else if (keywords && category && maxPrice && type) {
    query =
      queryForm +
      ` where categories.name ilike '%'||$1||'%'  
        and (jobs.max_salary::integer  <= $2) 
        and jobs.recruit_status = 'open' and jobs.type = $3
        and (jobs.job_title ilike '%'||$4||'%' 
        or recruiter_users.company_name ilike '%'||$4||'%')`;
    values = [category, maxPrice, type, keywords];
  } else if (keywords && category && maxPrice && minPrice) {
    query =
      queryForm +
      ` where (jobs.job_title ilike '%'||$4||'%' 
        or recruiter_users.company_name ilike '%'||$4||'%')
        and categories.name ilike '%'||$1||'%' 
        and (jobs.max_salary::integer  <=$2) 
        and (jobs.min_salary::integer  >=$3) 
        and jobs.recruit_status = 'open'`;
    values = [category, maxPrice, minPrice, keywords];
  } else if (category && maxPrice && minPrice) {
    query =
      queryForm +
      ` where categories.name ilike '%'||$1||'%' 
        and categories.name ilike '%'||$1||'%' 
        and (jobs.max_salary::integer <=$2) 
        and (jobs.min_salary::integer  >=$3) 
        and jobs.recruit_status = 'open'`;
    values = [category, maxPrice, minPrice];
  } else if (keywords && maxPrice && minPrice) {
    query =
      queryForm +
      ` where (jobs.job_title ilike '%'||$3||'%' 
        or recruiter_users.company_name ilike '%'||$3||'%') 
        and (jobs.max_salary::integer  <=$1) 
        and (jobs.min_salary::integer >=$2) 
        and jobs.recruit_status = 'open'`;
    values = [maxPrice, minPrice, keywords];
  } else if (keywords && category && minPrice) {
    query =
      queryForm +
      ` where (jobs.job_title ilike '%'||$3||'%' 
        or recruiter_users.company_name ilike '%'||$3||'%')
        and categories.name ilike '%'||$1||'%'  
        and (jobs.min_salary::integer  >=$2) 
        and jobs.recruit_status = 'open' 
      `;
    values = [category, minPrice, keywords];
  } else if (keywords && category && maxPrice) {
    query =
      queryForm +
      ` where (jobs.job_title ilike '%'||$3||'%' 
        or recruiter_users.company_name ilike '%'||$3||'%') 
        and categories.name ilike '%'||$1||'%' 
        and (jobs.max_salary::integer  <= $2) 
        and jobs.recruit_status = 'open'   `;
    values = [category, maxPrice, keywords];
  } else if (keywords && category) {
    query =
      queryForm +
      ` where categories.name ilike '%'||$1||'%'  
        and jobs.recruit_status = 'open' 
        and (jobs.job_title ilike '%'||$2||'%' 
        or recruiter_users.company_name ilike '%'||$2||'%')`;
    values = [category, keywords];
  } else if (keywords && maxPrice) {
    query =
      queryForm +
      ` where (jobs.max_salary::integer <=$1 )
        and jobs.recruit_status = 'open' 
        and (jobs.job_title ilike '%'||$2||'%' 
        or recruiter_users.company_name ilike '%'||$2||'%')`;
    values = [maxPrice, keywords];
  } else if (keywords && minPrice) {
    query =
      queryForm +
      ` where (jobs.min_salary::integer  >=$1) 
        and jobs.recruit_status = 'open' 
        and (jobs.job_title ilike '%'||$2||'%' 
        or recruiter_users.company_name ilike '%'||$2||'%')`;
    values = [minPrice, keywords];
  } else if (category && minPrice) {
    query =
      queryForm +
      ` where categories.name ilike '%'||$1||'%' 
        and (jobs.min_salary::integer >= $2) 
        and jobs.recruit_status = 'open'`;
    values = [category, minPrice];
  } else if (category && maxPrice) {
    query =
      queryForm +
      ` where categories.name ilike '%'||$1||'%' 
        and jobs.max_salary::integer <=$2 
        and jobs.recruit_status = 'open'`;
    values = [category, maxPrice];
  } else if (minPrice && maxPrice) {
    query =
      queryForm +
      ` where (jobs.min_salary::integer >= $1) 
        and  (jobs.max_salary::integer <= $2) 
        and jobs.recruit_status = 'open'`;
    values = [minPrice, maxPrice];
  } else if (keywords && type) {
    query =
      queryForm +
      ` where (jobs.job_title ilike '%'||$1||'%' 
        or recruiter_users.company_name ilike '%'||$1||'%')
        and jobs.type ilike  '%'||$2||'%' 
        and jobs.recruit_status = 'open' 
      `;
    values = [keywords, type];
  } else if (category && type) {
    query =
      queryForm +
      ` where categories.name ilike '%'||$1||'%' 
       and jobs.type = $2 
       and jobs.recruit_status = 'open'`;
    values = [category, type];
  } else if (minPrice && maxPrice && type) {
    query =
      queryForm +
      ` where  (jobs.max_salary  <=$1) 
        and (jobs.min_salary  >=$2) 
        and jobs.recruit_status = 'open' 
        jobs.type = $3`;
    values = [maxPrice, minPrice, type];
  } else if (keywords) {
    query =
      queryForm +
      ` where jobs.recruit_status = 'open' 
        and (jobs.job_title ilike '%'||$1||'%' 
        or recruiter_users.company_name ilike '%'||$1||'%')`;
    values = [keywords];
  } else if (category) {
    query =
      queryForm +
      ` where categories.name ilike '%'||$1||'%' 
        and jobs.recruit_status = 'open'`;
    values = [category];
  } else if (minPrice) {
    query =
      queryForm +
      ` where (jobs.min_salary::integer  >= $1) 
        and jobs.recruit_status = 'open'`;
    values = [minPrice];
  } else if (maxPrice) {
    query =
      queryForm +
      ` where (jobs.max_salary::integer  <= $1) 
        and jobs.recruit_status = 'open'`;
    values = [maxPrice];
  } else if (type) {
    query =
      queryForm +
      ` where jobs.recruit_status = 'open' 
        and jobs.type = $1`;
    values = [type];
  } else {
    query = `select jobs.job_id,categories.name,jobs.job_title,jobs.type,
    jobs.min_salary,jobs.max_salary, recruiter_users.company_name,
    recruiter_users.logo_url from jobs 
    left join recruiter_users
    on jobs.recruiter_id =  recruiter_users.recruiter_id
    left join categories
    on jobs.categories_id =  categories.categories_id
    where recruit_status = 'open'`;
  }
  const results = await pool.query(query, values);
  const follow = await pool.query(
    `select job_id from follow_jobs where professional_id = $1`,
    [userId]
  );
  const data = results.rows;
  const followData = follow.rows;
  const followJob = [];

  if (data.length > 0) {
    data.map((data) => {
      data.logo_url = JSON.parse(data.logo_url).url;
    });

    followData.map((data) => {
      followJob.push(data.job_id);
    });
  }

  return res.status(200).json({
    data: data,
    follow: followJob,
  });
});
professionalRouter.post("/apply/:id", CvUpload, async (req, res) => {
  const statuscv = req.body.statuscv;
  const jobId = Number(req.params.id);
  const professId = Number(req.body.professionalId);

  try {
    const applyornot = await pool.query(
      `select * from job_applications  where professional_id = $1 and job_id =$2`,
      [professId, jobId]
    );

    if (applyornot.rows.length !== 0) {
      return res.status(201).json({
        message: "you already apply ",
      });
    } else if (statuscv === "true") {
      const file = req.files.cv[0];

      const responseCvUpload = await cvUpload(file);
      const cvUrl = responseCvUpload;

      const jobapply = {
        job_id: jobId,
        professionalId: professId,
        status: "Waiting",
        detail: req.body.interest,
        experiece: req.body["experience"],
        newcv: cvUrl,
        statuscv: req.body.statuscv,
        status: "Waiting",
        created_at: new Date(),
        updated_at: new Date(),
      };

      try {
        await pool.query(
          `insert into job_applications (job_id,professional_id,interested_detail,new_cv_url,created_at,updated_at,is_upload_cv,experience,application_status)
      values($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
          [
            jobapply.job_id,
            jobapply.professionalId,
            jobapply.detail,
            jobapply.newcv,
            jobapply.created_at,
            jobapply.updated_at,
            jobapply.statuscv,
            jobapply.experiece,
            jobapply.status,
          ]
        );
      } catch (err) {
        console.log(err);
      }
    } else if (statuscv == "false") {
      const jobapply = {
        job_id: jobId,
        professionalId: req.body.professionalId,
        status: "Waiting",
        experience: req.body.experience,
        detial: req.body.interest,
        statuscv: req.body.statuscv,
        created_at: new Date(),
        updated_at: new Date(),
      };
      await pool.query(
        `insert into job_applications (job_id,professional_id,application_status,experience,interested_detail,created_at,updated_at,is_upload_cv) 
        values($1,$2,$3,$4,$5,$6,$7,$8)`,
        [
          jobapply.job_id,
          jobapply.professionalId,
          jobapply.status,
          jobapply.experience,
          jobapply.detial,
          jobapply.created_at,
          jobapply.updated_at,
          jobapply.statuscv,
        ]
      );
    }

    return res.status(201).json({
      message: "Job has been apply sucessfully",
    });
  } catch (err) {}
});
professionalRouter.get("/profile/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const professionalUsers = await pool.query(
      `select * from professional_users where professional_id = $1`,
      [userId]
    );

    return res.status(200).json({
      data: professionalUsers.rows[0],
    });
  } catch (err) {
    console.log(err);
  }
});

//Get job applications
professionalRouter.get("/applications", async (req, res) => {
  const job_id = req.query.user_id || "";
  const applicationStatus = req.query.status || "";
  const queryForm = `SELECT job_applications.job_application_id, job_applications.interested_detail, job_applications.application_status, 
  job_applications.new_cv_url, job_applications.created_at as applied_at, job_applications.updated_at as application_updated_at,
   job_applications.is_upload_cv, job_applications.declined_at, jobs.job_id, jobs.job_title, jobs.type, jobs.min_salary, 
   jobs.max_salary, jobs.created_at as jobs_created_at, jobs.closed_at as job_closed_at, recruiter_users.company_name,
    recruiter_users.logo_url,  job_applications.experience, professional_users.cv_url, professional_users.updated_at as professional_profile_updated_at, professional_users.name as professional_name, categories.name
  FROM job_applications
  LEFT JOIN jobs
  ON job_applications.job_id = jobs.job_id
  LEFT JOIN recruiter_users
  ON jobs.recruiter_id = recruiter_users.recruiter_id
  LEFT JOIN professional_users
  ON job_applications.professional_id = professional_users.professional_id
  LEFT JOIN categories
  ON jobs.categories_id = categories.categories_id `;

  let query = "";
  let values = [];

  try {
    if (applicationStatus === "All") {
      query =
        queryForm +
        `WHERE job_applications.professional_id = $1 ORDER BY applied_at DESC`;
      values = [job_id];
    } else if (applicationStatus === "Waiting") {
      query =
        queryForm +
        `WHERE job_applications.professional_id = $1 AND application_status = $2 ORDER BY applied_at DESC`;
      values = [job_id, applicationStatus];
    } else if (applicationStatus === "Reviewing") {
      query =
        queryForm +
        `WHERE job_applications.professional_id = $1 AND application_status = $2 ORDER BY applied_at DESC`;
      values = [job_id, applicationStatus];
    } else if (applicationStatus === "Finished") {
      query =
        queryForm +
        `WHERE job_applications.professional_id = $1 AND application_status = $2 ORDER BY applied_at DESC`;
      values = [job_id, applicationStatus];
    } else if (applicationStatus === "Declined") {
      query =
        queryForm +
        `WHERE job_applications.professional_id = $1 AND application_status = $2 ORDER BY applied_at DESC`;
      values = [job_id, applicationStatus];
    }
    const results = await pool.query(query, values);
    const data = results.rows;
    if (data.length > 0) {
      data.map((item) => {
        item.logo_url = JSON.parse(item.logo_url).url;
        item.cv_url = JSON.parse(item.cv_url).url;
        if (item.is_upload_cv === true) {
          item.cv_url = JSON.parse(item.new_cv_url).url;
        }
      });
    }

    return res.status(200).json({
      data: data,
    });
  } catch (error) {}
});

//Declined application
professionalRouter.put("/applications/:applicationId", async (req, res) => {
  const applicationId = req.params.applicationId;
  const application = "Declined";
  const declined_at = new Date();
  try {
    await pool.query(
      `UPDATE job_applications SET application_status = $1, declined_at= $2 WHERE job_application_id = $3`,
      [application, declined_at, applicationId]
    );
  } catch (error) {}
});
professionalRouter.get("/applications/:Id", async (req, res) => {
  const applicationId = req.params.Id;
  try {
    const result = await pool.query(
      `select * from job_applications where job_application_id = $1 `,
      [applicationId]
    );
    return res.status(200).json({
      data: result.rows[0],
    });
  } catch (error) {}
});
export default professionalRouter;
