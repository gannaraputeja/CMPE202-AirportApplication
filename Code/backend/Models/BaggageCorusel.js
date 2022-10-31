export const BaggageCarousel = sequelize.define('baggageCarousel', {
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
    values: ['active', 'assigned']
  }
})