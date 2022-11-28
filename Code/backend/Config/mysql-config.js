const config = {
    HOST: "database-2.cqjzxf3v25fd.us-east-1.rds.amazonaws.com",
    USER: "root",
    PASSWORD: "password123",
    DB: "airportappdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }

export default config
  