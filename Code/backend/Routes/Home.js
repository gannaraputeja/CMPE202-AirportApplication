import express from 'express'
import { AirportSchedule } from '../Models/index.js';
import { Op } from 'sequelize'
const router = express.Router();

router.get('/', async (req, res) => {
    res.send('Welcome Home Page')
})

router.get("/airportschedule/:id", async (req, res) => {    
        try{
            var startDate = new Date();
            var endDate = new Date(new Date().getTime() + req.params.id*60*60*1000);
            console.log(startDate);
            console.log(endDate);
            const response = await AirportSchedule.findAll({
                where: {
                    [Op.or]:
                        [{
                            arrivalTime:{[Op.between] : [ startDate, endDate]}
                         }, 
                         {
                            departureTime:{[Op.between] : [ startDate, endDate]}
                         }] 
                },
            });
            return res.status(200).json(response);    
        }
        catch(err){ 
            res.status(400).json(`Error while retrieving flight schedule`);
        }
});

export default router