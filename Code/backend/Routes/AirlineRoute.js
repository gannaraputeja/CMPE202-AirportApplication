import express from 'express';
import {AuthMiddleware, IsAirlineUser} from "../Middleware/AuthMiddleware.js";
import {addFlightSchedule, updateFlightSchedule, getAllFlightsForAnAirline} from "../Controllers/AirlineController.js";

const router = express.Router()

router.post('/add/flight-schedule/', AuthMiddleware, IsAirlineUser, addFlightSchedule);

router.post('/update/flight-schedule/:id', AuthMiddleware, IsAirlineUser, updateFlightSchedule);

router.get('/flights/:id', AuthMiddleware, IsAirlineUser, getAllFlightsForAnAirline);

export default router