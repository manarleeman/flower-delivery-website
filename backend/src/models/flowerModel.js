import mongoose from "mongoose";
const flowerSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: Number,
	category: String,
	imageUrl: String,
});

const Flower = mongoose.model("Flower", flowerSchema);
export default Flower;
