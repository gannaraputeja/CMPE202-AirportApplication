import express from 'express'
import { gateAssignment, maintenance } from "../Controllers/AirportController.js"

const router = express.Router()

router.get('/maintenance/', maintenance);

router.post("/assignGate/:flightInstanceId", gateAssignment);

export default router