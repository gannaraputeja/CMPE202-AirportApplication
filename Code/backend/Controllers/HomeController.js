import { AirportSchedule } from '../Models/index.js'
import { Op } from 'sequelize'

export const getSchedules = async (req, res) => {
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
        res.status(200).json(response);    
    }
    catch(err){ 
        res.status(400).json(`Error while retrieving flight schedule`);
    }
};