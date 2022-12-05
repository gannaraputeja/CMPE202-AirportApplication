import express from 'express'
import {
    assignBaggageCarousel, autoAssignBaggageCarousel, autoAssignGates,
    gateAssignment,
    getGates,
    updateGatesStatus,
    updateGateStatus
} from "../Controllers/AirportController.js"
import {AuthMiddleware, IsAirportUser} from "../Middleware/AuthMiddleware.js";

const router = express.Router()

router.put('/update/gates', AuthMiddleware, IsAirportUser, updateGatesStatus);
router.post('/assign/baggage-carousel', AuthMiddleware, IsAirportUser, autoAssignBaggageCarousel);
router.post("/assign/gate/:flightInstanceId", AuthMiddleware, IsAirportUser, gateAssignment);
router.post("/assign/gate", AuthMiddleware, IsAirportUser, autoAssignGates);
router.get('/get/gates', AuthMiddleware, IsAirportUser, getGates);
router.put('/update/gate/:id', AuthMiddleware, IsAirportUser, updateGateStatus);
export default router