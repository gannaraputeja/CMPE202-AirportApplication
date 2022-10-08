export const FlightInstance = sequelize.define('flightInstance', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status: {
    type: ENUM,
    values: ['active', 'inactive', 'arriving', 'arrived', 'departed', 'delayed', 'cancelled']
  },
  departureTime: {
    type: DATE
  },
  arrivalTime: {
    type: DATE
  },
  origin: {
    type: STRING
  },
  destination: {
    type: STRING
  }
})

Flight.hasMany(FlightInstance, { foreignKey: 'flightId' })
FlightInstance.belongsTo(Flight)