export const AirportSchedule = sequelize.define('airportSchedule', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
})

FlightInstance.hasOne(AirportSchedule, { foreignKey: 'flightInstanceId' })
AirportSchedule.belongsTo(FlightInstance)

Terminal.hasOne(AirportSchedule, { foreignKey: 'terminalId' })
AirportSchedule.belongsTo(Terminal)

Gate.hasOne(AirportSchedule, { foreignKey: 'gateId' })
AirportSchedule.belongsTo(Gate)

BaggageCarousel.hasOne(AirportSchedule, { foreignKey: 'baggageCarouselId' })
AirportSchedule.belongsTo(BaggageCarousel)

export const AirlineEmployee = sequelize.define('airlineEmployee', {})