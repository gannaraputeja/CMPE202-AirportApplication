export const assignBaggageCarousel = async (req, res) => {

    const t = await db.sequelize.transaction();

    try {
        if(req.params.flightInstanceId.trim() ==='' || isNaN(req.params.flightInstanceId))
            return res.status(400).json("Invalid flight instance Id, Flight instance should be a number...");

        const airportSchedules = await AirportSchedule.findOne({
            where: {
                flightInstanceId: req.params.flightInstanceId
            }
        });
        console.log(airportSchedules)

        const activeBaggageCarousels = await BaggageCarousel.findAll({
            where: {
                status: 'active',
                terminalId: airportSchedules.terminalId
            }
        });

        if(activeBaggageCarousels.length == 0)
            return res.status(400).json({message: "Airport is busy. No baggage carousels are available at the moment."})

        console.log(Math.random() * (activeBaggageCarousels.length))
        const randomNumber = Math.floor(Math.random()* (activeBaggageCarousels.length));

        console.log(activeBaggageCarousels[randomNumber])
        await BaggageCarousel.update(
            {status: "assigned"},
            {
                where: {id: activeBaggageCarousels[randomNumber].id},
                transaction:t
            }
        );

        const airportScheduleUpdateRow = await AirportSchedule.update(
            {baggageCarouselId: activeBaggageCarousels[randomNumber].id},
            {
                where: {flightInstanceId: req.params.flightInstanceId},
                transaction:t
            }
        );

        await t.commit();

        res.status(200).send({message: "Baggage carousel assigned successfully."});


    } catch(err) {
        console.log(err);
        await t.rollback();
        res.status(400).json({message: "Baggage carousel cannot be assigned."});
    }
}
