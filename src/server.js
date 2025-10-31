import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import flowerRouter from "./routers/flowerRouter.js";
import userRouter from "./routers/userRouter.js";
import authRouter from "./routers/authRouter.js";
import connectToDataBase from "./database.js";
import User from "./models/userModel.js";
import { createAdmin } from "./util.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
// middlewear converts request to js objects
app.use(express.json());
//parse url
app.use(express.urlencoded({ extended: false }));
//test route
app.get("/end", (req, res) => {
  res.status(200).json({ messaage: "hello" });
});
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Flower Delivery API" });
});
// user routes
app.use("/api/flowers", flowerRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(port, async () => {
  console.log(colors.blue("server is running on port 3000"));
  await connectToDataBase();
  createAdmin();
});
