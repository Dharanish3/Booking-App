import express from "express";
import ShowController from '../Controller/ShowController.js'

const router = express.Router();

router.get("/list", ShowController.getShows);
router.post("/list", ShowController.createShows);
router.get("/:_id", ShowController.getShowById);
// router.get("/:name", ShowController.getTheaterByName);
router.put("/:_id", ShowController.editShow);
router.delete("/:_id", ShowController.deleteShow);

export default router;
