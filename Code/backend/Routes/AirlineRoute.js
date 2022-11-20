import express from 'express';

import {addFlightSchedule, updateFlightSchedule, getAllFlightsForAnAirline} from "../Controllers/AirlineController.js";

const router = express.Router()

router.post('/addFlightSchedule/', addFlightSchedule);

router.put('/updateFlightSchedule/:id', updateFlightSchedule);

router.get('/flights/:airlineId', getAllFlightsForAnAirline);

export default router