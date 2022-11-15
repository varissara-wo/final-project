import { v2 as cloudinary } from "cloudinary";
import { log } from "console";
import fs from "fs/promises";

const cvUpload = async (file) => {
  const result = await cloudinary.uploader.upload(file.path, {
    folder: "getthatjob/cv",
    type: "upload",
    public_id: file.originalname,
    //resource_type: "raw",
  });
  const cvfileUrl = {
    url: result.secure_url,
    publicId: result.public_id,
  };
  await fs.unlink(file.path);
  return cvfileUrl;
};

export { cvUpload };
