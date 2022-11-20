import { FlightInstance, Flight } from "../Models/index.js";

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

        console.log(flightData);

        res.status(201).send(flightData);
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: "Airline flights schedule could not be added"});
    }
};

export const updateFlightSchedule = async(req, res)=>{
    try{
        if(req.params.id.trim() ==='' || isNaN(req.params.id))
            res.status(400).json("Invalid flight instance Id, Flight instance id should be a number...");

        const flightData = await FlightInstance.findByPk(req.params.id);

        if(!flightData)
            res.status(400).json({message: "Couldnt find flight in database to update"});

        if(flightData)
        {
            const updatedSchedule = await FlightInstance.update({
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

            console.log(updatedSchedule);
            res.status(201).send(updatedSchedule);
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({message: "user schedule could not be updated with gievn fields"})
    }
};

export const getAllFlightsForAnAirline = async(req, res) =>{
    try{
        if(req.params.id.trim() ==='' || isNaN(req.params.id))
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