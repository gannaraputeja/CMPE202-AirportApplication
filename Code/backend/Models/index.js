import dbConfig from '../Config/mysql-config.js';
import Sequelize from 'sequelize';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

export const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.closeConnection = () => {
    sequelize.close()
}

const { STRING, INTEGER, DATE, DATEONLY, ENUM } = Sequelize

export const User = sequelize.define('user', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstname: {
      type: STRING
  },
  lastname: {
      type: STRING
  },
  email: {
      type: STRING,
      unique: true
  },
  phone: {
      type: STRING
  },
  gender: {
      type: STRING
  },
  dob: {
      type: DATEONLY
  },
  accountStatus: {
    type: ENUM,
    values: ['active', 'inactive']
  },
  password: {
    type: STRING
  },
  type: {
    type: ENUM,
    values: ['user', 'airline', 'airport']
  }
})

export const Address  = sequelize.define('address', {
  id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  street: {
      type: STRING
  },
  state: {
      type: STRING
  },
  country: {
      type: STRING
  },
  zipcode: {
      type: STRING
  }
})

User.hasOne(Address, { foreignKey: 'userId'} )
//Address.belongsTo(User)

export const Airport = sequelize.define('airport', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: STRING
  }
})

export const Terminal = sequelize.define('terminal', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: STRING
  }
})

Airport.hasMany(Terminal, { foreignKey: 'airportId' })
//Terminal.belongsTo(Airport)

export const Gate = sequelize.define('gate', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: STRING
  },
  status: {
    type: ENUM,
    values: ['active', 'inactive', 'maintenance']
  }
})

Terminal.hasMany(Gate, { foreignKey: 'terminalId' })
//Gate.belongsTo(Terminal)

export const BaggageCarousel = sequelize.define('baggageCarousel', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: STRING
  }
})

Gate.hasOne(BaggageCarousel, { foreignKey: 'gateId' })
//BaggageCarousel.belongsTo(Gate)

export const Airline = sequelize.define('airline', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: STRING
  }
})

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

Airline.hasMany(Flight, { foreignKey: 'airlineId' })
//Flight.belongsTo(Airline)

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
//FlightInstance.belongsTo(Flight)

export const AirportSchedule = sequelize.define('airportSchedule', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  arrivalTime: {
    type: DATE
  },
  departureTime: {
    type: DATE
  }
})

FlightInstance.hasOne(AirportSchedule, { foreignKey: 'flightInstanceId' })
//AirportSchedule.belongsTo(Flight)

Terminal.hasOne(AirportSchedule, { foreignKey: 'terminalId' })
//AirportSchedule.belongsTo(Terminal)

Gate.hasOne(AirportSchedule, { foreignKey: 'gateId' })
//AirportSchedule.belongsTo(Gate)

BaggageCarousel.hasOne(AirportSchedule, { foreignKey: 'baggageCarouselId' })
//AirportSchedule.belongsTo(BaggageCarousel)

export const AirlineEmployee = sequelize.define('airlineEmployee', {})

User.hasOne(AirlineEmployee, { foreignKey: 'userId' })
//AirlineEmployee.belongsTo(User)

Airline.hasMany(AirlineEmployee, { foreignKey: 'airlineId' })
//AirlineEmployee.belongsTo(Airline)

export const AirportEmployee = sequelize.define('airportEmployee', {})

User.hasOne(AirportEmployee, { foreignKey: 'userId' })
//AirportEmployee.belongsTo(User)

Airport.hasMany(AirportEmployee, { foreignKey: 'airportId' })
//AirportEmployee.belongsTo(Airport)


