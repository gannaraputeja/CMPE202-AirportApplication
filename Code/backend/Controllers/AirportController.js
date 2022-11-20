import { Op } from 'sequelize'
import { Gate, AirportSchedule, db} from '../Models/index.js'

export const maintenance = async (req, res) => {
    try {
        if (req.body == null)
            res.status(400).json({message: 'Empty request payload.'})
        const gateNumbers = req.body
        // filter active and inactive gates
        const activeGateNumbers = gateNumbers.filter(item => item.status === true).map(item => item.id)
        const inactiveGateNumbers = gateNumbers.filter(item => item.status === false).map(item => item.id)

        // update status if any gates exists
        if(activeGateNumbers.length > 0)
        await Gate.update({status: 'active'}, {where: {id: {[Op.in]: activeGateNumbers}}})

        if(inactiveGateNumbers.length > 0)
        await Gate.update({status: 'inactive'}, {where: {id: {[Op.in]: inactiveGateNumbers}}})

        res.status(200).json({message: 'Successfully updated gates maintenance status.'})
    } catch(err) {
        res.status(400).json({message: 'Failed to update gates maintenance status.'})
    }
}

export const gateAssignment = async(req, res) =>{
    const t = await db.sequelize.transaction();
    try{
        if(req.params.flightInstanceId.trim() ==='' || isNaN(req.params.flightInstanceId))
            res.status(400).json("Invalid flight instance Id, Flight instance should be a number...");

        const allGates = await Gate.findAll({
            where:{ status: 'active'}
        });

        if(allGates.length==0)
            res.status(400).json({message: "Airport is busy. No gates available for landing...."})

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