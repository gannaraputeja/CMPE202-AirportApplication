import express from 'express'
import { gateAssignment, updateGatesStatus } from "../Controllers/AirportController.js"

const router = express.Router()

router.post('/update/gates', updateGatesStatus)

router.post("/assignGate/:flightInstanceId", gateAssignment);

export default router