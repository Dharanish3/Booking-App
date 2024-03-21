import express from "express";
import TheaterController from '../Controller/TheterController.js'

const router = express.Router();

router.get("/list", TheaterController.getTheters);
router.post("/list", TheaterController.createTheater);
router.get("/:_id", TheaterController.getTheaterById);
router.get("/:name", TheaterController.getTheaterByName);
router.put("/:_id", TheaterController.editTheater);
router.delete("/:_id", TheaterController.deleteTheater);

export default router;
    