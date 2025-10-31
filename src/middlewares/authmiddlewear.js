import { validationResult } from "express-validator";
import User from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    User.create({ name, email, password });
    res.status(201).json({ message: "user created sucessfuly" });
  } catch (error) {
    res.status(500).json({ message: "failed to create user" });
  }
};
export const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    // Generate JWT token
    const token = user.generateAuthToken();
    res.status(200).json({ message: "login successful", token });
  } catch (error) {
    res.status(500).json({ message: "failed to login" });
  }
};
