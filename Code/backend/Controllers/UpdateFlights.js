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