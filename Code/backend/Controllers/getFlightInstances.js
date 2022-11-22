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
                model: FlightInstance,include: [{model: Flight, include: [{model: Airline}]}], where: { flightId:  flight.id }
            }, { model : Terminal }, { model: Gate }, { model: BaggageCarousel }]
        })

        //console.log(airportSchedules)

        return res.status(200).json(airportSchedules)
    } catch(err) {
        console.log(err)
        res.status(400).json({message: "Couldn't retrieve any flight schedules for an airline."});
    }
}