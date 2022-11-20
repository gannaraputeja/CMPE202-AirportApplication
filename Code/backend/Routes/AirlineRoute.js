import express from 'express';

import {addFlightSchedule, updateFlightSchedule} from "../Controllers/AirlineController.js";

const router = express.Router()

router.post('/addFlightSchedule/', addFlightSchedule);

router.put('/updateFlightSchedule/:id', updateFlightSchedule);

export default router