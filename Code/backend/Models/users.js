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
      unique: true,
      validate: {
        isEmail: true
      }
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