import { v2 as cloudinary } from "cloudinary";
import fs from "fs/promises";

const cvUpload = async (file) => {
  const result = await cloudinary.uploader.upload(file.path, {
    folder: "techupth/demo-file-uploading",
    type: "private",
  });
  await fs.unlink(file.path);

  return result;
};

export { cvUpload };
