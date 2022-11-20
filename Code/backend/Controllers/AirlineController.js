import { FlightInstance } from "../Models/index.js";

export const addFlightSchedule = async(req, res) =>{
    try{
        const flightData = await FlightInstance.create({
            status: req.body.status,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            origin: req.body.origin,
            destination: req.body.destination,
            flightId: req.body.flightId
        });

        //console.log(flightData);

        res.status(201).send(flightData);
    }
    catch(err){
        //console.log(err);
        res.status(400).json({message: "Airline flights schedule could not be added"});
    }
};