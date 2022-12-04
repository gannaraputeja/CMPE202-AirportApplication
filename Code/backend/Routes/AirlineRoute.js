import express from 'express';
import {AuthMiddleware, IsAirlineUser} from "../Middleware/AuthMiddleware.js";
import {
    addFlightSchedule,
    updateFlightSchedule,
    getAllFlightsForAnAirline, getSchedulesForAnAirline
} from "../Controllers/AirlineController.js";

const router = express.Router()

router.get("/schedules/user/:userId", AuthMiddleware, IsAirlineUser, getSchedulesForAnAirline);

router.post('/add/flight-schedule', AuthMiddleware, IsAirlineUser, addFlightSchedule);

router.post('/update/flight-schedule/:flightInstanceId', AuthMiddleware, IsAirlineUser, updateFlightSchedule);

router.get('/flights/:airlineId', AuthMiddleware, IsAirlineUser, getAllFlightsForAnAirline);

export default router