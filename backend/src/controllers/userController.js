import User from "../models/userModel.js";
import express from "express";

export const getUser = async (req, res) => {
	try {
		const user = await User.find();
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "User not found" });
	}
};
// export const signUp = async (req, res) => {
// 	try {
// 		const { name, email, password, cartData } = req.body;
// 		const user = await User.create({ name, email, password });
// 		res.status(201).json(user);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({ message: "user not added" });
// 	}
// };
export const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndDelete(id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.status(200).json({ message: "User deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Error deleting user" });
	}
};
