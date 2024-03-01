import express from "express";
import MovieController from "../Controller/MovieController.js";
import upload from "../Components/imageUpload.js";

const router = express.Router();

router.get("/movie-list", MovieController.getMovie);
router.post("/movie-list",upload.single("images"),MovieController.createMovie);
router.get("/movie/:_id", MovieController.getMovieById);
router.get("/movies/:movieName", MovieController.getMovieByName);
router.put("/movie-edit/:_id", MovieController.editMovieById);
router.delete("/movie/:_id", MovieController.deleteMovie);

export default router;
