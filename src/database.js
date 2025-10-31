import mongoose from "mongoose";
import colors from "colors";

async function connectToDataBase() {
	try {
		const mongodbUri = process.env.MONGODB_URI;
		const connection = await mongoose.connect(mongodbUri, {
			dbName: "flowerdeliverydb",
		});
		if (connection.connection.db) {
			console.log(colors.cyan("database connected"));
		}
	} catch (error) {
		console.log(colors.red(error));
	}
}
export default connectToDataBase;
