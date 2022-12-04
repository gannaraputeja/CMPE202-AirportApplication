import {
    FlightInstance,
    Flight,
    AirportSchedule,
    Airline,
    AirlineEmployee,
    User,
    BaggageCarousel, Terminal, Gate
} from "../Models/index.js";
import {Op} from "sequelize";

export const addFlightSchedule = async(req, res) =>{
    try{
        if (req.body == null)
            res.status(400).json({message: 'Empty request payload.'})

        const flightData = await FlightInstance.create({
            status: req.body.status,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            origin: req.body.origin,
            destination: req.body.destination,
            flightId: req.body.flightId
        })

        //console.log(flightData);

        const airportSchedule = await AirportSchedule.create({
            terminalId: req.body.terminalId,
            flightInstanceId: flightData.id
        })

        //console.log(airportSchedule);

        res.status(201).send(flightData);
    }
    catch(err){
        //console.log(err);
        res.status(400).json({message: "Airline flights schedule could not be added"});
    }
};

export const updateFlightSchedule = async(req, res)=>{
    try{
        if(req.params.flightInstanceId.trim() === '' || isNaN(req.params.flightInstanceId))
            return res.status(400).json("Invalid flight instance id.");

        const flightInstance = await FlightInstance.update({
            status: req.body.status,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            origin: req.body.origin,
            destination: req.body.destination,
            flightId: req.body.flightId
        },
        {
            where:{
                id: req.params.flightInstanceId,
            }
        });

        if(flightInstance == 0)
            return res.status(400).json({message: "Failed to update flight schedule."});

        //console.log(updatedSchedule);
        return res.status(200).send({message: "Updated flight schedule successfully."});
    }
    catch(err){
        //console.log(err);
        return res.status(400).json({message: "Failed to update flight schedule."})
    }
};

export const getAllFlightsForAnAirline = async(req, res) =>{
    try{
        if(req.params.airlineId.trim() ==='' || isNaN(req.params.airlineId))
            res.status(400).json("Invalid airline Id, Airline id should be a number...");

        const allFlightsForAnAirline = await Flight.findAll({
            where: {
                airlineId: req.params.airlineId
            }
        })

        if(!allFlightsForAnAirline)
            res.status(400).json({message: "No flights available for an airline"});

        res.status(200).send(allFlightsForAnAirline);
    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({message: "Couldn't retrieve any flights for an airline"});
    }
};

export const getSchedulesForAnAirline = async (req, res) => {
    try {
        if(req.params.userId.trim() === '' || isNaN(req.params.userId) )
            return res.status(400).json({message: "Invalid user id."})

        const airlineEmployee = await AirlineEmployee.findOne({
            where: { userId: req.params.userId }
        })

        const flight = await Flight.findOne({
            where: { airlineId: airlineEmployee.airlineId }
        })

        const airportSchedules = await AirportSchedule.findAll({
            include: [{
                model: FlightInstance,include: [{model: Flight}], where: { flightId:  flight.id }
            }, { model : Terminal }, { model: Gate }, { model: BaggageCarousel }]
        })

        //console.log(airportSchedules)

        return res.status(200).json(airportSchedules)
    } catch(err) {
        console.log(err)
        res.status(400).json({message: "Couldn't retrieve any flight schedules for an airline."});
    }
}
