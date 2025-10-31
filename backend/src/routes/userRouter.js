import e, { Router } from "express";
import { deleteUser, getUser } from "../controllers/userController.js";

const router = Router();
// sign up
router.get("/", getUser);
// router.post("/", signUp);
router.delete("/:id", deleteUser);
export default router;

// router.get("/login");
// router.delete("/:id");
// export default router;
