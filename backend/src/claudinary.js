import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
console.log(
	process.env.CLOUD_NAME,
	process.env.API_KEY,
	process.env.API_SECRET
);
cloudinary.v2.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
});
export default function uploadFiletoCloud(path) {
	return cloudinary.v2.uploader.upload(path);
}
// export d{ uploadFiletoCloud };
