import express from 'express';

import {addFlightSchedule} from "../Controllers/AirlineController.js";

const router = express.Router()

router.post('/addFlightSchedule/', addFlightSchedule);

export default router