import { Router } from "express";
import {
  addFlower,
  deleteFlower,
  getFlowers,
  getFlower,
} from "../controllers/flowerController.js";
import upload from "../middlewares/uploadMiddleware.js";

const router = Router();
router.post("/", upload.single("image"), addFlower);
router.get("/", getFlowers);
router.get("/:id", getFlower);
router.delete("/:id", deleteFlower);

export default router;
