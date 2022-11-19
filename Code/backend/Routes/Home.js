
import { AirportSchedule } from '../Models/index.js';

router.get('/', async (req, res) => {
    res.send('Welcome Home Page')
})

router.get("/airportschedule/:id", (req, res) => {
        AirportSchedule.findAll({
            where: {id: req.params.id}
        })
        .then(schedule => {
            res.json(schedule[0]);
        })
        .catch(err => console.error(`Error while retrieving flight schedule`, err.message))
});

export default router
