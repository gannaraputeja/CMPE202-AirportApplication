import express from 'express'
import { getSchedules } from '../Controllers/HomeController.js'
import { getBaggageCarouselInfo } from '../Controllers/HomeController.js'

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('Welcome Home Page')
})

router.get("/airportschedule/:id", getSchedules);

router.get("/baggageCarouseldisplay", getBaggageCarouselInfo);

export default router