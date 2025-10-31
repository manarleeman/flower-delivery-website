import colors from "colors";
import User from "./models/userModel.js";
export const createAdmin = async () => {
  try {
    const admin = await User.findOne({
      role: "admin",
      email: "admin@gmail.com",
    });

    if (!admin) {
      console.log(colors.yellow("Creating admin user..."));
      await User.create({
        name: "Admin",
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin",
      });
      console.log(colors.green("Admin user created successfully"));
    } else {
      console.log(colors.green("Admin user already exists"));
    }
  } catch (error) {
    console.log(colors.red("Error creating admin user:", error));
  }
};
