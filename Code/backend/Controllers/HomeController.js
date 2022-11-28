import {AirportSchedule, FlightInstance} from '../Models/index.js'
import { Op } from 'sequelize'

export const getSchedules = async (req, res) => {
    try{
        if(req.params.id.trim()==='')
            res.status(400).json({message: `Invalid id`});

        if(isNaN(req.params.id))
            res.status(400).json({message: `parameter value hours should should be number`});

        var startDate = new Date();
        var endDate = new Date(new Date().getTime() + req.params.id*60*60*1000);
    
        const response = await FlightInstance.findAll({
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
        res.status(400).json({message:`Error while retrieving flight schedule`});
    }
};

export const getBaggageCarouselInfo = async(req, res) => {
    try{
        const getBaggageCarouselInfo = await AirportSchedule.findAll({
            include:[
                {
                    model: FlightInstance,
                    where: {status: 'arrived'}
                }
            ]
        });

        console.log("Baggage carousel info is: " + getBaggageCarouselInfo);

        res.status(200).json(getBaggageCarouselInfo);
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: `Baggage carousel information cant be displayed`});
    }
};