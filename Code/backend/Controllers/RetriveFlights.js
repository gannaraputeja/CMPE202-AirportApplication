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