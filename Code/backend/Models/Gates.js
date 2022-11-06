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
    values: ['active', 'inactive', 'assigned']
  }
})