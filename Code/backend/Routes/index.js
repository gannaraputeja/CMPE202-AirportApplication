import Home from './Home.js'
import AirportRoute from './AirportRoute.js'

const Routes = (app) => {
    app.use('/', Home)
    app.use('/airport', AirportRoute)
}

export default Routes