import express from 'express'
import {
    assignBaggageCarousel,
    autoAssignBaggageCarousel,
    gateAssignment,
    getGates,
    updateGatesStatus
} from "../Controllers/AirportController.js"
import {AuthMiddleware, IsAirportUser} from "../Middleware/AuthMiddleware.js";

const router = express.Router()

router.post('/update/gates', AuthMiddleware, IsAirportUser, updateGatesStatus)
router.post('/assign/baggage-carousel/:flightInstanceId', AuthMiddleware, IsAirportUser, assignBaggageCarousel)
router.post('/assign/baggage-carousel', AuthMiddleware, IsAirportUser, autoAssignBaggageCarousel)
router.post("/assign/gate/:flightInstanceId", AuthMiddleware, IsAirportUser, gateAssignment);
router.get('/get/gates', getGates);
export default router