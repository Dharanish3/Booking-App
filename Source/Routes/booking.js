import express from "express";
import BookingController from "../Controller/BookingController.js";


const router = express.Router();

router.post('/' , BookingController.newBooking)

export default router;
