import express from 'express'
import {
    assignBaggageCarousel,
    gateAssignment,
    getGates,
    updateGatesStatus,
    updateGateStatus
} from "../Controllers/AirportController.js"
import {AuthMiddleware, IsAirportUser} from "../Middleware/AuthMiddleware.js";

const router = express.Router()

router.put('/update/gates', AuthMiddleware, IsAirportUser, updateGatesStatus);
router.post('/assign/baggage-carousel', AuthMiddleware, IsAirportUser, assignBaggageCarousel);
router.post("/assignGate/:flightInstanceId", AuthMiddleware, IsAirportUser, gateAssignment);
router.get('/get/gates', AuthMiddleware, IsAirportUser, getGates);
router.put('/update/gate/:id', AuthMiddleware, IsAirportUser, updateGateStatus);
export default router