import { AirportSchedule } from '../Models/index.js'

export const maintenance = async (req, res) => {
    AirportSchedule.findAll({where: { id: 1}}).then(data => {
        res.send(data)
    })
}

