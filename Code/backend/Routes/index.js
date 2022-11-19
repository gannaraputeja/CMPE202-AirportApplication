import HomeRoute from './HomeRoute.js'
import Airport from './AirportRoute.js'

const Routes = (app) => {
    app.use('/', HomeRoute)
    app.use('/airport', Airport)
}

export default Routes