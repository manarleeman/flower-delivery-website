import multer from "multer";
import path from "path";

// set up storage engine

// file filter to allow only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only .png, .jpg, or jpeg images are allowed!"), false);
  }
};

// initialize multer wwith stronge storage and file filter
const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: fileFilter,
});
// export the upload middleware
export default upload;
