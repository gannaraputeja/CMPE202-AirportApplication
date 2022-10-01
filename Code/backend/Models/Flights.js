export const Flight = sequelize.define('flight', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  number: {
    type: STRING
  },
  seatsLeft: {
    type: INTEGER
  },
  capacity: {
    type: INTEGER
  }
})