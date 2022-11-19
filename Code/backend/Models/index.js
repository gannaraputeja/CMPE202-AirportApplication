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

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.closeConnection = () => {
    sequelize.close()
}

const { STRING, INTEGER, DATEONLY } = Sequelize

const User = sequelize.define('user', {
  firstname: {
      type: STRING
  },
  lastname: {
      type: STRING
  },
  email: {
      type: STRING,
      primaryKey: true
  },
  phone: {
      type: STRING
  },
  gender: {
      type: STRING
  },
  dob: {
      type: DATEONLY
  }
})

const Address  = sequelize.define('address', {
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

Address.hasOne(User, { foreignKey: "addressId" })
User.belongsTo(Address, { foreignKey: "addressId" })

db.user = User
db.address = Address


export default db;
