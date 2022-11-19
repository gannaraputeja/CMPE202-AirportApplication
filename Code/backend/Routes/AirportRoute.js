import express from 'express'
import { maintenance } from "../Controllers/AirportController.js"

const router = express.Router()

router.get('/maintenance/', maintenance)

export default router