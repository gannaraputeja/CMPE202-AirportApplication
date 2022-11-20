import express from 'express'
import { assignBaggageCarousel, gateAssignment, updateGatesStatus } from "../Controllers/AirportController.js"

const router = express.Router()

router.post('/update/gates', updateGatesStatus)
router.post('/assign/baggageCarousel', assignBaggageCarousel)
router.post("/assignGate/:flightInstanceId", gateAssignment);

export default router