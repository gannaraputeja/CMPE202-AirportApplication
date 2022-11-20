import express from 'express'
import { getSchedules } from '../Controllers/HomeController.js'

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('Welcome Home Page')
})

router.get("/airportschedule/:id", getSchedules);

export default router