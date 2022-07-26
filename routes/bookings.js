import express from "express";

import { addBooking } from "../controllers/bookings.js";

const router = express.Router();

router.post("/", addBooking);

export default router;
