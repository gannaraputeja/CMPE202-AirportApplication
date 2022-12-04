import {FlightInstance, Flight, AirportSchedule} from "../Models/index.js";

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
        });

        //console.log(flightData);

        res.status(201).send(flightData);
    }
    catch(err){
        //console.log(err);
        res.status(400).json({message: "Airline flights schedule could not be added"});
    }
};

export const updateFlightSchedule = async(req, res)=>{
    try{
        if(req.params?.id && ( req.params.id.trim() === '' || isNaN(req.params.id)) )
            return res.status(400).json("Invalid flight schedule id.");

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
                id: req.params.id,
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
        if(req.params.id.trim() ==='' || isNaN(req.params.id))
            res.status(400).json("Invalid airline Id, Airline id should be a number...");

        const allFlightsForAnAirline = await Flight.findAll({
            where: {
                airlineId: req.params.id
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