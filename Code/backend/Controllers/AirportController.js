import { Gate } from '../Models/index.js'
import { Op } from 'sequelize'

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
