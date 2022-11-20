import HomeRoute from './HomeRoute.js'
import AirportRoute from './AirportRoute.js'
import AirlineRoute from './AirlineRoute.js'
import AuthRoute from './AuthRoute.js'

const Routes = (app) => {
    app.use('/', HomeRoute)
    app.use('/auth', AuthRoute)
    app.use('/airport', AirportRoute)
    app.use('/airline', AirlineRoute)
}

export default Routes