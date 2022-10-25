import express from 'express'
import { assignBaggageCarousel, gateAssignment, updateGatesStatus } from "../Controllers/AirportController.js"
import {AuthMiddleware, IsAirportUser} from "../Middleware/AuthMiddleware.js";

const router = express.Router()

router.post('/update/gates', AuthMiddleware, IsAirportUser, updateGatesStatus)
router.post('/assign/baggageCarousel', AuthMiddleware, IsAirportUser, assignBaggageCarousel)
router.post("/assignGate/:flightInstanceId", AuthMiddleware, IsAirportUser, gateAssignment);

export default router