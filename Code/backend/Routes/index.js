import HomeRoute from './HomeRoute.js'
import AirportRoute from './AirportRoute.js'
import AirlineRoute from './AirlineRoute.js'

const Routes = (app) => {
    app.use('/', HomeRoute)
    app.use('/airport', AirportRoute)
    app.use('/airline', AirlineRoute)
}

export default Routes