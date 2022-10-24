import express from 'express'
import {getSchedules, getSchedulesByHour} from '../Controllers/HomeController.js'
import { getBaggageCarouselInfo } from '../Controllers/HomeController.js'

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('Welcome Airport Application')
})

router.get("/airport-schedules/:hour", getSchedulesByHour);

router.get("/airport-schedules", getSchedules);

router.get("/display/baggage-carousel", getBaggageCarouselInfo);

export default router