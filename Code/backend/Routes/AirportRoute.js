import express from 'express'
import { maintenance } from "../Controllers/AirportController.js"

const router = express.Router()

router.post('/maintenance/', maintenance)

export default router