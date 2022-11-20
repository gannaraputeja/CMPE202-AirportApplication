import HomeRoute from './HomeRoute.js'
import AirportRoute from './AirportRoute.js'

const Routes = (app) => {
    app.use('/', HomeRoute)
    app.use('/airport', AirportRoute)
}

export default Routes