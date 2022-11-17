import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

const cvUpload = async (file) => {
  const result = await cloudinary.uploader.upload(file.path, {
    folder: "getthatjob/cv",
    type: "upload",
    public_id: file.originalname,
    //resource_type: "raw",
  });
  const cvFileUrl = {
    url: result.secure_url,
    publicId: result.public_id,
  };
  await fs.unlink(file.path);
  return cvFileUrl;
};

const logoUpload = async (file) => {
  const result = await cloudinary.uploader.upload(file.path, {
    folder: "getthatjob/logo",
    type: "upload",
    public_id: file.originalname,
    // resource_type: "image",
  });
  const logoFileUrl = {
    url: result.secure_url,
    publicId: result.public_id,
  };
  await fs.unlink(file.path);
  return logoFileUrl;
};

export { cvUpload, logoUpload };
