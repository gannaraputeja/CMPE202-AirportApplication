import express from 'express';
import {AuthMiddleware, IsAirlineUser} from "../Middleware/AuthMiddleware.js";
import {addFlightSchedule, updateFlightSchedule, getAllFlightsForAnAirline} from "../Controllers/AirlineController.js";

const router = express.Router()

router.post('/addFlightSchedule/', AuthMiddleware, IsAirlineUser, addFlightSchedule);

router.put('/updateFlightSchedule/:id', AuthMiddleware, IsAirlineUser, updateFlightSchedule);

router.get('/flights/:id', AuthMiddleware, IsAirlineUser, getAllFlightsForAnAirline);

export default router