import express from 'express'
import { updateGatesStatus } from "../Controllers/AirportController.js"

const router = express.Router()

router.post('/update/gates', updateGatesStatus)

export default router