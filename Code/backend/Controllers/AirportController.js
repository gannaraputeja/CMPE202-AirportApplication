import { Op } from 'sequelize'
import {AirportSchedule, BaggageCarousel, db, FlightInstance, Gate, Terminal} from '../Models/index.js'

export const updateGatesStatus = async (req, res) => {
    try {
        if (req.body == null)
            res.status(400).json({message: 'Empty request payload.'})
        const gateNumbers = req.body
        // filter active and inactive gates and assigned gates cannot be changed from UI
        const activeGateNumbers = gateNumbers.filter(item => item.status === "active").map(item => item.id)
        const inactiveGateNumbers = gateNumbers.filter(item => item.status === "inactive").map(item => item.id)

        // update gates status if gates present
        if(activeGateNumbers.length > 0)
        await Gate.update({status: 'active'}, {where: {id: {[Op.in]: activeGateNumbers}}})

        if(inactiveGateNumbers.length > 0)
        await Gate.update({status: 'inactive'}, {where: {id: {[Op.in]: inactiveGateNumbers}}})

        res.status(200).json({message: 'Successfully updated gates maintenance status.'})
    } catch(err) {
        //console.log(err)
        res.status(400).json({message: 'Failed to update gates maintenance status.'})
    }
};

export const assignBaggageCarousel = async (req, res) => {
    const t = await db.sequelize.transaction()
    try {
        // get BaggageCarousel unassigned AirportSchedules of arrived FlightInstances
        const airportSchedules = await AirportSchedule.findAll({
            where: {baggageCarouselId: { [Op.eq]: null }},
            include: [{model: FlightInstance, where: {status: 'arrived'}}]
        })

        if(airportSchedules.length == 0)
            return res.status(200).json({message: 'There are no baggage carousel unassigned arriving flights at the moment.'})

        let baggageCarousels = await BaggageCarousel.findAll({ where: {status: 'active'} })

        for (const airportSchedule of airportSchedules) {
            // filter baggageCarousels for terminal same as terminal in AirportSchedule
            const terminalBaggageCarousels = baggageCarousels.filter(bc => bc.terminalId == airportSchedule.terminalId)
            // check has bcs left to assign
            if(terminalBaggageCarousels.length <= 0) {
                return res.status(400).json({message: 'There are not enough baggage carousels available at the moment.'})
            }
            // get random bc
            const random = Math.floor(Math.random() * (terminalBaggageCarousels.length));

            // update AirportSchedule with assigned BaggageCarousel
            await AirportSchedule.update({
                baggageCarouselId: terminalBaggageCarousels[random].id
            }, { where: { id: airportSchedule.id },
                transaction: t
            })

            // update BaggageCarousel status as assigned
            await BaggageCarousel.update({
                status: 'assigned'
            }, { where: { id: terminalBaggageCarousels[random].id },
                transaction: t
            })

            // remove assigned BaggageCarousel from baggageCarousels
            baggageCarousels = baggageCarousels.filter( item => item.id != terminalBaggageCarousels[random].id)
            // remove assigned BaggageCarousel from terminalBaggageCarousels
            terminalBaggageCarousels.splice(random, 1)
        }
        await t.commit()
        res.status(200).json({message: 'Successfully assigned baggage carousels.'})
    } catch (err) {
        console.log(err)
        await t.rollback()
        res.status(400).json({message: 'Failed to assign baggage carousels.'})
    }
}

export const gateAssignment = async (req, res) =>{
    const t = await db.sequelize.transaction();
    try{
        if(req.params.flightInstanceId.trim() ==='' || isNaN(req.params.flightInstanceId))
            return res.status(400).json("Invalid flight instance Id, Flight instance should be a number...");

        const scheduleData = await AirportSchedule.findOne({
            where: {
                flightInstanceId: req.params.flightInstanceId
            }
        });

        const allGates = await Gate.findAll({
            where:{ 
                status: 'active',
                terminalId: scheduleData.terminalId
            }
        });

        if(allGates.length==0)
            return res.status(400).json({message: "Airport is busy. No gates available for landing...."})

        const randomNumber = Math.floor(Math.random()* (allGates.length));

        const gateTableUpdate = await Gate.update(
            {status: "assigned"},
            {
                where: {id: allGates[randomNumber].id},
                transaction:t
            }
        );

        const airportScheduleUpdateRow = await AirportSchedule.update(
            {gateId: allGates[randomNumber].id},
            {
                where: {flightInstanceId: req.params.flightInstanceId},
                transaction:t
            }
        );

        await t.commit();

        res.status(200).send(airportScheduleUpdateRow);
    }
    catch(err){
        console.log(err);
        await t.rollback();
        res.status(400).json({message: "gate cannot be assigned"});
    }
};

export const getGates = async (req, res) => {
    const t = await db.sequelize.transaction();
    try{

        const allGates = await Gate.findAll(
            {attributes:['id', 'name', 'status'],
                include: [
                {
                    model: Terminal,
                    attributes: ['name']
                }
            ]
            }
        );

        if(allGates.length==0)
            return res.status(400).json({message: "No gates are present"})
        await t.commit();

        res.status(200).send(allGates);
    }
    catch(err){
        console.log(err);
        await t.rollback();
        res.status(400).json({message: "Cannot fetch gates"});
    }

}